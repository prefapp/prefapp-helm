---
sidebar_position: 5
---

## WIP
Work in progress

## Basic structure
To render our Kubernetes configmaps, Prefapp-helm uses ph.configmap.render , which expects the following object structure:
```yaml
name: <configmap_name>
labels: <label_maps>

data:
  VAR_NAME1: value1
  VAR_NAME2: value2
```

## Configmap example
```yaml
{{ define "configmap.data"  }}
name: {{ .Release.Name }}-config 
labels:
    tipo: "configurations"  
data:
  MYSQL_HOST: {{ .Release.Name }}-mysql
  MYSQL_USER: {{ .Values.datamysql.user }}
  MYSQL_DATABASE: {{ .Values.datamysql.database }}
  {{ .Values.env | toYaml | nindent 2}} #data taken directly from Values

{{- end }}
{{ include "ph.configmap.render" (include "configmap.data" . | fromYaml )  }}
```