(this["webpackJsonpreact-ts"]=this["webpackJsonpreact-ts"]||[]).push([[0],{199:function(e,t,a){e.exports=a(374)},205:function(e,t,a){},230:function(e,t,a){},369:function(e,t,a){},374:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=a(64),o=a(11),m=a(375),s=(a(204),a(55)),u=a(386),d=a(387),h=a(388),E=(a(205),m.a.Header),f=function(){var e=Object(o.g)(),t=Object(o.f)();return r.a.createElement(E,null,r.a.createElement("div",{className:"logo",onClick:function(){return t.push("".concat("/react-ts-antd","/"))}},r.a.createElement(u.a,null)," React + TS"),r.a.createElement(s.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["".concat("/react-ts-antd","/")],selectedKeys:[e.pathname],className:"nav"},r.a.createElement(s.a.Item,{key:"".concat("/react-ts-antd","/")},r.a.createElement(i.b,{to:"".concat("/react-ts-antd","/")},r.a.createElement(d.a,{style:{fontSize:"20px",margin:0}}))),r.a.createElement(s.a.Item,{key:"".concat("/react-ts-antd","/about")},r.a.createElement(i.c,{to:"".concat("/react-ts-antd","/about")},r.a.createElement(h.a,{style:{fontSize:"20px",margin:0}})))))},p=a(196),g=a(113),b=a(172),y=a(20),k=a.n(y),v=a(379),w=a(381),x=a(378),j=a(383),O=a(76),S=a(376),F=a(18),I=a(389),D=a(390),N=(a(230),{labelCol:{span:10},wrapperCol:{span:4}}),C=function(e){var t=e.onFinish,a=v.a.useForm(),n=Object(g.a)(a,1)[0];return r.a.createElement("div",{className:"site-layout-content"},r.a.createElement(v.a,Object.assign({},N,{form:n,name:"control-hooks",onFinish:t}),r.a.createElement(v.a.Item,{name:"name",label:"Name",rules:[{required:!0}]},r.a.createElement(w.a,{placeholder:"Enter the name"})),r.a.createElement(v.a.Item,{label:"* Date of Birth",style:{marginBottom:0}},r.a.createElement(v.a.Item,{name:"DoB",style:{display:"inline-block",width:"calc(60% - 12px)"},rules:[{type:"object",required:!0,message:"Date of Birth is required"}]},r.a.createElement(x.a,{defaultPickerValue:k()().subtract(20,"years")})),r.a.createElement("span",{style:{display:"inline-block",width:"calc(33% - 12px)",lineHeight:"32px",textAlign:"center"}},"Gender:"),r.a.createElement(v.a.Item,{name:"gender",valuePropName:"checked",style:{display:"inline-block"}},r.a.createElement(j.a,{className:"rose",checkedChildren:r.a.createElement(I.a,null),unCheckedChildren:r.a.createElement(D.a,null),defaultChecked:!0}))),r.a.createElement(O.a,{justify:"center"},r.a.createElement(v.a.Item,null,r.a.createElement(S.a,null,r.a.createElement(F.a,{type:"primary",htmlType:"submit"},"Submit"),r.a.createElement(F.a,{htmlType:"button",onClick:function(){n.resetFields()}},"Reset"),r.a.createElement(F.a,{type:"link",htmlType:"button",onClick:function(){n.setFieldsValue({name:"Ruslan",gender:!0,DoB:k()("1992-10-10","YYYY-MM-DD")})}},"Fill form"))))))},B=a(384),R=a(32),T=a(377),_=a(391),z=function(e){var t=e.data,a=e.handleDelete,n=[{title:"Name",dataIndex:"name",sorter:function(e,t){return e.name>t.name?1:-1},width:"20%"},{title:"Age",dataIndex:"age",sorter:function(e,t){return e.age-t.age},width:"15%"},{title:"Gender",dataIndex:"gender",filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}],onFilter:function(e,t){return t.gender===e},width:"20%"},{title:"Date of Birth",dataIndex:"dob"},{align:"center",render:function(e,n){return t.length>=1?r.a.createElement(B.a,{title:"Sure to delete?",onConfirm:function(){return a(n.key)}},r.a.createElement(F.a,{type:"primary",shape:"circle",icon:r.a.createElement(_.a,null),danger:!0})):null}}];return r.a.createElement(O.a,{style:{background:"white"}},r.a.createElement(R.a,{md:{span:12,offset:6},xs:{span:24}},r.a.createElement(T.a,{columns:n,dataSource:t,pagination:{defaultPageSize:5},bordered:!0})))},J=function(){var e=function e(t,a,n,r){Object(b.a)(this,e),this.name=void 0,this.gender=void 0,this.dob=void 0,this.age=void 0,this.key=void 0,this.name=t,this.gender=a?"male":"female",this.dob=n.format("LL"),this.key=r||c.length+1,this.age=k()().diff(this.dob,"years")},t=[new e("Ruslan",!0,k()("October 10, 1992"),1),new e("Natasha",!1,k()("December 8, 1992"),2)],a=Object(n.useState)(t),l=Object(g.a)(a,2),c=l[0],i=l[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("data")||JSON.stringify(c));i(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("data",JSON.stringify(c))}),[c]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{onFinish:function(t){var a=t.name,n=t.DoB,r=t.gender;void 0===r&&(r=!0);var l=new e(a,r,n);i((function(e){return[].concat(Object(p.a)(e),[l])}))}}),r.a.createElement(z,{data:c,handleDelete:function(e){i(c.filter((function(t){return t.key!==e})))}}))},q=a(382),A=a(380),M=a(385),P=(a(369),q.a.Link),Y=Object(M.a)({scriptUrl:"//at.alicdn.com/t/font_1849843_v5x82qchzy.js"}),G=function(){var e=Object(o.f)();return r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(O.a,null,r.a.createElement(R.a,{md:{span:8,offset:8},xs:{span:24}},r.a.createElement(A.a,{title:"React + TS + Ant Design app"},r.a.createElement(q.a,null,r.a.createElement(P,{href:"https://reactjs.org/",target:"_blank",title:r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{type:"icon-react"})," React ")}),r.a.createElement(P,{href:"https://www.typescriptlang.org/index.html",target:"_blank",title:r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{type:"icon-typescript-def"})," TypeScript ")}),r.a.createElement(P,{href:"https://ant.design/",target:"_blank",title:r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{type:"icon-antdesign"})," Ant Design ")}),r.a.createElement(P,{href:"https://github.com/NiuRuslan/react-ts-antd",target:"_blank",title:r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{type:"icon-github"})," GitHub ")})),r.a.createElement("br",null),r.a.createElement(F.a,{block:!0,onClick:function(){return e.push("".concat("/react-ts-antd","/"))}},"Main Page")))))},H=m.a.Content;var L=function(){return r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(f,null),r.a.createElement(H,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{component:G,path:"/about"}),r.a.createElement(o.a,{component:J,path:"/"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[199,1,2]]]);
//# sourceMappingURL=main.e69aecc9.chunk.js.map