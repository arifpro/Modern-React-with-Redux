(this["webpackJsonp3-pictures"]=this["webpackJsonp3-pictures"]||[]).push([[0],{44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),s=a(16),c=a.n(s),i=a(6),u=a.n(i),o=a(17),l=a(4),j=a(18),d=a.n(j).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID ".concat("Q1YypJbPXfv2Bpc451qZOOfSqY3o_zwPo8y8GK5jeOI")}}),p=function(e){var t=e.onSubmit,a=Object(r.useState)(""),s=Object(l.a)(a,2),c=s[0],i=s[1];return Object(n.jsx)("div",{className:"ui segment",children:Object(n.jsx)("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),t(c)},children:Object(n.jsxs)("div",{className:"field",children:[Object(n.jsx)("label",{children:"Image Search"}),Object(n.jsx)("input",{value:c,onChange:function(e){return i(e.target.value)}})]})})})},b=function(e){var t=e.style,a=e.urls,s=e.alt_description,c=Object(r.useRef)(),i=Object(r.useState)(0),u=Object(l.a)(i,2),o=u[0],j=u[1];return Object(r.useEffect)((function(){c.current.addEventListener("load",(function(){var e=c.current.clientHeight;j(Math.ceil(e/10))}))}),[]),Object(n.jsx)("div",{style:{gridRowEnd:"span ".concat(o)},children:Object(n.jsx)("img",{className:t,ref:c,src:a,alt:s})})},m=a(55),f=Object(m.a)({imageList:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gridGap:"0 15px",gridAutoRows:10},image:{width:250,gridRowEnd:"span 2"}}),O=function(e){var t=e.images,a=f();return Object(n.jsx)("div",{className:a.imageList,children:t.map((function(e){var t=e.id,r=e.urls,s=e.alt_description;return Object(n.jsx)(b,{style:a.image,urls:r.regular,alt_description:s},t)}))})},h=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),a=t[0],s=t[1],c=function(){var e=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/search/photos",{params:{query:t}});case 2:a=e.sent,s(a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"ui container",style:{marginTop:"25px"},children:[Object(n.jsx)(p,{onSubmit:c}),Object(n.jsx)(O,{images:a})]})};c.a.render(Object(n.jsx)(h,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.649ad408.chunk.js.map