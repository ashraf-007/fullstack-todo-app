(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{29:function(e,t,a){e.exports=a(68)},34:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),l=a(4),s=(a(34),a(2)),i=a(26),d=a.n(i),u=a(10),p=a(1),m=a(5),f=a.n(m),b=a(7),h=a(28),g=function(e,t){switch(t.type){case"TOGGLE_COMPLETED":return Object(s.a)(Object(s.a)({},e),{},{todos:e.todos.map((function(e){return e._id===t.payload._id?t.payload:e})),todoCount:e.todoCount});case"GET_TODOS":return Object(s.a)(Object(s.a)({},e),{},{todos:t.payload});case"ADD_TODO":return Object(s.a)(Object(s.a)({},e),{},{todos:[t.payload].concat(Object(h.a)(e.todos)),todoCount:e.todoCount});case"DELETE_TODO":return Object(s.a)(Object(s.a)({},e),{},{todos:e.todos.filter((function(e){return e._id!==t.payload}))});case"DELETE_ALL":return Object(s.a)(Object(s.a)({},e),{},{todos:e.todos.filter((function(e){return!e.completed}))});case"CONTROL_TODOS":case"NEW":return Object(s.a)(Object(s.a)({},e),{},{todos:t.payload});default:return e}},O=a(8),E=a.n(O),v=Object(n.createContext)(),y={todos:[],todoCount:0},k=function(e){var t=e.children,a=Object(n.useReducer)(g,y),r=Object(l.a)(a,2),c=r[0],s=r[1];function i(){return(i=Object(b.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://todo-app-server2.herokuapp.com/todos");case 3:t=e.sent,a=t.data,s({type:"GET_TODOS",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error in Geting Todos from Server : ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(){return(d=Object(b.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-type":"application/json"}},e.prev=1,e.next=4,E.a.post("https://todo-app-server2.herokuapp.com/todos",t,a);case 4:s({type:"ADD_TODO",payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("Post error message : ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function u(){return(u=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.delete("https://todo-app-server2.herokuapp.com/todos/".concat(t));case 3:s({type:"DELETE_TODO",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error in deleting a Todo ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function p(){return(p=Object(b.a)(f.a.mark((function e(t,a){var n,o,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-type":"application/json"}},e.prev=1,e.next=4,E.a.patch("https://todo-app-server2.herokuapp.com/todos/".concat(t," "),a,n);case 4:o=e.sent,r=o.data,s({type:"TOGGLE_COMPLETED",payload:r.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Updating completed error : ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function m(){return(m=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.delete("https://todo-app-server2.herokuapp.com/todos");case 3:t=e.sent,s({type:"DELETE_ALL",payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error in deleting All ...",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return o.a.createElement(v.Provider,{value:{todos:c.todos,getTodos:function(){return i.apply(this,arguments)},addTodo:function(e){return d.apply(this,arguments)},deleteTodo:function(e){return u.apply(this,arguments)},toggleCompleted:function(e,t){return p.apply(this,arguments)},getItems:function(e){try{s({type:"NEW",payload:e})}catch(t){console.log("Error in getting items from onDragEnd : ",t)}},deleteCompleted:function(){return m.apply(this,arguments)}}},t)};function j(e){var t=Object(n.useContext)(v).addTodo,a=Object(n.useRef)(null);Object(n.useEffect)((function(){u.a.fromTo(a,2.2,{y:-30,ease:p.a.easeOut},{y:0,ease:p.a.easeOut})}),[]);var r=Object(n.useState)(""),c=Object(l.a)(r,2),s=c[0],i=c[1],m={backgroundColor:e.dark?"hsl(235, 24%, 19%)":"hsl(0, 0%, 98%)",color:e.dark?"hsl(236, 33%, 92%)":"hsl(235, 19%, 35%)",transition:"background 0.4s ease"};return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({_id:d.a.generate(),text:s,completed:!1}),i("")}},o.a.createElement("input",{spellCheck:"false",autoComplete:"off",ref:function(e){return a=e},onChange:function(e){var t=e.target.value,a=t.slice(0,1).toUpperCase()+t.substring(1);i(a)},className:"main-input",style:m,type:"text",name:"text",id:"input",value:s,placeholder:"Create new Todo..."}))}var x=function(e){var t=e.onComplete,a=e.todo,n=e.dark,r=e.deleteTodo,c=(e.key,e.index,e.provided),l={backgroundColor:n?"hsl(235, 24%, 19%)":"white",transition:"background 0.4s ease"};return o.a.createElement("div",Object.assign({},c.draggableProps,c.dragHandleProps,{ref:c.innerRef,style:l,className:"todo-item"}),o.a.createElement("div",{className:"todo-text"},o.a.createElement("div",{className:"container"},o.a.createElement("input",{onClick:t,defaultChecked:a.completed,type:"checkbox",name:"checkbox",id:"checkbox"}),o.a.createElement("p",{id:"paragraph",style:{textDecoration:a.completed?"line-through":"none",opacity:a.completed?.3:1,color:n?"hsl(233, 11%, 84%)":"hsl(235, 19%, 35%)"}},a.text))),o.a.createElement("img",{onClick:function(){r(a._id)},className:"iconx",src:"./images/icon-cross.svg",alt:""}))},C=a(13);function T(e){var t=e.dark,a=Object(n.useContext)(v),r=a.todos,c=a.getTodos,i=a.addTodo,d=a.deleteTodo,m=a.toggleCompleted,f=a.deleteCompleted,b=a.getItems,h=Object(n.useState)(""),g=Object(l.a)(h,2),O=g[0],E=g[1],y=Object(n.useState)([]),k=Object(l.a)(y,2),T=k[0],D=k[1],w=Object(n.useState)(0),_=Object(l.a)(w,2),N=_[0],A=_[1],L=Object(n.useRef)(null),S=Object(n.useRef)(null);Object(n.useEffect)((function(){c(),u.a.fromTo(L,2.2,{opacity:0,ease:p.c.easeOut},{opacity:1,ease:p.c.easeOut}),u.a.fromTo(S,2.2,{y:40,ease:p.a.easeOut},{y:0,ease:p.a.easeOut})}),[]),Object(n.useEffect)((function(){!function(){"All"===O&&D(r);"Active"===O&&D(r.filter((function(e){return!e.completed})));"Completed"===O&&D(r.filter((function(e){return e.completed})));console.log(" Displaying ".concat(O," Todos  "))}(),A(r.filter((function(e){return!1===e.completed})).length)}),[O]),Object(n.useEffect)((function(){D(r),A(r.filter((function(e){return!1===e.completed})).length)}),[r]);var I={backgroundColor:t?"hsl(235, 24%, 19%)":"white",borderRadius:"0 0 5px 5px",transition:"background 0.4s ease",boxShadow:"0 3px 10px -5px black"};return o.a.createElement("div",{style:{zIndex:"677"}},o.a.createElement(j,{dark:t,onSubmit:i}),o.a.createElement("div",{ref:function(e){return L=e},style:{backgroundColor:t?"hsl(235, 24%, 19%)":"white",transition:"background 0.4s ease",boxShadow:"0 5px 12px -5px black"},className:"todo-list"},o.a.createElement(C.a,{onDragEnd:function(e){if(e.destination){var t=Array.from(T),a=t.splice(e.source.index,1),n=Object(l.a)(a,1)[0];t.splice(e.destination.index,0,n),b(t),D(t)}}},o.a.createElement(C.c,{droppableId:"main"},(function(e){return o.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),T.map((function(e,a){return o.a.createElement(C.b,{key:e._id,draggableId:e._id,index:a},(function(a){return o.a.createElement("div",Object.assign({},a.draggableProps,a.dragHandleProps,{ref:a.innerRef}),o.a.createElement(x,{provided:a,dark:t,todo:e,deleteTodo:d,onComplete:function(){m(e._id,Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}))}}))}))})),e.placeholder)})))),o.a.createElement("div",{ref:function(e){return S=e},style:I,className:"bottom-items"},o.a.createElement("p",{style:{color:t?"hsl(236, 33%, 92%)":"hsl(237, 14%, 26%)",fontWeight:"600"}},N," items left"),o.a.createElement("div",{className:"btns"},o.a.createElement("button",{onClick:function(){E("All")},name:"All"},"All"),o.a.createElement("button",{onClick:function(){E("Active")},name:"Active"},"Active"),o.a.createElement("button",{onClick:function(){A(r.filter((function(e){return!1===e.completed})).length),E("Completed")},name:"Completed"},"Completed")),o.a.createElement("button",{style:{fontWeight:"600"},onClick:function(){return f()},name:"Clear Completed"},"Clear Completed")))}var D=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],r=t[1],c={display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:a?"hsl(235, 21%, 11%)":"hsl(236, 33%, 92%)",position:"relative",width:"100%",minHeight:"100vh",zIndex:"40"};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:c},o.a.createElement("img",{style:{transition:"all 0.8s ease"},className:"bg-image",src:a?"./images/bg-desktop-dark.jpg":"./images/bg-desktop-light.jpg",alt:""}),o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"TODO"),o.a.createElement("img",{style:{zIndex:"40"},onClick:function(){return r(!a)},id:"switch",className:"image",src:a?"images/icon-sun.svg":"images/icon-moon.svg",alt:""})),o.a.createElement("div",{className:"todo-section",style:{zIndex:"40"}},o.a.createElement(k,null,o.a.createElement(T,{dark:a}))),o.a.createElement("div",{style:{marginTop:"20px"},className:"attribution"},o.a.createElement("h5",{style:{color:"hsl(235, 19%, 35%)"}},"Drag and drop to reorder list"),o.a.createElement("p",{style:{color:"hsl(235, 19%, 35%)"}},"Challenge Coded by "),o.a.createElement("p",{style:{color:"hsl(235, 19%, 35%)"}},"Ashraf Ben Moumou ")))))},w=document.getElementById("root");c.a.render(o.a.createElement(D,null),w)}},[[29,1,2]]]);
//# sourceMappingURL=main.301eb4a1.chunk.js.map