"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[916],{25:function(e,t,n){n.d(t,{X:function(){return i},f:function(){return s}});var r=n(861),c=n(757),a=n.n(c),u=n(340);function i(e){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/","6cf08bceccc0db13a518bacd00fe5691",n=new URLSearchParams({api_key:"6cf08bceccc0db13a518bacd00fe5691",language:"en-US",page:1}),e.next=5,(0,u.Z)("".concat("https://api.themoviedb.org/3/").concat(t,"?").concat(n));case 5:return r=e.sent,e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e,t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(t,n){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/","6cf08bceccc0db13a518bacd00fe5691",r=new URLSearchParams({query:n,api_key:"6cf08bceccc0db13a518bacd00fe5691",language:"en-US",page:1}),e.next=5,(0,u.Z)("".concat("https://api.themoviedb.org/3/").concat(t,"?").concat(r));case 5:return c=e.sent,e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},916:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),c=n(439),a=n(757),u=n.n(a),i=n(25),o=n(791),s=n(689),p=n(87),f=n(184),l=function(e){var t=e.goToMovieDetails,n=e.list,r=(0,o.useState)([]),a=(0,c.Z)(r,2),u=a[0],i=a[1],l=(0,s.TH)();return(0,o.useEffect)((function(){return i(n)}),[n]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{onClick:t,children:u.length>0&&u.map((function(e){var t=e.title,n=e.id;return(0,f.jsx)("li",{children:(0,f.jsx)(p.rU,{to:"movies/"+n.toString(),id:n,state:{from:l},children:t})},n)}))})})},h=function(e){var t=e.goToMovieDetails,n=(0,o.useState)([]),a=(0,c.Z)(n,2),s=a[0],p=a[1];function h(){return(h=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.X)("trending/movie/day");case 3:return t=e.sent,p(t.results),e.abrupt("return",t.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return(0,o.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),(0,f.jsx)(f.Fragment,{children:s.length>0&&(0,f.jsx)(l,{list:s,goToMovieDetails:t})})}}}]);
//# sourceMappingURL=916.68292460.chunk.js.map