(this.webpackJsonpadminui=this.webpackJsonpadminui||[]).push([[0],{62:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(11),i=c.n(a),l=c(34),s=c(7),j=c(31),o=c.n(j),d=c(65),u=c(66),b=c(33),h=c(64),O=c(67),f=c(21),x=c(12),m=c(68),p=c(1);function g(e){var t=Object(n.useState)(e.details.name),c=Object(s.a)(t,2),r=c[0],a=c[1],i=Object(n.useState)(e.details.email),l=Object(s.a)(i,2),j=l[0],o=l[1],d=Object(n.useState)(e.details.role),u=Object(s.a)(d,2),b=u[0],O=u[1];return Object(p.jsxs)(x.a,Object(f.a)(Object(f.a)({},e),{},{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(p.jsx)(x.a.Header,{closeButton:!0,children:Object(p.jsx)(x.a.Title,{id:"contained-modal-title-vcenter",children:"Edit User Details"})}),Object(p.jsx)(x.a.Body,{children:Object(p.jsxs)(m.a,{children:[Object(p.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(m.a.Label,{children:"User Name"}),Object(p.jsx)(m.a.Control,{type:"text",value:r,onChange:function(e){a(e.target.value)}})]}),Object(p.jsxs)(m.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(m.a.Label,{children:"User Email"}),Object(p.jsx)(m.a.Control,{type:"text",value:j,onChange:function(e){o(e.target.value)}})]}),Object(p.jsxs)(m.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(m.a.Label,{children:"User Role"}),Object(p.jsx)(m.a.Control,{type:"text",value:b,onChange:function(e){O(e.target.value)}})]}),Object(p.jsx)(h.a,{variant:"primary",type:"submit",onClick:function(t){!function(t){t.preventDefault(),e.updateUser({id:e.details.id,name:r,email:j,role:b}),e.onHide()}(t)},children:"Update"})]})}),Object(p.jsx)(x.a.Footer,{children:Object(p.jsx)(h.a,{onClick:e.onHide,children:"Close"})})]}))}var v=function(e){var t=e.user,c=e.setDeleteUser,r=e.delMultiple,a=e.isCheckedAll,i=e.updateUser,l=Object(n.useState)(!1),j=Object(s.a)(l,2),o=j[0],d=j[1],u=Object(n.useState)(!1),b=Object(s.a)(u,2),h=b[0],O=b[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("tr",{style:{color:a||o?"#0275d8":"black"},children:[Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"checkbox",value:t.id,onChange:function(e){d(e.currentTarget.checked),r(e.currentTarget.checked,t.id)},checked:a||o})}),Object(p.jsx)("td",{children:t.name}),Object(p.jsx)("td",{children:t.email}),Object(p.jsx)("td",{children:t.role}),Object(p.jsxs)("td",{children:[Object(p.jsx)("i",{className:"far fa-edit",style:{marginRight:"10px"},onClick:function(){return O(!0)}}),Object(p.jsx)("i",{className:"fa fa-trash",onClick:function(){c(t.id)}})]})]}),Object(p.jsx)(g,{show:h,details:t,updateUser:i,onHide:function(){return O(!1)}})]})};function y(e){var t=e.setCheck,c=e.checkAll;return Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:Object(p.jsx)("input",{type:"checkbox",onChange:function(e){c(e.currentTarget.checked)},checked:t})}),Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Role"}),Object(p.jsx)("th",{children:"Email"}),Object(p.jsx)("th",{children:"Actions"})]})})}var C=c(69),k=function(e){var t=e.total,c=void 0===t?0:t,r=e.itemsPerPage,a=void 0===r?5:r,i=e.currentPage,l=void 0===i?1:i,j=e.onPageChange,o=Object(n.useState)(0),d=Object(s.a)(o,2),u=d[0],b=d[1];Object(n.useEffect)((function(){c>0&&a>0&&b(Math.ceil(c/a))}),[c,a]);var h=Object(n.useMemo)((function(){for(var e=[],t=function(t){e.push(Object(p.jsx)(C.a.Item,{active:t===l,onClick:function(){return j(t)},children:t},t))},c=1;c<=u;c++)t(c);return e}),[u,l,j]);return 0===u?null:Object(p.jsxs)(C.a,{children:[Object(p.jsx)(C.a.Prev,{onClick:function(){return j(l-1)},disabled:1===l}),h,Object(p.jsx)(C.a.Next,{onClick:function(){return j(l+1)},disabled:l===u})]})},S="delete_one",A="delete_multiple",w="delete_all",N="update_user",U="get_data";function L(e,t){switch(t.type){case S:return e.filter((function(e){return e.id!==t.id}));case N:return e.map((function(e){return e.id===t.filterArray.id&&(e.name=t.filterArray.name,e.email=t.filterArray.email,e.role=t.filterArray.role),e}));case U:return t.payload.users;case A:for(var c=function(c){e=e.filter((function(e){return e.id!==t.filterArray[c]}))},n=0;n<t.filterArray.length;n++)c(n);return e;case w:for(var r=function(c){e=e.filter((function(e){return e.id!==t.filterArray[c].id}))},a=0;a<t.filterArray.length;a++)r(a);return e;default:return e}}c(61);var P=function(){Object(n.useEffect)((function(){o.a.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then((function(e){r({type:"get_data",payload:{users:e.data}})}))}),[]);var e=Object(n.useReducer)(L,[]),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),i=Object(s.a)(a,2),j=i[0],f=i[1],x=Object(n.useState)(1),m=Object(s.a)(x,2),g=m[0],C=m[1],S=Object(n.useState)(""),A=Object(s.a)(S,2),w=A[0],N=A[1],U=Object(n.useState)([]),P=Object(s.a)(U,2),E=P[0],_=P[1],B=Object(n.useState)(!1),M=Object(s.a)(B,2),R=M[0],D=M[1],I=Object(n.useMemo)((function(){var e=c;return f(e.length),w&&(e=e.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())||e.email.toLowerCase().includes(w.toLowerCase())||e.role.toLowerCase().includes(w.toLowerCase())})),f(e.length)),e.slice(10*(g-1),10*(g-1)+10)}),[c,g,w]);function T(e){r({type:"update_user",filterArray:e})}return c.length>0&&0===I.length&&g>1&&C(g-1),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"text-center",children:"ADMIN TABLE"}),Object(p.jsxs)(d.a,{variant:"secondary",children:[c.length>0?Object(p.jsxs)(u.a,{className:"row justify-content-md-center",children:[Object(p.jsx)(b.a,{xs:12,md:5,children:Object(p.jsx)("input",{type:"text",className:"form-control",style:{width:"240px"},placeholder:"Search",value:w,onChange:function(e){return N(e.target.value)}})}),Object(p.jsx)(b.a,{xs:6,md:4,children:Object(p.jsx)(h.a,{onClick:function(){N("")},children:"Clear Search"})})]}):null,Object(p.jsx)(u.a,{className:"row justify-content-md-center",children:I.length>0?Object(p.jsxs)(O.a,{responsive:!0,hover:!0,children:[Object(p.jsx)(y,{setCheck:R,checkAll:function(e){D(e)}}),Object(p.jsx)("tbody",{children:Object(p.jsx)(p.Fragment,{children:I.map((function(e){return Object(p.jsx)(v,{user:e,setDeleteUser:function(e){r({type:"delete_one",id:e}),N("")},delMultiple:function(e,t){!function(e,t){if(e)_([].concat(Object(l.a)(E),[t]));else{var c=E.filter((function(e){return e!==t}));_(c)}}(e,t)},isCheckedAll:R,updateUser:T},e.id)}))})})]}):0===c.length?Object(p.jsx)("h1",{children:"NO USERSs"}):0===j?Object(p.jsxs)("h1",{children:["NO RESULTS FOR '",w,"'"]}):Object(p.jsx)("h1",{children:"Loading"})}),Object(p.jsxs)(u.a,{className:"row justify-content-md-center",children:[Object(p.jsx)(b.a,{sm:12,md:5,children:c.length>0&&j>0?Object(p.jsx)(h.a,{variant:"danger",onClick:function(){r(R?{type:"delete_all",filterArray:I}:{type:"delete_multiple",filterArray:E}),D(!1),N("")},children:"Delete Selected"}):null}),Object(p.jsx)(b.a,{children:c.length>0&&j>0?Object(p.jsx)(k,{total:j,itemsPerPage:10,currentPage:g,onPageChange:function(e){return C(e)}}):null})]})]})]})};var E=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(P,{})})};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.9827414c.chunk.js.map