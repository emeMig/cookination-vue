(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2574f2fa"],{"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Kr})),n.d(e,"b",(function(){return Lo})),n.d(e,"c",(function(){return Gr})),n.d(e,"d",(function(){return ko})),n.d(e,"e",(function(){return Do})),n.d(e,"f",(function(){return $r})),n.d(e,"g",(function(){return Ro}));var s=n("589b"),i=n("22e5"),r=n("e691"),o=n("1fd5"),a=n("8f6b");const u="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.6.11";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new r["b"]("@firebase/firestore");function f(){return l.logLevel}function d(t,...e){if(l.logLevel<=r["a"].DEBUG){const n=e.map(m);l.debug(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(l.logLevel<=r["a"].ERROR){const n=e.map(m);l.error(`Firestore (${h}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=r["a"].WARN){const n=e.map(m);l.warn(`Firestore (${h}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function v(t,e){t||y()}function w(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends o["c"]{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(c.UNAUTHENTICATED))}shutdown(){}}class A{constructor(t){this.t=t,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new b;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new b,t.enqueueRetryable(()=>s(this.currentUser))};const r=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await s(this.currentUser)})},o=t=>{d("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(d("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new b)}},0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(d("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new I(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new c(t)}}class C{constructor(t,e,n){this.type="FirstParty",this.user=c.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class N{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&d("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message);const n=t.token!==this.p;return this.p=t.token,d("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const s=t=>{d("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>s(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?s(t):d("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),this.p=t.token,new k(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */D.A=-1;class L{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=R(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function x(t,e){return t<e?-1:t>e?1:0}function O(t,e,n){return t.length===e.length&&t.every((t,s)=>n(t,e[s]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return M.fromMillis(Date.now())}static fromDate(t){return M.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new M(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?x(this.nanoseconds,t.nanoseconds):x(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.timestamp=t}static fromTimestamp(t){return new V(t)}static min(){return new V(new M(0,0))}static max(){return new V(new M(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function F(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function U(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===j.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof j?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class B extends j{construct(t,e,n){return new B(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new B(e)}static emptyPath(){return new B([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends j{construct(t,e,n){return new K(t,e,n)}static isValidIdentifier(t){return q.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new K(e)}static emptyPath(){return new K([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.fields=t,t.sort(K.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return O(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new H(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new H(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return x(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}H.EMPTY_BYTE_STRING=new H("");const z=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $(t){if(v(!!t),"string"==typeof t){let e=0;const n=z.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:W(t.seconds),nanos:W(t.nanos)}}function W(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Q(t){return"string"==typeof t?H.fromBase64String(t):H.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Y(t){const e=t.mapValue.fields.__previous_value__;return X(e)?Y(e):e}function J(t){const e=$(t.mapValue.fields.__local_write_time__.timestampValue);return new M(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class tt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new tt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof tt&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return null==t}function nt(t){return 0===t&&1/t==-1/0}function st(t){return"number"==typeof t&&Number.isInteger(t)&&!nt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.path=t}static fromPath(t){return new it(B.fromString(t))}static fromName(t){return new it(B.fromString(t).popFirst(5))}static empty(){return new it(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===B.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return B.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new it(new B(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?X(t)?4:vt(t)?9:10:y()}function ot(t,e){if(t===e)return!0;const n=rt(t);if(n!==rt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return J(t).isEqual(J(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=$(t.timestampValue),s=$(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Q(t.bytesValue).isEqual(Q(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return W(t.geoPointValue.latitude)===W(e.geoPointValue.latitude)&&W(t.geoPointValue.longitude)===W(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return W(t.integerValue)===W(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=W(t.doubleValue),s=W(e.doubleValue);return n===s?nt(n)===nt(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return O(t.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(P(n)!==P(s))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===s[i]||!ot(n[i],s[i])))return!1;return!0}(t,e);default:return y()}}function at(t,e){return void 0!==(t.values||[]).find(t=>ot(t,e))}function ut(t,e){if(t===e)return 0;const n=rt(t),s=rt(e);if(n!==s)return x(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=W(t.integerValue||t.doubleValue),s=W(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return ct(t.timestampValue,e.timestampValue);case 4:return ct(J(t),J(e));case 5:return x(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Q(t),s=Q(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let i=0;i<n.length&&i<s.length;i++){const t=x(n[i],s[i]);if(0!==t)return t}return x(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=x(W(t.latitude),W(e.latitude));return 0!==n?n:x(W(t.longitude),W(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const t=ut(n[i],s[i]);if(t)return t}return x(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let o=0;o<s.length&&o<r.length;++o){const t=x(s[o],r[o]);if(0!==t)return t;const e=ut(n[s[o]],i[r[o]]);if(0!==e)return e}return x(s.length,r.length)}(t.mapValue,e.mapValue);default:throw y()}}function ct(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return x(t,e);const n=$(t),s=$(e),i=x(n.seconds,s.seconds);return 0!==i?i:x(n.nanos,s.nanos)}function ht(t){return lt(t)}function lt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=$(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Q(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,it.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=lt(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${lt(t.fields[i])}`;return n+"}"}(t.mapValue):y();var e,n}function ft(t){return!!t&&"integerValue"in t}function dt(t){return!!t&&"arrayValue"in t}function gt(t){return!!t&&"nullValue"in t}function pt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mt(t){return!!t&&"mapValue"in t}function yt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return F(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=yt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!mt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=yt(e)}setAll(t){let e=K.emptyPath(),n={},s=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=yt(t):s.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());mt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];mt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){F(e,(e,n)=>t[e]=n);for(const s of n)delete t[s]}clone(){return new wt(yt(this.value))}}function Et(t){const e=[];return F(t.fields,(t,n)=>{const s=new K([t]);if(mt(n)){const t=Et(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)}),new G(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Tt{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new Tt(t,0,V.min(),V.min(),wt.empty(),0)}static newFoundDocument(t,e,n){return new Tt(t,1,e,V.min(),n,0)}static newNoDocument(t,e){return new Tt(t,2,e,V.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,V.min(),wt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class bt{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}bt.UNKNOWN_ID=-1;function It(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=V.fromTimestamp(1e9===s?new M(n+1,0):new M(n,s));return new At(i,it.empty(),e)}function St(t){return new At(t.readTime,t.key,-1)}class At{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new At(V.min(),it.empty(),-1)}static max(){return new At(V.max(),it.empty(),-1)}}function Ct(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=it.comparator(t.documentKey,e.documentKey),0!==n?n:x(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.P=null}}function kt(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Nt(t,e,n,s,i,r,o)}function _t(t){const e=w(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>{return(e=t).field.canonicalString()+e.op.toString()+ht(e.value);var e}).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),et(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>ht(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>ht(t)).join(",")),e.P=t}return e.P}function Dt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ht(e.value)}`;var e}).join(", ")}]`),et(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>ht(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>ht(t)).join(",")),`Target(${e})`}function Rt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Gt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ot(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zt(t.startAt,e.startAt)&&zt(t.endAt,e.endAt)}function Lt(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class xt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new Ot(t,e,n):"array-contains"===e?new Ft(t,n):"in"===e?new Ut(t,n):"not-in"===e?new jt(t,n):"array-contains-any"===e?new Bt(t,n):new xt(t,e,n)}static V(t,e,n){return"in"===e?new Mt(t,n):new Vt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(ut(e,this.value)):null!==e&&rt(this.value)===rt(e)&&this.v(ut(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ot extends xt{constructor(t,e,n){super(t,e,n),this.key=it.fromName(n.referenceValue)}matches(t){const e=it.comparator(t.key,this.key);return this.v(e)}}class Mt extends xt{constructor(t,e){super(t,"in",e),this.keys=Pt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Vt extends xt{constructor(t,e){super(t,"not-in",e),this.keys=Pt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Pt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>it.fromName(t.referenceValue))}class Ft extends xt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return dt(e)&&at(e.arrayValue,this.value)}}class Ut extends xt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&at(this.value.arrayValue,e)}}class jt extends xt{constructor(t,e){super(t,"not-in",e)}matches(t){if(at(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!at(this.value.arrayValue,e)}}class Bt extends xt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!dt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>at(this.value.arrayValue,t))}}class qt{constructor(t,e){this.position=t,this.inclusive=e}}class Kt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Gt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ht(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?it.comparator(it.fromName(o.referenceValue),n.key):ut(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function zt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ot(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Wt(t,e,n,s,i,r,o,a){return new $t(t,e,n,s,i,r,o,a)}function Qt(t){return new $t(t)}function Xt(t){return!et(t.limit)&&"F"===t.limitType}function Yt(t){return!et(t.limit)&&"L"===t.limitType}function Jt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zt(t){for(const e of t.filters)if(e.S())return e.field;return null}function te(t){return null!==t.collectionGroup}function ee(t){const e=w(t);if(null===e.D){e.D=[];const t=Zt(e),n=Jt(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new Kt(t)),e.D.push(new Kt(K.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Kt(K.keyField(),t))}}}return e.D}function ne(t){const e=w(t);if(!e.C)if("F"===e.limitType)e.C=kt(e.path,e.collectionGroup,ee(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of ee(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Kt(i.field,e))}const n=e.endAt?new qt(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new qt(e.startAt.position,!e.startAt.inclusive):null;e.C=kt(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.C}function se(t,e,n){return new $t(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ie(t,e){return Rt(ne(t),ne(e))&&t.limitType===e.limitType}function re(t){return`${_t(ne(t))}|lt:${t.limitType}`}function oe(t){return`Query(target=${Dt(ne(t))}; limitType=${t.limitType})`}function ae(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):it.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Ht(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,ee(t),e))&&!(t.endAt&&!function(t,e,n){const s=Ht(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,ee(t),e))}(t,e)}function ue(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ce(t){return(e,n)=>{let s=!1;for(const i of ee(t)){const t=he(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function he(t,e,n){const s=t.field.isKeyField()?it.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?ut(s,i):y()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nt(e)?"-0":e}}function fe(t){return{integerValue:""+t}}function de(t,e){return st(e)?fe(e):le(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(){this._=void 0}}function pe(t,e,n){return t instanceof ve?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof we?Ee(t,e):t instanceof Te?be(t,e):function(t,e){const n=ye(t,e),s=Se(n)+Se(t.k);return ft(n)&&ft(t.k)?fe(s):le(t.M,s)}(t,e)}function me(t,e,n){return t instanceof we?Ee(t,e):t instanceof Te?be(t,e):n}function ye(t,e){return t instanceof Ie?ft(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ve extends ge{}class we extends ge{constructor(t){super(),this.elements=t}}function Ee(t,e){const n=Ae(e);for(const s of t.elements)n.some(t=>ot(t,s))||n.push(s);return{arrayValue:{values:n}}}class Te extends ge{constructor(t){super(),this.elements=t}}function be(t,e){let n=Ae(e);for(const s of t.elements)n=n.filter(t=>!ot(t,s));return{arrayValue:{values:n}}}class Ie extends ge{constructor(t,e){super(),this.M=t,this.k=e}}function Se(t){return W(t.integerValue||t.doubleValue)}function Ae(t){return dt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof we&&e instanceof we||t instanceof Te&&e instanceof Te?O(t.elements,e.elements,ot):t instanceof Ie&&e instanceof Ie?ot(t.k,e.k):t instanceof ve&&e instanceof ve}(t.transform,e.transform)}class Ne{constructor(t,e){this.version=t,this.transformResults=e}}class ke{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ke}static exists(t){return new ke(void 0,t)}static updateTime(t){return new ke(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _e(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class De{}function Re(t,e,n){t instanceof Ve?function(t,e,n){const s=t.value.clone(),i=Ue(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Pe?function(t,e,n){if(!_e(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Ue(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Fe(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Le(t,e,n){t instanceof Ve?function(t,e,n){if(!_e(t.precondition,e))return;const s=t.value.clone(),i=je(t.fieldTransforms,n,e);s.setAll(i),e.convertToFoundDocument(Me(e),s).setHasLocalMutations()}(t,e,n):t instanceof Pe?function(t,e,n){if(!_e(t.precondition,e))return;const s=je(t.fieldTransforms,n,e),i=e.data;i.setAll(Fe(t)),i.setAll(s),e.convertToFoundDocument(Me(e),i).setHasLocalMutations()}(t,e,n):function(t,e){_e(t.precondition,e)&&e.convertToNoDocument(V.min())}(t,e)}function xe(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=ye(s.transform,t||null);null!=i&&(null==n&&(n=wt.empty()),n.set(s.field,i))}return n||null}function Oe(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&O(t,e,(t,e)=>Ce(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Me(t){return t.isFoundDocument()?t.version:V.min()}class Ve extends De{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class Pe extends De{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Fe(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ue(t,e,n){const s=new Map;v(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,me(o,a,n[i]))}return s}function je(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,pe(t,r,e))}return s}class Be extends De{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class qe extends De{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,He;function ze(t){switch(t){default:return y();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function $e(t){if(void 0===t)return g("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ge.OK:return E.OK;case Ge.CANCELLED:return E.CANCELLED;case Ge.UNKNOWN:return E.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return E.INTERNAL;case Ge.UNAVAILABLE:return E.UNAVAILABLE;case Ge.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ge.NOT_FOUND:return E.NOT_FOUND;case Ge.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ge.ABORTED:return E.ABORTED;case Ge.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ge.DATA_LOSS:return E.DATA_LOSS;default:return y()}}(He=Ge||(Ge={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,i]of n)if(this.equalsFn(s,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){F(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return U(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,e){this.comparator=t,this.root=e||Ye.EMPTY}insert(t,e){return new Qe(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(t){return new Qe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xe(this.root,t,this.comparator,!0)}}class Xe{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ye{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Ye.RED,this.left=null!=s?s:Ye.EMPTY,this.right=null!=i?i:Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Ye(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Ye.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1,Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ye(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{constructor(t){this.comparator=t,this.data=new Qe(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ze(this.data.getIterator())}getIteratorFrom(t){return new Ze(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Je))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Je(this.comparator);return e.data=t,e}}class Ze{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tn=new Qe(it.comparator);function en(){return tn}const nn=new Qe(it.comparator);function sn(){return nn}function rn(){return new We(t=>t.toString(),(t,e)=>t.isEqual(e))}const on=new Qe(it.comparator),an=new Je(it.comparator);function un(...t){let e=an;for(const n of t)e=e.add(n);return e}const cn=new Je(x);function hn(){return cn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,fn.createSynthesizedTargetChangeForCurrentChange(t,e)),new ln(V.min(),n,hn(),en(),un())}}class fn{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new fn(H.EMPTY_BYTE_STRING,e,un(),un(),un())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e,n,s){this.O=t,this.removedTargetIds=e,this.key=n,this.F=s}}class gn{constructor(t,e){this.targetId=t,this.$=e}}class pn{constructor(t,e,n=H.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class mn{constructor(){this.B=0,this.L=wn(),this.U=H.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=un(),e=un(),n=un();return this.L.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:y()}}),new fn(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=wn()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class yn{constructor(t){this.nt=t,this.st=new Map,this.it=en(),this.rt=vn(),this.ot=new Je(x)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach((t,n)=>{this.ft(n)&&e(n)})}_t(t){const e=t.targetId,n=t.$.count,s=this.wt(e);if(s){const t=s.target;if(Lt(t))if(0===n){const n=new it(t.path);this.ct(e,n,Tt.newNoDocument(n,V.min()))}else v(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach((n,s)=>{const i=this.wt(s);if(i){if(n.current&&Lt(i.target)){const e=new it(i.target.path);null!==this.it.get(e)||this.It(s,e)||this.ct(s,e,Tt.newNoDocument(e,t))}n.j&&(e.set(s,n.H()),n.J())}});let n=un();this.rt.forEach((t,e)=>{let s=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)}),s&&(n=n.add(t))}),this.it.forEach((e,n)=>n.setReadTime(t));const s=new ln(t,e,this.ot,this.it,n);return this.it=en(),this.rt=vn(),this.ot=new Je(x),s}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const s=this.lt(t);this.It(t,e)?s.Y(e,1):s.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new mn,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new Je(x),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||d("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new mn),this.nt.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function vn(){return new Qe(it.comparator)}function wn(){return new Qe(it.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Tn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class bn{constructor(t,e){this.databaseId=t,this.N=e}}function In(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sn(t,e){return t.N?e.toBase64():e.toUint8Array()}function An(t,e){return In(t,e.toTimestamp())}function Cn(t){return v(!!t),V.fromTimestamp(function(t){const e=$(t);return new M(e.seconds,e.nanos)}(t))}function Nn(t,e){return function(t){return new B(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function kn(t){const e=B.fromString(t);return v(Yn(e)),e}function _n(t,e){return Nn(t.databaseId,e.path)}function Dn(t,e){const n=kn(e);if(n.get(1)!==t.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new it(On(n))}function Rn(t,e){return Nn(t.databaseId,e)}function Ln(t){const e=kn(t);return 4===e.length?B.emptyPath():On(e)}function xn(t){return new B(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function On(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Mn(t,e,n){return{name:_n(t,e),fields:n.value.mapValue.fields}}function Vn(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.N?(v(void 0===e||"string"==typeof e),H.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),H.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?E.UNKNOWN:$e(t.code);return new T(e,t.message||"")}(o);n=new pn(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Dn(t,s.document.name),r=Cn(s.document.updateTime),o=new wt({mapValue:{fields:s.document.fields}}),a=Tt.newFoundDocument(i,r,o),u=s.targetIds||[],c=s.removedTargetIds||[];n=new dn(u,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Dn(t,s.document),r=s.readTime?Cn(s.readTime):V.min(),o=Tt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new dn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Dn(t,s.document),r=s.removedTargetIds||[];n=new dn([],r,i,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new Ke(s),r=t.targetId;n=new gn(r,i)}}return n}function Pn(t,e){let n;if(e instanceof Ve)n={update:Mn(t,e.key,e.value)};else if(e instanceof Be)n={delete:_n(t,e.key)};else if(e instanceof Pe)n={update:Mn(t,e.key,e.data),updateMask:Xn(e.fieldMask)};else{if(!(e instanceof qe))return y();n={verify:_n(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ve)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof we)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Te)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ie)return{fieldPath:e.field.canonicalString(),increment:n.k};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:An(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function Fn(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Cn(t.updateTime):Cn(e);return n.isEqual(V.min())&&(n=Cn(e)),new Ne(n,t.transformResults||[])}(t,e))):[]}function Un(t,e){return{documents:[Rn(t,e.path)]}}function jn(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Rn(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rn(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(pt(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NAN"}};if(gt(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(pt(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NOT_NAN"}};if(gt(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zn(t.field),op:Hn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:zn(t.field),direction:Gn(t.dir)}}(t))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.N||et(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Bn(t){let e=Ln(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){v(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Kn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Kt($n(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,et(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new qt(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new qt(n,e)}(n.endAt)),Wt(e,i,o,r,a,"F",u,c)}function qn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Kn(t){return t?void 0!==t.unaryFilter?[Qn(t)]:void 0!==t.fieldFilter?[Wn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Kn(t)).reduce((t,e)=>t.concat(e)):y():[]}function Gn(t){return En[t]}function Hn(t){return Tn[t]}function zn(t){return{fieldPath:t.canonicalString()}}function $n(t){return K.fromServerFormat(t.fieldPath)}function Wn(t){return xt.create($n(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function Qn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=$n(t.unaryFilter.field);return xt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=$n(t.unaryFilter.field);return xt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$n(t.unaryFilter.field);return xt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=$n(t.unaryFilter.field);return xt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Xn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Yn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Zn=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ts="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ns((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof ns?e:ns.resolve(e)}catch(t){return ns.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):ns.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):ns.reject(e)}static resolve(t){return new ns((e,n)=>{e(t)})}static reject(t){return new ns((e,n)=>{n(t)})}static waitFor(t){return new ns((e,n)=>{let s=0,i=0,r=!1;t.forEach(t=>{++s,t.next(()=>{++i,r&&i===s&&e()},t=>n(t))}),r=!0,i===s&&e()})}static or(t){let e=ns.resolve(!1);for(const n of t)e=e.next(t=>t?ns.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,s)=>{n.push(e.call(this,t,s))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class is{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Re(e,t,n[s])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Le(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Le(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(V.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),un())}isEqual(t){return this.batchId===t.batchId&&O(this.mutations,t.mutations,(t,e)=>Oe(t,e))&&O(this.baseMutations,t.baseMutations,(t,e)=>Oe(t,e))}}class rs{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){v(t.mutations.length===n.length);let s=on;const i=t.mutations;for(let r=0;r<i.length;r++)s=s.insert(i[r].key,n[r].version);return new rs(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,e,n,s,i=V.min(),r=V.min(),o=H.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new as(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t){this.Jt=t}}function cs(t){const e=Bn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?se(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hs{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(W(t.integerValue));else if("doubleValue"in t){const n=W(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),nt(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(""+(n.seconds||"")),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(Q(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?vt(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):y()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const s of Object.keys(n))this.re(s,e),this.te(n[s],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const s of n)this.te(s,e)}ae(t,e){this.ne(e,37),it.fromName(t).path.forEach(t=>{this.ne(e,60),this.le(t,e)})}ne(t,e){t.se(e)}oe(t){t.se(2)}}hs.fe=new hs;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ls{constructor(){this.qe=new fs}addToCollectionParentIndex(t,e){return this.qe.add(e),ns.resolve()}getCollectionParents(t,e){return ns.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return ns.resolve()}deleteFieldIndex(t,e){return ns.resolve()}getDocumentsMatchingTarget(t,e){return ns.resolve(null)}getFieldIndex(t,e){return ns.resolve(null)}getFieldIndexes(t,e){return ns.resolve([])}getNextCollectionGroupToUpdate(t){return ns.resolve(null)}updateCollectionGroup(t,e,n){return ns.resolve()}updateIndexEntries(t,e){return ns.resolve()}}class fs{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Je(B.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Je(B.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class ds{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ds(t,ds.DEFAULT_COLLECTION_PERCENTILE,ds.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ds.DEFAULT_COLLECTION_PERCENTILE=10,ds.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ds.DEFAULT=new ds(41943040,ds.DEFAULT_COLLECTION_PERCENTILE,ds.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ds.DISABLED=new ds(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gs{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new gs(0)}static yn(){return new gs(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ps(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==ts)throw t;d("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ms{constructor(){this.changes=new We(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ns.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{constructor(t,e,n){this.ds=t,this.Bs=e,this.indexManager=n}Ls(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Us(t,e,n))}Us(t,e,n){return this.ds.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}qs(t,e){t.forEach((t,n)=>{for(const s of e)s.applyToLocalView(n)})}Ks(t,e){return this.ds.getEntries(t,e).next(e=>this.Gs(t,e).next(()=>e))}Gs(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.qs(e,t))}Qs(t,e,n){return function(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.js(t,e.path):te(e)?this.Ws(t,e,n):this.zs(t,e,n)}js(t,e){return this.Ls(t,new it(e)).next(t=>{let e=sn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Ws(t,e,n){const s=e.collectionGroup;let i=sn();return this.indexManager.getCollectionParents(t,s).next(r=>ns.forEach(r,r=>{const o=function(t,e){return new $t(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.zs(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}zs(t,e,n){let s;return this.ds.getAllFromCollection(t,e.path,n).next(n=>(s=n,this.Bs.getAllMutationBatchesAffectingQuery(t,e))).next(t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let i=s.get(n);null==i&&(i=Tt.newInvalidDocument(n),s=s.insert(n,i)),Le(t,i,e.localWriteTime),i.isFoundDocument()||(s=s.remove(n))}}).next(()=>(s.forEach((t,n)=>{ae(e,n)||(s=s.remove(t))}),s))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Hs=n,this.Js=s}static Ys(t,e){let n=un(),s=un();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vs(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{Xs(t){this.Zs=t}Qs(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(V.min())?this.ti(t,e):this.Zs.Ks(t,s).next(i=>{const o=this.ei(e,i);return(Xt(e)||Yt(e))&&this.ni(e.limitType,o,s,n)?this.ti(t,e):(f()<=r["a"].DEBUG&&d("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),oe(e)),this.Zs.Qs(t,e,It(n,-1)).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}ei(t,e){let n=new Je(ce(t));return e.forEach((e,s)=>{ae(t,s)&&(n=n.add(s))}),n}ni(t,e,n,s){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ti(t,e){return f()<=r["a"].DEBUG&&d("QueryEngine","Using full collection scan to execute query:",oe(e)),this.Zs.Qs(t,e,At.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e,n,s){this.persistence=t,this.si=e,this.M=s,this.ii=new Qe(x),this.ri=new We(t=>_t(t),Rt),this.oi=new Map,this.ui=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.ai(n)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.ci=new ys(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ii))}}function Ts(t,e,n,s){return new Es(t,e,n,s)}async function bs(t,e){const n=w(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.Bs.getAllMutationBatches(t).next(i=>(s=i,n.ai(e),n.Bs.getAllMutationBatches(t))).next(e=>{const i=[],r=[];let o=un();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.ci.Ks(t,o).next(t=>({hi:t,removedBatchIds:i,addedBatchIds:r}))})})}function Is(t,e){const n=w(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const s=e.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=ns.resolve();return r.forEach(t=>{o=o.next(()=>s.getEntry(e,t)).next(e=>{const r=n.docVersions.get(t);v(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))})}),o.next(()=>t.Bs.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.Bs.performConsistencyCheck(t)).next(()=>n.ci.Ks(t,s))})}function Ss(t){const e=w(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.fs.getLastRemoteSnapshotVersion(t))}function As(t,e){const n=w(t),s=e.snapshotVersion;let i=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const r=n.ui.newChangeBuffer({trackRemovals:!0});i=n.ii;const o=[];e.targetChanges.forEach((r,a)=>{const u=i.get(a);if(!u)return;o.push(n.fs.removeMatchingKeys(t,r.removedDocuments,a).next(()=>n.fs.addMatchingKeys(t,r.addedDocuments,a)));let c=u.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?c=c.withResumeToken(H.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,s)),i=i.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,r)&&o.push(n.fs.updateTargetData(t,c))});let a=en();if(e.documentUpdates.forEach(s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))}),o.push(Cs(t,r,e.documentUpdates).next(t=>{a=t})),!s.isEqual(V.min())){const e=n.fs.getLastRemoteSnapshotVersion(t).next(e=>n.fs.setTargetsMetadata(t,t.currentSequenceNumber,s));o.push(e)}return ns.waitFor(o).next(()=>r.apply(t)).next(()=>n.ci.Gs(t,a)).next(()=>a)}).then(t=>(n.ii=i,t))}function Cs(t,e,n){let s=un();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=en();return n.forEach((n,i)=>{const r=t.get(n);i.isNoDocument()&&i.version.isEqual(V.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!r.isValidDocument()||i.version.compareTo(r.version)>0||0===i.version.compareTo(r.version)&&r.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):d("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",i.version)}),s})}function Ns(t,e){const n=w(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(t,e)))}function ks(t,e){const n=w(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let s;return n.fs.getTargetData(t,e).next(i=>i?(s=i,ns.resolve(s)):n.fs.allocateTargetId(t).next(i=>(s=new as(e,i,0,t.currentSequenceNumber),n.fs.addTargetData(t,s).next(()=>s))))}).then(t=>{const s=n.ii.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ii=n.ii.insert(t.targetId,t),n.ri.set(e,t.targetId)),t})}async function _s(t,e,n){const s=w(t),i=s.ii.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,t=>s.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!ss(t))throw t;d("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.ii=s.ii.remove(e),s.ri.delete(i.target)}function Ds(t,e,n){const s=w(t);let i=V.min(),r=un();return s.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const s=w(t),i=s.ri.get(n);return void 0!==i?ns.resolve(s.ii.get(i)):s.fs.getTargetData(e,n)}(s,t,ne(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(t,e.targetId).next(t=>{r=t})}).next(()=>s.si.Qs(t,e,n?i:V.min(),n?r:un())).next(t=>(Rs(s,ue(e),t),{documents:t,li:r})))}function Rs(t,e,n){let s=V.min();n.forEach((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)}),t.oi.set(e,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls{constructor(t){this.M=t,this.wi=new Map,this.mi=new Map}getBundleMetadata(t,e){return ns.resolve(this.wi.get(e))}saveBundleMetadata(t,e){var n;return this.wi.set(e.id,{id:(n=e).id,version:n.version,createTime:Cn(n.createTime)}),ns.resolve()}getNamedQuery(t,e){return ns.resolve(this.mi.get(e))}saveNamedQuery(t,e){return this.mi.set(e.name,function(t){return{name:t.name,query:cs(t.bundledQuery),readTime:Cn(t.readTime)}}(e)),ns.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.overlays=new Qe(it.comparator),this.gi=new Map}getOverlay(t,e){return ns.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach((n,s)=>{this.Xt(t,e,s)}),ns.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.gi.get(n);return void 0!==s&&(s.forEach(t=>this.overlays=this.overlays.remove(t)),this.gi.delete(n)),ns.resolve()}getOverlaysForCollection(t,e,n){const s=rn(),i=e.length+1,r=new it(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return ns.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Qe((t,e)=>t-e);const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=rn(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=rn(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>o.set(t,e)),o.size()>=s)break;return ns.resolve(o)}Xt(t,e,n){if(null===n)return;const s=this.overlays.get(n.key);if(null!==s){const t=this.gi.get(s.largestBatchId).delete(n.key);this.gi.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new os(e,n));let i=this.gi.get(e);void 0===i&&(i=un(),this.gi.set(e,i)),this.gi.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.yi=new Je(Ms.pi),this.Ii=new Je(Ms.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(t,e){const n=new Ms(t,e);this.yi=this.yi.add(n),this.Ii=this.Ii.add(n)}Ei(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Ai(new Ms(t,e))}Ri(t,e){t.forEach(t=>this.removeReference(t,e))}Pi(t){const e=new it(new B([])),n=new Ms(e,t),s=new Ms(e,t+1),i=[];return this.Ii.forEachInRange([n,s],t=>{this.Ai(t),i.push(t.key)}),i}bi(){this.yi.forEach(t=>this.Ai(t))}Ai(t){this.yi=this.yi.delete(t),this.Ii=this.Ii.delete(t)}Vi(t){const e=new it(new B([])),n=new Ms(e,t),s=new Ms(e,t+1);let i=un();return this.Ii.forEachInRange([n,s],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Ms(t,0),n=this.yi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ms{constructor(t,e){this.key=t,this.vi=e}static pi(t,e){return it.comparator(t.key,e.key)||x(t.vi,e.vi)}static Ti(t,e){return x(t.vi,e.vi)||it.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Bs=[],this.Si=1,this.Di=new Je(Ms.pi)}checkEmpty(t){return ns.resolve(0===this.Bs.length)}addMutationBatch(t,e,n,s){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const r=new is(i,e,n,s);this.Bs.push(r);for(const o of s)this.Di=this.Di.add(new Ms(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return ns.resolve(r)}lookupMutationBatch(t,e){return ns.resolve(this.Ci(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.xi(n),i=s<0?0:s;return ns.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return ns.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(t){return ns.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ms(e,0),s=new Ms(e,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([n,s],t=>{const e=this.Ci(t.vi);i.push(e)}),ns.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Je(x);return e.forEach(t=>{const e=new Ms(t,0),s=new Ms(t,Number.POSITIVE_INFINITY);this.Di.forEachInRange([e,s],t=>{n=n.add(t.vi)})}),ns.resolve(this.Ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;it.isDocumentKey(i)||(i=i.child(""));const r=new Ms(new it(i),0);let o=new Je(x);return this.Di.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.vi)),!0)},r),ns.resolve(this.Ni(o))}Ni(t){const e=[];return t.forEach(t=>{const n=this.Ci(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ki(e.batchId,"removed")),this.Bs.shift();let n=this.Di;return ns.forEach(e.mutations,s=>{const i=new Ms(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Di=n})}_n(t){}containsKey(t,e){const n=new Ms(e,0),s=this.Di.firstAfterOrEqual(n);return ns.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.Bs.length,ns.resolve()}ki(t,e){return this.xi(t)}xi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}Ci(t){const e=this.xi(t);return e<0||e>=this.Bs.length?null:this.Bs[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t){this.Mi=t,this.docs=new Qe(it.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Mi(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ns.resolve(n?n.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let n=en();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Tt.newInvalidDocument(t))}),ns.resolve(n)}getAllFromCollection(t,e,n){let s=en();const i=new it(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Ct(St(i),n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return ns.resolve(s)}getAllFromCollectionGroup(t,e,n,s){y()}Oi(t,e){return ns.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Fs(this)}getSize(t){return ns.resolve(this.size)}}class Fs extends ms{constructor(t){super(),this.Kn=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Kn.addEntry(t,s)):this.Kn.removeEntry(n)}),ns.waitFor(e)}getFromCache(t,e){return this.Kn.getEntry(t,e)}getAllFromCache(t,e){return this.Kn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t){this.persistence=t,this.Fi=new We(t=>_t(t),Rt),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Os,this.targetCount=0,this.Li=gs.gn()}forEachTarget(t,e){return this.Fi.forEach((t,n)=>e(n)),ns.resolve()}getLastRemoteSnapshotVersion(t){return ns.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ns.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Li.next(),ns.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$i&&(this.$i=e),ns.resolve()}Tn(t){this.Fi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Li=new gs(e),this.highestTargetId=e),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,e){return this.Tn(e),this.targetCount+=1,ns.resolve()}updateTargetData(t,e){return this.Tn(e),ns.resolve()}removeTargetData(t,e){return this.Fi.delete(e.target),this.Bi.Pi(e.targetId),this.targetCount-=1,ns.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Fi.forEach((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fi.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)}),ns.waitFor(i).next(()=>s)}getTargetCount(t){return ns.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fi.get(e)||null;return ns.resolve(n)}addMatchingKeys(t,e,n){return this.Bi.Ei(e,n),ns.resolve()}removeMatchingKeys(t,e,n){this.Bi.Ri(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(e=>{i.push(s.markPotentiallyOrphaned(t,e))}),ns.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Bi.Pi(e),ns.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Bi.Vi(e);return ns.resolve(n)}containsKey(t,e){return ns.resolve(this.Bi.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,e){this.Ui={},this.overlays={},this.es=new D(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new Us(this),this.indexManager=new ls,this.ds=function(t){return new Ps(t)}(t=>this.referenceDelegate.qi(t)),this.M=new us(e),this._s=new Ls(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new xs,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ui[t.toKey()];return n||(n=new Vs(e,this.referenceDelegate),this.Ui[t.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,e,n){d("MemoryPersistence","Starting transaction:",t);const s=new Bs(this.es.next());return this.referenceDelegate.Ki(),n(s).next(t=>this.referenceDelegate.Gi(s).next(()=>t)).toPromise().then(t=>(s.raiseOnCommittedEvent(),t))}Qi(t,e){return ns.or(Object.values(this.Ui).map(n=>()=>n.containsKey(t,e)))}}class Bs extends es{constructor(t){super(),this.currentSequenceNumber=t}}class qs{constructor(t){this.persistence=t,this.ji=new Os,this.Wi=null}static zi(t){return new qs(t)}get Hi(){if(this.Wi)return this.Wi;throw y()}addReference(t,e,n){return this.ji.addReference(n,e),this.Hi.delete(n.toString()),ns.resolve()}removeReference(t,e,n){return this.ji.removeReference(n,e),this.Hi.add(n.toString()),ns.resolve()}markPotentiallyOrphaned(t,e){return this.Hi.add(e.toString()),ns.resolve()}removeTarget(t,e){this.ji.Pi(e.targetId).forEach(t=>this.Hi.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Hi.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ki(){this.Wi=new Set}Gi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ns.forEach(this.Hi,n=>{const s=it.fromPath(n);return this.Ji(t,s).next(t=>{t||e.removeEntry(s,V.min())})}).next(()=>(this.Wi=null,e.apply(t)))}updateLimboDocument(t,e){return this.Ji(t,e).next(t=>{t?this.Hi.delete(e.toString()):this.Hi.add(e.toString())})}qi(t){return 0}Ji(t,e){return ns.or([()=>ns.resolve(this.ji.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Qi(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.activeTargetIds=hn()}Zi(t){this.activeTargetIds=this.activeTargetIds.add(t)}tr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Gs{constructor(){this.$r=new Ks,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.$r.Zi(t),this.Br[t]||"not-current"}updateQueryState(t,e,n){this.Br[t]=e}removeLocalQueryTarget(t){this.$r.tr(t)}isLocalQueryTarget(t){return this.$r.activeTargetIds.has(t)}clearQueryState(t){delete this.Br[t]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(t){return this.$r.activeTargetIds.has(t)}start(){return this.$r=new Ks,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{Lr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(t){this.Qr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){d("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Qr)t(0)}Gr(){d("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Qr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t){this.Wr=t.Wr,this.zr=t.zr}Hr(t){this.Jr=t}Yr(t){this.Xr=t}onMessage(t){this.Zr=t}close(){this.zr()}send(t){this.Wr(t)}eo(){this.Jr()}no(t){this.Xr(t)}so(t){this.Zr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.io=e+"://"+t.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(t,e,n,s,i){const r=this.uo(t,e);d("RestConnection","Sending: ",r,n);const o={};return this.ao(o,s,i),this.co(t,r,o,n).then(t=>(d("RestConnection","Received: ",t),t),e=>{throw p("RestConnection",t+" failed with error: ",e,"url: ",r,"request:",n),e})}ho(t,e,n,s,i){return this.oo(t,e,n,s,i)}ao(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}uo(t,e){const n=$s[t];return`${this.io}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,s){return new Promise((i,r)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();d("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:d("Connection",'RPC "'+t+'" timed out'),r(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(d("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(e)>=0?e:E.UNKNOWN}(t.status);r(new T(e,t.message))}else r(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new T(E.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{d("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(s);o.send(e,"POST",u,n,15)})}lo(t,e,n){const s=[this.io,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a["h"])(),r=Object(a["i"])(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(u.xmlHttpFactory=new a["d"]({})),this.ao(u.initMessageHeaders,e,n),Object(o["q"])()||Object(o["r"])()||Object(o["m"])()||Object(o["o"])()||Object(o["t"])()||Object(o["l"])()||(u.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");d("Connection","Creating WebChannel: "+c,u);const h=i.createWebChannel(c,u);let l=!1,f=!1;const g=new Ws({Wr:t=>{f?d("Connection","Not sending because WebChannel is closed:",t):(l||(d("Connection","Opening WebChannel transport."),h.open(),l=!0),d("Connection","WebChannel sending:",t),h.send(t))},zr:()=>h.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(h,a["f"].EventType.OPEN,()=>{f||d("Connection","WebChannel transport opened.")}),m(h,a["f"].EventType.CLOSE,()=>{f||(f=!0,d("Connection","WebChannel transport closed"),g.no())}),m(h,a["f"].EventType.ERROR,t=>{f||(f=!0,p("Connection","WebChannel transport errored:",t),g.no(new T(E.UNAVAILABLE,"The operation could not be completed")))}),m(h,a["f"].EventType.MESSAGE,t=>{var e;if(!f){const n=t.data[0];v(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){d("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ge[t];if(void 0!==e)return $e(e)}(t),n=i.message;void 0===e&&(e=E.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),f=!0,g.no(new T(e,n)),h.close()}else d("Connection","WebChannel received:",n),g.so(n)}}),m(r,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?d("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&d("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.eo()},0),g}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t){return new bn(t,!0)}class Js{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Yn=t,this.timerId=e,this.fo=n,this._o=s,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(t){this.cancel();const e=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),s=Math.max(0,e-n);s>0&&d("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.mo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,s,()=>(this.po=Date.now(),t())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,e,n,s,i,r,o,a){this.Yn=t,this.Ro=n,this.Po=s,this.bo=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Js(t,e)}Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(t){this.$o(),this.stream.send(t)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(t,e){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==t?this.Do.reset():e&&e.code===E.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):e&&e.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Yr(e)}Lo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Vo===e&&this.qo(t,n)},e=>{t(()=>{const t=new T(E.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ko(t)})})}qo(t,e){const n=this.Uo(this.Vo);this.stream=this.Go(t,e),this.stream.Hr(()=>{n(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(t=>{n(()=>this.Ko(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(t){return d("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Yn.enqueueAndForget(()=>this.Vo===t?e():(d("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ti extends Zs{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.M=i}Go(t,e){return this.bo.lo("Listen",t,e)}onMessage(t){this.Do.reset();const e=Vn(this.M,t),n=function(t){if(!("targetChange"in t))return V.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?V.min():e.readTime?Cn(e.readTime):V.min()}(t);return this.listener.Qo(e,n)}jo(t){const e={};e.database=xn(this.M),e.addTarget=function(t,e){let n;const s=e.target;return n=Lt(s)?{documents:Un(t,s)}:{query:jn(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Sn(t,e.resumeToken):e.snapshotVersion.compareTo(V.min())>0&&(n.readTime=In(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=qn(this.M,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=xn(this.M),e.removeTarget=t,this.Fo(e)}}class ei extends Zs{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(t,e){return this.bo.lo("Write",t,e)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.zo){this.Do.reset();const e=Fn(t.writeResults,t.commitTime),n=Cn(t.commitTime);return this.listener.Yo(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const t={};t.database=xn(this.M),this.Fo(t)}Jo(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Pn(this.M,t))};this.Fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.M=s,this.tu=!1}eu(){if(this.tu)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}oo(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.oo(t,e,n,s,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(E.UNKNOWN,t.toString())})}ho(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ho(t,e,n,s,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(E.UNKNOWN,t.toString())})}terminate(){this.tu=!0}}class si{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(t){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu("Connection failed 1 times. Most recent error: "+t.toString()),this.ou("Offline")))}set(t){this.cu(),this.nu=0,"Online"===t&&(this.iu=!1),this.ou(t)}ou(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}uu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(g(e),this.iu=!1):d("OnlineStateTracker",e)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr(t=>{n.enqueueAndForget(async()=>{di(this)&&(d("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=w(t);e.fu.add(4),await oi(e),e.wu.set("Unknown"),e.fu.delete(4),await ri(e)}(this))})}),this.wu=new si(n,s)}}async function ri(t){if(di(t))for(const e of t.du)await e(!0)}async function oi(t){for(const e of t.du)await e(!1)}function ai(t,e){const n=w(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),fi(n)?li(n):Ri(n).xo()&&ci(n,e))}function ui(t,e){const n=w(t),s=Ri(n);n.lu.delete(e),s.xo()&&hi(n,e),0===n.lu.size&&(s.xo()?s.Mo():di(n)&&n.wu.set("Unknown"))}function ci(t,e){t.mu.Z(e.targetId),Ri(t).jo(e)}function hi(t,e){t.mu.Z(e),Ri(t).Wo(e)}function li(t){t.mu=new yn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),Ri(t).start(),t.wu.ru()}function fi(t){return di(t)&&!Ri(t).Co()&&t.lu.size>0}function di(t){return 0===w(t).fu.size}function gi(t){t.mu=void 0}async function pi(t){t.lu.forEach((e,n)=>{ci(t,e)})}async function mi(t,e){gi(t),fi(t)?(t.wu.au(e),li(t)):t.wu.set("Unknown")}async function yi(t,e,n){if(t.wu.set("Online"),e instanceof pn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.lu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.lu.delete(s),t.mu.removeTarget(s))}(t,e)}catch(n){d("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await vi(t,n)}else if(e instanceof dn?t.mu.ut(e):e instanceof gn?t.mu._t(e):t.mu.ht(e),!n.isEqual(V.min()))try{const e=await Ss(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.mu.yt(e);return n.targetChanges.forEach((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.lu.get(s);i&&t.lu.set(s,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.lu.get(e);if(!n)return;t.lu.set(e,n.withResumeToken(H.EMPTY_BYTE_STRING,n.snapshotVersion)),hi(t,e);const s=new as(n.target,e,1,n.sequenceNumber);ci(t,s)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){d("RemoteStore","Failed to raise snapshot:",e),await vi(t,e)}}async function vi(t,e,n){if(!ss(e))throw e;t.fu.add(1),await oi(t),t.wu.set("Offline"),n||(n=()=>Ss(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{d("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await ri(t)})}function wi(t,e){return e().catch(n=>vi(t,n,e))}async function Ei(t){const e=w(t),n=Li(e);let s=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;Ti(e);)try{const t=await Ns(e.localStore,s);if(null===t){0===e.hu.length&&n.Mo();break}s=t.batchId,bi(e,t)}catch(t){await vi(e,t)}Ii(e)&&Si(e)}function Ti(t){return di(t)&&t.hu.length<10}function bi(t,e){t.hu.push(e);const n=Li(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function Ii(t){return di(t)&&!Li(t).Co()&&t.hu.length>0}function Si(t){Li(t).start()}async function Ai(t){Li(t).Zo()}async function Ci(t){const e=Li(t);for(const n of t.hu)e.Jo(n.mutations)}async function Ni(t,e,n){const s=t.hu.shift(),i=rs.from(s,e,n);await wi(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ei(t)}async function ki(t,e){e&&Li(t).Ho&&await async function(t,e){if(n=e.code,ze(n)&&n!==E.ABORTED){const n=t.hu.shift();Li(t).ko(),await wi(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Ei(t)}var n}(t,e),Ii(t)&&Si(t)}async function _i(t,e){const n=w(t);n.asyncQueue.verifyOperationInProgress(),d("RemoteStore","RemoteStore received new credentials");const s=di(n);n.fu.add(3),await oi(n),s&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await ri(n)}async function Di(t,e){const n=w(t);e?(n.fu.delete(2),await ri(n)):e||(n.fu.add(2),await oi(n),n.wu.set("Unknown"))}function Ri(t){return t.gu||(t.gu=function(t,e,n){const s=w(t);return s.eu(),new ti(e,s.bo,s.authCredentials,s.appCheckCredentials,s.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Hr:pi.bind(null,t),Yr:mi.bind(null,t),Qo:yi.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),fi(t)?li(t):t.wu.set("Unknown")):(await t.gu.stop(),gi(t))})),t.gu}function Li(t){return t.yu||(t.yu=function(t,e,n){const s=w(t);return s.eu(),new ei(e,s.bo,s.authCredentials,s.appCheckCredentials,s.M,n)}(t.datastore,t.asyncQueue,{Hr:Ai.bind(null,t),Yr:ki.bind(null,t),Xo:Ci.bind(null,t),Yo:Ni.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await Ei(t)):(await t.yu.stop(),t.hu.length>0&&(d("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xi{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new b,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new xi(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oi(t,e){if(g("AsyncQueue",`${e}: ${t}`),ss(t))return new T(E.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t){this.comparator=t?(e,n)=>t(e,n)||it.comparator(e.key,n.key):(t,e)=>it.comparator(t.key,e.key),this.keyedMap=sn(),this.sortedSet=new Qe(this.comparator)}static emptySet(t){return new Mi(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Mi))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Mi;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.pu=new Qe(it.comparator)}track(t){const e=t.doc.key,n=this.pu.get(e);n?0!==t.type&&3===n.type?this.pu=this.pu.insert(e,t):3===t.type&&1!==n.type?this.pu=this.pu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.pu=this.pu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.pu=this.pu.remove(e):1===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):y():this.pu=this.pu.insert(e,t)}Iu(){const t=[];return this.pu.inorderTraversal((e,n)=>{t.push(n)}),t}}class Pi{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Pi(t,e,Mi.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ie(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.Tu=void 0,this.listeners=[]}}class Ui{constructor(){this.queries=new We(t=>re(t),ie),this.onlineState="Unknown",this.Eu=new Set}}async function ji(t,e){const n=w(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Fi),i)try{r.Tu=await n.onListen(s)}catch(t){const n=Oi(t,`Initialization of query '${oe(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Au(n.onlineState),r.Tu&&e.Ru(r.Tu)&&Gi(n)}async function Bi(t,e){const n=w(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function qi(t,e){const n=w(t);let s=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Ru(i)&&(s=!0);e.Tu=i}}s&&Gi(n)}function Ki(t,e,n){const s=w(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Gi(t){t.Eu.forEach(t=>{t.next()})}class Hi{constructor(t,e,n){this.query=t,this.Pu=e,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}Ru(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Pi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Pu.next(t),e=!0):this.Su(t,this.onlineState)&&(this.Du(t),e=!0),this.Vu=t,e}onError(t){this.Pu.error(t)}Au(t){this.onlineState=t;let e=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,t)&&(this.Du(this.Vu),e=!0),e}Su(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Cu||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Du(t){t=Pi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Pu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi{constructor(t){this.key=t}}class $i{constructor(t){this.key=t}}class Wi{constructor(t,e){this.query=t,this.$u=e,this.Bu=null,this.current=!1,this.Lu=un(),this.mutatedKeys=un(),this.Uu=ce(t),this.qu=new Mi(this.Uu)}get Ku(){return this.$u}Gu(t,e){const n=e?e.Qu:new Vi,s=e?e.qu:this.qu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a=Xt(this.query)&&s.size===this.query.limit?s.last():null,u=Yt(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((t,e)=>{const c=s.get(t),h=ae(this.query,e)?e:null,l=!!c&&this.mutatedKeys.has(c.key),f=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let d=!1;c&&h?c.data.isEqual(h.data)?l!==f&&(n.track({type:3,doc:h}),d=!0):this.ju(c,h)||(n.track({type:2,doc:h}),d=!0,(a&&this.Uu(h,a)>0||u&&this.Uu(h,u)<0)&&(o=!0)):!c&&h?(n.track({type:0,doc:h}),d=!0):c&&!h&&(n.track({type:1,doc:c}),d=!0,(a||u)&&(o=!0)),d&&(h?(r=r.add(h),i=f?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))}),Xt(this.query)||Yt(this.query))for(;r.size>this.query.limit;){const t=Xt(this.query)?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{qu:r,Qu:n,ni:o,mutatedKeys:i}}ju(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.qu;this.qu=t.qu,this.mutatedKeys=t.mutatedKeys;const i=t.Qu.Iu();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Uu(t.doc,e.doc)),this.Wu(n);const r=e?this.zu():[],o=0===this.Lu.size&&this.current?1:0,a=o!==this.Bu;return this.Bu=o,0!==i.length||a?{snapshot:new Pi(this.query,t.qu,s,i,t.mutatedKeys,0===o,a,!1),Hu:r}:{Hu:r}}Au(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Vi,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(t){return!this.$u.has(t)&&!!this.qu.has(t)&&!this.qu.get(t).hasLocalMutations}Wu(t){t&&(t.addedDocuments.forEach(t=>this.$u=this.$u.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.$u=this.$u.delete(t)),this.current=t.current)}zu(){if(!this.current)return[];const t=this.Lu;this.Lu=un(),this.qu.forEach(t=>{this.Ju(t.key)&&(this.Lu=this.Lu.add(t.key))});const e=[];return t.forEach(t=>{this.Lu.has(t)||e.push(new $i(t))}),this.Lu.forEach(n=>{t.has(n)||e.push(new zi(n))}),e}Yu(t){this.$u=t.li,this.Lu=un();const e=this.Gu(t.documents);return this.applyChanges(e,!0)}Xu(){return Pi.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class Qi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Xi{constructor(t){this.key=t,this.Zu=!1}}class Yi{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.ta={},this.ea=new We(t=>re(t),ie),this.na=new Map,this.sa=new Set,this.ia=new Qe(it.comparator),this.ra=new Map,this.oa=new Os,this.ua={},this.aa=new Map,this.ca=gs.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}async function Ji(t,e){const n=yr(t);let s,i;const r=n.ea.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Xu();else{const t=await ks(n.localStore,ne(e));n.isPrimaryClient&&ai(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await Zi(n,e,s,"current"===r)}return i}async function Zi(t,e,n,s){t.la=(e,n,s)=>async function(t,e,n,s){let i=e.view.Gu(n);i.ni&&(i=await Ds(t.localStore,e.query,!1).then(({documents:t})=>e.view.Gu(t,i)));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return lr(t,e.targetId,o.Hu),o.snapshot}(t,e,n,s);const i=await Ds(t.localStore,e,!0),r=new Wi(e,i.li),o=r.Gu(i.documents),a=fn.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),u=r.applyChanges(o,t.isPrimaryClient,a);lr(t,n,u.Hu);const c=new Qi(e,n,r);return t.ea.set(e,c),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),u.snapshot}async function tr(t,e){const n=w(t),s=n.ea.get(e),i=n.na.get(s.targetId);if(i.length>1)return n.na.set(s.targetId,i.filter(t=>!ie(t,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _s(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ui(n.remoteStore,s.targetId),cr(n,s.targetId)}).catch(ps)):(cr(n,s.targetId),await _s(n.localStore,s.targetId,!0))}async function er(t,e,n){const s=vr(t);try{const t=await function(t,e){const n=w(t),s=M.now(),i=e.reduce((t,e)=>t.add(e.key),un());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.ci.Ks(t,i).next(i=>{r=i;const o=[];for(const t of e){const e=xe(t,r.get(t.key));null!=e&&o.push(new Pe(t.key,e,Et(e.value.mapValue),ke.exists(!0)))}return n.Bs.addMutationBatch(t,s,o,e)})).then(t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r}))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.ua[t.currentUser.toKey()];s||(s=new Qe(x)),s=s.insert(e,n),t.ua[t.currentUser.toKey()]=s}(s,t.batchId,n),await gr(s,t.changes),await Ei(s.remoteStore)}catch(t){const e=Oi(t,"Failed to persist write");n.reject(e)}}async function nr(t,e){const n=w(t);try{const t=await As(n.localStore,e);e.targetChanges.forEach((t,e)=>{const s=n.ra.get(e);s&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.Zu=!0:t.modifiedDocuments.size>0?v(s.Zu):t.removedDocuments.size>0&&(v(s.Zu),s.Zu=!1))}),await gr(n,t,e)}catch(t){await ps(t)}}function sr(t,e,n){const s=w(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.ea.forEach((n,s)=>{const i=s.view.Au(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=w(t);n.onlineState=e;let s=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.Au(e)&&(s=!0)}),s&&Gi(n)}(s.eventManager,e),t.length&&s.ta.Qo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ir(t,e,n){const s=w(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ra.get(e),r=i&&i.key;if(r){let t=new Qe(it.comparator);t=t.insert(r,Tt.newNoDocument(r,V.min()));const n=un().add(r),i=new ln(V.min(),new Map,new Je(x),t,n);await nr(s,i),s.ia=s.ia.remove(r),s.ra.delete(e),dr(s)}else await _s(s.localStore,e,!1).then(()=>cr(s,e,n)).catch(ps)}async function rr(t,e){const n=w(t),s=e.batch.batchId;try{const t=await Is(n.localStore,e);ur(n,s,null),ar(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await gr(n,t)}catch(t){await ps(t)}}async function or(t,e,n){const s=w(t);try{const t=await function(t,e){const n=w(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let s;return n.Bs.lookupMutationBatch(t,e).next(e=>(v(null!==e),s=e.keys(),n.Bs.removeMutationBatch(t,e))).next(()=>n.Bs.performConsistencyCheck(t)).next(()=>n.ci.Ks(t,s))})}(s.localStore,e);ur(s,e,n),ar(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await gr(s,t)}catch(n){await ps(n)}}function ar(t,e){(t.aa.get(e)||[]).forEach(t=>{t.resolve()}),t.aa.delete(e)}function ur(t,e,n){const s=w(t);let i=s.ua[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.ua[s.currentUser.toKey()]=i}}function cr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.na.get(e))t.ea.delete(s),n&&t.ta.fa(s,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(e=>{t.oa.containsKey(e)||hr(t,e)})}function hr(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);null!==n&&(ui(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),dr(t))}function lr(t,e,n){for(const s of n)s instanceof zi?(t.oa.addReference(s.key,e),fr(t,s)):s instanceof $i?(d("SyncEngine","Document no longer in limbo: "+s.key),t.oa.removeReference(s.key,e),t.oa.containsKey(s.key)||hr(t,s.key)):y()}function fr(t,e){const n=e.key,s=n.path.canonicalString();t.ia.get(n)||t.sa.has(s)||(d("SyncEngine","New document in limbo: "+n),t.sa.add(s),dr(t))}function dr(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new it(B.fromString(e)),s=t.ca.next();t.ra.set(s,new Xi(n)),t.ia=t.ia.insert(n,s),ai(t.remoteStore,new as(ne(Qt(n.path)),s,2,D.A))}}async function gr(t,e,n){const s=w(t),i=[],r=[],o=[];s.ea.isEmpty()||(s.ea.forEach((t,a)=>{o.push(s.la(a,e,n).then(t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=vs.Ys(a.targetId,t);r.push(e)}}))}),await Promise.all(o),s.ta.Qo(i),await async function(t,e){const n=w(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>ns.forEach(e,e=>ns.forEach(e.Hs,s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s)).next(()=>ns.forEach(e.Js,s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))}catch(t){if(!ss(t))throw t;d("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.ii.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.ii=n.ii.insert(t,i)}}}(s.localStore,r))}async function pr(t,e){const n=w(t);if(!n.currentUser.isEqual(e)){d("SyncEngine","User change. New user:",e.toKey());const t=await bs(n.localStore,e);n.currentUser=e,function(t,e){t.aa.forEach(t=>{t.forEach(t=>{t.reject(new T(E.CANCELLED,e))})}),t.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await gr(n,t.hi)}}function mr(t,e){const n=w(t),s=n.ra.get(e);if(s&&s.Zu)return un().add(s.key);{let t=un();const s=n.na.get(e);if(!s)return t;for(const e of s){const s=n.ea.get(e);t=t.unionWith(s.view.Ku)}return t}}function yr(t){const e=w(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nr.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mr.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ir.bind(null,e),e.ta.Qo=qi.bind(null,e.eventManager),e.ta.fa=Ki.bind(null,e.eventManager),e}function vr(t){const e=w(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rr.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=or.bind(null,e),e}class wr{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Ys(t.databaseInfo.databaseId),this.sharedClientState=this._a(t),this.persistence=this.wa(t),await this.persistence.start(),this.gcScheduler=this.ma(t),this.localStore=this.ga(t)}ma(t){return null}ga(t){return Ts(this.persistence,new ws,t.initialUser,this.M)}wa(t){return new js(qs.zi,this.M)}_a(t){return new Gs}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Er{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>sr(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=pr.bind(null,this.syncEngine),await Di(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ui}createDatastore(t){const e=Ys(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Qs(s));var s;return function(t,e,n,s){return new ni(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>sr(this.syncEngine,t,0),r=zs.vt()?new zs:new Hs,new ii(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Yi(t,e,n,s,i,r);return o&&(a.ha=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=w(t);d("RemoteStore","RemoteStore shutting down."),e.fu.add(5),await oi(e),e._u.shutdown(),e.wu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.pa(this.observer.next,t)}error(t){this.observer.error?this.pa(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Ia(){this.muted=!0}pa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=c.UNAUTHENTICATED,this.clientId=L.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{d("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(d("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new b;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Oi(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ir(t,e){t.asyncQueue.verifyOperationInProgress(),d("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async t=>{s.isEqual(t)||(await bs(e.localStore,t),s=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Sr(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ar(t);d("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(t=>_i(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>_i(e.remoteStore,n)),t.onlineComponents=e}async function Ar(t){return t.offlineComponents||(d("FirestoreClient","Using default OfflineComponentProvider"),await Ir(t,new wr)),t.offlineComponents}async function Cr(t){return t.onlineComponents||(d("FirestoreClient","Using default OnlineComponentProvider"),await Sr(t,new Er)),t.onlineComponents}function Nr(t){return Cr(t).then(t=>t.syncEngine)}async function kr(t){const e=await Cr(t),n=e.eventManager;return n.onListen=Ji.bind(null,e.syncEngine),n.onUnlisten=tr.bind(null,e.syncEngine),n}function _r(t,e,n={}){const s=new b;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,s,i){const r=new Tr({next:r=>{e.enqueueAndForget(()=>Bi(t,o));const a=r.docs.has(n);!a&&r.fromCache?i.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&s&&"server"===s.source?i.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:t=>i.reject(t)}),o=new Hi(Qt(n.path),r,{includeMetadataChanges:!0,Cu:!0});return ji(t,o)}(await kr(t),t.asyncQueue,e,n,s)),s.promise}function Dr(t,e,n={}){const s=new b;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,s,i){const r=new Tr({next:n=>{e.enqueueAndForget(()=>Bi(t,o)),n.fromCache&&"server"===s.source?i.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Hi(n,r,{includeMetadataChanges:!0,Cu:!0});return ji(t,o)}(await kr(t),t.asyncQueue,e,n,s)),s.promise}const Rr=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t,e,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xr(t,e,n,s){if(!0===e&&!0===s)throw new T(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Or(t){if(!it.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mr(t){if(it.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vr(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function Pr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vr(t);throw new T(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,xr("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fr({}),this._settingsFrozen=!1,t instanceof tt?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tt(t.options.projectId)}(t))}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fr(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new S;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new N(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Rr.get(t);e&&(d("ComponentProvider","Removing Datastore"),Rr.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new jr(this.firestore,t,this._key)}}class Br{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Br(this.firestore,t,this._query)}}class qr extends Br{constructor(t,e,n){super(t,e,Qt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new jr(this.firestore,null,new it(t))}withConverter(t){return new qr(this.firestore,t,this._path)}}function Kr(t,e,...n){if(t=Object(o["j"])(t),Lr("collection","path",e),t instanceof Ur){const s=B.fromString(e,...n);return Mr(s),new qr(t,null,s)}{if(!(t instanceof jr||t instanceof qr))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(B.fromString(e,...n));return Mr(s),new qr(t.firestore,null,s)}}function Gr(t,e,...n){if(t=Object(o["j"])(t),1===arguments.length&&(e=L.R()),Lr("doc","path",e),t instanceof Ur){const s=B.fromString(e,...n);return Or(s),new jr(t,null,new it(s))}{if(!(t instanceof jr||t instanceof qr))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(B.fromString(e,...n));return Or(s),new jr(t.firestore,t instanceof qr?t.converter:null,new it(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Js(this,"async_queue_retry"),this.qa=()=>{const t=Xs();t&&d("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Do.Ao()};const t=Xs();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ka(),this.Ga(t)}enterRestrictedMode(t){if(!this.Oa){this.Oa=!0,this.La=t||!1;const e=Xs();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qa)}}enqueue(t){if(this.Ka(),this.Oa)return new Promise(()=>{});const e=new b;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ma.push(t),this.Qa()))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(t){if(!ss(t))throw t;d("AsyncQueue","Operation failed with retryable error: "+t)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(t){const e=this.ka.then(()=>(this.Ba=!0,t().catch(t=>{this.$a=t,this.Ba=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw g("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ba=!1,t))));return this.ka=e,e}enqueueAfterDelay(t,e,n){this.Ka(),this.Ua.indexOf(t)>-1&&(e=0);const s=xi.createAndSchedule(this,t,e,n,t=>this.ja(t));return this.Fa.push(s),s}Ka(){this.$a&&y()}verifyOperationInProgress(){}async Wa(){let t;do{t=this.ka,await t}while(t!==this.ka)}za(t){for(const e of this.Fa)if(e.timerId===t)return!0;return!1}Ha(t){return this.Wa().then(()=>{this.Fa.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.Fa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Wa()})}Ja(t){this.Ua.push(t)}ja(t){const e=this.Fa.indexOf(t);this.Fa.splice(e,1)}}class zr extends Ur{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Hr,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Qr(this),this._firestoreClient.terminate()}}function $r(t=Object(s["e"])()){return Object(s["b"])(t,"firestore").getImmediate()}function Wr(t){return t._firestoreClient||Qr(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Qr(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Z(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new br(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xr{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Yr(H.fromBase64String(t))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Yr(H.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return x(this._lat,t._lat)||x(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=/^__.*__$/;class eo{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Pe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ve(t,this.data,e,this.fieldTransforms)}}function no(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class so{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=s,void 0===i&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(t){return new so(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Za({path:n,ec:!1});return s.nc(t),s}sc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Za({path:n,ec:!1});return s.Ya(),s}ic(t){return this.Za({path:void 0,ec:!0})}rc(t){return po(t,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Ya(){if(this.path)for(let t=0;t<this.path.length;t++)this.nc(this.path.get(t))}nc(t){if(0===t.length)throw this.rc("Document fields must not be empty");if(no(this.Xa)&&to.test(t))throw this.rc('Document fields cannot begin and end with "__"')}}class io{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||Ys(t)}ac(t,e,n,s=!1){return new so({Xa:t,methodName:e,uc:n,path:K.emptyPath(),ec:!1,oc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function ro(t){const e=t._freezeSettings(),n=Ys(t._databaseId);return new io(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oo(t,e,n,s,i,r={}){const o=t.ac(r.merge||r.mergeFields?2:0,e,n,i);ho("Data must be an object, but it was:",o,s);const a=uo(s,o);let u,c;if(r.merge)u=new G(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=lo(e,s,n);if(!o.contains(i))throw new T(E.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);mo(t,i)||t.push(i)}u=new G(t),c=o.fieldTransforms.filter(t=>u.covers(t.field))}else u=null,c=o.fieldTransforms;return new eo(new wt(a),u,c)}function ao(t,e){if(co(t=Object(o["j"])(t)))return ho("Unsupported field value:",e,t),uo(t,e);if(t instanceof Jr)return function(t,e){if(!no(e.Xa))throw e.rc(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.rc(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&4!==e.Xa)throw e.rc("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=ao(i,e.ic(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["j"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return de(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=M.fromDate(t);return{timestampValue:In(e.M,n)}}if(t instanceof M){const n=new M(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:In(e.M,n)}}if(t instanceof Zr)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Yr)return{bytesValue:Sn(e.M,t._byteString)};if(t instanceof jr){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.rc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Nn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.rc("Unsupported field value: "+Vr(t))}(t,e)}function uo(t,e){const n={};return U(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):F(t,(t,s)=>{const i=ao(s,e.tc(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function co(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof M||t instanceof Zr||t instanceof Yr||t instanceof jr||t instanceof Jr)}function ho(t,e,n){if(!co(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Vr(n);throw"an object"===s?e.rc(t+" a custom object"):e.rc(t+" "+s)}}function lo(t,e,n){if((e=Object(o["j"])(e))instanceof Xr)return e._internalPath;if("string"==typeof e)return go(t,e);throw po("Field path arguments must be of type string or ",t,!1,void 0,n)}const fo=new RegExp("[~\\*/\\[\\]]");function go(t,e,n){if(e.search(fo)>=0)throw po(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xr(...e.split("."))._internalPath}catch(s){throw po(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function po(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=" in field "+s),o&&(u+=" in document "+i),u+=")"),new T(E.INVALID_ARGUMENT,a+t+u)}function mo(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new jr(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new vo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(wo("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class vo extends yo{data(){return super.data()}}function wo(t,e){return"string"==typeof e?go(t,e):e instanceof Xr?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class To extends yo{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(wo("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class bo extends To{data(t={}){return super.data(t)}}class Io{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Eo(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new bo(this._firestore,this._userDataWriter,n.key,n,new Eo(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new bo(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Eo(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const s=new bo(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Eo(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:So(e.type),doc:s,oldIndex:i,newIndex:r}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function So(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ao(t){if(Yt(t)&&0===t.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co{convertValue(t,e="none"){switch(rt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return W(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Q(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return F(t.fields,(t,s)=>{n[t]=this.convertValue(s,e)}),n}convertGeoPoint(t){return new Zr(W(t.latitude),W(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Y(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(J(t));default:return null}}convertTimestamp(t){const e=$(t);return new M(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=B.fromString(t);v(Yn(n));const s=new tt(n.get(1),n.get(3)),i=new it(n.popFirst(5));return s.isEqual(e)||g(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ko(t){t=Pr(t,jr);const e=Pr(t.firestore,zr);return _r(Wr(e),t._key).then(n=>Oo(e,t,n))}class _o extends Co{constructor(t){super(),this.firestore=t}convertBytes(t){return new Yr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new jr(this.firestore,null,e)}}function Do(t){t=Pr(t,Br);const e=Pr(t.firestore,zr),n=Wr(e),s=new _o(e);return Ao(t._query),Dr(n,t._query).then(n=>new Io(e,s,t,n))}function Ro(t,e,n){t=Pr(t,jr);const s=Pr(t.firestore,zr),i=No(t.converter,e,n);return xo(s,[oo(ro(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,ke.none())])}function Lo(t){return xo(Pr(t.firestore,zr),[new Be(t._key,ke.none())])}function xo(t,e){return function(t,e){const n=new b;return t.asyncQueue.enqueueAndForget(async()=>er(await Nr(t),e,n)),n.promise}(Wr(t),e)}function Oo(t,e,n){const s=n.docs.get(e._key),i=new _o(t);return new To(t,i,e._key,s,new Eo(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){h=t}(s["a"]),Object(s["c"])(new i["a"]("firestore",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new zr(s,new A(t.getProvider("auth-internal")),new _(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),Object(s["g"])(u,"3.4.8",t),Object(s["g"])(u,"3.4.8","esm2017")}()}).call(this,n("4362"))},"0b42":function(t,e,n){var s=n("da84"),i=n("e8b5"),r=n("68ee"),o=n("861d"),a=n("b622"),u=a("species"),c=s.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,r(e)&&(e===c||i(e.prototype))?e=void 0:o(e)&&(e=e[u],null===e&&(e=void 0))),void 0===e?c:e}},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,s="/";e.cwd=function(){return s},e.chdir=function(e){t||(t=n("df7c")),s=t.resolve(e,s)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"65f0":function(t,e,n){var s=n("0b42");t.exports=function(t,e){return new(s(t))(0===e?0:e)}},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ks})),n.d(e,"b",(function(){return Ds})),n.d(e,"c",(function(){return _s})),n.d(e,"d",(function(){return Ls})),n.d(e,"e",(function(){return Rs})),n.d(e,"f",(function(){return xs})),n.d(e,"g",(function(){return Os})),n.d(e,"h",(function(){return Cs})),n.d(e,"i",(function(){return Ns}));var s,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},r={},o=o||{},a=i||self;function u(){}function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d)}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function g(t,e,n){return t.call.apply(t.bind,arguments)}function p(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:p,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function w(){this.s=this.s,this.o=this.o}var E=0,T={};w.prototype.s=!1,w.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=E)){var t=l(this);delete T[t]}},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function S(t){t:{var e=qn;const n=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function A(t){return Array.prototype.concat.apply([],arguments)}function C(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function N(t){return/^[\s\xa0]*$/.test(t)}var k,_=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function D(t,e){return-1!=t.indexOf(e)}function R(t,e){return t<e?-1:t>e?1:0}t:{var L=a.navigator;if(L){var x=L.userAgent;if(x){k=x;break t}}k=""}function O(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function M(t){const e={};for(const n in t)e[n]=t[n];return e}var V="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(t,e){let n,s;for(let i=1;i<arguments.length;i++){for(n in s=arguments[i],s)t[n]=s[n];for(let e=0;e<V.length;e++)n=V[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function F(t){return F[" "](t),t}function U(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}F[" "]=u;var j,B=D(k,"Opera"),q=D(k,"Trident")||D(k,"MSIE"),K=D(k,"Edge"),G=K||q,H=D(k,"Gecko")&&!(D(k.toLowerCase(),"webkit")&&!D(k,"Edge"))&&!(D(k,"Trident")||D(k,"MSIE"))&&!D(k,"Edge"),z=D(k.toLowerCase(),"webkit")&&!D(k,"Edge");function $(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",Q=function(){var t=k;return H?/rv:([^\);]+)(\)|;)/.exec(t):K?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):z?/WebKit\/(\S+)/.exec(t):B?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(W=Q?Q[1]:""),q){var X=$();if(null!=X&&X>parseFloat(W)){j=String(X);break t}}j=W}var Y,J={};function Z(){return U((function(){let t=0;const e=_(String(j)).split("."),n=_("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=R(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||R(0==i[2].length,0==r[2].length)||R(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(a.document&&q){var tt=$();Y=tt||(parseInt(j,10)||void 0)}else Y=void 0;var et=Y,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",u,e),a.removeEventListener("test",u,e)}catch(n){}return t}();function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(H){t:{try{F(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:rt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}st.prototype.h=function(){this.defaultPrevented=!0},v(it,st);var rt={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ut(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ct(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ht(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=b(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(ct(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ft(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}ht.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ft(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ut(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),gt={};function pt(t,e,n,s,i){if(s&&s.once)return vt(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)pt(t,e[r],n,s,i);return null}return n=At(n),t&&t[ot]?t.N(e,n,h(s)?!!s.capture:!!s,i):mt(t,e,n,!1,s,i)}function mt(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=h(i)?!!i.capture:!!i,a=It(t);if(a||(t[dt]=a=new ht(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=yt(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)nt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Tt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=bt;return t}function vt(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)vt(t,e[r],n,s,i);return null}return n=At(n),t&&t[ot]?t.O(e,n,h(s)?!!s.capture:!!s,i):mt(t,e,n,!0,s,i)}function wt(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)wt(t,e[r],n,s,i);else s=h(s)?!!s.capture:!!s,n=At(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ft(r,n,s,i),-1<n&&(ct(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,n,s,i)),(n=-1<t?e[t]:null)&&Et(n))}function Et(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])lt(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Tt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=It(e))?(lt(n,t),0==n.h&&(n.src=null,e[dt]=null)):ct(t)}}}function Tt(t){return t in gt?gt[t]:gt[t]="on"+t}function bt(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Et(t),t=n.call(s,e)}return t}function It(t){return t=t[dt],t instanceof ht?t:null}var St="__closure_events_fn_"+(1e9*Math.random()>>>0);function At(t){return"function"===typeof t?t:(t[St]||(t[St]=function(e){return t.handleEvent(e)}),t[St])}function Ct(){w.call(this),this.i=new ht(this),this.P=this,this.I=null}function Nt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var i=e;e=new st(s,t),P(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=kt(o,s,!0,e)&&i}if(o=e.g=t,i=kt(o,s,!0,e)&&i,i=kt(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=kt(o,s,!1,e)&&i}function kt(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&lt(t.i,o),i=!1!==a.call(u,s)&&i}}return i&&!s.defaultPrevented}v(Ct,w),Ct.prototype[ot]=!0,Ct.prototype.removeEventListener=function(t,e,n,s){wt(this,t,e,n,s)},Ct.prototype.M=function(){if(Ct.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ct(n[s]);delete e.g[t],e.h--}}this.I=null},Ct.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Ct.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var _t=a.JSON.stringify;function Dt(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Rt{constructor(){this.h=this.g=null}add(t,e){const n=xt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Lt,xt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Ot,t=>t.reset());class Ot{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Mt(t){a.setTimeout(()=>{throw t},0)}function Vt(t,e){Lt||Pt(),Ft||(Lt(),Ft=!0),Ut.add(t,e)}function Pt(){var t=a.Promise.resolve(void 0);Lt=function(){t.then(jt)}}var Ft=!1,Ut=new Rt;function jt(){for(var t;t=Dt();){try{t.h.call(t.g)}catch(n){Mt(n)}var e=xt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function Bt(t,e){Ct.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Gt(t){t.g=Kt(()=>{t.g=null,t.i&&(t.i=!1,Gt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Bt,Ct),s=Bt.prototype,s.da=!1,s.S=null,s.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Nt(this,"tick"),this.da&&(qt(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){Bt.Z.M.call(this),qt(this),delete this.g};class Ht extends w{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Gt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zt(t){w.call(this),this.h=t,this.g={}}v(zt,w);var $t=[];function Wt(t,e,n,s){Array.isArray(n)||(n&&($t[0]=n.toString()),n=$t);for(var i=0;i<n.length;i++){var r=pt(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Qt(t){O(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Et(t)}),t),t.g={}}function Xt(){this.g=!0}function Yt(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function Zt(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(s?" "+s:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return _t(n)}catch(a){return e}}zt.prototype.M=function(){zt.Z.M.call(this),Qt(this)},zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},se=null;function ie(){return se=se||new Ct}function re(t){st.call(this,ne.Ma,t)}function oe(t){const e=ie();Nt(e,new re(e,t))}function ae(t,e){st.call(this,ne.STAT_EVENT,t),this.stat=e}function ue(t){const e=ie();Nt(e,new ae(e,t))}function ce(t,e){st.call(this,ne.Na,t),this.size=e}function he(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",v(re,st),ne.STAT_EVENT="statevent",v(ae,st),ne.Na="timingevent",v(ce,st);var le={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function de(){}function ge(t){return t.h||(t.h=t.i())}function pe(){}de.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ve(){st.call(this,"d")}function we(){st.call(this,"c")}function Ee(){}function Te(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new zt(this),this.P=Ie,t=G?125:void 0,this.W=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new be}function be(){this.i=null,this.g="",this.h=!1}v(ve,st),v(we,st),v(Ee,de),Ee.prototype.g=function(){return new XMLHttpRequest},Ee.prototype.i=function(){return{}},me=new Ee;var Ie=45e3,Se={},Ae={};function Ce(t,e,n){t.K=1,t.v=Ye(He(e)),t.s=n,t.U=!0,Ne(t,null)}function Ne(t,e){t.F=Date.now(),Re(t),t.A=He(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),dn(n.h,"t",s),t.C=0,n=t.l.H,t.h=new be,t.g=ws(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ht(m(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?M(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.X,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function _e(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=De(t,n),s==Ae){4==e&&(t.o=4,ue(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(s==Se){t.o=4,ue(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,s,null),Ve(t,s)}ke(t)&&s!=Ae&&s!=Se&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ue(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ls(e),e.L=!0,ue(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),Oe(t))}function De(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Ae:(n=Number(e.substring(n,s)),isNaN(n)?Se:(s+=1,s+n>e.length?Ae:(e=e.substr(s,n),t.C=s+n,e)))}function Re(t){t.Y=Date.now()+t.P,Le(t,t.P)}function Le(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=he(m(t.eb,t),e)}function xe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Oe(t){0==t.l.G||t.I||gs(t.l,t)}function Me(t){xe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ve(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Tn(n.i,t)))if(n.I=t.N,!t.J&&Tn(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(c){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;ds(n),es(n)}hs(n),ue(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=he(m(n.ab,n),6e3));if(1>=En(n.i)&&n.ka){try{n.ka()}catch(c){}n.ka=void 0}}else ms(n,11)}else if((t.J||n.g==t)&&ds(n),!N(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=c[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const h=c[5];null!=h&&"number"===typeof h&&0<h&&(s=1.5*h,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(D(t,"spdy")||D(t,"quic")||D(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(bn(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,Xe(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=vs(s,s.H?s.la:null,s.W),o.J){In(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(xe(a),Re(a)),s.g=o}else cs(s);0<n.l.length&&is(n)}else"stop"!=c[0]&&"close"!=c[0]||ms(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?ms(n,7):ts(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}oe(4)}catch(c){}}function Pe(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(c(t)||"string"===typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=Pe(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function Ue(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Ue)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function je(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Be(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],Be(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function Be(t,e){return Object.prototype.hasOwnProperty.call(t,e)}s=Te.prototype,s.setTimeout=function(t){this.P=t},s.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},s.Ia=function(t){try{if(t==this.g)t:{const l=Wn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>l)&&(3!=l||G||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=f?3:2),xe(this);var n=this.g.ba();this.N=n;e:if(ke(this)){var s=Qn(this.g);t="";var i=s.length,r=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Me(this),Oe(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(u)){var h=u;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,ue(12),Me(this),Oe(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ve(this,n)}this.U?(_e(this,l,o),G&&this.i&&3==l&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Ve(this,o)),4==l&&Me(this),this.i&&!this.I&&(4==l?gs(this.l,this):(this.i=!1,Re(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ue(12)):(this.o=0,ue(13)),Me(this),Oe(this)}}}catch(l){}},s.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(xe(this),_e(this,t,e),this.i&&4!=t&&Re(this))}},s.cancel=function(){this.I=!0,Me(this)},s.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ue(17)),Me(this),this.o=2,Oe(this)):Le(this,this.Y-t)},s=Ue.prototype,s.R=function(){je(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},s.T=function(){return je(this),this.g.concat()},s.get=function(t,e){return Be(this.h,t)?this.h[t]:e},s.set=function(t,e){Be(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},s.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ge(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ge){this.g=void 0!==e?e:t.g,ze(this,t.j),this.s=t.s,$e(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new cn;n.i=e.i,e.g&&(n.g=new Ue(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,ze(this,n[1]||"",!0),this.s=tn(n[2]||""),$e(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new cn(null,this.g))}function He(t){return new Ge(t)}function ze(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $e(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof cn?(t.h=e,pn(t.h,t.g)):(n||(e=en(e,an)),t.h=new cn(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Ye(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof Ge?He(t):new Ge(t,void 0)}function Ze(t,e,n,s){var i=new Ge(null,void 0);return t&&ze(i,t),e&&$e(i,e),n&&We(i,n),s&&(i.l=s),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ge.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,sn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,sn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:rn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,un)),t.join("")};var sn=/[#\/\?@]/g,rn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,un=/#/g;function cn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hn(t){t.g||(t.g=new Ue,t.h=0,t.i&&Ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ln(t,e){hn(t),e=gn(t,e),Be(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Be(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&je(t)))}function fn(t,e){return hn(t),e=gn(t,e),Be(t.g.h,e)}function dn(t,e,n){ln(t,e),0<n.length&&(t.i=null,t.g.set(gn(t,e),C(n)),t.h+=n.length)}function gn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function pn(t,e){e&&!t.j&&(hn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ln(this,e),dn(this,n,t))}),t)),t.j=e}s=cn.prototype,s.add=function(t,e){hn(this),this.i=null,t=gn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){hn(this),this.g.forEach((function(n,s){I(n,(function(n){t.call(e,n,s,this)}),this)}),this)},s.T=function(){hn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},s.R=function(t){hn(this);var e=[];if("string"===typeof t)fn(this,t)&&(e=A(e,this.g.get(gn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=A(e,t[n])}return e},s.set=function(t,e){return hn(this),this.i=null,t=gn(this,t),fn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||vn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function wn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function En(t){return t.h?1:t.g?t.g.size:0}function Tn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function bn(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Sn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return C(t.i)}function An(){}function Cn(){this.g=new An}function Nn(t,e,n){const s=n||"";try{Fe(t,(function(t,n){let i=t;h(t)&&(i=_t(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function kn(t,e){const n=new Xt;if(a.Image){const s=new Image;s.onload=y(_n,n,s,"TestLoadImage: loaded",!0,e),s.onerror=y(_n,n,s,"TestLoadImage: error",!1,e),s.onabort=y(_n,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=y(_n,n,s,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function _n(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(r){}}function Dn(t){this.l=t.$b||null,this.j=t.ib||!1}function Rn(t,e){Ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=Sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},An.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},An.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(Dn,de),Dn.prototype.g=function(){return new Rn(this.l,this.j)},Dn.prototype.i=function(t){return function(){return t}}({}),v(Rn,Ct);var Ln=0;function xn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function On(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Mn(t)}function Mn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=Rn.prototype,s.open=function(t,e){if(this.readyState!=Ln)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Mn(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,On(this)),this.readyState=Ln},s.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?On(this):Mn(this),3==this.readyState&&xn(this)}},s.Ua=function(t){this.g&&(this.response=this.responseText=t,On(this))},s.Ta=function(t){this.g&&(this.response=t,On(this))},s.ha=function(){this.g&&On(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Vn=a.JSON.parse;function Pn(t){Ct.call(this),this.headers=new Ue,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}v(Pn,Ct);var Fn="",Un=/^https?$/i,jn=["POST","PUT"];function Bn(t){return q&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function Kn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gn(t),zn(t)}function Gn(t){t.D||(t.D=!0,Nt(t,"complete"),Nt(t,"error"))}function Hn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))Kt(t.Fa,0,t);else if(Nt(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===o){var i=String(t.H).match(qe)[1]||null;if(!i&&a.self&&a.self.location){var r=a.self.location.protocol;i=r.substr(0,r.length-1)}s=!Un.test(i?i.toLowerCase():"")}n=s}if(n)Nt(t,"complete"),Nt(t,"success");else{t.m=6;try{var u=2<Wn(t)?t.g.statusText:""}catch(c){u=""}t.j=u+" ["+t.ba()+"]",Gn(t)}}finally{zn(t)}}}function zn(t,e){if(t.g){$n(t);const s=t.g,i=t.C[0]?u:null;t.g=null,t.C=null,e||Nt(t,"ready");try{s.onreadystatechange=i}catch(n){}}}function $n(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){let e="";return O(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Yn(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new Cn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ts(t){if(ns(t),3==t.G){var e=t.V++,n=He(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),as(t,n),e=new Te(t,t.h,e,void 0),e.K=2,e.v=Ye(He(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=ws(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Re(e)}ys(t)}function es(t){t.g&&(ls(t),t.g.cancel(),t.g=null)}function ns(t){es(t),t.u&&(a.clearTimeout(t.u),t.u=null),ds(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function ss(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&is(t)}function is(t){wn(t.i)||t.m||(t.m=!0,Vt(t.Ha,t),t.C=0)}function rs(t,e){return!(En(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=he(m(t.Ha,t,e),ps(t,t.C)),t.C++,!0))}function os(t,e){var n;n=e?e.m:t.V++;const s=He(t.F);Xe(s,"SID",t.J),Xe(s,"RID",n),Xe(s,"AID",t.U),as(t,s),t.o&&t.s&&Yn(s,t.o,t.s),n=new Te(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=us(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),bn(t.i,n),Ce(n,s,e)}function as(t,e){t.j&&Fe({},(function(t,n){Xe(e,n,t)}))}function us(t,e,n){n=Math.min(t.l.length,n);var s=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const u=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{Nn(u,t,"req"+n+"_")}catch(r){s&&s(u)}}if(o){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function cs(t){t.g||t.u||(t.Y=1,Vt(t.Ga,t),t.A=0)}function hs(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=he(m(t.Ga,t),ps(t,t.A)),t.A++,!0)}function ls(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function fs(t){t.g=new Te(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=He(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),as(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Yn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ye(He(e)),n.s=null,n.U=!0,Ne(n,t)}function ds(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function gs(t,e){var n=null;if(t.g==e){ds(t),ls(t),t.g=null;var s=2}else{if(!Tn(t.i,e))return;n=e.D,In(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ie(),Nt(s,new ce(s,n,e,i)),is(t)}else cs(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==s&&rs(t,e)||2==s&&hs(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ms(t,5);break;case 4:ms(t,10);break;case 3:ms(t,6);break;default:ms(t,2)}}function ps(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ms(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=m(t.jb,t);n||(n=new Ge("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||ze(n,"https"),Ye(n)),kn(n.toString(),s)}else ue(2);t.G=0,t.j&&t.j.va(e),ys(t),ns(t)}function ys(t){t.G=0,t.I=-1,t.j&&(0==Sn(t.i).length&&0==t.l.length||(t.i.i.length=0,C(t.l),t.l.length=0),t.j.ua())}function vs(t,e,n){let s=Je(n);if(""!=s.i)e&&$e(s,e+"."+s.i),We(s,s.m);else{const t=a.location;s=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&O(t.aa,(function(t,e){Xe(s,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(s,e,n),Xe(s,"VER",t.ma),as(t,s),s}function ws(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Pn(new Dn({ib:!0})):new Pn(t.qa),e.L=t.H,e}function Es(){}function Ts(){if(q&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function bs(t,e){Ct.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!N(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!N(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new As(this)}function Is(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ss(){we.call(this),this.status=1}function As(t){this.g=t}s=Pn.prototype,s.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?ge(this.u):ge(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void Kn(this,r)}t=n||"";const i=new Ue(this.headers);s&&Fe(s,(function(t,e){i.set(e,t)})),s=S(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=b(jn,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$n(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Kt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Kn(this,r)}},s.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Nt(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Nt(this,"complete"),Nt(this,"abort"),zn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zn(this,!0)),Pn.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?Hn(this):this.cb())},s.cb=function(){Hn(this)},s.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Vn(e)}},s.Da=function(){return this.m},s.La=function(){return"string"===typeof this.j?this.j:String(this.j)},s=Zn.prototype,s.ma=8,s.G=1,s.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},s.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Te(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=M(r),P(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=us(this,i,e),n=He(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),as(this,n),this.o&&r&&Yn(n,this.o,r),bn(this.i,i),this.Ra&&Xe(n,"TYPE","init"),this.ja?(Xe(n,"$req",e),Xe(n,"SID","null"),i.$=!0,Ce(i,n,null)):Ce(i,n,e),this.G=2}}else 3==this.G&&(t?os(this,t):0==this.l.length||wn(this.i)||os(this))},s.Ga=function(){if(this.u=null,fs(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=he(m(this.bb,this),t)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ue(10),es(this),fs(this))},s.ab=function(){null!=this.v&&(this.v=null,es(this),hs(this),ue(19))},s.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ue(2)):(this.h.info("Failed to ping google.com"),ue(1))},s=Es.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},Ts.prototype.g=function(t,e){return new bs(t,e)},v(bs,Ct),bs.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Vt(m(t.hb,t,e))),ue(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vs(t,null,t.W),is(t)},bs.prototype.close=function(){ts(this.g)},bs.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ss(this.g,e)}else this.v?(e={},e.__data__=_t(t),ss(this.g,e)):ss(this.g,t)},bs.prototype.M=function(){this.g.j=null,delete this.j,ts(this.g),delete this.g,bs.Z.M.call(this)},v(Is,ve),v(Ss,we),v(As,Es),As.prototype.xa=function(){Nt(this.g,"a")},As.prototype.wa=function(t){Nt(this.g,new Is(t))},As.prototype.va=function(t){Nt(this.g,new Ss(t))},As.prototype.ua=function(){Nt(this.g,"b")},Ts.prototype.createWebChannel=Ts.prototype.g,bs.prototype.send=bs.prototype.u,bs.prototype.open=bs.prototype.m,bs.prototype.close=bs.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,fe.COMPLETE="complete",pe.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",Ct.prototype.listen=Ct.prototype.N,Pn.prototype.listenOnce=Pn.prototype.O,Pn.prototype.getLastError=Pn.prototype.La,Pn.prototype.getLastErrorCode=Pn.prototype.Da,Pn.prototype.getStatus=Pn.prototype.ba,Pn.prototype.getResponseJson=Pn.prototype.Qa,Pn.prototype.getResponseText=Pn.prototype.ga,Pn.prototype.send=Pn.prototype.ea;var Cs=r.createWebChannelTransport=function(){return new Ts},Ns=r.getStatEventTarget=function(){return ie()},ks=r.ErrorCode=le,_s=r.EventType=fe,Ds=r.Event=ne,Rs=r.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ls=r.FetchXmlHttpFactory=Dn,xs=r.WebChannel=pe,Os=r.XhrIo=Pn}).call(this,n("c8ba"))},abe3:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u}));var s=n("1da1"),i=(n("96cf"),n("dc59"),n("0829")),r=Object(i["f"])(),o=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["g"])(Object(i["c"])(r,"favorites",e.idMeal),e);case 2:return t.next=4,Object(i["d"])(Object(i["c"])(r,"favorites",e.idMeal));case 4:if(n=t.sent,!n.exists()){t.next=9;break}return t.abrupt("return",n.data());case 9:return t.abrupt("return",null);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["e"])(Object(i["a"])(r,"favorites"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["b"])(Object(i["c"])(r,"favorites",e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b727:function(t,e,n){var s=n("0366"),i=n("e330"),r=n("44ad"),o=n("7b0b"),a=n("07fa"),u=n("65f0"),c=i([].push),h=function(t){var e=1==t,n=2==t,i=3==t,h=4==t,l=6==t,f=7==t,d=5==t||l;return function(g,p,m,y){for(var v,w,E=o(g),T=r(E),b=s(p,m),I=a(T),S=0,A=y||u,C=e?A(g,I):n||f?A(g,0):void 0;I>S;S++)if((d||S in T)&&(v=T[S],w=b(v,S,E),t))if(e)C[S]=w;else if(w)switch(t){case 3:return!0;case 5:return v;case 6:return S;case 2:c(C,v)}else switch(t){case 4:return!1;case 7:c(C,v)}return l?-1:i||h?h:C}};t.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6),filterReject:h(7)}},c91a:function(t,e,n){"use strict";var s=n("7a23"),i={class:"section-newsletter"},r={class:"container"},o=Object(s["g"])("h2",{class:"newsletter-title mb-4"},"Find your recipe",-1),a={class:"search-menu"};function u(t,e,n,u,c,h){var l=Object(s["A"])("search-bar"),f=Object(s["A"])("router-link");return Object(s["t"])(),Object(s["f"])("section",i,[Object(s["g"])("div",r,[o,Object(s["j"])(l),Object(s["g"])("ul",a,[(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(c.alphabet,(function(t,e){return Object(s["t"])(),Object(s["f"])("li",{key:e},[Object(s["j"])(f,{to:"/search/"+t},{default:Object(s["I"])((function(){return[Object(s["i"])(Object(s["C"])(t),1)]})),_:2},1032,["to"])])})),128))])])])}var c=n("14ac"),h={name:"FindRecipe",components:{SearchBar:c["a"]},data:function(){return{alphabet:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z"]}}},l=n("6b0d"),f=n.n(l);const d=f()(h,[["render",u]]);e["a"]=d},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,s=t.length-1;s>=0;s--){var i=t[s];"."===i?t.splice(s,1):".."===i?(t.splice(s,1),n++):n&&(t.splice(s,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function s(t){"string"!==typeof t&&(t+="");var e,n=0,s=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===s&&(i=!1,s=e+1);return-1===s?"":t.slice(n,s)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],s=0;s<t.length;s++)e(t[s],s,t)&&n.push(t[s]);return n}e.resolve=function(){for(var e="",s=!1,r=arguments.length-1;r>=-1&&!s;r--){var o=r>=0?arguments[r]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,s="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!s).join("/"),(s?"/":"")+e||"."},e.normalize=function(t){var s=e.isAbsolute(t),o="/"===r(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!s).join("/"),t||s||(t="."),t&&o&&(t+="/"),(s?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function s(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=s(t.split("/")),r=s(n.split("/")),o=Math.min(i.length,r.length),a=o,u=0;u<o;u++)if(i[u]!==r[u]){a=u;break}var c=[];for(u=a;u<i.length;u++)c.push("..");return c=c.concat(r.slice(a)),c.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,s=-1,i=!0,r=t.length-1;r>=1;--r)if(e=t.charCodeAt(r),47===e){if(!i){s=r;break}}else i=!1;return-1===s?n?"/":".":n&&1===s?"/":t.slice(0,s)},e.basename=function(t,e){var n=s(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,s=-1,i=!0,r=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===s&&(i=!1,s=o+1),46===a?-1===e?e=o:1!==r&&(r=1):-1!==e&&(r=-1);else if(!i){n=o+1;break}}return-1===e||-1===s||0===r||1===r&&e===s-1&&e===n+1?"":t.slice(e,s)};var r="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e8b5:function(t,e,n){var s=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}}}]);
//# sourceMappingURL=chunk-2574f2fa.6258c5df.js.map