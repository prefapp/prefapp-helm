# Function block definition relationship tress

* [StatefulSet](#statefulset)
* [_render_test](#rendertest)

<a name='statefulset'></a>
<a name='rendertest'></a>
## StatefulSet

```
|_ ph.statefulset.render
  |_ ph.meta.render
  |_ ph.statefulset.spec.render
    |_ ph.pod.render
```

## rendertest

```
|_ ph.test.render
  |_ ph.pod.render > ph.pod.artifact
```

