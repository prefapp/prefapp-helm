---
sidebar_position: 6
---

## Basic structure

```yaml
name: <configmap_name>

data:
  VAR_NAME1: value1
  VAR_NAME2: value2
```
## Secret example
```yaml
{{ define "mysecret.secret.data"  }}
name: {{ .Release.Name }}-secrets
data:
  password: {{ .Values.secret}}

{{- end }}
{{ include "ph.secret.render" (include "mysecret.secret.data" . | fromYaml )  }}
```