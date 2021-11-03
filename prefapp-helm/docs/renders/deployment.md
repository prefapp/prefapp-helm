---
sidebar_position: 2
---
## Basic structure
```yaml
name: <name_of_the_deployment>
selector:  <selectors>
annotations: <anotations>
replicas: <n_replicas>
containers:
  - name: <name_of_the_container>
    image: ...
    command:  ...
    ...
    ports: ...
```

Prefapp-helm-render uses the same nomenclature as the standard k8s artifact, with the following exceptions:
### ports
Instead of:
```
ports:
  - containerPort: 80
```
The render expects:
```
ports:
  - pod: 80
```
This decision will be explained in detail in the [Render-service](./service) documentation.

### env
The render expects the environment values to be added in several ways [Env-helpers](./env_helpers)


## Example of ph.deployment.render
```
# deploy.yaml
{{ define "frontend.deploy.data"  }}
name: despregue-{{ .Release.Name }}-php
selector: {{ .Values.selector_meiga | toYaml | nindent 2}}
replicas: 1

containers:
- name: app-php
  image: {{ .Values.imagenes.frontend }}
  env_values_secret:
  - secret: {{ .Release.Name }}-secrets
    values:
      MYSQL_PASSWORD: root-password
  envFrom:
    configmaps:
    - {{ .Release.Name }}-config
  command: ["php", "-S", "0.0.0.0:80"]
  ports: {{ .Values.ports | toYaml | nindent 6 }}

{{- end }}
{{ include "ph.deployment.render" (include "frontend.deploy.data" . | fromYaml )  }}
```


