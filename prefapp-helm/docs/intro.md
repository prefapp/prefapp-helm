---
sidebar_position: 1
sidebar_label: 'Introduction'
---


# Introduction

Welcome to the prefapp-helm ! Here you will find documentation on how to use this Helm library chart.

The documentation of this library is divided based on its main functionalities:

  - [Render](renders/renders_intro)
    - [Deployment](renders/deployment)
    - [Service](renders/service)
    - [Configmap](renders/configmap)
    - [Secret](renders/secret)
    - [Ingress](renders/ingress)
    - [ServiceAccount](/)
  - [Override](override)
  - [Stash](/)



## Usage
To get started using Prefapp-helm you just have to add the *dependency* to your `Chart.yaml`:
```
dependencies:
- name: prefapp-helm
  repository: https://prefapp.github.io/prefapp-helm
  version: 0.0.3
```

You can find some chart examples in this section:
- [Chart examples](/)
  - [Render Deploy-Service](/)
  - [Render Deploy-Configmap](/)
  - [Override](/)