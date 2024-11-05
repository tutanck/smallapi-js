var e=require("lodash"),r=require("isarray"),t=require("url-parse"),n=require("remove-trailing-slash"),o=require("axios"),i=require("@tutanck/axios"),u=require("qs");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=/*#__PURE__*/a(e),c=/*#__PURE__*/a(r),l=/*#__PURE__*/a(t),f=/*#__PURE__*/a(n),d=/*#__PURE__*/a(o),v=/*#__PURE__*/a(u),y="/api",g="/conf";function h(){return h=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},h.apply(null,arguments)}var m=d.default.create(),p=function(e,r){return m(h({method:"get",url:e},r)).then(function(e){return e.data}).catch(function(e){throw e})},b=function(e,r){var t=r.apiKey,n=void 0===t?null:t,o=r.decodeKey,u=void 0===o?null:o,a=r.debug,d=void 0!==a&&a;try{if(!e)throw new Error("'serverUrl' cannot be undefined or null.");return!0===d&&console.log({serverUrl:e,apiKey:n,decodeKey:u,debug:d}),Promise.resolve(function(e,r){try{var t,n;return!0===(n=void 0!==(t=r.debug)&&t)&&console.log("-> fetching",e),Promise.resolve(p(e,{}).then(function(r){try{var t,o=function(r){var n=l.default(e);return{descriptor:t,serverRootUrl:n.protocol+"//"+n.host,apiBaseUri:y}},i=function(){if(function(e){var r;void 0===e&&(e=[]);var t=e.find(function(e){return(null==e?void 0:e.path)===g});return Boolean(null==t||null==(r=t.methods)?void 0:r.includes("GET"))}(r))return function(r,o){try{var i=(u=""+f.default(e)+g,!0===n&&console.log("-> fetching",u),Promise.resolve(p(u,{})).then(function(e){var r=e.routing[y];if(!(c.default(r)&&r.length>0))throw new Error("Invalid or empty api-map");t=s.default.groupBy(r,"name")}))}catch(e){return o(e)}var u;return i&&i.then?i.then(void 0,o):i}(0,function(r){throw console.error(r),new Error("Api conf unreachable on server '"+e+"'")});throw new Error("Api conf not found on server '"+e+"'")}();return Promise.resolve(i&&i.then?i.then(o):o())}catch(e){return Promise.reject(e)}}).catch(function(r){throw console.error(r),new Error("Unable to connect to server '"+e+"'")}))}catch(e){return Promise.reject(e)}}(e,{debug:d})).then(function(e){var r=e.descriptor,t=function(e){var r=e.apiBaseUri,t=e.apiKey,n=e.decodeKey,o=[f.default(e.serverRootUrl),r].join(""),u=i.createInstance({baseURL:o,headers:{authorization:t}});return{get:i.makeGet(u,{encryption:{decodeKey:n}}),post:i.makePost(u,{encryption:{decodeKey:n}}),put:i.makePut(u,{encryption:{decodeKey:n}}),del:i.makeDel(u,{encryption:{decodeKey:n}})}}({serverRootUrl:e.serverRootUrl,apiBaseUri:e.apiBaseUri,decodeKey:u,apiKey:n}),o=function(e,r,t){var n=r.get,o=r.post,i=r.put,u=r.del,a=t.debug,s=void 0!==a&&a,c=Object.entries(e).reduce(function(e,r){var t,a=r[1],c=function(e){if(e.endsWith("Routine")){var r=e.substring(0,e.length-7);if(e.startsWith("count"))return"count"+r.substring(5,e.length);if(e.startsWith("create"))return"create"+r.substring(6,e.length);if(e.startsWith("findById"))return"find"+r.substring(8,e.length)+"ById";if(e.startsWith("findByQuery"))return"find"+r.substring(11,e.length)+"ByQuery";if(e.startsWith("removeById"))return"remove"+r.substring(10,e.length)+"ByQuery";if(e.startsWith("removeByQuery"))return"remove"+r.substring(13,e.length)+"ByQuery";if(e.startsWith("updateById"))return"update"+r.substring(10,e.length)+"ById";if(e.startsWith("updateByQuery"))return"update"+r.substring(13,e.length)+"ByQuery"}return e}(r[0]),l=function(e,r,t){var n=e.uri,o=e.name,i=e.verb,u=t.debug,a=void 0!==u&&u,s=t.fnName,c={PUT:r.put,GET:r.get,POST:r.post,DELETE:r.del}[i];if(o.endsWith("Routine")){if(o.startsWith("count"))return function(e){try{var r=n+"?"+v.default.stringify({filter:e});return!0===a&&(console.log({fnName:s,uri:n,name:o,verb:i}),console.log(i+" '"+r+"'")),Promise.resolve(c(r))}catch(e){return Promise.reject(e)}};if(o.startsWith("create"))return function(e,r){void 0===r&&(r={});try{var t=n+"?"+v.default.stringify({options:r}),u={data:{docs:e}};return!0===a&&(console.log({fnName:s,uri:n,name:o,verb:i}),console.log(i+" '"+t+"' with data: "+JSON.stringify(u))),Promise.resolve(c(t,u))}catch(e){return Promise.reject(e)}};if(o.startsWith("findById"))return function(e,r,t){void 0===r&&(r={}),void 0===t&&(t={});try{var u=""+n+e+"?"+v.default.stringify({projection:r,options:t});return!0===a&&(console.log({fnName:s,uri:n,name:o,verb:i}),console.log(i+" '"+u+"'")),Promise.resolve(c(u))}catch(e){return Promise.reject(e)}};if(o.startsWith("findByQuery"))return function(e,r,t){void 0===r&&(r={}),void 0===t&&(t={});try{var u=n+"?"+v.default.stringify({filter:e,projection:r,options:t});return!0===a&&(console.log({fnName:s,uri:n,name:o,verb:i}),console.log(i+" '"+u+"'")),Promise.resolve(c(u))}catch(e){return Promise.reject(e)}};if(o.startsWith("removeById"))return function(e,r){void 0===r&&(r={});try{var t=""+n+e+"?"+v.default.stringify({options:r});return!0===a&&(console.log({fnName:s,uri:n,name:o,verb:i}),console.log(i+" '"+t+"'")),Promise.resolve(c(t))}catch(e){return Promise.reject(e)}};if(o.startsWith("removeByQuery"))return function(e,r){void 0===r&&(r={});try{var t=n+"?"+v.default.stringify({filter:e,options:r});return!0===a&&(console.log({fnName:s,uri:n,name:o,verb:i}),console.log(i+" '"+t+"'")),Promise.resolve(c(t))}catch(e){return Promise.reject(e)}};if(o.startsWith("updateById"))return function(e,r,t){void 0===t&&(t={});try{var u=""+n+e+"?"+v.default.stringify({options:t}),l={data:{update:r}};return!0===a&&(console.log({fnName:s,uri:n,name:o,verb:i}),console.log(i+" '"+u+"' with data: "+JSON.stringify(l))),Promise.resolve(c(u,l))}catch(e){return Promise.reject(e)}};if(o.startsWith("updateByQuery"))return function(e,r,t){void 0===t&&(t={});try{var u=n+"?"+v.default.stringify({filter:e,options:t}),l={data:{update:r}};return!0===a&&(console.log({fnName:s,uri:n,name:o,verb:i}),console.log(i+" '"+u+"' with data: "+JSON.stringify(l))),Promise.resolve(c(u,l))}catch(e){return Promise.reject(e)}}}return function(e){var r=e.body,t=e.query,u=e.params;try{var l=n+"?"+v.default.stringify({query:t}),f={data:r,params:u};return!0===a&&(console.log({fnName:s,uri:n,name:o,verb:i}),console.log(i+" '"+l+"' with data: "+JSON.stringify(f))),Promise.resolve(c(l,f))}catch(e){return Promise.reject(e)}}}(a[0],{get:n,post:o,put:i,del:u},{debug:s,fnName:c});return h({},e,((t={})[c]=l,t))},{});return c}(r,{get:t.get,post:t.post,put:t.put,del:t.del},{debug:d});return!0===d&&Object.entries(o).map(function(e){console.log(e[0]+": "+e[1].toString())}),o})}catch(e){return Promise.reject(e)}};exports.default=b,exports.smallapi=b;
//# sourceMappingURL=index.js.map
