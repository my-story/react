(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{GvIb:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact-us",function(){return e("taXs")}])},taXs:function(t,a,e){"use strict";e.r(a);var n=e("0iUn"),s=e("sLSF"),c=e("MI3g"),l=e("a7VT"),i=e("AT/M"),o=e("Tit0"),u=e("vYYK"),r=e("q1tI"),m=e.n(r),d=e("SyM2"),b={addEmail:function(t){return d.a.post("email/add",t).then(function(t){return t.data})}},h=m.a.createElement,p=function(t){function a(){var t,e;Object(n.a)(this,a);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return e=Object(c.a)(this,(t=Object(l.a)(a)).call.apply(t,[this].concat(o))),Object(u.a)(Object(i.a)(e),"state",{email:"",name:""}),Object(u.a)(Object(i.a)(e),"onChange",function(t){if("Email"==t.target.placeholder){var a=e.state.email;a=t.target.value,e.setState({email:a})}else if("Name"==t.target.placeholder){var n=e.state.name;n=t.target.value,e.setState({name:n})}}),Object(u.a)(Object(i.a)(e),"submit",function(){b.addEmail({email:e.state.email,name:e.state.name}).then(function(t){return console.log(t)}).catch(function(t){return console.log(t)})}),e}return Object(o.a)(a,t),Object(s.a)(a,[{key:"render",value:function(){return h("div",{className:"contact-page"},h("h1",null," Contact us - ",h("br",null),"warm response guaranteed  "),h("div",{className:"contact-section"},h("div",{className:"contact-inputs"},h("div",null,h("input",{className:"inputs-login-styling",placeholder:"Name",onChange:this.onChange}),h("input",{className:"inputs-login-styling",placeholder:"Email",onChange:this.onChange})),h("textarea",{className:"textarea-styling",rows:"4",placeholder:"Your message..."}),h("div",{className:"contact-button"},h("button",{className:"submit-button",onClick:this.submit},"Submit")),h("div",null)),h("div",{className:"contact-address"},h("p",null,h("b",null,"478 Young Drive ",h("br",null),"Brandon, FL 33511, United States")))))}}]),a}(r.Component);a.default=p}},[["GvIb",1,0]]]);