(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{302:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(302),r=a.n(l),m=a(130),p=a(131),i=a(26),u=a(46),o=a(28),h=a(10),s=a(34),E=function(e){return c.a.createElement("div",null,c.a.createElement("span",null," Anty-bot system "),c.a.createElement("div",null," ",c.a.createElement("img",{src:e.captchaURL})," ",c.a.createElement("button",{onclick:e.getCaptcha},"Reload Captcha")),c.a.createElement("div",null," ",c.a.createElement(m.a,{name:"captcha",component:i.a,types:"input",type:"text"})))},b=Object(p.a)({form:"login"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(m.a,{name:"email",component:i.a,types:"input",type:"email",validate:[u.b]})),c.a.createElement("div",null,c.a.createElement(m.a,{name:"password",component:i.a,types:"input",type:"password",validate:[u.b]})),c.a.createElement("div",null,c.a.createElement(m.a,{name:"isRememberMe",component:i.a,types:"input",type:"checkbox"}),"Remember me"),e.captcha&&c.a.createElement(E,{captchaURL:e.captcha,getCaptcha:e.getCaptcha}),e.error&&c.a.createElement("div",null," ",e.error),c.a.createElement("div",null,c.a.createElement("button",null,"Enter")))}));t.default=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,captcha:e.auth.captcha}}),{loginThunkCreator:o.d,getCaptcha:o.b})((function(e){return e.isAuth?c.a.createElement(s.a,{to:"/profile"}):c.a.createElement("div",{className:r.a.login},c.a.createElement("h1",null," LOGIN "),c.a.createElement(b,{onSubmit:function(t){e.loginThunkCreator(t.email,t.password,t.rememberMe,t.captcha)},isAuth:e.isAuth,captcha:e.captcha,getCaptcha:e.getCaptcha}))}))}}]);
//# sourceMappingURL=3.2be035c9.chunk.js.map