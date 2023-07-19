!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("nanoid"),require("cookie-signature"),require("next/headers")):"function"==typeof define&&define.amd?define(["exports","nanoid","cookie-signature","next/headers"],t):t((e||self).nextAppSession={},e.nanoid,e.cookieSignature,e.headers)}(this,function(e,t,n,r){function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=/*#__PURE__*/i(n),s=/*#__PURE__*/function(){function e(){this.store=void 0,this.store=new Map}var t=e.prototype;return t.get=function(e){try{var t,n=this,r=n.store.get(e),i=function(){if(r){var i=function(e){return t?e:(t=1,o)},o=JSON.parse(r,function(e,t){return"expires"===e?new Date(t):t}),s=function(r){if(null!=(r=o.cookie)&&r.expires&&o.cookie.expires.getTime()<=Date.now())return Promise.resolve(n.destroy(e)).then(function(){return t=1,null})}();return s&&s.then?s.then(i):i(s)}}();return Promise.resolve(i&&i.then?i.then(function(e){return t?e:null}):t?i:null)}catch(e){return Promise.reject(e)}},t.set=function(e,t){try{return this.store.set(e,JSON.stringify(t)),Promise.resolve()}catch(e){return Promise.reject(e)}},t.destroy=function(e){try{return this.store.delete(e),Promise.resolve()}catch(e){return Promise.reject(e)}},t.touch=function(e,t){try{return this.store.set(e,JSON.stringify(t)),Promise.resolve()}catch(e){return Promise.reject(e)}},e}(),u=/*#__PURE__*/function(){function e(n,r,i){return this.store=void 0,this.cookies=void 0,this.sid=void 0,this.name=void 0,this.secret=void 0,this.genid=void 0,this.cookieOpts=void 0,this.touchAfter=void 0,e.instance?e.instance:(e.instance=this,this.store=n,this.cookies=r,this.name=i.name||"sid",this.secret=i.secret,this.genid=i.genid||t.nanoid,this.cookieOpts=i.cookie,this.touchAfter=i.touchAfter,this.sid=this._getID(),this)}var n=e.prototype;return n._getID=function(){var e,t=this.decode(null==(e=this.cookies.get(this.name))?void 0:e.value);return!t&&this.genid&&(t=this.genid()),t||""},n.encode=function(e){return this.secret&&""!=this.secret?e?"s:"+o.default.sign(e,this.secret||""):"":e},n.decode=function(e){return e&&this.secret&&""!=this.secret?o.default.unsign(e.slice(2),this.secret||"")||null:e||null},n.all=function(){try{var e;return Promise.resolve(null==(e=this.store)?void 0:e.get(this.sid)).then(function(e){return null!=e?e:{}})}catch(e){return Promise.reject(e)}},n.get=function(e){try{return Promise.resolve(this.all()).then(function(t){var n;return null!=(n=null==t?void 0:t[e])?n:null})}catch(e){return Promise.reject(e)}},n.has=function(e){try{return Promise.resolve(this.all()).then(function(t){return!(null==t||!t[e])&&""!==(null==t?void 0:t[e])})}catch(e){return Promise.reject(e)}},n.set=function(e,t){try{var n=this;return Promise.resolve(n.all()).then(function(r){return r||(r={}),r[e]=t,Promise.resolve(n.setAll(r)).then(function(){})})}catch(e){return Promise.reject(e)}},n.setAll=function(e){try{var t=function(){return console.log("setAll",e),Promise.resolve(n.store.set(n.sid,e)).then(function(){})},n=this,r=n.cookies.get(n.name),i=function(){var e,t,i,o,s,u;if(null==r||!r.value||""==r.value)return Promise.resolve(n.cookies.set(n.name,n.encode(n.sid),{path:(null==(e=n.cookieOpts)?void 0:e.path)||"/",httpOnly:null==(t=null==(i=n.cookieOpts)?void 0:i.httpOnly)||t,domain:(null==(o=n.cookieOpts)?void 0:o.domain)||void 0,sameSite:null==(s=n.cookieOpts)?void 0:s.sameSite,secure:(null==(u=n.cookieOpts)?void 0:u.secure)||!1})).then(function(){})}();return Promise.resolve(i&&i.then?i.then(t):t())}catch(e){return Promise.reject(e)}},n.destroy=function(e){try{var t=this,n=e?Promise.resolve(t.all()).then(function(n){return delete n[e],Promise.resolve(t.setAll(n)).then(function(){})}):Promise.resolve(t.setAll({})).then(function(){});return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},e}();u.instance=void 0,e.AppSession=u,e.MemoryStore=s,e.default=function(e){var t=e.store||new s;return function(){return new u(t,r.cookies(),e)}}});
//# sourceMappingURL=index.umd.js.map