# Prefapp-Helm

## Getting started

In order to use prefapp-helm we need to include it as a subchart on our charts:

```yaml
# Chart.yaml

dependencies:
- name: prefapp-helm
  version: 0.0.x  # the version We need/want
  repository: https://prefapp.github.io/prefapp-helm
```

Then by updating our dependencies we are ready to go!

```sh

helm dep udpate . 

```

## Renders

Prefapp-helm is a very lightweight microframework that exposes a reduced number of renders:

* pod-render (ph.pod.render)
* secret-render (ph.secret.render)
* configmap-render (ph.configmap.render)
* service-render (ph.service.render)
* deployment-render (ph.deployment.render)
* cronjob-render (ph.cronjob.render)
* job-render (ph.job.render)
* persistent-volume-render (ph.pv.render)
* persistent-volume-claim-render (ph.pvc.render)


Every render is just a [Helm named template](https://helm.sh/docs/chart_template_guide/named_templates/) that receives an object and renders it following the Kubernetes artifact definition.

Therefore, if we use the configmap render:

```yaml

{{- define "my-configmap" -}}

name: {{ .Release.Name}}

# labels are optional

data: 
  a: value1
  b: value2

{{- end -}}

{{/* render this object */}}
{{ include "ph.configmap.render" (include "my-configmap" . | fromYaml ) }}

```

We obtain an expected [Configmap artifact](https://kubernetes.io/docs/concepts/configuration/configmap/) conformed to the api definition. 

We can always let the definition of the key maps in the values section and pluck it to the configmap data section as so:

```yaml

---
# values.yaml

my_config:
  a: value1
  b: value2
  # ...

---
# template/my-configmap.yaml

{{- define "my-configmap" -}}

name: {{ .Release.Name}}

# labels are optional

data:  {{ .Values.my_config | toYaml | nindent 2 }} # we pluck the section inside the data 

{{- end -}}

{{/* render this object */}}
{{ include "ph.configmap.render" (include "my-configmap" . | fromYaml ) }}

```








 




```
