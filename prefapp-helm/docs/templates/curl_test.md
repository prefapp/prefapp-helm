---
sidebar_position: 2
sidebar_label: 'CURL test'
---

This template is called `ph.curl_test.template` and it uses `ph.test.render` underneath.

It sets up a helm test that runs a curl to ensure the app is working.
You can configure:
  - The url
  - The http method (GET[default], POST, PUT, DELETE...)
  - Optional headers


## Usage
Here is an example of how to use it:
```

# file: <chart_name>/templates/tests/curl_info.yaml
{{- define "base.curl_tests" -}}
name: {{ .Release.Name}}-{{.Chart.Name }}-test_name
curl_options:
  verb: "POST"
  headers: 
    - "Content-Type: text/html"
    - "Server: ACME"
  url: {{ printf "http://%s-%s%s" .Release.Name  .Chart.Name "/info" }}
{{- end -}}

{{ include "ph.curl_test.template" ( include "base.curl_tests" . | fromYaml )}}

```

It outputs:
```
# Source: test-curl/templates/tests/curl_info.yaml
apiVersion: v1
kind: Pod
metadata:
  name:   name: RELEASE-NAME-test-curl-test_name
  annotations: 
    helm.sh/hook: test
    helm.sh/hook-delete-policy: before-hook-creation,hook-succeeded
 
spec: 
  containers: 
      - name: test
        image: "curlimages/curl"
        imagePullPolicy: IfNotPresent
  
        args: 
          - "-X"
          - "POST"
          - "-H"
          - "Content-Type: text/html"
          - "-H"
          - "Server: ACME"
          - "http://RELEASE-NAME-test-curl/info"
       
        env: 
        envFrom: 
        ports: 
        volumeMounts:    
        resources: 
          requests: 
              {}
          limits: 
              {} 
  restartPolicy: Never
  imagePullSecrets: 
  volumes:

```

## Multiple tests
If you want to make several curl tests, you could use this template in a loop:
```
{{- define "test.curl_item.template" -}}

{{ $test := .Values.__render__.test }}
{{ $test_name := .Values.__render__.test_name }}

name: {{ .Release.Name}}-{{.Chart.Name }}-t-{{ $test_name }}

curl_options:
  {{ with $test.headers }}
  headers: {{ . | toYaml | nindent 4 }}
  {{ end }}
  
  verb: {{ default "GET" $test.verb }}

  url: {{ $test.url }}

{{- end -}}


{{- define "test-curl.loop" -}}

{{ range $k, $v := .Values.curl_tests }}

{{ $_ := set $.Values "__render__" (dict) }}
{{ $_ := set $.Values.__render__ "test" $v }}
{{ $_ := set $.Values.__render__ "test_name" $k }}

---
{{ include "ph.curl_test.template" (include "test.curl_item.template" $ | fromYaml ) }}

{{ $_ := unset $.Values "__render__" }}

{{ end }}

{{- end -}}

{{ include "test-curl.loop" . }}

```

Here is a values example:
```
curl_tests:
  test_texts:
    url: /texts
  
  test_places:
    headers:
      - "Content-Type: json"
    verb: "POST"
    url: /places
  
  test_web:
    headers:
      - "Content-Type: text/html"
    verb: "PUT"
    url: /
```