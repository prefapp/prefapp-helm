# Prefapp Helm

Prefapp Helm is a helm microframework for implementing modular charts and umbrella charts. 

## Motivation

Helm is helpful tool for creating and mantaining kubernetes templates and releases. 

The problem with helm is that reusability is really hard to obtain. Somehow, this has been addressed in the [v3](https://helm.sh/blog/helm-3-released/) with the consolidation of two basic features:

* [subcharts](https://helm.sh/docs/chart_template_guide/subcharts_and_globals/).
* [library charts](https://helm.sh/docs/topics/library_charts/).

By using the library chart feature, it is possible to create a set of fundamentals that avoid repetition in the implementation of helm charts. 

Those fundamentals are the core of the prefapp-helm microframework. 

prefapp-helm is implemented as a library chart to be used on application charts as the basic renders for Kubernetes artifacts. 

It has two more advanced features:

* An overload method
* A stash.

## To install

Add the prefapp-helm repo to your helm repos. 

```sh
helm repo add prefapp-helm https://prefapp.github.io/prefapp-helm
helm repo update
```

Then, include in your charts as a dependency:

```yaml
# Chart.yaml

dependencies:
  # ... your other dependencies
  - name: prefapp-helm
    version: <your desired version>
    repository: https://prefapp.github.io/prefapp-helm
```

## Hello World

- Create a chart whit __helm__ command.

```shell
cd /<my_route> && \
helm create ph-hello-world
```

- Clean chart placeholders

```shell
cd ph-hello-world && \
rm -rf templates/* charts && \
cat /dev/null > values.yaml
```

- Add prefapp-helm dependencia in Chart.yaml file

```shell
cat <<EOF > Chart.yaml
apiVersion: v2
name: hello-prefapp-helm
description: A chart with prefapp-helm microframework
type: application
version: 0.1.0
appVersion: "1.16.0"
dependencies:
  - name: prefapp-helm
    version: 0.0.18
    repository: https://prefapp.github.io/prefapp-helm
EOF
```

- Helm depencency update

```shell
helm dep update
```

- Create our first template

```shell
cat <<EOF > templates/my_firt_template_with_preffapp_helm.yaml
{{- define "my.pod.data" -}}
name: "my-pod"
containers:
  - name: app
    image: ubuntu:20.04
{{- end -}}
{{ include "ph.pod.render" (include "my.pod.data" . | fromYaml ) }}
EOF
```

- Template

```shell
helm template . -s templates/my_firt_template_with_preffapp_helm.yaml
```

> Tip: Sometimes prefapp-helm returns an output with some blank lines. To repair it, you can create an alias and add it to the end of the helm command.

* Alias dbl (DeleteBlankLines)

```shell
dbl='|grep --color=never "\S"'
```

* Example

```shell
helm template . -s templates/my_firt_template_with_preffapp_helm.yaml dbl
```

## Renders

Renders are chart helpers that receive an object and produce a standard k8s artifact. 

For instance, a minimal pod using a prefapp-helm render could be:

```yaml

{{- define "my.pod.data" -}}

name: "my-pod"

containers:
  - name: app
    image: debian:10

{{- end -}}

{{ include "ph.pod.render" (include "my.pod.data" . | fromYaml ) }}

```

The result will be a pod conforming to the kubernetes API where the release is going to be installed. 

The render used in the example is the **pod render** that receives an object we create on the data section. 

The last part of the final statement is what creates that object (using the fromYaml method) and passes it to the render. 

This idea of creating data sections that are passed to the renders have important advantages:

* Avoidance of hardcoding the artifact structure. 
* Possibility of embedding block sections of the values directly on the data section. 
* Ease of debug. 


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

To determine the parent data block name, override uses a simple method: it takes out the last section of the name (separated by a dot), and prefixed with a '@'.  

Therefore:

- pod.data.@override => pod.data (parent block)

- deployment.foo.@my_override => deployment.foo (parent block)

This inherintance can be as complex as needed by the charts. 

Thus,

- a.@b.@c => resolves a -> b -> c

Those blocks will be merged with a precedence from right to left. 


#### Override augmenters

A) The .final keyword

Whenever we want to finalize a block of code, which means our version is the only one not the inherit block, we can use the .final keyword, like so:

```yaml

{{- define "parent.block" -}}

foo:
  a: 1
  b: 2

{{- end -}}

{{- define "parent.block.@child" -}}

foo.final: # this version is final thus the precedent version of the parent is ignored
  c: 3

{{- end -}}

{{ include "ph.override" (list "parent.block.@child" . ) }}

---
# output
foo:
  c: 3


``` 

# Recipes

> Place for use example exhibition.

## StatefulSets

### Template

```yaml
{{- define "foo.statefulset.render" }}

name: {{ .Release.name }}

selector: {{ .Values.selector | toYaml | nindent 2 }}

labels: {{ .Values.labels | toYaml | nindent 2 }}

serviceName: {{ .Values.serviceName }}

replicas: {{ .Values.replicas }}

containers_dict:
  app:
    image: {{ .Values.image }}

volumeClaimTemplates: {{ .Values.volumeClaimTemplates | toYaml | nindent 2 }}

{{- end -}}
```

---

# License

Copyright (C) 2019, Francisco Maseda, Javier Gómez, Juan Sixto. 

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

---
