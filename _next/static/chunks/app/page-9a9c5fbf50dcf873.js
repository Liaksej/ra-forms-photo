(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2777:function(e,t,r){Promise.resolve().then(r.bind(r,8026))},8026:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var a=r(97),o=r(7354),s=r(1065),l=r(3249),i=r(1595),n=r(9634);let d=(0,l.ZP)("input")({clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),c=e=>new Promise((t,r)=>{let a=new FileReader;a.addEventListener("load",e=>{t(e.currentTarget.result)}),a.addEventListener("error",e=>{var t;r(Error(null===(t=e.currentTarget.error)||void 0===t?void 0:t.message))}),a.readAsDataURL(e)}),h=e=>{let{dispatch:t}=e,r=(0,i.useRef)(null),l=async e=>{if(e.target.files&&e.target.files.length>0){let a=Array.from(e.target.files);await Promise.all(a.map(e=>c(e))).then(e=>{e.forEach(e=>{t({type:"addPhoto",payload:{id:(0,n.Z)(),src:e}})})}),r.current&&(r.current.value="")}};return(0,a.jsx)("div",{className:"flex justify-center p-10 pb-5",children:(0,a.jsxs)(o.Z,{className:"text-center",component:"label",variant:"contained",size:"large",startIcon:(0,a.jsx)(s.Z,{}),children:["Upload file",(0,a.jsx)(d,{type:"file",onChange:l,multiple:!0})]})})};var p=r(886),u=r(8809);let f=e=>{let{photo:t,dispatch:r}=e;return(0,a.jsxs)("div",{className:"relative w-[300px]",children:[(0,a.jsx)(p.Z,{className:"absolute h-[40px] w-[40px] -right-5 -top-5","aria-label":"delete",onClick:e=>{e.preventDefault(),r({type:"deletePhoto",payload:{id:t.id}})},children:(0,a.jsx)(u.Z,{color:"disabled"})}),(0,a.jsx)("img",{src:t.src,alt:t.id,width:"300",className:"object-scale-down"})]})},x=e=>{let{photos:t,dispatch:r}=e;return(0,a.jsx)("div",{className:"p-10 flex gap-5 justify-center flex-wrap",children:!!t&&t.length>0&&t.map(e=>(0,a.jsx)(f,{photo:e,dispatch:r},e.id))})},m={addPhoto:"addPhoto",deletePhoto:"deletePhoto"};function v(e,t){switch(t.type){case m.addPhoto:return{...e,photos:[...e.photos,t.payload]};case m.deletePhoto:return{...e,photos:e.photos.filter(e=>e.id!==t.payload.id)};default:return e}}function j(){let[e,t]=(0,i.useReducer)(v,{photos:[]});return(0,a.jsxs)("div",{children:[(0,a.jsx)(h,{dispatch:t}),(0,a.jsx)(x,{photos:e.photos,dispatch:t})]})}}},function(e){e.O(0,[196,120,244,744],function(){return e(e.s=2777)}),_N_E=e.O()}]);