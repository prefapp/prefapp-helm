---
sidebar_position: 4
---

## Basic structure
To render our Kubernetes services, Prefapp-helm uses `ph.service.render`, which expects the following object structure:

```yaml
name: <name_of_the_deployment>
selector:  <selectors>

ports: 
  - service: 80 #exposed port
    pod: 80 #target
```

Prefapp-helm-render uses the same nomenclature as the standard k8s artifact, with the exception of the *ports*, this allows us to use the same *Values* declaration for both the service and the deployment. 

Given this `values.yaml`:
```yaml
#values.yaml
frontend_ports:
  - service: 80 #exposed port
    pod: 80  #target
```

We can have the same line in the service:
```yaml
#service.yaml
name: service-{{ .Release.Name }}-php
selector:  {{ .Values.selector_meiga | toYaml | nindent 2}}
  
ports: {{ .Values.frontend_ports | toYaml | nindent 6 }}
```

As well as the deployment:
```yaml
#deploy.yaml
name: deploy-{{ .Release.Name }}-php
selector: {{ .Values.selector_meiga | toYaml | nindent 2}}

containers:
- name: app-php
  ...
  ports: {{ .Values.frontend_ports | toYaml | nindent 6 }}
```


## Example of ph.service.render
```yaml
{{ define "frontend.service.data"  }}
name: servizo-{{ .Release.Name }}-php
selector:  {{ .Values.selector_meiga | toYaml | nindent 2}}
  
ports: {{ .Values.ports | toYaml | nindent 6 }}

{{- end }}
{{ include "ph.service.render" (include "frontend.service.data" . | fromYaml )  }}
```

