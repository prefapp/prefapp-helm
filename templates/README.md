# Definition block trees

* [StatefulSet](#statefulset)

<a name='statefulset'></a>
## StatefulSet

```
|_ ph.statefulset.render
  |_ ph.meta.render
  |_ ph.statefulset.spec.render
    |_ ph.statefulset.template.render
      |_ ph.pod.render
    |_ ph.statefulset.volumeClaimTemplates.render
      |_ ph.statefulset.metadata.volumeClaimTemplates.render
      |_ ph.statefulset.spec.volumeClaimTemplates.render
```

