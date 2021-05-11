{{- define "ph.k8s.version" -}}
{{ .Capabilities.KubeVersion.Version }}
{{- end -}}

