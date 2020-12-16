## Data blocks

### Overridable data blocks

Dictionary merges are possible on helm templates. 

One of the biggest problems with the merge is that list merges are not available. 

Therefore:

```yaml

--- 
# data a
containers:
  - name: foo
    image: my-image:foo
    

---
# data b
containers:
  - name: foo
    image: my-image:foo2
```

Those two data sets are not mergeable, producing a result that is not the expected:

```yaml


``` 

One of the ideas that could be really helpful on data blocks is the ability to override them with new characteristics. 

Thus, with the overridable idea We could achieve something similar to a class inheritance. 

```yaml

{{ define "pod.data" }}

name: foo

containers:
  - name: app
    image: foo.com/image:r0
    ports:
      - pod: 8080

{{ end }}

{{ define "pod.data.override" }}

containers:
  - command: ["tail", "-f", "/dev/null"]

{{ end }}


```
But, due to the impossibility of having list merges, the proper combination of the two data blocks is not possible. 

Therefore our proposal is extend the renders definitions with the new `_dict` syntax. 

### The `_dict`  syntax

The basic idea is to extend the list fields of Kubernetes's machinery with a `_dict` extension. 

Thus, 

```

# pod definition

containers:
  - name: a
  - name: b

# dict definition

containers_dict:
  a:
    name: a
  b: 
    name: b

```

Of course, the proper render will convert  `_dict` extensions to regular list fields. 

By using this approach, data blocks are mergeable **before** being render. 

```yaml

{{ define "pod.data" }}

name: my-pod

containers_dict:
  app:
    name: app
    image: my-image:r-0
    ports:
    - pod: 8080

{{ end }}

{{ define "pod.data.override" }}

containers_dict:
  app:
    command: ["tail", "-f", "/dev/null"]  # overrides the app container definition adding the command

{{ end }}


# now render the normal pod with the override data block
{{ include "ph.pod.render" {{ include "ph.override" (list "pod.data.override" . ) }}

```

We obtain the expected result:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
    - name: app
      image: my-image:r-0
      command: ["tail", "-f", "/dev/null"] 
      ports:
        - containerPort: 80

```

The following keys are overridable by prefapp-helm's renderers:

- containers
- init_containers
- volumes
- volumeMounts

### The override helper

The "ph.override" method allows a data block to override another by merging both, giving preference to the first one. 

It accepts two params:
- The name of the override data block
- A context

To determine the parent data block name, override uses a simple method: it takes the last section of the name (separated by a dot)


Therefore:

- pod.data.override => pod.data (parent block)

- deployment.foo.my_override => deployment.foo (parent block)








# License

Copyright (C) 2019, Francisco Maseda, Javier Gómez, Juan Sixto. 

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.








