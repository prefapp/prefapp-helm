# Changelog

## 0.6.0 [20-03-2023]

- Add ClusterIP render for service. [PR](https://github.com/prefapp/prefapp-helm/pull/202).

## 0.5.0 [08-03-2023]

- Add topologySpreadConstraints. [Issue](https://github.com/prefapp/prefapp-helm/issues/190) [PR](https://github.com/prefapp/prefapp-helm/pull/191).

## 0.4.1 [29-06-2022]

- Add port name on ingress render. [PR](https://github.com/prefapp/prefapp-helm/pull/180).

## 0.4.0 [29-06-2022]

- Add hpa render. [PR](https://github.com/prefapp/prefapp-helm/pull/178).

## 0.3.9 [08-04-2022]
- Add startupProbes to containers. [PR](https://github.com/prefapp/prefapp-helm/pull/175).

## 0.3.8 [25-02-2022]
- Fix a problem on Scope for the ingress class. [PR](https://github.com/prefapp/prefapp-helm/pull/173).

## 0.3.7 [31-01-2022]

- Fix a problem ingressVersion. [PR](https://github.com/prefapp/prefapp-helm/pull/168).
- Issue [PR](https://github.com/prefapp/prefapp-helm/issues/167).

## 0.3.6 [14-01-2022]

- Fix a problem on hostAliases. [PR](https://github.com/prefapp/prefapp-helm/pull/165).

## 0.3.5 [14-01-2022]

- Add hostAliases to pods. [PR](https://github.com/prefapp/prefapp-helm/pull/163).

## 0.3.4 [10-01-2022]

- Add multi-slot SKIP [Experimental]. [PR](https://github.com/prefapp/prefapp-helm/pull/161).

## 0.3.3 [10-01-2022]

- Lowercase for Default slot. [PR](https://github.com/prefapp/prefapp-helm/pull/159).

## 0.3.2 [06-01-2022]

- Add Multi-slots support for services and ingress [Experimental] [PR](https://github.com/prefapp/prefapp-helm/pull/157).

## 0.3.1 [06-01-2022]

- Add Multi-slots support for deployments [Experimental] [PR](https://github.com/prefapp/prefapp-helm/pull/153).

## 0.2.13 [29-12-2021]

- Fixed problem on K8s version passed to ingress render [PR](https://github.com/prefapp/prefapp-helm/pull/154).

## 0.2.12 [19-11-2021]

- Fixed replicas to allow 0 but not by default [PR](https://github.com/prefapp/prefapp-helm/pull/)


## 0.2.11 [18-11-2021]

- Added range ports services and containers [PR](https://github.com/prefapp/prefapp-helm/pull/148)

## 0.2.10 [21-10-2021]

- Added suppport for NodePort type services [PR](https://github.com/prefapp/prefapp-helm/pull/145)

## 0.2.9 [21-10-2021]

- Add security contexts for pods and containers [PR](https://github.com/prefapp/prefapp-helm/pull/139)

## 0.2.8 [21-10-2021]

- Added IngressClass resource (new way of defining kubernetes.io/ingress.class) [PR](https://github.com/prefapp/prefapp-helm/pull/138).

## 0.2.7 [20-09-2021]

- Fix cronjob version [PR](https://github.com/prefapp/prefapp-helm/pull/134).
- Added cronjob version awareness [PR](https://github.com/prefapp/prefapp-helm/pull/132).

## 0.2.6 [20-09-2021]

- Added the first template curl_test [PR](https://github.com/prefapp/prefapp-helm/pull/130).

## 0.2.5 [01-09-2021]

- Fix whitespaces

## 0.2.4 [01-09-2021]

- Add test render. [PR](https://github.com/prefapp/prefapp-helm/pull/123).
- Add restartPolicy on pod render [PR](https://github.com/prefapp/prefapp-helm/pull/124).

## 0.2.3 [23-08-2021]

- Add statefulset render. [PR](https://github.com/prefapp/prefapp-helm/pull/110).

## 0.2.2 [23-08-2021]

- Add rbac support. [PR](https://github.com/prefapp/prefapp-helm/pull/117).  
- Add service-account support. [PR](https://github.com/prefapp/prefapp-helm/pull/117). 

## 0.2.1 [28-07-2021]

- Add statefulset render. [PR](https://github.com/prefapp/prefapp-helm/pull/110).

- Prevent encoding secrets renderer TLS type. [PR](https://github.com/prefapp/prefapp-helm/pull/109).

- Forced quotes on ingress rule hosts. [PR](https://github.com/prefapp/prefapp-helm/pull/111).

## 0.2.0 [13-07-2021]

- Adopted SemVer 2

- Add render for tls-secrets. [PR](https://github.com/prefapp/prefapp-helm/releases).

## 1.21.0 [12-07-2021]

- New version system.

- Updated renders container to add new env capabilities [PR](https://github.com/prefapp/prefapp-helm/pull/102).

## 0.0.18 [6-07-2021]

- Prepare ingress' render to accept multiple hosts. [PR](https://github.com/prefapp/prefapp-helm/pull/97). 

## 0.0.17 [30-06-2021]

- Add final augmenter

## 0.0.16 [24-06-2021]

- Add serverAccountName to pod renders. [PR](https://github.com/prefapp/prefapp-helm/pull/90).

## 0.0.15 [18-06-2021]

- Add metadata for cronjobs and jobs. [PR](https://github.com/prefapp/prefapp-helm/pull/87).

## 0.0.14 [17-06-2021]

- Add README

## 0.0.13 [11-06-2021]

- Establish 1.21 specs for cronjobs and jobs. [PR](https://github.com/prefapp/prefapp-helm/pull/78).

## 0.0.12 [31-05-2021]

- Add strategy for deployments.  [PR](https://github.com/prefapp/prefapp-helm/pull/75).

## 0.0.11 [25-05-2021]

- Add specs for cronjobs as k8s v1.21. [PR](https://github.com/prefapp/prefapp-helm/pull/69).

## 0.0.10 [25-05-2021]

- Add pod_labels for cronjobs. [PR](https://github.com/prefapp/prefapp-helm/pull/66).

## 0.0.9 [24-05-2021]

- Add labels for ingress rules and quotes for ingress annotations' values. [PR](https://github.com/prefapp/prefapp-helm/pull/62).
- Add pod_labels for deployment render. [PR](https://github.com/prefapp/prefapp-helm/pull/63).  


## 0.0.8 [11-05-2021]

- Fix _dict objects problem [PR](https://github.com/prefapp/prefapp-helm/pull/58).

## 0.0.7 [05-05-2021]
- Add lifecycle section for Pod render. 
- Add terminationGracePeriodSeconds for pod render. 

## 0.0.6 [29-04-2021]
- Add named port for containers and services. 

## 0.0.5 [22-04-2021]
- Add automountServiceAccountToken capabilites [PR](https://github.com/prefapp/prefapp-helm/pull/43).

## 0.0.4 [22-02-2021]
- Fixed bug in the previous version that prevented the use of ingress render without tls [PR](https://github.com/prefapp/prefapp-helm/pull/36)

## 0.0.3 [5-02-2021]

- Add ingress version up to 1.18 [PR](https://github.com/prefapp/prefapp-helm/pull/16)
- Add node affinity rendering ability to pod [PR](https://github.com/prefapp/prefapp-helm/pull/17)
- Add nodeSelector rendering ability to pod [PR](https://github.com/prefapp/prefapp-helm/pull/19)
