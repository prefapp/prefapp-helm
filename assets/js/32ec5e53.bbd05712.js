"use strict";(self.webpackChunkprefapp_helm=self.webpackChunkprefapp_helm||[]).push([[628],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,v=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?t.createElement(v,l(l({ref:n},s),{},{components:r})):t.createElement(v,l({ref:n},s))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4323:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={sidebar_label:"env helpers",sidebar_position:3},p="Environment helpers",c={unversionedId:"renders/env_helpers",id:"renders/env_helpers",isDocsHomePage:!1,title:"Environment helpers",description:"Prefapp Helm comes with 6 helpers that reduce verbosity when setting pod environment variables.",source:"@site/docs/renders/env_helpers.md",sourceDirName:"renders",slug:"/renders/env_helpers",permalink:"/docs/renders/env_helpers",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/renders/env_helpers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"env helpers",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"deployment",permalink:"/docs/renders/deployment"},next:{title:"service",permalink:"/docs/renders/service"}},s=[{value:"env_literal",id:"env_literal",children:[],level:2},{value:"env_values_configmap",id:"env_values_configmap",children:[],level:2},{value:"env_values_secret",id:"env_values_secret",children:[],level:2},{value:"envFrom",id:"envfrom",children:[],level:2},{value:"env_from_field_ref",id:"env_from_field_ref",children:[],level:2},{value:"env_from_resource_ref",id:"env_from_resource_ref",children:[],level:2}],m={toc:s};function u(e){var n=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environment-helpers"},"Environment helpers"),(0,o.kt)("p",null,"Prefapp Helm comes with 6 helpers that reduce verbosity when setting pod environment variables."),(0,o.kt)("p",null,"The render expects the environment values to be added in 6 different ways (all of them can be combined):"),(0,o.kt)("h2",{id:"env_literal"},"env_literal"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"INPUT")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'env_literal:\n  VAR_NAME1: "value1"\n  VAR_NAME2: "value2"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OUTPUT")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'env: \n- name: VAR_NAME1\nvalue: "value1"\n          \n- name: VAR_NAME2\n value: "value2"\n\n')),(0,o.kt)("h2",{id:"env_values_configmap"},"env_values_configmap"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"INPUT")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"env_values_configmap:\n  - configmap: <configmap_artifact_name>\n      values:\n        VAR_NAME1: CONFIG_NAME1\n        VAR_NAME2: CONFIG_NAME2\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OUTPUT")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- name: VAR_NAME1\n  valueFrom:\n    configMapKeyRef:\n      name: <configmap_artifact_name>\n      key: CONFIG_NAME1\n\n- name: VAR_NAME2\n  valueFrom:\n    configMapKeyRef:\n      name: <configmap_artifact_name>\n      key: CONFIG_NAME2\n")),(0,o.kt)("h2",{id:"env_values_secret"},"env_values_secret"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"env_values_secret:\n  - secret: <secret_artifact_name>\n    values:\n      VAR_NAME1: SECRET_NAME1\n      VAR_NAME2: SECRET_NAME2\n")),(0,o.kt)("h2",{id:"envfrom"},"envFrom"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"envFrom:\n  configmaps:\n    - <configmap_artifact_name1>\n    - <configmap_artifact_name2>\n\n  secrets:\n    - <secret_artifact_name1>\n    - <secret_artifact_name2>\n")),(0,o.kt)("h2",{id:"env_from_field_ref"},(0,o.kt)("a",{parentName:"h2",href:"https://kubernetes.io/docs/tasks/inject-data-application/environment-variable-expose-pod-information/"},"env_from_field_ref")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"INPUT")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  KUBERNETES_NAMESPACE: metadata.namespace\n  MY_POD_NAME: metadata.name\n  MY_POD_IP: status.podIP\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OUTPUT")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  - name: MY_NODE_NAME\n    valueFrom:\n      fieldRef:\n        fieldPath: spec.nodeName\n  - name: MY_POD_NAME\n    valueFrom:\n      fieldRef:\n        fieldPath: metadata.name\n")),(0,o.kt)("h2",{id:"env_from_resource_ref"},(0,o.kt)("a",{parentName:"h2",href:"https://kubernetes.io/docs/tasks/inject-data-application/environment-variable-expose-pod-information/"},"env_from_resource_ref")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"INPUT")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"env:\n  - container: test-container1\n    values:\n      MY_CPU_LIMIT: limits.cpu\n      MY_CPU_REQUEST: requests.cpu\n\n  - container: test-container2\n    values:\n      MY_MEM_LIMIT: limits.memory\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OUTPUT")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"env:\n  - name: MY_CPU_REQUEST\n    valueFrom:\n      resourceFieldRef:\n        containerName: test-container1\n        resource: requests.cpu\n  - name: MY_CPU_LIMIT\n    valueFrom:\n      resourceFieldRef:\n        containerName: test-container1\n        resource: limits.cpu\n  - name: MY_MEM_LIMIT\n    valueFrom:\n      resourceFieldRef:\n        containerName: test-container2\n        resource: limits.memory\n")))}u.isMDXComponent=!0}}]);