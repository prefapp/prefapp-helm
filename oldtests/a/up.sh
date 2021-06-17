helm dep update . --skip-refresh

#helm template . -s templates/pvc.yaml
#helm template . -s templates/deployment_override.yaml
helm template . -s templates/deployment.yaml
#helm template . -s templates/service.yaml
