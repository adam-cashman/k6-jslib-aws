(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function o(e){var t="function"==typeof Map?new Map:void 0;return o=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return i(e,arguments,s(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),c(n,e)},o(e)}function i(e,t,r){return i=a()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&c(o,r.prototype),o},i.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function f(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(e,t,r){return(t=p(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}e.r(t),e.d(t,{AWSConfig:()=>y,InvalidAWSConfigError:()=>d,InvalidSignatureError:()=>ue,S3Bucket:()=>Re,S3Client:()=>Ae,S3MultipartUpload:()=>Ie,S3Object:()=>xe,S3Part:()=>De,S3ServiceError:()=>Ke});var y=function(){function e(t){if(u(this,e),h(this,"region",void 0),h(this,"accessKeyId",void 0),h(this,"secretAccessKey",void 0),h(this,"sessionToken",void 0),h(this,"scheme","https"),h(this,"endpoint","amazonaws.com"),!t.region||""===t.region)throw new d('invalid AWS region; reason: expected a valid AWS region name (e.g. "us-east-1"), got `'.concat(t.region,"`"));if(!t.accessKeyId||""===t.accessKeyId)throw new d("invalid AWS access key ID; reason: expected a non empty string, got `".concat(t.accessKeyId,"`"));if(t.accessKeyId.length<16||t.accessKeyId.length>128)throw new d("invalid AWS access key ID; reason: size should be between 16 and 128 characters, got ".concat(t.accessKeyId.length));if(!t.secretAccessKey||""===t.secretAccessKey)throw new d("invalid AWS secret access key; reason: expected a non empty string, got `".concat(t.secretAccessKey,"`"));if(t.secretAccessKey.length<16||t.secretAccessKey.length>128)throw new d("invalid AWS secret access key; reason: size should be between 16 and 128 characters, got ".concat(t.secretAccessKey.length));this.region=t.region,this.accessKeyId=t.accessKeyId,this.secretAccessKey=t.secretAccessKey,void 0!==t.sessionToken&&(this.sessionToken=t.sessionToken),void 0!==t.scheme&&(this.scheme=t.scheme),void 0!==t.endpoint&&(this.endpoint=t.endpoint)}return f(e,null,[{key:"fromEnvironment",value:function(t){return new e({region:__ENV.AWS_REGION,accessKeyId:__ENV.AWS_ACCESS_KEY_ID,secretAccessKey:__ENV.AWS_SECRET_ACCESS_KEY,sessionToken:__ENV.AWS_SESSION_TOKEN,scheme:null==t?void 0:t.scheme,endpoint:null==t?void 0:t.endpoint})}}]),e}(),d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(i,e);var t,r,o=(t=i,r=a(),function(){var e,o=s(t);if(r){var i=s(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return n(this,e)});function i(e){return u(this,i),o.call(this,e)}return f(i)}(o(Error));const b=require("k6/crypto");var v=e.n(b),m="X-Amz-Algorithm",g="X-Amz-Credential",w="X-Amz-Date",O="X-Amz-Expires",S="X-Amz-Signature",j="X-Amz-SignedHeaders",P="X-Amz-Security-Token",_="x-amz-content-sha256",k=w.toLowerCase(),C=S.toLowerCase(),E=("X-Amz-Target".toLowerCase(),P.toLowerCase()),T="authorization",A=[T,k,"date"],R="host",x={authorization:!0,"cache-control":!0,connection:!0,expect:!0,from:!0,"keep-alive":!0,"max-forwards":!0,pragma:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,"x-amzn-trace-id":!0},I="aws4_request",D="AWS4-HMAC-SHA256",K=604800;const q=require("k6/html");function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,G(n.key),n)}}function L(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return z(e)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){var t="function"==typeof Map?new Map:void 0;return H=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return U(e,arguments,X(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),B(n,e)},H(e)}function U(e,t,r){return U=W()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&B(o,r.prototype),o},U.apply(null,arguments)}function W(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}function G(e){var t=function(e,t){if("object"!==M(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===M(t)?t:String(t)}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(c,e);var t,r,n,o,i,a=(t=c,r=W(),function(){var e,n=X(t);if(r){var o=X(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return L(this,e)});function c(e,t){var r,n,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),r=a.call(this,e),n=z(r),i=void 0,(o=G(o="code"))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,r.name="AWSError",r.code=t,r}return n=c,i=[{key:"parseXML",value:function(e){var t=(0,q.parseHTML)(e);return new c(t.find("Message").text(),t.find("Code").text())}}],(o=null)&&N(n.prototype,o),i&&N(n,i),Object.defineProperty(n,"prototype",{writable:!1}),c}(H(Error));function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Z(e);if(t){var o=Z(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return J(this,r)}}function J(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}function $(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ee(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){ae(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ne(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ce(n.key),n)}}function ie(e,t,r){return t&&oe(e.prototype,t),r&&oe(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,r){return(t=ce(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ce(e){var t=function(e,t){if("object"!==V(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==V(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===V(t)?t:String(t)}var se=function(){function e(t){var r=t.service,n=t.region,o=t.credentials,i=t.uriEscapePath,a=t.applyChecksum;ne(this,e),ae(this,"service",void 0),ae(this,"region",void 0),ae(this,"credentials",void 0),ae(this,"uriEscapePath",void 0),ae(this,"applyChecksum",void 0),this.service=r,this.region=n,this.credentials=o,this.uriEscapePath="boolean"!=typeof i||i,this.applyChecksum="boolean"!=typeof a||a}return ie(e,[{key:"sign",value:function(e,t){var r=t.signingDate,n=void 0===r?new Date:r,o=t.signingService,i=t.signingRegion,a=t.unsignableHeaders,c=void 0===a?new Set:a,s=t.signableHeaders,u=void 0===s?new Set:s,l=fe(n),f=l.longDate,h=l.shortDate,p=o||this.service,y=i||this.region,d="".concat(h,"/").concat(y,"/").concat(p,"/").concat(I);e.headers[R]=e.hostname;for(var b=0,v=Object.keys(e.headers);b<v.length;b++){var m=v[b];A.indexOf(m.toLowerCase())>-1&&delete e.headers[m]}e.headers[k]=f,this.credentials.sessionToken&&(e.headers[E]=this.credentials.sessionToken),ArrayBuffer.isView(e.body)&&(e.body=e.body.buffer),e.body||(e.body="");var g=this.computePayloadHash(e);!function(e,t){e=e.toLowerCase();for(var r=0,n=Object.keys(t);r<n.length;r++)if(e===n[r].toLowerCase())return!0;return!1}(_,e.headers)&&this.applyChecksum&&(e.headers[_]=g);var w=this.computeCanonicalHeaders(e,c,u),O=this.calculateSignature(f,d,this.deriveSigningKey(this.credentials,p,y,h),this.createCanonicalRequest(e,w,g));e.headers[T]="".concat(D," ")+"Credential=".concat(this.credentials.accessKeyId,"/").concat(d,", ")+"SignedHeaders=".concat(Object.keys(w).sort().join(";"),", ")+"Signature=".concat(O);var S="".concat(e.protocol,"://").concat(e.hostname);return e.path&&(S+=e.path),e.query&&(S+="?".concat(this.serializeQueryParameters(e.query))),re({url:S},e)}},{key:"presign",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.signingDate,n=void 0===r?new Date:r,o=t.expiresIn,i=void 0===o?3600:o,a=t.unsignableHeaders,c=t.unhoistableHeaders,s=t.signableHeaders,u=t.signingRegion,l=t.signingService,f=fe(n),h=f.longDate,p=f.shortDate,y=u||this.region,d=l||this.service;if(i>K)throw new ue("Signature version 4 presigned URLs can't be valid for more than 7 days");var b="".concat(p,"/").concat(y,"/").concat(d,"/").concat(I),v=this.moveHeadersToQuery(e,{unhoistableHeaders:c});v.headers[R]=e.hostname,this.credentials.sessionToken&&(v.query[P]=this.credentials.sessionToken),v.query[m]=D,v.query[g]="".concat(this.credentials.accessKeyId,"/").concat(b),v.query[w]=h,v.query[O]=i.toString(10);var _=this.computeCanonicalHeaders(v,a,s);v.query[j]=Object.keys(_).sort().join(";");var k=this.deriveSigningKey(this.credentials,d,y,p),C=this.computePayloadHash(e),E=this.createCanonicalRequest(v,_,C);v.query[S]=this.calculateSignature(h,b,k,E);var T="".concat(v.protocol,"://").concat(v.hostname);return v.path&&(T+=v.path),v.query&&(T+="?".concat(this.serializeQueryParameters(v.query))),re({url:T},v)}},{key:"createCanonicalRequest",value:function(e,t,r){var n=Object.keys(t).sort(),o=n.map((function(e){return"".concat(e,":").concat(t[e])})).join("\n"),i=n.join(";");return"".concat(e.method,"\n")+"".concat(this.computeCanonicalURI(e),"\n")+"".concat(this.computeCanonicalQuerystring(e),"\n")+"".concat(o,"\n\n")+"".concat(i,"\n")+"".concat(r)}},{key:"createStringToSign",value:function(e,t,r){var n=v().sha256(r,"hex");return"".concat(D,"\n")+"".concat(e,"\n")+"".concat(t,"\n")+"".concat(n)}},{key:"calculateSignature",value:function(e,t,r,n){var o=this.createStringToSign(e,t,n);return v().hmac("sha256",r,o,"hex")}},{key:"deriveSigningKey",value:function(e,t,r,n){var o=e.secretAccessKey,i=v().hmac("sha256","AWS4"+o,n,"binary"),a=v().hmac("sha256",i,r,"binary"),c=v().hmac("sha256",a,t,"binary");return v().hmac("sha256",c,"aws4_request","binary")}},{key:"computeCanonicalURI",value:function(e){var t=e.path;if(this.uriEscapePath){var r,n=[],o=$(t.split("/"));try{for(o.s();!(r=o.n()).done;){var i=r.value;0!==(null==i?void 0:i.length)&&("."!==i&&(".."===i?n.pop():n.push(i)))}}catch(e){o.e(e)}finally{o.f()}var a=null!=t&&t.startsWith("/")?"/":"",c=n.join("/"),s=n.length>0&&null!=t&&t.endsWith("/")?"/":"",u="".concat(a).concat(c).concat(s);return encodeURIComponent(u).replace(/%2F/g,"/")}return t}},{key:"computeCanonicalQuerystring",value:function(e){var t,r=e.query,n=void 0===r?{}:r,o=[],i={},a=function(e){if(e.toLowerCase()===C)return"continue";o.push(e);var t=n[e];"string"==typeof t?i[e]="".concat(le(e),"=").concat(le(t)):Array.isArray(t)&&(i[e]=t.slice(0).sort().reduce((function(t,r){return t.concat(["".concat(le(e),"=").concat(le(r))])}),[]).join("&"))},c=$(Object.keys(n).sort());try{for(c.s();!(t=c.n()).done;)a(t.value)}catch(e){c.e(e)}finally{c.f()}return o.map((function(e){return i[e]})).filter((function(e){return e})).join("&")}},{key:"computeCanonicalHeaders",value:function(e,t,r){var n,o=e.headers,i={},a=$(Object.keys(o).sort());try{for(a.s();!(n=a.n()).done;){var c=n.value;if(null!=o[c]){var s=c.toLowerCase();(s in x||null!=t&&t.has(s))&&(!r||r&&!r.has(s))||(i[s]=o[c].trim().replace(/\s+/g," "))}}}catch(e){a.e(e)}finally{a.f()}return i}},{key:"computePayloadHash",value:function(e){var t,r=e.headers,n=e.body;return r[_]?r[_]:null==n?"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855":"string"==typeof n||(t=n,"function"==typeof ArrayBuffer&&(t instanceof ArrayBuffer||"[object ArrayBuffer]"===Object.prototype.toString.call(t)))?v().sha256(n,"hex").toLowerCase():ArrayBuffer.isView(n)?v().sha256(n.buffer,"hex").toLowerCase():"UNSIGNED-PAYLOAD"}},{key:"moveHeadersToQuery",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=JSON.parse(JSON.stringify(e)),n=r.headers,o=r.query,i=void 0===o?{}:o,a=0,c=Object.keys(n);a<c.length;a++){var s,u=c[a],l=u.toLowerCase();"x-amz-"!==l.slice(0,6)||null!==(s=t.unhoistableHeaders)&&void 0!==s&&s.has(l)||(i[u]=n[u],delete n[u])}return re(re({},r),{},{headers:n,query:i})}},{key:"serializeQueryParameters",value:function(e,t){var r,n=[],o={},i=function(r){if(null!=t&&t.includes(r.toLowerCase()))return"continue";n.push(r);var i=e[r];"string"==typeof i?o[r]="".concat(le(r),"=").concat(le(i)):Array.isArray(i)&&(o[r]=i.slice(0).sort().reduce((function(e,t){return e.concat(["".concat(le(r),"=").concat(le(t))])}),[]).join("&"))},a=$(Object.keys(e).sort());try{for(a.s();!(r=a.n()).done;)i(r.value)}catch(e){a.e(e)}finally{a.f()}return n.map((function(e){return o[e]})).filter((function(e){return e})).join("&")}}]),e}(),ue=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(r,e);var t=Y(r);function r(e,n){var o;return ne(this,r),(o=t.call(this,e,n)).name="InvalidSignatureError",o}return ie(r)}(Q);function le(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}function fe(e){var t,r=(t=e,function(e){return"number"==typeof e?new Date(1e3*e):"string"==typeof e?Number(e)?new Date(1e3*Number(e)):new Date(e):e}(t).toISOString().replace(/\.\d{3}Z$/,"Z")).replace(/[\-:]/g,"");return{longDate:r,shortDate:r.slice(0,8)}}const he=require("k6/http");var pe=e.n(he);function ye(e){return ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ye(e)}function de(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ve(n.key),n)}}function be(e,t,r){return(t=ve(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ve(e){var t=function(e,t){if("object"!==ye(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==ye(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===ye(t)?t:String(t)}function me(e){return me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},me(e)}function ge(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function we(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Te(n.key),n)}}function Oe(e,t,r){return t&&we(e.prototype,t),r&&we(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Se(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&je(e,t)}function je(e,t){return je=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},je(e,t)}function Pe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Ce(e);if(t){var o=Ce(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _e(this,r)}}function _e(e,t){if(t&&("object"===me(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ke(e)}function ke(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ce(e){return Ce=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ce(e)}function Ee(e,t,r){return(t=Te(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Te(e){var t=function(e,t){if("object"!==me(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==me(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===me(t)?t:String(t)}var Ae=function(e){Se(r,e);var t=Pe(r);function r(e){var n;return ge(this,r),Ee(ke(n=t.call(this,e,"s3")),"signature",void 0),n.signature=new se({service:n.serviceName,region:n.awsConfig.region,credentials:{accessKeyId:n.awsConfig.accessKeyId,secretAccessKey:n.awsConfig.secretAccessKey,sessionToken:n.awsConfig.sessionToken},uriEscapePath:!1,applyChecksum:!0}),n}return Oe(r,[{key:"listBuckets",value:function(){var e=this.signature.sign({method:"GET",protocol:"https",hostname:this.host,path:"/",headers:{}},{}),t=pe().request("GET",e.url,e.body||"",{headers:e.headers});this._handle_error("ListBuckets",t);var r=[];return(0,q.parseHTML)(t.body).find("Buckets").children().each((function(e,t){var n={};t.children().forEach((function(e){switch(e.nodeName()){case"name":Object.assign(n,{name:e.textContent()});break;case"creationdate":Object.assign(n,{creationDate:Date.parse(e.textContent())})}})),r.push(n)})),r}},{key:"listObjects",value:function(e,t){var r="".concat(e,".").concat(this.host),n=this.signature.sign({method:"GET",protocol:"https",hostname:r,path:"/",query:{"list-type":"2",prefix:t||""},headers:{}},{}),o=pe().request("GET",n.url,n.body||"",{headers:n.headers});this._handle_error("ListObjectsV2",o);var i=[];return(0,q.parseHTML)(o.body).find("Contents").each((function(e,t){var r={};t.children().forEach((function(e){switch(e.nodeName()){case"key":Object.assign(r,{key:e.textContent()});break;case"lastmodified":Object.assign(r,{lastModified:Date.parse(e.textContent())});break;case"etag":Object.assign(r,{etag:e.textContent()});break;case"size":Object.assign(r,{size:parseInt(e.textContent())});break;case"storageclass":Object.assign(r,{storageClass:e.textContent()})}})),i.push(r)})),i}},{key:"getObject",value:function(e,t){var r,n="".concat(e,".").concat(this.host),o=this.signature.sign({method:"GET",protocol:"https",hostname:n,path:"/".concat(t),headers:{}},{}),i=pe().request("GET",o.url,o.body||"",{headers:o.headers});return this._handle_error("GetObject",i),new xe(t,Date.parse(i.headers["Last-Modified"]),i.headers.ETag,parseInt(i.headers["Content-Length"]),null!==(r=i.headers["X-Amz-Storage-Class"])&&void 0!==r?r:"STANDARD",i.body)}},{key:"putObject",value:function(e,t,r){var n="".concat(e,".").concat(this.host),o=this.signature.sign({method:"PUT",protocol:"https",hostname:n,path:"/".concat(t),headers:{Host:n},body:r},{}),i=pe().request("PUT",o.url,o.body,{headers:o.headers});this._handle_error("PutObject",i)}},{key:"deleteObject",value:function(e,t){var r="DELETE",n="".concat(e,".").concat(this.host),o=this.signature.sign({method:r,protocol:"https",hostname:n,path:"/".concat(t),headers:{}},{}),i=pe().request(r,o.url,o.body||"",{headers:o.headers});this._handle_error("DeleteObject",i)}},{key:"createMultipartUpload",value:function(e,t){var r="POST",n="".concat(e,".").concat(this.host),o=this.signature.sign({method:r,protocol:"https",hostname:n,path:"/".concat(t,"?").concat("uploads"),headers:{}},{}),i=pe().request(r,o.url,o.body||"",{headers:o.headers});return this._handle_error("CreateMultipartUpload",i),new Ie(t,(0,q.parseHTML)(i.body).find("UploadId").text())}},{key:"uploadPart",value:function(e,t,r,n,o){var i="".concat(e,".").concat(this.host),a="partNumber=".concat(n,"&uploadId=").concat(r),c=this.signature.sign({method:"PUT",protocol:"https",hostname:i,path:"/".concat(t,"?").concat(a),headers:{},body:o},{}),s=pe().request("PUT",c.url,c.body||"",{headers:c.headers});return this._handle_error("UploadPart",s),new De(n,s.headers.Etag)}},{key:"completeMultipartUpload",value:function(e,t,r,n){var o="POST",i="".concat(e,".").concat(this.host),a="uploadId=".concat(r),c="<CompleteMultipartUpload>".concat(n.map((function(e){return"<Part><PartNumber>".concat(e.partNumber,"</PartNumber><ETag>").concat(e.eTag,"</ETag></Part>")})).join(""),"</CompleteMultipartUpload>"),s=this.signature.sign({method:o,protocol:"https",hostname:i,path:"/".concat(t,"?").concat(a),headers:{},body:c},{}),u=pe().request(o,s.url,s.body||"",{headers:s.headers});this._handle_error("CompleteMultipartUpload",u)}},{key:"abortMultipartUpload",value:function(e,t,r){var n="DELETE",o="".concat(e,".").concat(this.host),i="uploadId=".concat(r),a=this.signature.sign({method:n,protocol:"https",hostname:o,path:"/".concat(t,"?").concat(i),headers:{}},{}),c=pe().request(n,a.url,a.body||"",{headers:a.headers});this._handle_error("AbortMultipartUpload",c)}},{key:"_handle_error",value:function(e,t){var r=t.status,n=t.error_code,o=t.error;if(!(r>=200&&r<300&&""==o&&0===n)){if(301==r||o&&o.startsWith("301"))throw new Ke("Resource not found","ResourceNotFound",e);var i=Q.parseXML(t.body);if("AuthorizationHeaderMalformed"===i.code)throw new ue(i.message,i.code);throw new Ke(i.message,i.code||"unknown",e)}}}]),r}(function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),be(this,"awsConfig",void 0),be(this,"serviceName",void 0),be(this,"_host",void 0),this.awsConfig=t,this.serviceName=r}var t,r,n;return t=e,(r=[{key:"host",get:function(){return null==this._host?"".concat(this.serviceName,".").concat(this.awsConfig.region,".").concat(this.awsConfig.endpoint):this._host},set:function(e){this._host=e}}])&&de(t.prototype,r),n&&de(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()),Re=Oe((function e(t,r){ge(this,e),Ee(this,"name",void 0),Ee(this,"creationDate",void 0),this.name=t,this.creationDate=r})),xe=Oe((function e(t,r,n,o,i,a){ge(this,e),Ee(this,"key",void 0),Ee(this,"lastModified",void 0),Ee(this,"etag",void 0),Ee(this,"size",void 0),Ee(this,"storageClass",void 0),Ee(this,"data",void 0),this.key=t,this.lastModified=r,this.etag=n,this.size=o,this.storageClass=i,this.data=a})),Ie=Oe((function e(t,r){ge(this,e),Ee(this,"key",void 0),Ee(this,"uploadId",void 0),this.key=t,this.uploadId=r})),De=Oe((function e(t,r){ge(this,e),Ee(this,"partNumber",void 0),Ee(this,"eTag",void 0),this.partNumber=t,this.eTag=r})),Ke=function(e){Se(r,e);var t=Pe(r);function r(e,n,o){var i;return ge(this,r),Ee(ke(i=t.call(this,e,n)),"operation",void 0),i.name="S3ServiceError",i.operation=o,i}return Oe(r)}(Q),qe=exports;for(var Me in t)qe[Me]=t[Me];t.__esModule&&Object.defineProperty(qe,"__esModule",{value:!0})})();
//# sourceMappingURL=s3.js.map