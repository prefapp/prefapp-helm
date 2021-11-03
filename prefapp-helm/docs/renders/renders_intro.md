---
sidebar_position: 1
sidebar_label: 'Introduction'
---

# Introduction
Renders are chart helpers that receive an object and produce the appropriate standard k8s artifact. Instead of writing the hole Kubernetes structure for each artifact, prefapp-helm allows the programer to create simpler object defining the artifacts and apply a specific render to *inflate* our yaml and create a standard k8s artifact conforming to the kubernetes API of the release environment.

## Example
Here is an example of a minimal deploy using Prefapp-helm render:
```yaml
{{- define "my.deploy.data" -}}
name: mydeploy
selector:
  app: nginx-app

containers:
- name: nginx
  image: nginx:1.19.6
{{- end -}}

{{ include "ph.deployment.render" (include "my.deploy.data" . | fromYaml ) }}
```
Whose rendered information would be:
```yaml
kind: Deployment
apiVersion: apps/v1

metadata:
  name: mydeploy
  labels:
  annotations:

spec:
  replicas: 1
  selector: 
    matchLabels: 
      app: nginx-app
  template: 
    metadata:
      labels: 
        app: nginx-app
      annotations:
    spec: 
      containers: 
          - name: nginx
            image: "nginx:1.19.6"
            imagePullPolicy: IfNotPresent
            env: 
            envFrom:    
            ports: 
            volumeMounts: 
            resources: 
              requests: 
                  {}
              limits: 
                  {} 
      imagePullSecrets: 
      volumes:
```

## Available renders
There is a different render for each of the kubernetes artifact: 
- [ph.configmap.render](configmap)
- ph.cronjob.render
- [ph.deployment.render](deployment)
- ph.ingress.render
- ph.job.render
- ph.pod.render
- ph.pvc.render
- ph.secret.render
- [ph.service.render](service)

# Structure
The prefapp-helm-render expects an object with the following structure:
```
#metadata
name:
labels:
anotations:
...

#selector
selector: 

#artifact-specific object
ports: #service
containers: #deployment
data: #configmap
...
```

The objects use the standard kubernetes nomenclature, although there are a few exceptions.