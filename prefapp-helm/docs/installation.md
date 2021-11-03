---
sidebar_position: 2
---

# Installation

Add the prefapp-helm repo to your helm repos. 

```sh
helm repo add prefapp-helm https://prefapp.github.io/prefapp-helm
helm repo update
```

Then, include in your charts as a dependency:

```yaml
# Chart.yaml

dependencies:
  # ... your other dependencies
  - name: prefapp-helm
    version: <your desired version>
    repository: https://prefapp.github.io/prefapp-helm
```

Choose latest version from: https://github.com/prefapp/prefapp-helm/releases

You are now good to go!