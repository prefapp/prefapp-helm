---
sidebar_position: 4
sidebar_label: 'Override'
---

# WIP
## Override example
```
#BASE
{{ define "nginx.base.pod"  }}
containers_dict:
  app:
    name: nginx
    image: nginx:1.19.6
    env_values_configmap:
      - configmap: {{ .Release.Name }}-config
        values:
          NGINX_HOST: NGINX_HOST
          NGINX_PORT: NGINX_PORT
    ports: {{ .Values.ports | toYaml | nindent 6 }}
{{- end }}

#HERENCIA
{{ define "nginx.base.pod.@override"  }}
containers_dict:
  app:
    env_values_configmap:
        - configmap: {{ .Release.Name }}-config
          values:
    env_literal:
      NGINX_HOST: "SlowServer"
      NGINX_PORT: "8080"
    ports: 
      - concontainerPort: 80
{{- end }}

#DEPLOYMENT CON HERENCIA
{{ define "nginx.deploy2.data"  }}
name: {{ .Release.name }}-deploy
selector:
  app: nginx-app

{{ include "ph.override" (list "nginx.base.pod.@override" .) }}
{{- end -}}

#RENDERIZACION
 {{ include "ph.deployment.render" (include "nginx.deploy2.data" . | fromYaml ) }}
```
