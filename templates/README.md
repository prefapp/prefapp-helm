# Fucntion block definition relationship tress

* [StatefulSet](#statefulset)

<a name='statefulset'></a>
## StatefulSet

```
|_ ph.statefulset.render
  |_ ph.meta.render
  |_ ph.statefulset.spec.render
    |_ spec.template.spec > ph.pod.render
```

