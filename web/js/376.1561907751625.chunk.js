(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{1993:function(e,t,n){"use strict";n.r(t);var r,s=n(695),a=n(689),i=n(703),o=n(715),c=n(804),l=n(128),d=n(702),m=n(915),u=n(28),p=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={identityProviders:[]},t.fetchIdentityProviders=function(){Object(c.d)().then(function(e){var n=e.identityProviders;t.mounted&&t.setState({identityProviders:n})},function(){})},t.getAuthError=function(){var e=Object(l.a)("AUTHENTICATION-ERROR");return e?JSON.parse(decodeURIComponent(e)):{}},t.renderIdentityProvier=function(e,n){var r=t.state.identityProviders.find(function(t){return t.key===e});return r?s.createElement("div",{className:"identity-provider",style:{backgroundColor:r.backgroundColor,color:Object(m.a)(r.backgroundColor,i.secondFontColor)}},s.createElement("img",{alt:r.name,className:"little-spacer-right",height:"14",src:Object(d.b)()+r.iconPath,width:"14"}),n):s.createElement("div",null,"sonarqube"!==e&&e," ",n)},t}return p(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchIdentityProviders()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.getAuthError();return s.createElement("div",{className:"page-wrapper-simple",id:"bd"},s.createElement("div",{className:"page-simple",id:"nonav"},s.createElement("div",{className:"big-spacer-bottom js-existing-account"},s.createElement("p",{className:"little-spacer-bottom"},s.createElement(a.FormattedMessage,{defaultMessage:Object(u.l)("sessions.email_already_exists.1"),id:"sessions.email_already_exists.1",values:{email:s.createElement("strong",null,e.email)}})),this.renderIdentityProvier(e.existingProvider,e.existingLogin)),s.createElement("div",{className:"big-spacer-bottom js-new-account"},s.createElement("p",{className:"little-spacer-bottom"},Object(u.l)("sessions.email_already_exists.2")),this.renderIdentityProvier(e.provider,e.login)),s.createElement(o.a,{variant:"warning"},Object(u.l)("sessions.email_already_exists.3"),s.createElement("ul",{className:"list-styled"},s.createElement("li",{className:"spacer-top"},Object(u.l)("sessions.email_already_exists.4")),s.createElement("li",{className:"spacer-top"},Object(u.l)("sessions.email_already_exists.5")),s.createElement("li",{className:"spacer-top"},Object(u.l)("sessions.email_already_exists.6")))),s.createElement("div",{className:"big-spacer-top text-right"},s.createElement("a",{className:"button js-continue",href:Object(d.b)()+"/sessions/init/"+e.provider+"?allowEmailShift=true"},Object(u.l)("continue")),s.createElement("a",{className:"big-spacer-left js-cancel",href:Object(d.b)()+"/"},Object(u.l)("cancel")))))},t}(s.PureComponent);t.default=b}}]);
//# sourceMappingURL=376.1561907751625.chunk.js.map