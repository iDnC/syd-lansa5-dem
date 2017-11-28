"use strict";if(typeof LUICONNECTOR==="undefined"){var LUICONNECTOR={};(function(){LUICONNECTOR.execute=function(l,j,k){return d(l,j,k)};LUICONNECTOR.getFolder=function(l,j,k){return g(l,"getfolder",j,k,"text")};LUICONNECTOR.putFolder=function(l,j,k){return g(l,"putfolder",j,k,"text")};LUICONNECTOR.deleteFolder=function(l,j,k){return g(l,"deletefolder",j,k,"text")};LUICONNECTOR.getFile=function(l,j,k){return g(l,"getfile",j,k,"arraybuffer")};LUICONNECTOR.putFile=function(n,j,m,k){if(a(k)){var l=i("LongReach putFile API error: no binary data parameter");if(typeof m==="function"){m(l)}return l}if(!(k instanceof Uint8Array)){var l=i("LongReach putFile API error: binary data parameter needs to be an Uint8Array");if(typeof m==="function"){m(l)}return l}return g(n,"putfile",j,m,"text",k)};LUICONNECTOR.deleteFile=function(l,j,k){return g(l,"deletefile",j,k,"text")};LUICONNECTOR.createGetFileRequest=function(k,j){return h(k,"getfile",j)};LUICONNECTOR.createPutFileRequest=function(k,j){return h(k,"putfile",j)};LUICONNECTOR.createWebQueue=function(){return new e()};function d(y,p,t){var x=null;var j=null;var l=null;var k=false;var o=null;var u=null;var w=null;var v=null;var s=null;function r(H){try{if(a(H)){l=i("Connector API error: null nonce response");if(typeof t==="function"){t(l)}return}if(a(H.response)){l=i("Connector API error: unexpected nonce response");if(typeof t==="function"){t(l)}return}if(a(H.response.type)){l=i("Connector API error: missing nonce response type");if(typeof t==="function"){t(l)}return}var A=H.response;if(A.type==="nonce"){var C="10001";var z=A.b;if(!a(A.c)){C=A.c}var J=LUIENCRYPT.createNonce();var I=LUIENCRYPT.createKey(z,C);var G=I.encrypt(A.a+":"+J+":"+o+":"+u);var B={type:"action",action:"connector",data:v};if(x){B.locale=x}B.appid="APP06";if(j){B.deviceid=j}B.cversion="1.2";var F=0;if(!a(A.scipher)){F=parseInt(A.scipher,10)}if(F>1){F=1}s=LUIENCRYPT.createCipher(J,F);B=LUIENCRYPT.encodeBASE64(s.encrypt(LUIENCRYPT.encodeUTF8(JSON.stringify(B))));var E={authentication:G,request:B};if(F>0){E.cipher="1"}b(w,k,E,n);return}l=A;if(typeof t==="function"){t(l)}return}catch(D){l=i("Connector API error: "+D.name+": "+D.message);if(typeof t==="function"){t(l)}}}function n(B){try{if(a(B)){l=i("Connector API error: null transaction response");if(typeof t==="function"){t(l)}return}if(a(B.response)){l=i("Connector API error: unexpected transaction response");if(typeof t==="function"){t(l)}return}if(typeof B.response==="string"){if(s==null){l=i("Connector API error: null cipher");if(typeof t==="function"){t(l)}return}s.reversal();var A=LUIENCRYPT.decodeBASE64AsArray(B.response);s.decryptArray(A);var z=LUIENCRYPT.decodeUTF8Array(A);l=JSON.parse(z);if(typeof t==="function"){t(l)}return}l=B.response;if(typeof t==="function"){t(l)}return}catch(C){l=i("Connector API error: "+C.name+": "+C.message);if(typeof t==="function"){t(l)}}}try{if(a(y)){l=i("Connector API error: no host parameter");if(typeof t==="function"){t(l)}return l}if(a(y.profile)){l=i("Connector API error: no host profile");if(typeof t==="function"){t(l)}return l}if(a(y.endpoint)){l=i("Connector API error: no host endpoint");if(typeof t==="function"){t(l)}return l}if(a(p)){l=i("Connector API error: no service parameter");if(typeof t==="function"){t(l)}return l}o=y.profile;if(a(y.password)){u=""}else{u=y.password}w=y.endpoint;v=p;if(!a(y.locale)){x=y.locale}if(!a(y.deviceid)){j=y.deviceid}if(a(t)){k=true}if(!a(y.synchronous)){if(y.synchronous===true||y.synchronous==="true"){k=true}}var m={type:"action",action:"getnonce"};if(x){m.locale=x}m.cversion="1.2";b(w,k,{request:m},r);return l}catch(q){l=i("Connector API error: "+q.name+": "+q.message);if(typeof t==="function"){t(l)}return l}}function b(s,j,o,q){var t=null;var n=null;var p=false;function m(){try{if(k()){n=JSON.parse(t.responseText);if(typeof q==="function"){q(n)}return}n=f(t.responseText);if(typeof q==="function"){q(n)}return}catch(u){n=f("Connector API error: "+u.name+": "+u.message);if(typeof q==="function"){q(n)}}}function l(){if(p===true){return}p=true;n=f("Connector API error: http status: "+t.status+" "+t.statusText);if(typeof q==="function"){q(n)}}function k(){var u=t.getResponseHeader("Content-Type");if(a(u)){return false}if(u.length<16){return false}u=u.substring(0,16).toLowerCase();if(u==="application/json"){return true}return false}try{t=new XMLHttpRequest();t.onload=m;t.onerror=l;if(j===true){t.open("POST",s,false)}else{t.open("POST",s)}t.setRequestHeader("Content-Type","application/json");t.send(JSON.stringify(o));return n}catch(r){if(p===true){return f("Connector API error: "+r.name+": "+r.message)}p=true;if(typeof q==="function"){q(f("Connector API error: "+r.name+": "+r.message))}return f("Connector API error: "+r.name+": "+r.message)}}function g(t,w,E,x,n,u){var s=null;var q=null;var A=null;var v=null;var j=false;var D=null;var C=null;var m=null;var r=null;var y=null;var z=null;var p=null;function l(N){try{if(a(N)){A=i("LongReach API error: null nonce response");if(typeof x==="function"){x(A)}return}if(a(N.response)){A=i("LongReach API error: unexpected nonce response");if(typeof x==="function"){x(A)}return}if(a(N.response.type)){A=i("LongReach API error: missing nonce response type");if(typeof x==="function"){x(A)}return}var G=N.response;if(G.type==="nonce"){var I="10001";var F=G.b;if(!a(G.c)){I=G.c}var P=LUIENCRYPT.createNonce();var O=LUIENCRYPT.createKey(F,I);var M=O.encrypt(G.a+":"+P+":"+D+":"+C);var H={type:"action",action:r,data:y};if(s){H.locale=s}H.appid="APP06";if(q){H.deviceid=q}H.cversion="1.2";var L=0;if(!a(G.scipher)){L=parseInt(G.scipher,10)}if(L>1){L=1}z=LUIENCRYPT.createCipher(P,L);H=LUIENCRYPT.encodeBASE64(z.encrypt(LUIENCRYPT.encodeUTF8(JSON.stringify(H))));if(p){z.encryptUint8Array(p)}var K={authentication:M,request:H};if(L>0){K.cipher="1"}c(m,j,K,k,v,p);return}A=G;if(typeof x==="function"){x(A)}return}catch(J){A=i("LongReach API error: "+J.name+": "+J.message);if(typeof x==="function"){x(A)}}}function k(I,H){try{if(a(I)){A=i("LongReach API error: null transaction response");if(typeof x==="function"){x(A)}return}if(a(I.response)){A=i("LongReach API error: unexpected transaction response");if(typeof x==="function"){x(A)}return}if(typeof I.response==="string"){if(z==null){A=i("LongReach API error: null cipher");if(typeof x==="function"){x(A)}return}z.reversal();var G=LUIENCRYPT.decodeBASE64AsArray(I.response);z.decryptArray(G);var F=LUIENCRYPT.decodeUTF8Array(G);if(H){z.decryptUint8Array(H)}A=JSON.parse(F);if(typeof x==="function"){x(A,H)}return}A=I.response;if(typeof x==="function"){x(A)}return}catch(J){A=i("LongReach API error: "+J.name+": "+J.message);if(typeof x==="function"){x(A)}}}try{if(a(t)){A=i("LongReach API error: no host parameter");if(typeof x==="function"){x(A)}return A}if(a(t.endpoint)){A=i("LongReach API error: no host endpoint");if(typeof x==="function"){x(A)}return A}if(a(w)){A=i("LongReach API error: no action parameter");if(typeof x==="function"){x(A)}return A}if(a(E)){A=i("LongReach API error: no service parameter");if(typeof x==="function"){x(A)}return A}if(a(t.profile)){D=""}else{D=t.profile}if(a(t.password)){C=""}else{C=t.password}m=t.endpoint;r=w;y=E;v=n;p=u;if(!a(t.locale)){s=t.locale}if(!a(t.deviceid)){q=t.deviceid}if(a(x)){j=true}if(!a(t.synchronous)){if(t.synchronous===true||t.synchronous==="true"){j=true}}var o={type:"action",action:"getnonce"};if(s){o.locale=s}o.cversion="1.2";c(m,j,{request:o},l,"text");return A}catch(B){A=i("LongReach API error: "+B.name+": "+B.message);if(typeof x==="function"){x(A)}return A}}function c(w,j,p,s,r,v){var x=null;var o=null;var q=false;function n(){try{if(u()){if(x.responseType=="arraybuffer"){var y=new Uint8Array(x.response,0,x.response.byteLength);if(y[0]!=123){o=i("LongReach API error: arraybuffer is not JSON");if(typeof s==="function"){s(o)}return}var C=-1;for(var z=0;z<y.byteLength;z++){if(y[z]==255){C=z;break}}if(C==-1){if(y[y.byteLength-1]!=125){o=i("LongReach API error: arraybuffer is not JSON");if(typeof s==="function"){s(o)}return}o=JSON.parse(LUIENCRYPT.decodeUTF8Uint8Array(y));if(typeof s==="function"){s(o,new Uint8Array(0))}return}if(y[C-1]!=125){o=i("LongReach API error: arraybuffer is not JSON");if(typeof s==="function"){s(o)}return}o=JSON.parse(LUIENCRYPT.decodeUTF8Uint8Array(y.subarray(0,C)));if(typeof s==="function"){if(C==y.byteLength-1){s(o,new Uint8Array(0))}else{s(o,y.subarray(C+1))}}return}o=i("LongReach API error: response type is not arraybuffer");if(typeof s==="function"){s(o)}return}if(k()){o=JSON.parse(A());if(typeof s==="function"){s(o)}return}o=f(A());if(typeof s==="function"){s(o)}return}catch(B){o=f("LongReach API error: "+B.name+": "+B.message);if(typeof s==="function"){s(o)}}function A(){if(x.responseType=="arraybuffer"){var D=new Uint8Array(x.response,0,x.response.byteLength);return LUIENCRYPT.decodeUTF8Uint8Array(D)}return x.responseText}}function l(){if(q===true){return}q=true;o=f("LongReach API error: http status: "+x.status+" "+x.statusText);if(typeof s==="function"){s(o)}}function k(){var y=x.getResponseHeader("Content-Type");if(a(y)){return false}if(y.length<16){return false}y=y.substring(0,16).toLowerCase();if(y==="application/json"){return true}return false}function u(){var y=x.getResponseHeader("Content-Type");if(a(y)){return false}if(y.length<21){return false}y=y.substring(0,21).toLowerCase();if(y==="application/json+file"){return true}return false}try{x=new XMLHttpRequest();x.onload=n;x.onerror=l;if(j===true){x.open("POST",w,false)}else{x.open("POST",w);x.responseType=r}if(v){x.setRequestHeader("Content-Type","application/json+file");var m=new Array(3);m[0]=LUIENCRYPT.encodeUTF8Uint8Array(JSON.stringify(p));m[1]=new Uint8Array(1);m[1][0]=255;m[2]=v;x.send(new Blob(m))}else{x.setRequestHeader("Content-Type","application/json");x.send(JSON.stringify(p))}return o}catch(t){if(q===true){return f("LongReach API error: "+t.name+": "+t.message)}q=true;if(typeof s==="function"){s(f("LongReach API error: "+t.name+": "+t.message))}return f("LongReach API error: "+t.name+": "+t.message)}}function h(u,w,D){var p=null;var q=null;var t=null;var B=null;var y=null;var l=null;var s=null;var x=null;if(a(u)){return i("LongReach API error: no host parameter")}if(a(u.endpoint)){return i("LongReach API error: no host endpoint")}if(a(w)){return i("LongReach API error: no action parameter")}if(a(D)){return i("LongReach API error: no service parameter")}if(a(u.profile)){B=""}else{B=u.profile}if(a(u.password)){y=""}else{y=u.password}l=u.endpoint;s=w;x=D;if(!a(u.locale)){t=u.locale}if(!a(u.deviceid)){p=u.deviceid}if(!a(u.cacheage)){q=u.cacheage}var n={type:"action",action:"getnonce"};if(t){n.locale=t}n.cversion="1.2";var k=c(l,true,{request:n},null,"text");if(a(k.response)){return i("LongReach API error: unexpected nonce response")}k=k.response;if(a(k.type)){return i("LongReach API error: missing nonce response type")}if(k.type==="nonce"){var m="10001";var A=k.b;if(!a(k.c)){m=k.c}var z=LUIENCRYPT.createNonce();var C=LUIENCRYPT.createKey(A,m);var r=C.encrypt(k.a+":"+z+":"+B+":"+y);var n={type:"action",action:s,data:x};if(t){n.locale=t}n.appid="APP06";if(p){n.deviceid=p}if(q){n.cacheage=q}n.cversion="1.2";var o=0;if(!a(k.scipher)){o=parseInt(k.scipher,10)}if(o>1){o=1}var j=LUIENCRYPT.createCipher(z,o);n=LUIENCRYPT.encodeBASE64(j.encrypt(LUIENCRYPT.encodeUTF8(JSON.stringify(n))));var v={authentication:r,request:n};if(o>0){v.cipher="1"}return v}return k}function i(j){if(a(j)){j=""}return{type:"error",message:j}}function f(j){if(a(j)){j=""}return{response:{type:"error",message:j}}}function a(j){if(j===null){return true}return typeof j==="undefined"}function e(){var s=null;var D=null;var A=null;var k=null;var u=null;var r=null;var z=null;var q=null;var o=null;var v=null;var w=false;this.open=function(J,G,I){try{B();if(t(J)){var H=F("WebQueue open API error: no host parameter");if(typeof I==="function"){I(H)}return H}if(t(J.profile)){var H=F("WebQueue open API error: no host profile");if(typeof I==="function"){I(H)}return H}if(t(J.endpoint)){var H=F("WebQueue open API error: no host endpoint");if(typeof I==="function"){I(H)}return H}if(t(G)){var H=F("WebQueue open API error: no service parameter");if(typeof I==="function"){I(H)}return H}D=J.profile;if(t(J.password)){A=""}else{A=J.password}k=J.endpoint;z=G;if(!t(J.locale)){u=J.locale}if(!t(J.deviceid)){r=J.deviceid}v=I;s=new WebSocket(k);s.binaryType="arraybuffer";s.onopen=E;s.onclose=y;s.onerror=C;s.onmessage=l;return{type:"status",status:"OK"}}catch(K){var H=F("WebQueue open API error: "+K.name+": "+K.message);if(typeof I==="function"){I(H)}return H}};this.close=function(H,J){try{if(s===null){var G=F("WebQueue close API error: null socket");if(typeof v==="function"){v(G)}return G}if(t(H)){H=1000}if(t(J)){J=""}s.close(H,J);s=null;return{type:"status",status:"OK"}}catch(I){var G=F("WebQueue close API error: "+I.name+": "+I.message);if(typeof v==="function"){v(G)}return G}};this.isLocked=function(){return w};this.send=function(N,J,O){try{if(w){var H=F("WebQueue send API error: locked",N);if(typeof v==="function"){v(H)}return H}w=true;if(s===null){w=false;var H=F("WebQueue send API error: null socket",N);if(typeof v==="function"){v(H)}return H}if(t(N)){w=false;var H=F("WebQueue send API error: no message id parameter");if(typeof v==="function"){v(H)}return H}if(t(J)){w=false;var H=F("WebQueue send API error: no data parameter",N);if(typeof v==="function"){v(H)}return H}if(J instanceof Blob){w=false;var H=F("WebQueue send API error: unsupported Blob data parameter",N);if(typeof v==="function"){v(H)}return H}if(J instanceof ArrayBuffer){w=false;var H=F("WebQueue send API error: unsupported ArrayBuffer data parameter",N);if(typeof v==="function"){v(H)}return H}if(O instanceof File){return x(N,J,O)}var I={type:"action",action:"message",messageid:N,data:J};if(u){I.locale=u}I.appid="APP06";if(r){I.deviceid=r}I.cversion="1.2";I=LUIENCRYPT.encodeBASE64(q.encrypt(LUIENCRYPT.encodeUTF8(JSON.stringify(I))));var L={request:I};var M=q.getVersion();if(M>0){L.cipher="1"}if(O&&O instanceof Uint8Array){var G=new Array(3);G[0]=LUIENCRYPT.encodeUTF8Uint8Array(JSON.stringify(L));G[1]=new Uint8Array(1);G[1][0]=255;G[2]=O;q.encryptUint8Array(G[2]);s.send(new Blob(G));w=false;return{type:"status",status:"OK"}}s.send(JSON.stringify(L));w=false;return{type:"status",status:"OK"}}catch(K){w=false;var H=F("WebQueue send API error: "+K.name+": "+K.message,N);if(typeof v==="function"){v(H)}return H}};function p(J,L,K){try{var G=new FileReader();var I=new Array(3);G.onloadend=function(Q){if(Q.target.error){w=false;if(typeof v==="function"){v(F("WebQueue send API error: file read error: "+Q.target.error.name),J)}return}var P={type:"action",action:"message",messageid:J,data:L};if(u){P.locale=u}P.appid="APP06";if(r){P.deviceid=r}P.cversion="1.2";P=LUIENCRYPT.encodeBASE64(q.encrypt(LUIENCRYPT.encodeUTF8(JSON.stringify(P))));var O={request:P};var N=q.getVersion();if(N>0){O.cipher="1"}I[0]=LUIENCRYPT.encodeUTF8Uint8Array(JSON.stringify(O));I[1]=new Uint8Array(1);I[1][0]=255;I[2]=new Uint8Array(Q.target.result,0,Q.target.result.byteLength);q.encryptUint8Array(I[2]);s.send(new Blob(I));w=false;return};G.readAsArrayBuffer(K);return{type:"status",status:"OK"}}catch(M){w=false;var H=F("WebQueue send file API error: "+M.name+": "+M.message,J);if(typeof v==="function"){v(H)}return H}}function x(J,L,K){try{var N=0;var G=new FileReader();var I=new Array(2);G.onloadend=function(S){if(S.target.error){w=false;if(typeof v==="function"){v(F("WebQueue send API error: file read error: "+S.target.error.name),J)}return}I.push(new Uint8Array(S.target.result,0,S.target.result.byteLength));N=N+S.target.result.byteLength;if(N<K.size){G.readAsArrayBuffer(K.slice(N,N+65536));return}var R={type:"action",action:"message",messageid:J,data:L};if(u){R.locale=u}R.appid="APP06";if(r){R.deviceid=r}R.cversion="1.2";R=LUIENCRYPT.encodeBASE64(q.encrypt(LUIENCRYPT.encodeUTF8(JSON.stringify(R))));var Q={request:R};var O=q.getVersion();if(O>0){Q.cipher="1"}I[0]=LUIENCRYPT.encodeUTF8Uint8Array(JSON.stringify(Q));I[1]=new Uint8Array(1);I[1][0]=255;for(var P=2;P<I.length;P++){q.encryptUint8Array(I[P])}s.send(new Blob(I));w=false;return};G.readAsArrayBuffer(K.slice(N,N+65536));return{type:"status",status:"OK"}}catch(M){w=false;var H=F("WebQueue send file API error: "+M.name+": "+M.message,J);if(typeof v==="function"){v(H)}return H}}function E(H){var G={type:"status",status:"OPEN"};if(typeof v==="function"){v(G)}}function y(H){var G={type:"status",status:"CLOSE",clean:H.wasClean,code:H.code,reason:H.reason};if(typeof v==="function"){v(G)}B()}function C(H){var G={type:"error",message:"Websocket error"};if(typeof v==="function"){v(G)}B()}function l(J){try{if(typeof J.data==="string"){var H=JSON.parse(J.data);if(H.type==="nonce"){var K="10001";var G=H.b;if(!t(H.c)){K=H.c}var Q=LUIENCRYPT.createNonce();var P=LUIENCRYPT.createKey(G,K);var O=P.encrypt(H.a+":"+Q+":"+D+":"+A);var I={type:"action",action:"connect",data:z};if(u){I.locale=u}I.appid="APP06";if(r){I.deviceid=r}I.cversion="1.2";var N=0;if(!t(H.scipher)){N=parseInt(H.scipher,10)}if(N>1){N=1}q=LUIENCRYPT.createCipher(Q,N);o=LUIENCRYPT.createCipher(Q,N);o.reversal();I=LUIENCRYPT.encodeBASE64(q.encrypt(LUIENCRYPT.encodeUTF8(JSON.stringify(I))));var M={authentication:O,request:I};if(N>0){M.cipher="1"}s.onmessage=j;s.send(JSON.stringify(M));return}if(typeof v==="function"){v(F("WebQueue API error: nonce callback, unexpected message event"))}return}if(typeof v==="function"){v(F("WebQueue API error: nonce callback, unexpected message event"))}return}catch(L){if(typeof v==="function"){v(F("WebQueue API error: "+L.name+": "+L.message))}}}function j(G){try{if(typeof G.data==="string"){n(G.data);return}if(G.data instanceof ArrayBuffer){m(G.data);return}if(typeof v==="function"){v(F("WebQueue API error: transaction callback, unexpected message"));return}}catch(H){if(typeof v==="function"){v(F("WebQueue API error: "+H.name+": "+H.message))}}}function n(J){try{var I=JSON.parse(J);if(I.response){if(typeof I.response==="string"){if(o==null){if(typeof v==="function"){v(F("WebQueue API error: null cipher B"))}return}var H=LUIENCRYPT.decodeBASE64AsArray(I.response);o.decryptArray(H);var G=LUIENCRYPT.decodeUTF8Array(H);if(typeof v==="function"){v(JSON.parse(G))}return}if(typeof v==="function"){v(F("WebQueue API error: transaction callback string, unexpected response"))}return}if(typeof v==="function"){v(F("WebQueue API error: transaction callback string, unexpected response"))}}catch(K){if(typeof v==="function"){v(F("WebQueue API error: "+K.name+": "+K.message))}}}function m(J){try{var N=new Uint8Array(J,0,J.byteLength);if(N[0]!=123){if(typeof v==="function"){v(F("WebQueue API error: transaction callback, arraybuffer is not JSON"));return}return}var H=-1;for(var K=0;K<N.byteLength;K++){if(N[K]==255){H=K;break}}if(H==-1){if(N[N.byteLength-1]!=125){if(typeof v==="function"){v(F("WebQueue API error: transaction callback, arraybuffer is not JSON"))}return}var G=JSON.parse(LUIENCRYPT.decodeUTF8Uint8Array(N));if(o==null){if(typeof v==="function"){v(F("WebQueue API error: null cipher B"))}return}var I=LUIENCRYPT.decodeBASE64AsArray(G.response);o.decryptArray(I);var O=LUIENCRYPT.decodeUTF8Array(I);if(typeof v==="function"){v(JSON.parse(O),new Uint8Array(0))}return}if(N[H-1]!=125){if(typeof v==="function"){v(F("WebQueue API error: transaction callback, arraybuffer is not JSON"))}return}var G=JSON.parse(LUIENCRYPT.decodeUTF8Uint8Array(N.subarray(0,H)));if(o==null){if(typeof v==="function"){v(F("WebQueue API error: null cipher B"))}return}var I=LUIENCRYPT.decodeBASE64AsArray(G.response);o.decryptArray(I);var O=LUIENCRYPT.decodeUTF8Array(I);if(typeof v==="function"){if(H==N.byteLength-1){v(JSON.parse(O),new Uint8Array(0))}else{var M=N.subarray(H+1);o.decryptUint8Array(M);v(JSON.parse(O),M)}return}}catch(L){if(typeof v==="function"){v(F("WebQueue API error: "+L.name+": "+L.message))}}}function B(){s=null;D=null;A=null;k=null;u=null;r=null;z=null;q=null;o=null;v=null;w=false}function F(H,G){if(t(H)){H=""}if(t(G)){return{type:"error",message:H}}return{type:"error",message:H,correlationid:G}}function t(G){if(G===null){return true}return typeof G==="undefined"}}})()};