(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{1592:function(t,e,n){var o=n(1593);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(699)(o,i);o.locals&&(t.exports=o.locals)},1593:function(t,e,n){(t.exports=n(698)(!1)).push([t.i,'.account-container{width:600px;margin-left:auto;margin-right:auto}.account-header{padding-top:20px;padding-bottom:20px;border-bottom:1px solid #e6e6e6;background-color:#fff}.account-nav{float:right;padding-top:11px}.account-user{float:left}.account-user h1{line-height:60px}.account-user-avatar{margin-right:20px}.account-user-avatar>img{border-radius:60px}.account-user-avatar:empty{display:none}.account-body{padding:40px 0}.account-separator{height:0;margin:40px 0;border-top:1px solid #e6e6e6}.account-projects-list{margin-left:-20px;margin-right:-20px}.account-projects-list>li{padding:15px 20px}.account-projects-list>li+li{border-top:1px solid #e6e6e6}.account-project-side{float:right;margin-left:10px;text-align:right}.account-project-analysis{line-height:24px;color:#777;font-size:12px}.account-project-card{position:relative;display:block}.account-project-name{display:inline-block;vertical-align:top;max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.account-project-name>a{border-bottom-color:#d0d0d0;color:#444}.account-project-name>a:hover{border-bottom-color:#cae3f2;color:#4b9fd5}.account-project-quality-gate{display:inline-block;vertical-align:top;line-height:24px;margin-left:8px}.account-project-description{margin-top:6px;line-height:1.5}.account-project-links{margin-top:6px}.account-project-key{margin-top:6px;color:#777;font-size:12px}.my-activity-issues{position:relative;display:flex;justify-content:center;margin-bottom:70px}.my-activity-issues:after{position:absolute;z-index:5;top:-15px;left:50%;width:1px;height:100px;background-color:#e6e6e6;transform:rotate(30deg);content:""}.my-activity-issues>a{display:block;padding:15px 20px;border:none;border-radius:2px;color:#444}.my-activity-issues>a:hover{background-color:#f3f3f3}.my-activity-recent-issues{margin-right:50px;text-align:right}.my-activity-recent-issues .my-activity-issues-note{text-align:left}.my-activity-all-issues{margin-left:50px}.my-activity-issues-number{display:inline-block;vertical-align:middle;line-height:36px;font-size:36px;font-weight:300}.my-activity-issues-note{display:inline-block;vertical-align:middle;padding-left:10px;padding-top:2px;line-height:16px;font-size:12px}.my-activity-projects{width:360px;margin:0 auto;padding:40px 0}.my-activity-projects-header{line-height:24px;margin-bottom:15px;padding:0 10px}.my-activity-projects>ul>li+li{border-top:1px solid #e6e6e6}.my-activity-projects>ul>li>a{display:block;padding:15px 10px;border:none}.my-activity-projects>ul>li>a:hover{background-color:#f3f3f3}.my-activity-projects .level{width:60px}.my-activity-projects .more{margin-top:30px;text-align:center}',""])},2047:function(t,e,n){"use strict";n.r(e);var o=n(695),i=n(705),r=n(711),a=n.n(r),c=n(701),s=n(987),p=n(28);function u(t){var e=t.customOrganizations;return o.createElement("nav",{className:"account-nav"},o.createElement(s.a,null,o.createElement("li",null,o.createElement(c.IndexLink,{activeClassName:"active",to:"/account/"},Object(p.l)("my_account.profile"))),o.createElement("li",null,o.createElement(c.Link,{activeClassName:"active",to:"/account/security/"},Object(p.l)("my_account.security"))),o.createElement("li",null,o.createElement(c.Link,{activeClassName:"active",to:"/account/notifications"},Object(p.l)("my_account.notifications"))),!e&&o.createElement("li",null,o.createElement(c.Link,{activeClassName:"active",to:"/account/projects/"},Object(p.l)("my_account.projects"))),e&&o.createElement("li",null,o.createElement(c.Link,{activeClassName:"active",to:"/account/organizations"},Object(p.l)("my_account.organizations")))))}var l=n(767);function m(t){var e=t.user;return o.createElement("div",{className:"account-user"},o.createElement("div",{className:"pull-left account-user-avatar",id:"avatar"},o.createElement(l.a,{hash:e.avatar,name:e.name,size:60})),o.createElement("h1",{className:"pull-left",id:"name"},e.name))}var d=n(708),g=n(690),f=n(731),y=n(718);n(1592);n.d(e,"Account",function(){return x});var h,v=(h=function(t,e){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}h(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),x=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return v(e,t),e.prototype.componentDidMount=function(){this.props.currentUser.isLoggedIn||Object(g.default)()},e.prototype.render=function(){var t=this.props,e=t.currentUser,n=t.children;if(!e.isLoggedIn)return null;var i=Object(p.l)("my_account.page");return o.createElement("div",{id:"account-page"},o.createElement(y.a,{suggestions:"account"}),o.createElement(a.a,{defaultTitle:i,titleTemplate:"%s - "+i}),o.createElement(f.a,{anchor:"account_main"}),o.createElement("header",{className:"account-header"},o.createElement("div",{className:"account-container clearfix"},o.createElement(m,{user:e}),o.createElement(u,{customOrganizations:this.props.customOrganizations}))),n)},e}(o.PureComponent);e.default=Object(i.connect)(function(t){return{currentUser:Object(d.getCurrentUser)(t),customOrganizations:Object(d.areThereCustomOrganizations)(t)}})(x)},690:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return i});var o=n(795);function i(){var t=Object(o.a)(),e=window.location.pathname+window.location.search+window.location.hash;t.replace({pathname:"/sessions/new",query:{return_to:e}})}},718:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var o,i=n(695),r=n(739),a=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});function c(t){var e=t.suggestions;return i.createElement(r.a.Consumer,null,function(t){var n=t.addSuggestions,o=t.removeSuggestions;return i.createElement(s,{addSuggestions:n,removeSuggestions:o,suggestions:e})})}var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},e.prototype.componentDidUpdate=function(t){t.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(t.suggestions))},e.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},e.prototype.render=function(){return null},e}(i.PureComponent)},731:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var o,i=n(695),r=n(774),a=n(28),c=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(){return(s=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function p(t){return i.createElement(r.a.Consumer,null,function(e){var n=e.addA11ySkipLink,o=e.removeA11ySkipLink;return i.createElement(u,s({addA11ySkipLink:n,removeA11ySkipLink:o},t))})}var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.getLink=function(){var t=e.props,n=t.anchor,o=t.label;return{key:n,label:void 0===o?Object(a.l)("skip_to_content"):o,weight:t.weight}},e}return c(e,t),e.prototype.componentDidMount=function(){this.props.addA11ySkipLink(this.getLink())},e.prototype.componentWillUnmount=function(){this.props.removeA11ySkipLink(this.getLink())},e.prototype.render=function(){var t=this.props.anchor;return i.createElement("span",{id:"a11y_target__"+t})},e}(i.PureComponent)}}]);
//# sourceMappingURL=342.1561907751625.chunk.js.map