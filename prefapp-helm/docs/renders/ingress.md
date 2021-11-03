---
sidebar_position: 7
---

## Basic structure
```yaml
name: <ingress_name>
rules_path:
-path: /
  service:  <ingress_service>
  port:  <ingress_port>
```

## Example ingress

```yaml
{{- define "myingress.ingress.data" -}}
name: {{ .Release.Name }}-ingress
rules_path:
- path: /{{ .Release.Name }}
  service: {{ .Release.Name }}-service
  port: 80
{{- end -}}
{{ include "ph.ingress.render" (include "myingress.ingress.data" . | fromYaml )  }}
```