(this["webpackJsonpnpm-react"]=this["webpackJsonpnpm-react"]||[]).push([[6],{232:function(e,t,n){e.exports={formControl:"formsControls_formControl__2nbfC",error:"formsControls_error__2j6e4",formSummeryError:"formsControls_formSummeryError__29F9n"}},233:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},234:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return f}));var r=n(63),a=n(0),c=n.n(a),o=n(232),i=n.n(o),u=n(115),l=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,o=e.children,u=(Object(r.a)(e,["input","meta","children"]),n&&a);return c.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:"")},c.a.createElement("div",null,o),u&&c.a.createElement("span",null,a))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return c.a.createElement(l,e,c.a.createElement("textarea",Object.assign({},t,n)))},s=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return c.a.createElement(l,e,c.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};arguments.length>5&&void 0!==arguments[5]&&arguments[5];return c.a.createElement("div",null,c.a.createElement(u.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a,{text:!0})))}},301:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(116),o=n(234),i=n(233),u=n(16),l=n(29),m=n(19),s=n(232),f=n.n(s),d=Object(c.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(o.c)("Email","email",[i.b],o.a),Object(o.c)("Password","password",[i.b],o.a,{type:"password"}),Object(o.c)(null,"rememberMe",[],o.a,{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:f.a.formSummeryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}));t.default=Object(u.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:l.c})((function(e){return e.isAuth?a.a.createElement(m.a,{to:"/content"}):a.a.createElement("div",null,a.a.createElement("h1",null,"LOGIN"),a.a.createElement(d,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}))}}]);
//# sourceMappingURL=6.c016e94c.chunk.js.map