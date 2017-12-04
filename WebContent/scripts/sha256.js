/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
!function(){"use strict";function t(t,i){i?(d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function i(i,s,r){var e,n=typeof i;if("string"===n){var a,o=[],u=i.length,c=0;for(e=0;e<u;++e)(a=i.charCodeAt(e))<128?o[c++]=a:a<2048?(o[c++]=192|a>>6,o[c++]=128|63&a):a<55296||a>=57344?(o[c++]=224|a>>12,o[c++]=128|a>>6&63,o[c++]=128|63&a):(a=65536+((1023&a)<<10|1023&i.charCodeAt(++e)),o[c++]=240|a>>18,o[c++]=128|a>>12&63,o[c++]=128|a>>6&63,o[c++]=128|63&a);i=o}else{if("object"!==n)throw h;if(null===i)throw h;if(f&&i.constructor===ArrayBuffer)i=new Uint8Array(i);else if(!(Array.isArray(i)||f&&ArrayBuffer.isView(i)))throw h}i.length>64&&(i=new t(s,!0).update(i).array());var y=[],p=[];for(e=0;e<64;++e){var l=i[e]||0;y[e]=92^l,p[e]=54^l}t.call(this,s,r),this.update(p),this.oKeyPad=y,this.inner=!0,this.sharedMemory=r}var h="input is invalid type",s="object"==typeof window,r=s?window:{};r.JS_SHA256_NO_WINDOW&&(s=!1);var e=!s&&"object"==typeof self,n=!r.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;n?r=global:e&&(r=self);var a=!r.JS_SHA256_NO_COMMON_JS&&"object"==typeof module&&module.exports,o="function"==typeof define&&define.amd,f=!r.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,u="0123456789abcdef".split(""),c=[-2147483648,8388608,32768,128],y=[24,16,8,0],p=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],l=["hex","array","digest","arrayBuffer"],d=[];!r.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!f||!r.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var A=function(i,h){return function(s){return new t(h,!0).update(s)[i]()}},b=function(i){var h=A("hex",i);n&&(h=v(h,i)),h.create=function(){return new t(i)},h.update=function(t){return h.create().update(t)};for(var s=0;s<l.length;++s){var r=l[s];h[r]=A(r,i)}return h},v=function(t,i){var s=eval("require('crypto')"),r=eval("require('buffer').Buffer"),e=i?"sha224":"sha256",n=function(i){if("string"==typeof i)return s.createHash(e).update(i,"utf8").digest("hex");if(null===i||void 0===i)throw h;return i.constructor===ArrayBuffer&&(i=new Uint8Array(i)),Array.isArray(i)||ArrayBuffer.isView(i)||i.constructor===r?s.createHash(e).update(new r(i)).digest("hex"):t(i)};return n},w=function(t,h){return function(s,r){return new i(s,h,!0).update(r)[t]()}},_=function(t){var h=w("hex",t);h.create=function(h){return new i(h,t)},h.update=function(t,i){return h.create(t).update(i)};for(var s=0;s<l.length;++s){var r=l[s];h[r]=w(r,t)}return h};t.prototype.update=function(t){if(!this.finalized){var i,s=typeof t;if("string"!==s){if("object"!==s)throw h;if(null===t)throw h;if(f&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||f&&ArrayBuffer.isView(t)))throw h;i=!0}for(var r,e,n=0,a=t.length,o=this.blocks;n<a;){if(this.hashed&&(this.hashed=!1,o[0]=this.block,o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),i)for(e=this.start;n<a&&e<64;++n)o[e>>2]|=t[n]<<y[3&e++];else for(e=this.start;n<a&&e<64;++n)(r=t.charCodeAt(n))<128?o[e>>2]|=r<<y[3&e++]:r<2048?(o[e>>2]|=(192|r>>6)<<y[3&e++],o[e>>2]|=(128|63&r)<<y[3&e++]):r<55296||r>=57344?(o[e>>2]|=(224|r>>12)<<y[3&e++],o[e>>2]|=(128|r>>6&63)<<y[3&e++],o[e>>2]|=(128|63&r)<<y[3&e++]):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++n)),o[e>>2]|=(240|r>>18)<<y[3&e++],o[e>>2]|=(128|r>>12&63)<<y[3&e++],o[e>>2]|=(128|r>>6&63)<<y[3&e++],o[e>>2]|=(128|63&r)<<y[3&e++]);this.lastByteIndex=e,this.bytes+=e-this.start,e>=64?(this.block=o[16],this.start=e-64,this.hash(),this.hashed=!0):this.start=e}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,i=this.lastByteIndex;t[16]=this.block,t[i>>2]|=c[3&i],this.block=t[16],i>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>29,t[15]=this.bytes<<3,this.hash()}},t.prototype.hash=function(){var t,i,h,s,r,e,n,a,o,f=this.h0,u=this.h1,c=this.h2,y=this.h3,l=this.h4,d=this.h5,A=this.h6,b=this.h7,v=this.blocks;for(t=16;t<64;++t)i=((r=v[t-15])>>>7|r<<25)^(r>>>18|r<<14)^r>>>3,h=((r=v[t-2])>>>17|r<<15)^(r>>>19|r<<13)^r>>>10,v[t]=v[t-16]+i+v[t-7]+h<<0;for(o=u&c,t=0;t<64;t+=4)this.first?(this.is224?(e=300032,b=(r=v[0]-1413257819)-150054599<<0,y=r+24177077<<0):(e=704751109,b=(r=v[0]-210244248)-1521486534<<0,y=r+143694565<<0),this.first=!1):(i=(f>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),s=(e=f&u)^f&c^o,b=y+(r=b+(h=(l>>>6|l<<26)^(l>>>11|l<<21)^(l>>>25|l<<7))+(l&d^~l&A)+p[t]+v[t])<<0,y=r+(i+s)<<0),i=(y>>>2|y<<30)^(y>>>13|y<<19)^(y>>>22|y<<10),s=(n=y&f)^y&u^e,A=c+(r=A+(h=(b>>>6|b<<26)^(b>>>11|b<<21)^(b>>>25|b<<7))+(b&l^~b&d)+p[t+1]+v[t+1])<<0,i=((c=r+(i+s)<<0)>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),s=(a=c&y)^c&f^n,d=u+(r=d+(h=(A>>>6|A<<26)^(A>>>11|A<<21)^(A>>>25|A<<7))+(A&b^~A&l)+p[t+2]+v[t+2])<<0,i=((u=r+(i+s)<<0)>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),s=(o=u&c)^u&y^a,l=f+(r=l+(h=(d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&A^~d&b)+p[t+3]+v[t+3])<<0,f=r+(i+s)<<0;this.h0=this.h0+f<<0,this.h1=this.h1+u<<0,this.h2=this.h2+c<<0,this.h3=this.h3+y<<0,this.h4=this.h4+l<<0,this.h5=this.h5+d<<0,this.h6=this.h6+A<<0,this.h7=this.h7+b<<0},t.prototype.hex=function(){this.finalize();var t=this.h0,i=this.h1,h=this.h2,s=this.h3,r=this.h4,e=this.h5,n=this.h6,a=this.h7,o=u[t>>28&15]+u[t>>24&15]+u[t>>20&15]+u[t>>16&15]+u[t>>12&15]+u[t>>8&15]+u[t>>4&15]+u[15&t]+u[i>>28&15]+u[i>>24&15]+u[i>>20&15]+u[i>>16&15]+u[i>>12&15]+u[i>>8&15]+u[i>>4&15]+u[15&i]+u[h>>28&15]+u[h>>24&15]+u[h>>20&15]+u[h>>16&15]+u[h>>12&15]+u[h>>8&15]+u[h>>4&15]+u[15&h]+u[s>>28&15]+u[s>>24&15]+u[s>>20&15]+u[s>>16&15]+u[s>>12&15]+u[s>>8&15]+u[s>>4&15]+u[15&s]+u[r>>28&15]+u[r>>24&15]+u[r>>20&15]+u[r>>16&15]+u[r>>12&15]+u[r>>8&15]+u[r>>4&15]+u[15&r]+u[e>>28&15]+u[e>>24&15]+u[e>>20&15]+u[e>>16&15]+u[e>>12&15]+u[e>>8&15]+u[e>>4&15]+u[15&e]+u[n>>28&15]+u[n>>24&15]+u[n>>20&15]+u[n>>16&15]+u[n>>12&15]+u[n>>8&15]+u[n>>4&15]+u[15&n];return this.is224||(o+=u[a>>28&15]+u[a>>24&15]+u[a>>20&15]+u[a>>16&15]+u[a>>12&15]+u[a>>8&15]+u[a>>4&15]+u[15&a]),o},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,i=this.h1,h=this.h2,s=this.h3,r=this.h4,e=this.h5,n=this.h6,a=this.h7,o=[t>>24&255,t>>16&255,t>>8&255,255&t,i>>24&255,i>>16&255,i>>8&255,255&i,h>>24&255,h>>16&255,h>>8&255,255&h,s>>24&255,s>>16&255,s>>8&255,255&s,r>>24&255,r>>16&255,r>>8&255,255&r,e>>24&255,e>>16&255,e>>8&255,255&e,n>>24&255,n>>16&255,n>>8&255,255&n];return this.is224||o.push(a>>24&255,a>>16&255,a>>8&255,255&a),o},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),i=new DataView(t);return i.setUint32(0,this.h0),i.setUint32(4,this.h1),i.setUint32(8,this.h2),i.setUint32(12,this.h3),i.setUint32(16,this.h4),i.setUint32(20,this.h5),i.setUint32(24,this.h6),this.is224||i.setUint32(28,this.h7),t},i.prototype=new t,i.prototype.finalize=function(){if(t.prototype.finalize.call(this),this.inner){this.inner=!1;var i=this.array();t.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(i),t.prototype.finalize.call(this)}};var B=b();B.sha256=B,B.sha224=b(!0),B.sha256.hmac=_(),B.sha224.hmac=_(!0),a?module.exports=B:(r.sha256=B.sha256,r.sha224=B.sha224,o&&define(function(){return B}))}();