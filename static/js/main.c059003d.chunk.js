(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),s=a(7),c=a(6),l=a(1),o=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=a(9),u=a.n(d),m=a(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},b=function(e){var t=e.todo;return Object(m.jsxs)("article",{"data-id":t.id,className:u()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(m.jsx)(j,{user:t.user})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},O=function(e){return o.find((function(t){return t.id===e}))||null},p=function(e){var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(c.a)(t))+1},f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:O(e.userId)})})),x=function(){var e=Object(l.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(0),s=Object(r.a)(i,2),d=s[0],u=s[1],j=Object(l.useState)(!1),b=Object(r.a)(j,2),x=b[0],v=b[1],y=Object(l.useState)(!1),S=Object(r.a)(y,2),N=S[0],I=S[1],g=Object(l.useState)(f),C=Object(r.a)(g,2),_=C[0],T=C[1],k={id:p(_),userId:d,title:a,completed:!1,user:O(d)};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),a||v(!0),d||I(!0),a&&0!==d&&(T([].concat(Object(c.a)(_),[k])),n(""),u(0))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:["Title:",Object(m.jsx)("input",{type:"text",name:"title",placeholder:"Please enter a title","data-cy":"titleInput",value:a,pattern:"^[a-zA-Z\u0410-\u042f\u0430-\u044f\u0401\u04510-9\\s]+$",title:"Title should contain RU or EN letters, spaces and digits",onChange:function(e){n(e.target.value),v(!1)}})]}),x&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsx)("div",{className:"field",children:Object(m.jsxs)("label",{children:["User:",Object(m.jsxs)("select",{name:"user","data-cy":"userSelect",value:d,onChange:function(e){u(+e.target.value),I(!1)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),o.map((function(e){var t=e.id,a=e.name;return Object(m.jsx)("option",{value:t,children:a},t)}))]}),N&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]})}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:_})]})};i.a.render(Object(m.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c059003d.chunk.js.map