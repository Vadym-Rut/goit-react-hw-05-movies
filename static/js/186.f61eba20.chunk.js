"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,r,t){t.r(r);var n=t(5861),a=t(9439),c=t(7757),u=t.n(c),o=t(6795),s=t(2791),i=t(7689),p=t(1181),f=t(9649),v=t(184);r.default=function(){var e=(0,s.useState)(null),r=(0,a.Z)(e,2),t=r[0],c=r[1],h=(0,i.UO)().movieId,l=(0,s.useState)(""),d=(0,a.Z)(l,2),m=d[0],x=d[1],k=(0,s.useState)(!1),w=(0,a.Z)(k,2),y=w[0],Z=w[1];(0,s.useEffect)((function(){h&&g(h,"reviews")}),[h]);var g=function(){var e=(0,n.Z)(u().mark((function e(r,t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,p.R4(r,t);case 4:if(0!==(n=e.sent).results.length){e.next=7;break}return e.abrupt("return",o.Am.error("We don`t have any reviews for this movies"));case 7:c(n.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),x(e.t0);case 13:return e.prev=13,Z(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(r,t){return e.apply(this,arguments)}}();return(0,v.jsxs)("div",{children:[t&&(0,v.jsx)("ul",{children:t.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,v.jsxs)("li",{children:[(0,v.jsx)("h4",{children:t}),(0,v.jsx)("p",{children:n})]},r)}))}),y&&(0,v.jsx)(f.Z,{}),m&&o.Am.error("Oops, an error occurred while loading the page. Please try reloading the page")]})}},1181:function(e,r,t){t.d(r,{Df:function(){return i},Pg:function(){return f},R4:function(){return v},Wf:function(){return p}});var n=t(5861),a=t(7757),c=t.n(a),u=t(1243),o="https://api.themoviedb.org/3/",s="f2fae09050301062329c7f99a1fba61d",i=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(r));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"movie/").concat(r,"?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r,t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"movie/").concat(r,"/").concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.f61eba20.chunk.js.map