(this["webpackJsonpnpm-react"]=this["webpackJsonpnpm-react"]||[]).push([[1],{143:function(e,t,n){e.exports=n(232)},148:function(e,t,n){},149:function(e,t,n){},232:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(44),c=n.n(u);n(148),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(21),s=n(22),i=n(24),A=n(23),l=(n(149),n(8)),p=n.n(l),f=n(9),d=function(){return r.a.createElement("nav",{className:p.a.nav},r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"/content",activeClassName:p.a.activeLink},"Profile")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},r.a.createElement(f.b,{to:"/dialogs",activeClassName:p.a.activeLink},"Messages")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},r.a.createElement(f.b,{to:"/user",activeClassName:p.a.activeLink},"Users")),r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"/news",activeClassName:p.a.activeLink},"News in the World")),r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"/musik",activeClassName:p.a.activeLink},"Musik")),r.a.createElement("div",{className:p.a.item},r.a.createElement(f.b,{to:"settings",activeClassName:p.a.activeLink},"Settings")))},m=n(19),v=n(3),g=n.n(v),b=n(7),h=n(30),E=n(5),S=n(6),O=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(E.a)({},e,{},a):e}))},P={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},w=function(e){return{type:"FOLLOW",userId:e}},y=function(e){return{type:"UNFOLLOW",userId:e}},j=function(e){return{type:"SET_CURENT_PAGE",currentPage:e}},T=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},L=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS;",isFetching:e,userId:t}},z=function(){var e=Object(b.a)(g.a.mark((function e(t,n,a,r){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(L(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(L(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(E.a)({},e,{users:O(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(E.a)({},e,{users:O(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(E.a)({},e,{users:t.users});case"SET_TOTAL_USERS_COUNT":return Object(E.a)({},e,{totalUsersCount:t.count});case"SET_CURENT_PAGE":return Object(E.a)({},e,{currentPage:t.currentPage});case"TOGGLE_IS_FETCHING":return Object(E.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS;":return Object(E.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(h.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},C=n(88),U=Object(C.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),N=function(e){return e.usersPage.pageSize},k=function(e){return e.usersPage.totalUsersCount},W=function(e){return e.usersPage.currentPage},F=function(e){return e.usersPage.isFetching},q=function(e){return e.usersPage.followingInProgress},I=n(18),Z=n(63),J=n(48),V=n.n(J),X=n(57),H=n.n(X),G=n(47),K=n(69),R=n(49),M=n.n(R),B=n(90),D=n.n(B),Q=function(e){for(var t=e.totalItemsCount,n=e.pageSize,u=e.currentPage,c=e.onPageChanged,o=e.portionSize,s=void 0===o?10:o,i=Math.ceil(t/n),A=[],l=1;l<=i;l++)A.push(l);var p=Math.ceil(i/s),f=Object(a.useState)(1),d=Object(K.a)(f,2),m=d[0],v=d[1],g=(m-1)*s+1,b=m*s;return r.a.createElement("div",{className:M.a.paginator},m>1&&r.a.createElement("button",{onClick:function(){v(m-1)}},"PREV"),A.filter((function(e){return e>=g&&e<=b})).map((function(e){return r.a.createElement("span",{className:D()(Object(G.a)({},M.a.selectedPage,u===e),M.a.pageNumber),key:e,onClick:function(t){c(e)}},e)})),p>m&&r.a.createElement("button",{onClick:function(){v(m+1)}},"NEXT"))},Y=function(e){var t=e.user,n=e.followingInProgres,a=e.unfollow,u=e.follow;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:V.a.wrapper},r.a.createElement("div",null,r.a.createElement(f.b,{to:/content/+t.id},r.a.createElement("img",{alt:"user-face",src:null!=t.photos.small?t.photos.small:H.a,className:V.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"unfollowe"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){u(t.id)}},"followed")),r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status),r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city"))))},_=function(e){for(var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,u=e.onPageChanged,c=e.users,o=Object(Z.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","users"]),s=Math.ceil(t/n),i=[],A=1;A<=s;A++)i.push(A);return r.a.createElement("div",null,r.a.createElement(Q,{totalItemsCount:t,pageSize:n,currentPage:a,onPageChanged:u}),c.map((function(e){return r.a.createElement(Y,{key:e.id,user:e,followingInProgres:o.followingInProgres,follow:o.follow,unfollow:o.unfollow})})))},$=n(45),ee=(n(97),n(15)),te=function(e){Object(i.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props;e.props.requestUsers(t,n)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){if(0===this.props.users.length){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching&&r.a.createElement($.a,null),r.a.createElement(_,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgres:this.props.followingInProgres}))}}]),n}(r.a.Component),ne=Object(ee.d)(Object(I.b)((function(e){return{users:U(e),pageSize:N(e),totalUsersCount:k(e),currentPage:W(e),isFetching:F(e),followingInProgres:q(e)}}),{follow:function(e){return function(){var t=Object(b.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=z,t.t1=n,t.t2=e,t.next=5,S.d.follow.bind(e);case 5:t.t3=t.sent,t.t4=w,(0,t.t0)(t.t1,t.t2,t.t3,t.t4);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(b.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=z,t.t1=n,t.t2=e,t.next=5,S.d.unfollow.bind(e);case 5:t.t3=t.sent,t.t4=y,(0,t.t0)(t.t1,t.t2,t.t3,t.t4);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:j,toggleFollowingProgress:L,requestUsers:function(e,t){return function(){var n=Object(b.a)(g.a.mark((function n(a){var r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(j(e)),a(T(!0)),n.next=4,S.d.getUsers(e,t);case 4:r=n.sent,a(T(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(te),ae=n(60),re=n.n(ae),ue=function(e){return r.a.createElement("header",{className:re.a.header},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55hUJBQypwhxOO6dsifvOqoAWzJk2KHqO1ECcEnFRXAgkRTXpwA&s",width:"5%",alt:"sea"}),r.a.createElement("div",{className:re.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," ",r.a.createElement("button",{onClick:e.logout},"Logout")):r.a.createElement(f.b,{to:"/login"},"Login")))},ce=n(29),oe=function(e){Object(i.a)(n,e);var t=Object(A.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(ue,this.props)}}]),n}(r.a.Component),se=Object(I.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:ce.d})(oe),ie={initialized:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED_SUCCES":return Object(E.a)({},e,{initialized:!0});default:return e}},le=n(79),pe=n(64),fe=n(92),de=n(85),me=Object(ee.c)({dialogsPage:le.a,profilePage:pe.b,usersPage:x,auth:ce.a,form:de.a,app:Ae}),ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.d,ge=Object(ee.e)(me,ve(Object(ee.a)(fe.a))),be=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,303))})),he=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,304))})),Ee=r.a.lazy((function(){return n.e(7).then(n.bind(null,299))})),Se=r.a.lazy((function(){return n.e(8).then(n.bind(null,300))})),Oe=r.a.lazy((function(){return n.e(9).then(n.bind(null,301))})),Pe=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,302))})),we=function(e){Object(i.a)(n,e);var t=Object(A.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"wrapper"},r.a.createElement(se,null),r.a.createElement(d,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(m.b,{path:"/user",render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Please wait! Loading...")},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement(m.a,{to:"/content"})}}),r.a.createElement(m.b,{path:"/dialogs",render:function(){return r.a.createElement(he,null)}}),r.a.createElement(m.b,{path:"/content/:userId?",render:function(){return r.a.createElement(be,null)}}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(Pe,null)}}),r.a.createElement(m.b,{path:"/news",component:Se}),r.a.createElement(m.b,{path:"/musik",component:Ee}),r.a.createElement(m.b,{path:"/settings",component:Oe}),r.a.createElement(m.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}}))))):r.a.createElement($.a,null)}}]),n}(a.Component),ye=Object(ee.d)(m.g,Object(I.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(ce.b)());Promise.all([t]).then((function(){e({type:"SET_INITIALIZED_SUCCES"})}))}}}))(we),je=function(e){return r.a.createElement(f.a,null,r.a.createElement(I.a,{store:ge},r.a.createElement(ye,null)))};c.a.render(r.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return v}));var a=n(3),r=n.n(a),u=n(7),c=n(5),o=n(6),s=n(31),i="samurai-nerwork/auth/SET_USER_DATA",A={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},l=function(e,t,n,a){return{type:i,data:{userId:e,email:t,login:n,isAuth:a}}},p=function(e){return{type:"samurai-nerwork/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},f=function(){return function(){var e=Object(u.a)(r.a.mark((function e(t){var n,a,u,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.me();case 2:n=e.sent,a=n.data.data,u=a.id,c=a.email,s=a.login,0===n.data.resultCode&&t(l(u,c,s,!0));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n,a){return function(){var c=Object(u.a)(r.a.mark((function u(c){var i,A;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.login(e,t,n,a);case 2:0===(i=r.sent).data.resultCode?c(f("login",{email:"Email is wrong"})):(10===i.data.resultCode&&c(m()),A=i.data.messages.length>0?i.data.messages[0]:"some error",c(Object(s.a)("login",{_error:A})));case 4:case"end":return r.stop()}}),u)})));return function(e){return c.apply(this,arguments)}}()},m=function(){return function(){var e=Object(u.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(p(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var e=Object(u.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(c.a)({},e,{},t.data);case"samurai-nerwork/auth/GET_CAPTCHA_URL_SUCCESS":return Object(c.a)({},e,{},t.payload);default:return e}}},45:function(e,t,n){"use strict";var a=n(0),r=n.n(a),u=n(91),c=n.n(u);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:c.a}))}},48:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2Kq4X",wrapper:"users_wrapper__3uWRu"}},49:function(e,t,n){e.exports={paginator:"paginator_paginator__3NJ7x",pageNumber:"paginator_pageNumber__1kc7c",selectedPage:"paginator_selectedPage__1CtkL"}},57:function(e,t){e.exports="data:image/jpeg;base64,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"},6:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s}));var a=n(87),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"ce4283be-0853-4f9a-a13a-373054a954a3"}}),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e),{})},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("absolete method. Please use profileAPI object"),c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},o={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},s={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},60:function(e,t,n){e.exports={header:"header_header__1ct-j",loginBlock:"header_loginBlock__3J7eF"}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return g}));var a=n(3),r=n.n(a),u=n(7),c=n(30),o=n(5),s=n(6),i=n(31),A={posts:[{id:1,message:"Hello!",likesCounte:15},{id:2,message:"how are you!",likesCounte:20},{id:3,message:"Very vell!",likesCounte:18},{id:4,message:"Wow",likesCounte:12}],profile:null,status:""},l=function(e){return{type:"ADD-NEW-POST",newPostText:e}},p=function(e){return{type:"SET_STATUS",status:e}},f=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:a=t.sent,n(p(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCES",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n,a){var u,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=a().auth.userId,t.next=3,s.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(f(u)),t.next=10;break;case 8:return n(Object(i.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-NEW-POST":var n={id:5,message:t.newPostText,likesCounte:0};return Object(o.a)({},e,{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case"DELETE_POST":return Object(o.a)({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SET_STATUS":return Object(o.a)({},e,{status:t.status});case"SET_USER_PROFILE":return Object(o.a)({},e,{profile:t.profile});case"SAVE_PHOTO_SUCCES":return Object(o.a)({},e,{profile:Object(o.a)({},e.profile,{photos:t.photos})});default:return e}}},79:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(30),r=n(5),u={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How are your it-kamasutra?"},{id:3,message:"Yo!!"}]},c=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:4,message:n}])});default:return e}}},8:function(e,t,n){e.exports={nav:"navbar_nav__2tCQw",item:"navbar_item__14e3L",activeLink:"navbar_activeLink__g8HUn"}},91:function(e,t,n){e.exports=n.p+"static/media/preLoader.160687e7.svg"},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(21),r=n(22),u=n(24),c=n(23),o=n(0),s=n.n(o),i=n(19),A=n(18),l=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(u.a)(o,t);var n=Object(c.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(i.a,{to:"/login"})}}]),o}(s.a.Component);return Object(A.b)(l)(t)}}},[[143,2,3]]]);
//# sourceMappingURL=main.a8dcf239.chunk.js.map