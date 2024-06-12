"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[464],{54310:(t,n,i)=>{function e(t,n){var i,e;return"boolean"===typeof(null===n||void 0===n?void 0:n.enabled)?n.enabled:null===(e=null===(i=null===t||void 0===t?void 0:t.__default)||void 0===i?void 0:i.enabled)||void 0===e||e}i.r(n),i.d(n,{isPlanEventEnabled:()=>e})},14869:(t,n,i)=>{i.r(n),i.d(n,{LegacyDestination:()=>z,ajsDestinations:()=>P});var e=i(71414),r=i(72557),o=i(64104),a=i(11355),s=i(20176),u=i(9417),c=i(9525),l=i(54310),d=i(17505),v=i(22723),h=i(76964),f=i(34862),g=i(98083),p=i(70110),_=i(72756);function y(t){return t.toLowerCase().replace(".","").replace(/\s+/g,"-")}function w(t,n){return void 0===n&&(n=!1),n?btoa(t).replace(/=/g,""):void 0}function m(t,n,i,r){return(0,e.__awaiter)(this,void 0,void 0,(function(){var o,a,s,u,c,l;return(0,e.__generator)(this,(function(d){switch(d.label){case 0:o=y(n),a=w(o,r),s=(0,p.getNextIntegrationsURL)(),u="".concat(s,"/integrations/").concat(null!==a&&void 0!==a?a:o,"/").concat(i,"/").concat(null!==a&&void 0!==a?a:o,".dynamic.js.gz"),d.label=1;case 1:return d.trys.push([1,3,,4]),[4,(0,_.loadScript)(u)];case 2:return d.sent(),function(t,n,i){var r,o;try{var a=(null!==(o=null===(r=null===window||void 0===window?void 0:window.performance)||void 0===r?void 0:r.getEntriesByName(t,"resource"))&&void 0!==o?o:[])[0];a&&n.stats.gauge("legacy_destination_time",Math.round(a.duration),(0,e.__spreadArray)([i],a.duration<100?["cached"]:[],!0))}catch(s){}}(u,t,n),[3,4];case 3:throw c=d.sent(),t.stats.gauge("legacy_destination_time",-1,["plugin:".concat(n),"failed"]),c;case 4:return l=window["".concat(o,"Deps")],[4,Promise.all(l.map((function(t){return(0,_.loadScript)(s+t+".gz")})))];case 5:return d.sent(),window["".concat(o,"Loader")](),[2,window["".concat(o,"Integration")]]}}))}))}var b=i(4130),k=function(t,n){var i,e=n.type,r=n.bundlingStatus,o=n.versionSettings,a="unbundled"!==r&&("browser"===e||(null===(i=null===o||void 0===o?void 0:o.componentTypes)||void 0===i?void 0:i.includes("browser")));return!t.startsWith("Segment")&&"Iterable"!==t&&a},S=function(t,n){var i=!1===n.All&&void 0===n[t];return!1===n[t]||i};function I(t,n){return(0,e.__awaiter)(this,void 0,void 0,(function(){var i,r=this;return(0,e.__generator)(this,(function(s){switch(s.label){case 0:return i=[],(0,o.isOffline)()?[2,n]:[4,(0,v.pWhile)((function(){return n.length>0&&(0,o.isOnline)()}),(function(){return(0,e.__awaiter)(r,void 0,void 0,(function(){var r,o;return(0,e.__generator)(this,(function(e){switch(e.label){case 0:return(r=n.pop())?[4,(0,c.attempt)(r,t)]:[2];case 1:return o=e.sent(),o instanceof a.Context||i.push(r),[2]}}))}))}))];case 1:return s.sent(),i.map((function(t){return n.pushWithBackoff(t)})),[2,n]}}))}))}var z=function(){function t(t,n,i,r,o,a){void 0===r&&(r={}),this.options={},this.type="destination",this.middleware=[],this._ready=!1,this._initialized=!1,this.flushing=!1,this.name=t,this.version=n,this.settings=(0,e.__assign)({},r),this.disableAutoISOConversion=o.disableAutoISOConversion||!1,this.integrationSource=a,this.settings.type&&"browser"===this.settings.type&&delete this.settings.type,this.options=o,this.buffer=o.disableClientPersistence?new h.PriorityQueue(4,[]):new f.PersistedPriorityQueue(4,"".concat(i,":dest-").concat(t)),this.scheduleFlush()}return t.prototype.isLoaded=function(){return this._ready},t.prototype.ready=function(){var t;return null!==(t=this.onReady)&&void 0!==t?t:Promise.resolve()},t.prototype.load=function(t,n){var i;return(0,e.__awaiter)(this,void 0,void 0,(function(){var r,o,a=this;return(0,e.__generator)(this,(function(e){switch(e.label){case 0:return this._ready||void 0!==this.onReady?[2]:null===(i=this.integrationSource)||void 0===i?[3,1]:(o=i,[3,3]);case 1:return[4,m(t,this.name,this.version,this.options.obfuscate)];case 2:o=e.sent(),e.label=3;case 3:r=o,this.integration=function(t,n,i){var e;"Integration"in t?(t({user:function(){return i.user()},addIntegration:function(){}}),e=t.Integration):e=t;var r=new e(n);return r.analytics=i,r}(r,this.settings,n),this.onReady=new Promise((function(t){a.integration.once("ready",(function(){a._ready=!0,t(!0)}))})),this.onInitialize=new Promise((function(t){a.integration.on("initialize",(function(){a._initialized=!0,t(!0)}))}));try{t.stats.increment("analytics_js.integration.invoke",1,["method:initialize","integration_name:".concat(this.name)]),this.integration.initialize()}catch(s){throw t.stats.increment("analytics_js.integration.invoke.error",1,["method:initialize","integration_name:".concat(this.name)]),s}return[2]}}))}))},t.prototype.unload=function(t,n){return function(t,n,i){return(0,e.__awaiter)(this,void 0,void 0,(function(){var r,o,a,s;return(0,e.__generator)(this,(function(e){return r=(0,p.getNextIntegrationsURL)(),o=y(t),a=w(t,i),s="".concat(r,"/integrations/").concat(null!==a&&void 0!==a?a:o,"/").concat(n,"/").concat(null!==a&&void 0!==a?a:o,".dynamic.js.gz"),[2,(0,_.unloadScript)(s)]}))}))}(this.name,this.version,this.options.obfuscate)},t.prototype.addMiddleware=function(){for(var t,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];this.middleware=(t=this.middleware).concat.apply(t,n)},t.prototype.shouldBuffer=function(t){return"page"!==t.event.type&&((0,o.isOffline)()||!1===this._ready||!1===this._initialized)},t.prototype.send=function(t,n,i){var r,o;return(0,e.__awaiter)(this,void 0,void 0,(function(){var a,u,c,d,v,h;return(0,e.__generator)(this,(function(f){switch(f.label){case 0:if(this.shouldBuffer(t))return this.buffer.push(t),this.scheduleFlush(),[2,t];if(a=null===(o=null===(r=this.options)||void 0===r?void 0:r.plan)||void 0===o?void 0:o.track,u=t.event.event,a&&u&&"Segment.io"!==this.name){if(c=a[u],!(0,l.isPlanEventEnabled)(a,c))return t.updateEvent("integrations",(0,e.__assign)((0,e.__assign)({},t.event.integrations),{All:!1,"Segment.io":!0})),t.cancel(new s.ContextCancelation({retry:!1,reason:"Event ".concat(u," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t];if(t.updateEvent("integrations",(0,e.__assign)((0,e.__assign)({},t.event.integrations),null===c||void 0===c?void 0:c.integrations)),(null===c||void 0===c?void 0:c.enabled)&&!1===(null===c||void 0===c?void 0:c.integrations[this.name]))return t.cancel(new s.ContextCancelation({retry:!1,reason:"Event ".concat(u," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t]}return[4,(0,g.applyDestinationMiddleware)(this.name,t.event,this.middleware)];case 1:if(null===(d=f.sent()))return[2,t];v=new n(d,{traverse:!this.disableAutoISOConversion}),t.stats.increment("analytics_js.integration.invoke",1,["method:".concat(i),"integration_name:".concat(this.name)]),f.label=2;case 2:return f.trys.push([2,5,,6]),this.integration?[4,this.integration.invoke.call(this.integration,i,v)]:[3,4];case 3:f.sent(),f.label=4;case 4:return[3,6];case 5:throw h=f.sent(),t.stats.increment("analytics_js.integration.invoke.error",1,["method:".concat(i),"integration_name:".concat(this.name)]),h;case 6:return[2,t]}}))}))},t.prototype.track=function(t){return(0,e.__awaiter)(this,void 0,void 0,(function(){return(0,e.__generator)(this,(function(n){return[2,this.send(t,r.Track,"track")]}))}))},t.prototype.page=function(t){var n;return(0,e.__awaiter)(this,void 0,void 0,(function(){var i=this;return(0,e.__generator)(this,(function(e){return(null===(n=this.integration)||void 0===n?void 0:n._assumesPageview)&&!this._initialized&&this.integration.initialize(),[2,this.onInitialize.then((function(){return i.send(t,r.Page,"page")}))]}))}))},t.prototype.identify=function(t){return(0,e.__awaiter)(this,void 0,void 0,(function(){return(0,e.__generator)(this,(function(n){return[2,this.send(t,r.Identify,"identify")]}))}))},t.prototype.alias=function(t){return(0,e.__awaiter)(this,void 0,void 0,(function(){return(0,e.__generator)(this,(function(n){return[2,this.send(t,r.Alias,"alias")]}))}))},t.prototype.group=function(t){return(0,e.__awaiter)(this,void 0,void 0,(function(){return(0,e.__generator)(this,(function(n){return[2,this.send(t,r.Group,"group")]}))}))},t.prototype.scheduleFlush=function(){var t=this;this.flushing||setTimeout((function(){return(0,e.__awaiter)(t,void 0,void 0,(function(){var t;return(0,e.__generator)(this,(function(n){switch(n.label){case 0:return this.flushing=!0,t=this,[4,I(this,this.buffer)];case 1:return t.buffer=n.sent(),this.flushing=!1,this.buffer.todo>0&&this.scheduleFlush(),[2]}}))}))}),5e3*Math.random())},t}();function P(t,n,i,r,o,a){var s,c;if(void 0===i&&(i={}),void 0===r&&(r={}),(0,u.isServer)())return[];n.plan&&((r=null!==r&&void 0!==r?r:{}).plan=n.plan);var l=null!==(c=null===(s=n.middlewareSettings)||void 0===s?void 0:s.routingRules)&&void 0!==c?c:[],v=n.integrations,h=r.integrations,f=(0,d.mergedOptions)(n,null!==r&&void 0!==r?r:{}),g=null===a||void 0===a?void 0:a.reduce((function(t,n){var i;return(0,e.__assign)((0,e.__assign)({},t),((i={})[function(t){return("Integration"in t?t.Integration:t).prototype.name}(n)]=n,i))}),{}),p=new Set((0,e.__spreadArray)((0,e.__spreadArray)([],Object.keys(v).filter((function(t){return k(t,v[t])})),!0),Object.keys(g||{}).filter((function(t){return(0,b.isPlainObject)(v[t])||(0,b.isPlainObject)(null===h||void 0===h?void 0:h[t])})),!0));return Array.from(p).filter((function(t){return!S(t,i)})).map((function(n){var i=function(t){var n,i,e,r;return null!==(r=null!==(i=null===(n=null===t||void 0===t?void 0:t.versionSettings)||void 0===n?void 0:n.override)&&void 0!==i?i:null===(e=null===t||void 0===t?void 0:t.versionSettings)||void 0===e?void 0:e.version)&&void 0!==r?r:"latest"}(v[n]),e=new z(n,i,t,f[n],r,null===g||void 0===g?void 0:g[n]);return l.filter((function(t){return t.destinationName===n})).length>0&&o&&e.addMiddleware(o),e}))}}}]);
//# sourceMappingURL=ajs-destination.a6816232.chunk.js.map