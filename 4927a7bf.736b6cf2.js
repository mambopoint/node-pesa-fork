(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(93)),i={id:"configuration",title:"Configuration"},c={unversionedId:"guide/configuration",id:"guide/configuration",isDocsHomePage:!1,title:"Configuration",description:"By default only an",source:"@site/docs/guide/Configuration.md",slug:"/guide/configuration",permalink:"/pesa-js/guide/configuration",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guide/Configuration.md",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/pesa-js/guide/installation"},next:{title:"Typescript Support",permalink:"/pesa-js/guide/typescript"}},u=[],p={toc:u};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default only an"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"apikey and"),Object(o.b)("li",{parentName:"ul"},"publickey ")),Object(o.b)("p",null,"are required "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"\nimport { Pesa } from '@openpesa/pesa-js';\n\n// Populate the credentials\nconst api_key = 'your_api_key';\nconst public_key = 'the_public_key';\n\n// Intiate with credentials\nlet pesa = new Pesa({ api_key, public_key });\n\n// Setup the transaction\nlet data = {\n    input_Amount: 10000,\n    // ..\n};\n\n// Execute the transaction\npesa.c2b(data)\n    .then((data) => {\n        // Print results\n        console.log(data);\n    })\n    .catch((e) => {\n        console.log('err: ' + e);\n    });\n")))}l.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),d=r,b=s["".concat(i,".").concat(d)]||s[d]||f[d]||o;return t?a.a.createElement(b,c(c({ref:n},p),{},{components:t})):a.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);