(this["webpackJsonp@jhonnold/react-animated-number-example"]=this["webpackJsonp@jhonnold/react-animated-number-example"]||[]).push([[0],{15:function(n,e,t){"use strict";t.r(e);t(5);var r=t(0),u=t.n(r),c=t(2),a=t.n(c),o=t(3),i=t(1),f=t.n(i);var s=function(n){var e=n.number,t=n.initial,r=void 0===t?0:t,c=n.fps,a=void 0===c?60:c,o=n.duration,i=void 0===o?250:o,s=n.format,l=n.component,m=void 0===l?"p":l,d=function(n,e){if(null==n)return{};var t,r,u={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(u[t]=n[t]);return u}(n,["number","initial","fps","duration","format","component"]),p=u.a.useState(r),v=p[0],b=p[1],h=u.a.useRef(r),j=u.a.useRef(0),E=u.a.useRef(0),O=u.a.useRef(),x=function n(t,r){if(function(n){return!j.current||n-j.current>1e3/a}(t)){var u,c=r?v:h.current,o=r?t:E.current;if(t-o>=i)u=e;else u=c+(e-c)*((t-o)/i);u===e?(g(),b(u)):(b(u),h.current=c,E.current=o,j.current=t,O.current=f()(n))}else O.current=f()(n)},R=function(){O.current=f()((function(n){x(n,!0)}))},g=function(){O.current&&f.a.cancel(O.current)};return u.a.useEffect((function(){return R(),function(){return g()}}),[]),u.a.useEffect((function(){g(),R()}),[e]),u.a.createElement(m,Object.assign({},d),s?s(v):v)},l=function(){return Math.random()},m=function(){var n=Object(r.useState)(l()),e=Object(o.a)(n,2),t=e[0],c=e[1];return Object(r.useEffect)((function(){var n=setInterval((function(){return c(l())}),1e4);return function(){return clearInterval(n)}}),[]),u.a.createElement(s,{number:t})};a.a.render(u.a.createElement(m,null),document.getElementById("root"))},4:function(n,e,t){n.exports=t(15)},5:function(n,e,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.cd53496b.chunk.js.map