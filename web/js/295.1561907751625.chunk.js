(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{1203:function(e,t,n){"use strict";n.r(t),t.default="Projects assigned to a profile will always be analyzed with it for that language, regardless of which profile is the default. Quality Profile administrators may assign projects to a profile. Project administrators may also choose a non-default profile for each language.\n"},2035:function(e,t,n){"use strict";n.r(t);var o=n(695),r=n(711),i=n.n(r),l=n(725),a=n(28);function c(){return o.createElement("header",{className:"page-header"},o.createElement("div",{className:"page-title display-flex-center"},o.createElement("h1",null,Object(a.l)("project_quality_profiles.page")),o.createElement(l.a,{className:"spacer-left",doc:Promise.resolve().then(n.bind(null,1203))})),o.createElement("div",{className:"page-description"},Object(a.l)("project_quality_profiles.page.description")))}var u,s=n(919),p=n.n(s),d=n(785),f=n.n(d),h=n(716),g=(u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t.handleChange=function(e){t.props.profile.key!==e.value&&(t.setState({loading:!0}),t.props.onChangeProfile(t.props.profile.key,e.value).then(t.stopLoading,t.stopLoading))},t.renderProfileName=function(e){return e.isDefault?o.createElement("span",null,o.createElement("strong",null,Object(a.l)("default")),": ",e.label):o.createElement("span",null,e.label)},t}return g(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderProfileSelect=function(){var e=this.props,t=e.profile,n=e.possibleProfiles.map(function(e){return{value:e.key,label:e.name,isDefault:e.isDefault}});return o.createElement(h.c,{clearable:!1,disabled:this.state.loading,onChange:this.handleChange,optionRenderer:this.renderProfileName,options:n,style:{width:300},value:t.key,valueRenderer:this.renderProfileName})},t.prototype.render=function(){var e=this.props.profile;return o.createElement("tr",{"data-key":e.language},o.createElement("td",{className:"thin nowrap"},e.languageName),o.createElement("td",{className:"thin nowrap"},this.renderProfileSelect()),o.createElement("td",null,this.state.loading&&o.createElement("i",{className:"spinner"})))},t}(o.PureComponent);function m(e){var t=f()(e.allProfiles,"language"),n=p()(e.profiles,"languageName").map(function(n){return o.createElement(b,{key:n.language,onChangeProfile:e.onChangeProfile,possibleProfiles:t[n.language],profile:n})});return o.createElement("div",{className:"boxed-group boxed-group-inner"},o.createElement("table",{className:"data zebra"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",{className:"thin nowrap"},Object(a.l)("language")),o.createElement("th",{className:"thin nowrap"},Object(a.l)("quality_profile")),o.createElement("th",null," "))),o.createElement("tbody",null,n)))}var y=n(738),S=n(731),v=n(718),x=n(775),w=n(899),O=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0},t.handleChangeProfile=function(e,n){var o=t.props.component,r=t.state,i=r.allProfiles,l=r.profiles,c=i&&i.find(function(e){return e.key===n});return(c&&c.isDefault?Object(y.m)(e,o.key):Object(y.d)(n,o.key)).then(function(){if(t.mounted&&l&&c){var n=l.filter(function(t){return t.key!==e}).concat([c]);t.setState({profiles:n}),Object(x.a)(Object(a.m)("project_quality_profile.successfully_updated",c.languageName))}})},t}return O(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.checkPermissions()?this.fetchProfiles():Object(w.a)()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.checkPermissions=function(){var e=this.props.component.configuration;return!!(e&&e.showQualityProfiles)},t.prototype.fetchProfiles=function(){var e=this,t=this.props.component,n=t.key,o=t.organization;Promise.all([Object(y.y)({organization:o}).then(function(e){return e.profiles}),Object(y.y)({organization:o,project:n}).then(function(e){return e.profiles})]).then(function(t){var n=t[0],o=t[1];e.mounted&&e.setState({loading:!1,allProfiles:n,profiles:o})},function(){e.mounted&&e.setState({loading:!1})})},t.prototype.render=function(){if(!this.checkPermissions())return null;var e=this.state,t=e.allProfiles,n=e.loading,r=e.profiles;return o.createElement("div",{className:"page page-limited"},o.createElement(v.a,{suggestions:"project_quality_profiles"}),o.createElement(i.a,{title:Object(a.l)("project_quality_profiles.page")}),o.createElement(S.a,{anchor:"profiles_main"}),o.createElement(c,null),n?o.createElement("i",{className:"spinner"}):t&&r&&o.createElement(m,{allProfiles:t,onChangeProfile:this.handleChangeProfile,profiles:r}))},t}(o.PureComponent);t.default=j},714:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n(695),r=n(696),i=n(704),l=n(752),a=n(703);n(723);function c(e){var t=e.children,n=void 0===t?o.createElement(l.a,{fill:a.gray71,size:12}):t,c=e.tagName,u=void 0===c?"div":c;return o.createElement(u,{className:r("help-tooltip",e.className)},o.createElement(i.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},o.createElement("span",{className:"display-inline-flex-center"},n)))}},716:function(e,t,n){"use strict";n.d(t,"c",function(){return f}),n.d(t,"b",function(){return h}),n.d(t,"a",function(){return g});var o=n(695),r=n(697),i=n(710),l=(n(727),function(){return(l=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}),a=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},c=n.e(366).then(n.bind(null,770)),u=Object(i.a)(function(){return c}),s=Object(i.a)(function(){return c.then(function(e){return{default:e.Creatable}})}),p=Object(i.a)(function(){return c.then(function(e){return{default:e.Async}})});function d(){return o.createElement(r.d,{className:"button-tiny spacer-left text-middle",iconProps:{size:12}})}function f(e){var t=e.innerRef,n=a(e,["innerRef"]),r=u,i=!!n.clearable&&Boolean(n.value);return o.createElement(r,l({},n,{clearRenderer:d,clearable:i,ref:t}))}function h(e){var t=s;return o.createElement(t,l({},e,{clearRenderer:d}))}function g(e){return o.createElement(p,l({},e))}},718:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o,r=n(695),i=n(739),l=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function a(e){var t=e.suggestions;return r.createElement(i.a.Consumer,null,function(e){var n=e.addSuggestions,o=e.removeSuggestions;return r.createElement(c,{addSuggestions:n,removeSuggestions:o,suggestions:t})})}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(r.PureComponent)},723:function(e,t,n){var o=n(724);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(699)(o,r);o.locals&&(e.exports=o.locals)},724:function(e,t,n){(e.exports=n(698)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},725:function(e,t,n){"use strict";var o,r=n(695),i=n(714),l=n(710),a=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=Object(l.a)(function(){return Promise.all([n.e(8),n.e(10)]).then(n.bind(null,824))}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={open:!1},t.close=function(){t.mounted&&t.setState({open:!1})},t}return a(t,e),t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,this.props.doc.then(function(t){var n=t.default;e.mounted&&e.setState({content:n})},function(){}),document.addEventListener("scroll",this.close,!0)},t.prototype.componentWillUnmount=function(){this.mounted=!1,document.removeEventListener("scroll",this.close,!0)},t.prototype.render=function(){return this.state.content?r.createElement(i.a,{className:this.props.className,overlay:r.createElement("div",{className:"abs-width-300"},r.createElement(c,{childProps:this.props.overlayProps,className:"cut-margins",content:this.state.content,isTooltip:!0}))},this.props.children):this.props.children||null},t}(r.PureComponent);t.a=u},727:function(e,t,n){var o=n(728);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(699)(o,r);o.locals&&(e.exports=o.locals)},728:function(e,t,n){(e.exports=n(698)(!1)).push([e.i,".Select{position:relative;display:inline-block;vertical-align:middle;font-size:12px;text-align:left}.Select,.Select div,.Select input,.Select span{box-sizing:border-box}.Select.is-disabled>.Select-control{background-color:#ebebeb!important;border-color:#ddd!important}.Select.is-disabled>.Select-control:hover{box-shadow:none!important}.Select.is-disabled .Select-arrow-zone{cursor:not-allowed!important;pointer-events:none!important}.Select.is-disabled .Select-placeholder,.Select.is-disabled .Select-value{color:#bbb!important}.Select-control{position:relative;display:table;width:100%;height:24px;line-height:22px;border:1px solid #cdcdcd;border-collapse:separate;border-radius:2px;background-color:#fff;color:#444;cursor:default;outline:none;overflow:hidden}.is-searchable.is-open>.Select-control{cursor:text}.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff}.is-open>.Select-control>.Select-arrow{border-color:transparent transparent #999;border-width:0 5px 5px}.is-searchable.is-focused:not(.is-open)>.Select-control{cursor:text}.is-focused:not(.is-open)>.Select-control{border-color:#4b9fd5}.Select-placeholder{color:#777}.Select-placeholder,:not(.Select--multi)>.Select-control .Select-value{bottom:0;left:0;line-height:23px;padding-left:8px;padding-right:24px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-value [class^=icon-]{padding-top:5px}.Select-value img,.Select-value svg{padding-top:4px}.Select-option .outline-badge,.Select-value .outline-badge{height:20px;line-height:19px;margin-top:1px}.Select-option [class^=icon-],.Select-option img,.Select-option svg{padding-top:2px}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value .Select-value-label,.has-value:not(.Select--multi)>.Select-control>.Select-value .Select-value-label{color:#444}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:focus,.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:hover,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:focus,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select-input{vertical-align:top;height:22px;padding-left:8px;padding-right:8px;outline:none}.Select-input>input{background:none transparent;border:0;cursor:default;display:inline-block;font-family:inherit;font-size:12px;height:22px;margin:0;outline:none;padding:0;box-shadow:none;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:16px}.Select-loading{animation:Select-animation-spin .4s linear infinite;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#444;display:inline-block}.Select-clear-zone,.Select-loading{width:16px;height:16px;position:relative;vertical-align:middle}.Select-clear-zone{animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;text-align:center;padding-right:4px}.Select-clear-zone:hover .Select-clear{background-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEzLjk2OSAxLjQwNkw4LjM5IDYuOTg0bDUuNTc4IDUuNTc5LTEuNDA2IDEuNDA2TDYuOTg0IDguMzlsLTUuNTc4IDUuNTc4TDAgMTIuNTYzbDUuNTc4LTUuNTc5TDAgMS40MDYgMS40MDYgMGw1LjU3OCA1LjU3OEwxMi41NjMgMGwxLjQwNiAxLjQwNnoiIGZpbGw9IiNlNzE0MzgiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==)}.Select-clear{display:block;width:9px;height:9px;background-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEzLjk2OSAxLjQwNkw4LjM5IDYuOTg0bDUuNTc4IDUuNTc5LTEuNDA2IDEuNDA2TDYuOTg0IDguMzlsLTUuNTc4IDUuNTc4TDAgMTIuNTYzbDUuNTc4LTUuNTc5TDAgMS40MDYgMS40MDYgMGw1LjU3OCA1LjU3OEwxMi41NjMgMGwxLjQwNiAxLjQwNnoiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==);background-size:9px 9px;text-indent:-9999px}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:20px;padding-right:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:4px 4px 2px;display:inline-block;height:0;width:0}.is-open .Select-arrow,.Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;top:100%;width:100%;z-index:7500;-webkit-overflow-scrolling:touch;box-shadow:0 6px 12px rgba(0,0,0,.175)}.Select-menu{max-height:198px;padding:5px 0;overflow-y:auto}.Select-option{display:block;line-height:20px;padding:0 8px;box-sizing:border-box;color:#444;font-size:12px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.Select-option:last-child{border-bottom-right-radius:2px;border-bottom-left-radius:2px}.Select-option.is-focused{background-color:#f3f3f3}.Select-option.is-disabled{font-weight:600;cursor:default}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-value{background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid rgba(0,126,255,.24);color:#444;display:inline-block;font-size:12px;line-height:14px;margin:1px 4px 1px 1px;vertical-align:top}.Select-value-label{font-size:12px}.is-searchable.is-open .Select-value-label{opacity:.5}.Select-big .Select-control{padding-top:4px;padding-bottom:4px}.Select-big .Select-placeholder{margin-top:4px;margin-bottom:4px}.Select-big .Select-value-label{display:inline-block;margin-top:7px;line-height:16px}.Select-big .Select-option{padding:7px 8px;line-height:16px}.Select-big img,.Select-big svg{padding-top:0}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{display:inline-block;max-width:200px;border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#444}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}.Select-aria-only{display:none}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}",""])},731:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o,r=n(695),i=n(774),l=n(28),a=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function u(e){return r.createElement(i.a.Consumer,null,function(t){var n=t.addA11ySkipLink,o=t.removeA11ySkipLink;return r.createElement(s,c({addA11ySkipLink:n,removeA11ySkipLink:o},e))})}var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getLink=function(){var e=t.props,n=e.anchor,o=e.label;return{key:n,label:void 0===o?Object(l.l)("skip_to_content"):o,weight:e.weight}},t}return a(t,e),t.prototype.componentDidMount=function(){this.props.addA11ySkipLink(this.getLink())},t.prototype.componentWillUnmount=function(){this.props.removeA11ySkipLink(this.getLink())},t.prototype.render=function(){var e=this.props.anchor;return r.createElement("span",{id:"a11y_target__"+e})},t}(r.PureComponent)},738:function(e,t,n){"use strict";n.d(t,"y",function(){return u}),n.d(t,"s",function(){return s}),n.d(t,"j",function(){return p}),n.d(t,"w",function(){return d}),n.d(t,"r",function(){return f}),n.d(t,"q",function(){return h}),n.d(t,"A",function(){return g}),n.d(t,"v",function(){return b}),n.d(t,"i",function(){return m}),n.d(t,"l",function(){return y}),n.d(t,"g",function(){return S}),n.d(t,"o",function(){return v}),n.d(t,"n",function(){return x}),n.d(t,"p",function(){return w}),n.d(t,"h",function(){return O}),n.d(t,"d",function(){return j}),n.d(t,"m",function(){return N}),n.d(t,"z",function(){return k}),n.d(t,"x",function(){return _}),n.d(t,"c",function(){return P}),n.d(t,"u",function(){return E}),n.d(t,"b",function(){return D}),n.d(t,"t",function(){return L}),n.d(t,"e",function(){return I}),n.d(t,"f",function(){return T}),n.d(t,"a",function(){return z}),n.d(t,"k",function(){return q});var o=n(744),r=n.n(o),i=n(820),l=n(38),a=n(713),c=function(){return(c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function u(e){return Object(l.getJSON)("/api/qualityprofiles/search",e).catch(a.a)}function s(e){return Object(l.getJSON)("/api/qualityprofiles/show",e)}function p(e){return Object(l.request)("/api/qualityprofiles/create").setMethod("post").setData(e).submit().then(l.checkStatus).then(l.parseJSON).catch(a.a)}function d(e){return Object(l.request)("/api/qualityprofiles/restore").setMethod("post").setData(e).submit().then(l.checkStatus).then(l.parseJSON).catch(a.a)}function f(e){return Object(l.getJSON)("/api/qualityprofiles/projects",e).catch(a.a)}function h(e){return Object(l.getJSON)("/api/qualityprofiles/inheritance",{profileKey:e}).catch(a.a)}function g(e){return Object(l.post)("/api/qualityprofiles/set_default",{profileKey:e})}function b(e,t){return Object(l.post)("/api/qualityprofiles/rename",{key:e,name:t}).catch(a.a)}function m(e,t){return Object(l.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:t}).catch(a.a)}function y(e){return Object(l.post)("/api/qualityprofiles/delete",{profileKey:e}).catch(a.a)}function S(e,t){return Object(l.post)("/api/qualityprofiles/change_parent",{profileKey:e,parentKey:t}).catch(a.a)}function v(){return Object(l.getJSON)("/api/qualityprofiles/importers").then(function(e){return e.importers},a.a)}function x(){return Object(l.getJSON)("/api/qualityprofiles/exporters").then(function(e){return e.exporters})}function w(e){return Object(l.getJSON)("/api/qualityprofiles/changelog",e)}function O(e,t){return Object(l.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function j(e,t){return Object(l.post)("/api/qualityprofiles/add_project",{key:e,project:t}).catch(a.a)}function N(e,t){return Object(l.post)("/api/qualityprofiles/remove_project",{key:e,project:t}).catch(a.a)}function k(e){return Object(l.getJSON)("/api/qualityprofiles/search_users",e).catch(a.a)}function _(e){return Object(l.getJSON)("/api/qualityprofiles/search_groups",e).catch(a.a)}function P(e){return Object(l.post)("/api/qualityprofiles/add_user",e).catch(a.a)}function E(e){return Object(l.post)("/api/qualityprofiles/remove_user",e).catch(a.a)}function D(e){return Object(l.post)("/api/qualityprofiles/add_group",e).catch(a.a)}function L(e){return Object(l.post)("/api/qualityprofiles/remove_group",e).catch(a.a)}function I(e){return Object(l.postJSON)("/api/qualityprofiles/activate_rules",e)}function T(e){return Object(l.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function z(e){var t=e.params&&r()(e.params,function(e,t){return t+"="+Object(i.a)(e)}).join(";");return Object(l.post)("/api/qualityprofiles/activate_rule",c({},e,{params:t})).catch(a.a)}function q(e){return Object(l.post)("/api/qualityprofiles/deactivate_rule",e).catch(a.a)}},744:function(e,t,n){var o=n(182),r=n(111),i=n(801),l=n(51);e.exports=function(e,t){return(l(e)?o:i)(e,r(t,3))}},775:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n(758),r=n(751);function i(e){Object(o.default)().dispatch(r.b(e))}},785:function(e,t,n){var o=n(184),r=n(794),i=Object.prototype.hasOwnProperty,l=r(function(e,t,n){i.call(e,n)?e[n].push(t):o(e,n,[t])});e.exports=l},820:function(e,t,n){"use strict";function o(e){return'"'+e.replace(/"/g,'\\"')+'"'}n.d(t,"a",function(){return o})},899:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n(758),r=n(795),i=n(872);function l(){var e=Object(o.default)(),t=Object(r.a)(),n=window.location.pathname+window.location.search+window.location.hash;e.dispatch(Object(i.c)()),t.replace({pathname:"/sessions/new",query:{return_to:n}})}},919:function(e,t,n){var o=n(1037),r=n(51);e.exports=function(e,t,n,i){return null==e?[]:(r(t)||(t=null==t?[]:[t]),r(n=i?void 0:n)||(n=null==n?[]:[n]),o(e,t,n))}}}]);
//# sourceMappingURL=295.1561907751625.chunk.js.map