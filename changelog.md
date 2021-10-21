# Changelog

## 0.2.9 [21-10-2021]

- Add security contexts for pods and containers [PR]().

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
