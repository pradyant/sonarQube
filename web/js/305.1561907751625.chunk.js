(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{1759:function(e,t,o){var n=o(1760);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(699)(n,r);n.locals&&(e.exports=n.locals)},1760:function(e,t,o){(e.exports=o(698)(!1)).push([e.i,".login-form{width:300px;margin-left:auto;margin-right:auto}.login-input{width:100%!important;height:auto!important;padding:5px 12px!important;font-size:20px;font-weight:300}.login-label{display:none;margin-bottom:8px;font-size:15px}",""])},1761:function(e,t,o){var n=o(1762);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(699)(n,r);n.locals&&(e.exports=n.locals)},1762:function(e,t,o){(e.exports=o(698)(!1)).push([e.i,".oauth-providers>ul{width:200px;margin-left:auto;margin-right:auto}.oauth-providers>ul>li{position:relative;margin-bottom:30px}.oauth-providers-help{position:absolute;top:15px;right:-24px}.oauth-providers+.login-form{padding-top:30px;border-top:1px solid #e6e6e6}",""])},1763:function(e,t,o){var n=o(1764);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(699)(n,r);n.locals&&(e.exports=n.locals)},1764:function(e,t,o){(e.exports=o(698)(!1)).push([e.i,".login-page{padding-top:10vh}.login-title{margin-bottom:40px;line-height:1.5;font-size:24px;font-weight:300;text-align:center}",""])},1765:function(e,t,o){var n=o(1766);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(699)(n,r);n.locals&&(e.exports=n.locals)},1766:function(e,t,o){(e.exports=o(698)(!1)).push([e.i,".sonarcloud-login-alert{margin:10vh auto 5vh;width:256px}.sonarcloud-login-page{margin-top:15vh;width:216px;margin-left:auto;margin-right:auto;padding:32px 20px}.sonarcloud-login-alert~.sonarcloud-login-page{margin-top:0}.sonarcloud-login-page-large{width:300px}.sonarcloud-login-title{line-height:1.5;font-size:16px;font-weight:300;width:135px;margin:8px auto 24px}.sonarcloud-oauth-providers.oauth-providers>ul{width:186px}.sonarcloud-oauth-providers.oauth-providers>ul>li{margin-bottom:8px}.sonarcloud-oauth-providers.oauth-providers .oauth-providers-help{right:-22px}.sonarcloud-login-cancel{text-align:center}",""])},2034:function(e,t,o){"use strict";o.r(t);var n,r=o(695),i=o(705),a=o(707),l=o(697),s=o(28),c=o(702),d=(o(1759),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),p=function(e){function t(t){var o=e.call(this,t)||this;return o.stopLoading=function(){o.setState({loading:!1})},o.handleSubmit=function(e){e.preventDefault(),o.setState({loading:!0}),o.props.onSubmit(o.state.login,o.state.password).then(o.stopLoading,o.stopLoading)},o.handleMoreOptionsClick=function(e){e.preventDefault(),o.setState({collapsed:!1})},o.handleLoginChange=function(e){return o.setState({login:e.currentTarget.value})},o.handlePwdChange=function(e){return o.setState({password:e.currentTarget.value})},o.state={collapsed:Boolean(t.collapsed),loading:!1,login:"",password:""},o}return d(t,e),t.prototype.render=function(){return this.state.collapsed?r.createElement("div",{className:"text-center"},r.createElement("a",{className:"small text-muted js-more-options",href:"#",onClick:this.handleMoreOptionsClick},Object(s.l)("login.more_options"))):r.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},r.createElement("div",{className:"big-spacer-bottom"},r.createElement("label",{className:"login-label",htmlFor:"login"},Object(s.l)("login")),r.createElement("input",{autoFocus:!0,className:"login-input",id:"login",maxLength:255,name:"login",onChange:this.handleLoginChange,placeholder:Object(s.l)("login"),required:!0,type:"text",value:this.state.login})),r.createElement("div",{className:"big-spacer-bottom"},r.createElement("label",{className:"login-label",htmlFor:"password"},Object(s.l)("password")),r.createElement("input",{className:"login-input",id:"password",name:"password",onChange:this.handlePwdChange,placeholder:Object(s.l)("password"),required:!0,type:"password",value:this.state.password})),r.createElement("div",null,r.createElement("div",{className:"text-right overflow-hidden"},r.createElement(a.a,{className:"spacer-right",loading:this.state.loading}),r.createElement(l.i,{disabled:this.state.loading},Object(s.l)("sessions.log_in")),r.createElement("a",{className:"spacer-left",href:Object(c.b)()+"/"},Object(s.l)("cancel")))))},t}(r.PureComponent),u=o(696),m=o(714),h=o(962);o(1761);function g(e){var t=e.formatLabel||f;return r.createElement("section",{className:u("oauth-providers",e.className)},r.createElement("ul",null,e.identityProviders.map(function(o){return r.createElement(v,{format:t,identityProvider:o,key:o.key,returnTo:e.returnTo})})))}function v(e){var t=e.format,o=e.identityProvider,n=e.returnTo;return r.createElement("li",null,r.createElement(h.a,{identityProvider:o,url:Object(c.b)()+"/sessions/init/"+o.key+"?return_to="+encodeURIComponent(n)},r.createElement("span",null,t(o.name))),o.helpMessage&&r.createElement(m.a,{className:"oauth-providers-help",overlay:o.helpMessage}))}function f(e){return Object(s.m)("login.login_with_x",e)}var b=o(1231);o(1763);function x(e){var t=e.identityProviders,o=e.onSubmit,n=e.returnTo;return r.createElement("div",{className:"login-page",id:"login_form"},r.createElement("h1",{className:"login-title text-center"},Object(s.l)("login.login_to_sonarqube")),r.createElement(b.a,null),t.length>0&&r.createElement(g,{identityProviders:t,returnTo:n}),r.createElement(p,{collapsed:t.length>0,onSubmit:o,returnTo:n}))}var y=o(715);o(1765);function E(e){return Object(s.m)("login.with_x",e)}var w=Object(i.connect)(function(e){return{authorizationError:e.appState.authorizationError,authenticationError:e.appState.authenticationError}})(function(e){var t=e.showForm,o=e.identityProviders,n=e.returnTo,i=e.onSubmit,a=e.authorizationError,l=e.authenticationError,d=t||o.length<=0,m=a||l;return r.createElement(r.Fragment,null,m&&r.createElement(y.a,{className:"sonarcloud-login-alert",display:"block",variant:"warning"},Object(s.l)("login.unauthorized_access_alert")),r.createElement("div",{className:u("sonarcloud-login-page boxed-group boxed-group-inner",{"sonarcloud-login-page-large":d}),id:"login_form"},r.createElement("div",{className:"text-center"},r.createElement("img",{alt:"SonarCloud logo",height:36,src:Object(c.b)()+"/images/sonarcloud-square-logo.svg",width:36}),r.createElement("h1",{className:"sonarcloud-login-title"},Object(s.l)("login.login_or_signup_to_sonarcloud"))),d?r.createElement(p,{onSubmit:i,returnTo:n}):r.createElement(g,{className:"sonarcloud-oauth-providers",formatLabel:E,identityProviders:o,returnTo:n}),m&&r.createElement("div",{className:"sonarcloud-login-cancel"},r.createElement("div",{className:"horizontal-pipe-separator"},r.createElement("div",{className:"horizontal-separator"}),r.createElement("span",{className:"note"},Object(s.l)("or")),r.createElement("div",{className:"horizontal-separator"})),r.createElement("a",{href:Object(c.b)()+"/"},Object(s.l)("go_back_to_homepage")))))}),O=o(779),_=o(804),k=o(110),N=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={},t.handleSuccessfulLogin=function(){window.location.href=Object(c.A)(t.props.location)},t.handleSubmit=function(e,o){return t.props.doLogin(e,o).then(t.handleSuccessfulLogin,function(){})},t}return N(t,e),t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,Object(_.d)().then(function(t){e.mounted&&e.setState({identityProviders:t.identityProviders})},function(){})},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.location,t=this.state.identityProviders;return t?Object(k.isSonarCloud)()?r.createElement(w,{identityProviders:t,onSubmit:this.handleSubmit,returnTo:Object(c.A)(e),showForm:void 0!==e.query.advanced}):r.createElement(x,{identityProviders:t,onSubmit:this.handleSubmit,returnTo:Object(c.A)(e)}):null},t}(r.PureComponent),S={doLogin:O.a};t.default=Object(i.connect)(null,S)(j)},714:function(e,t,o){"use strict";o.d(t,"a",function(){return s});var n=o(695),r=o(696),i=o(704),a=o(752),l=o(703);o(723);function s(e){var t=e.children,o=void 0===t?n.createElement(a.a,{fill:l.gray71,size:12}):t,s=e.tagName,c=void 0===s?"div":s;return n.createElement(c,{className:r("help-tooltip",e.className)},n.createElement(i.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},n.createElement("span",{className:"display-inline-flex-center"},o)))}},723:function(e,t,o){var n=o(724);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(699)(n,r);n.locals&&(e.exports=n.locals)},724:function(e,t,o){(e.exports=o(698)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},962:function(e,t,o){"use strict";o.d(t,"a",function(){return l});var n=o(695),r=o(696),i=o(915),a=o(702);o(993);function l(e){var t=e.children,o=e.className,l=e.identityProvider,s=e.onClick,c=e.small,d=e.url,p=c?14:20;return n.createElement("a",{className:r("identity-provider-link",{"dark-text":!Object(i.b)(l.backgroundColor),small:c},o),href:d,onClick:s,style:{backgroundColor:l.backgroundColor}},n.createElement("img",{alt:l.name,height:p,src:Object(a.b)()+l.iconPath,width:p}),t)}},993:function(e,t,o){var n=o(994);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(699)(n,r);n.locals&&(e.exports=n.locals)},994:function(e,t,o){(e.exports=o(698)(!1)).push([e.i,'a.identity-provider-link{display:block;width:auto;line-height:22px;padding:8px 12px;border:1px solid rgba(0,0,0,.15);border-radius:2px;box-sizing:border-box;background-color:#236a97;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}a.identity-provider-link.small{line-height:14px;padding:4px 8px}a.identity-provider-link:focus,a.identity-provider-link:hover{box-shadow:inset 0 0 0 100px hsla(0,0%,100%,.1)}a.identity-provider-link.dark-text{color:#777}a.identity-provider-link.dark-text:focus,a.identity-provider-link.dark-text:hover{box-shadow:inset 0 0 0 100px rgba(0,0,0,.1)}a.identity-provider-link>img{padding-right:12px}a.identity-provider-link.small>img{padding-right:8px}a.identity-provider-link>span:before{content:"";opacity:.4;border-left:1px solid #b4b4b4;margin-right:12px}',""])}}]);
//# sourceMappingURL=305.1561907751625.chunk.js.map