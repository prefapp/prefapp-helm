---
sidebar_label: 'env helpers'
sidebar_position: 3
---
# Environment helpers
Prefapp Helm comes with 6 helpers that reduce verbosity when setting pod environment variables.

The render expects the environment values to be added in 6 different ways (all of them can be combined):
## env_literal

**INPUT**
  ```
  env_literal:
    VAR_NAME1: "value1"
    VAR_NAME2: "value2"
  ```

**OUTPUT**
  ```
  env: 
  - name: VAR_NAME1
  value: "value1"
            
  - name: VAR_NAME2
   value: "value2"

  ```
## env_values_configmap
**INPUT**
```
env_values_configmap:
  - configmap: <configmap_artifact_name>
      values:
        VAR_NAME1: CONFIG_NAME1
        VAR_NAME2: CONFIG_NAME2
```

**OUTPUT**
```
- name: VAR_NAME1
  valueFrom:
    configMapKeyRef:
      name: <configmap_artifact_name>
      key: CONFIG_NAME1

- name: VAR_NAME2
  valueFrom:
    configMapKeyRef:
      name: <configmap_artifact_name>
      key: CONFIG_NAME2
```

## env_values_secret
```
env_values_secret:
  - secret: <secret_artifact_name>
    values:
      VAR_NAME1: SECRET_NAME1
      VAR_NAME2: SECRET_NAME2
```

## envFrom

  ```
  envFrom:
    configmaps:
      - <configmap_artifact_name1>
      - <configmap_artifact_name2>
  
    secrets:
      - <secret_artifact_name1>
      - <secret_artifact_name2>
  ```

## [env_from_field_ref](https://kubernetes.io/docs/tasks/inject-data-application/environment-variable-expose-pod-information/)

**INPUT**
```
  KUBERNETES_NAMESPACE: metadata.namespace
  MY_POD_NAME: metadata.name
  MY_POD_IP: status.podIP
```

**OUTPUT**
```
  - name: MY_NODE_NAME
    valueFrom:
      fieldRef:
        fieldPath: spec.nodeName
  - name: MY_POD_NAME
    valueFrom:
      fieldRef:
        fieldPath: metadata.name
```

## [env_from_resource_ref](https://kubernetes.io/docs/tasks/inject-data-application/environment-variable-expose-pod-information/)
**INPUT**
```
env:
  - container: test-container1
    values:
      MY_CPU_LIMIT: limits.cpu
      MY_CPU_REQUEST: requests.cpu

  - container: test-container2
    values:
      MY_MEM_LIMIT: limits.memory
```

**OUTPUT**
```
env:
  - name: MY_CPU_REQUEST
    valueFrom:
      resourceFieldRef:
        containerName: test-container1
        resource: requests.cpu
  - name: MY_CPU_LIMIT
    valueFrom:
      resourceFieldRef:
        containerName: test-container1
        resource: limits.cpu
  - name: MY_MEM_LIMIT
    valueFrom:
      resourceFieldRef:
        containerName: test-container2
        resource: limits.memory
```