"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[865],{25:function(e,t,n){n.d(t,{X:function(){return i},f:function(){return o}});var r=n(861),c=n(757),a=n.n(c),u=n(340);function i(e){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/","6cf08bceccc0db13a518bacd00fe5691",n=new URLSearchParams({api_key:"6cf08bceccc0db13a518bacd00fe5691",language:"en-US",page:1}),e.next=5,(0,u.Z)("".concat("https://api.themoviedb.org/3/").concat(t,"?").concat(n));case 5:return r=e.sent,e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e,t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(t,n){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/","6cf08bceccc0db13a518bacd00fe5691",r=new URLSearchParams({query:n,api_key:"6cf08bceccc0db13a518bacd00fe5691",language:"en-US",page:1}),e.next=5,(0,u.Z)("".concat("https://api.themoviedb.org/3/").concat(t,"?").concat(r));case 5:return c=e.sent,e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},865:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),c=n(439),a=n(757),u=n.n(a),i=n(791),s=n(25),o=n(689),p=n(87),f=n(184),l=function(e){var t=e.goToMovieDetails,n=e.list,r=(0,i.useState)([]),a=(0,c.Z)(r,2),u=a[0],s=a[1],l=(0,o.TH)();return(0,i.useEffect)((function(){return s(n)}),[n]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{onClick:t,children:u.length>0&&u.map((function(e){var t=e.title,n=e.id;return(0,f.jsx)("li",{children:(0,f.jsx)(p.rU,{to:n.toString(),id:n,state:{from:l},children:t})},n)}))})})},h=function(e){var t=e.goToMovieDetails,n=(0,i.useState)(null),a=(0,c.Z)(n,2),o=a[0],h=a[1],d=(0,p.lr)(),b=(0,c.Z)(d,2),m=b[0],v=b[1];function g(){return(g=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.f)("search/movie",t);case 3:return n=e.sent,h(n),e.abrupt("return",n.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return(0,i.useEffect)((function(){m.get("query")&&function(e){g.apply(this,arguments)}(m.get("query"))}),[m]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v({query:e.target.input.value})},children:[(0,f.jsx)("input",{type:"text",name:"input"}),(0,f.jsx)("button",{type:"submit",children:"search"})]}),o&&(0,f.jsx)(l,{list:o.results,goToMovieDetails:t})]})}}}]);
//# sourceMappingURL=865.7035df7c.chunk.js.map