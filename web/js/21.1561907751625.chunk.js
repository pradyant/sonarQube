(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{2042:function(e,o,t){"use strict";t.r(o);var r,n=t(746),s=t.n(n),i=t(695),a=t(711),u=t.n(a),p=t(28),l=(r=function(e,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])})(e,o)},function(e,o){function t(){this.constructor=e}r(e,o),e.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}),c=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return l(o,e),o.prototype.render=function(){var e=this.props.organization?Object(p.l)("permissions.page"):Object(p.l)("global_permissions.page"),o=this.props.organization?Object(p.l)("organization_permissions.page.description"):Object(p.l)("global_permissions.page.description");return i.createElement("header",{className:"page-header"},i.createElement("h1",{className:"page-title"},e),this.props.loading&&i.createElement("i",{className:"spinner"}),i.createElement("div",{className:"page-description"},o))},o}(i.PureComponent),g=t(705),m=t(1199),f=t(1224),d=t(737),h=t(925),v=t(708),y=function(){var e=function(o,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])})(o,t)};return function(o,t){function r(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),P=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.handleToggleUser=function(e,t){return e.permissions.includes(t)?o.props.revokePermissionFromUser(e.login,t):o.props.grantPermissionToUser(e.login,t)},o.handleToggleGroup=function(e,t){return e.permissions.includes(t)?o.props.revokePermissionFromGroup(e.name,t):o.props.grantPermissionToGroup(e.name,t)},o}return y(o,e),o.prototype.render=function(){var e=this.props,o=e.filter,t=e.groups,r=e.groupsPaging,n=e.users,s=e.usersPaging,a=this.props.organization?"organizations_permissions":"global_permissions",u=this.props.appState.qualifiers.includes("VW"),p=Object(h.e)(u?h.d:h.c,a),l=0,c=0;return"users"!==o&&(l+=t.length,c+=r?r.total:t.length),"groups"!==o&&(l+=n.length,c+=s?s.total:n.length),i.createElement(i.Fragment,null,i.createElement(f.a,{filter:this.props.filter,groups:this.props.groups,loading:this.props.loading,onToggleGroup:this.handleToggleGroup,onToggleUser:this.handleToggleUser,permissions:p,query:this.props.query,users:this.props.users},i.createElement(m.a,{filter:this.props.filter,onFilter:this.props.onFilter,onSearch:this.props.onSearch,query:this.props.query})),i.createElement(d.a,{count:l,loadMore:this.props.onLoadMore,total:c}))},o}(i.PureComponent),_=Object(g.connect)(function(e){return{appState:Object(v.getAppState)(e)}})(P),b=t(850),O=t(718),S=(t(1200),function(){var e=function(o,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])})(o,t)};return function(o,t){function r(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}()),j=function(){return(j=Object.assign||function(e){for(var o,t=1,r=arguments.length;t<r;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e}).apply(this,arguments)},w=function(e){function o(o){var t=e.call(this,o)||this;return t.mounted=!1,t.loadUsersAndGroups=function(e,o){var r=t.props.organization,n=t.state,s=n.filter,i=n.query,a="groups"!==s?b.i({q:i||void 0,organization:r&&r.key,p:e}):Promise.resolve({paging:void 0,users:[]}),u="users"!==s?b.h({q:i||void 0,organization:r&&r.key,p:o}):Promise.resolve({paging:void 0,groups:[]});return Promise.all([a,u])},t.loadHolders=function(){return t.setState({loading:!0}),t.loadUsersAndGroups().then(function(e){var o=e[0],r=e[1];t.mounted&&t.setState({groups:r.groups,groupsPaging:r.paging,loading:!1,users:o.users,usersPaging:o.paging})},t.stopLoading)},t.onLoadMore=function(){var e=t.state,o=e.usersPaging,r=e.groupsPaging;return t.setState({loading:!0}),t.loadUsersAndGroups(o?o.pageIndex+1:1,r?r.pageIndex+1:1).then(function(e){var o=e[0],r=e[1];t.mounted&&t.setState(function(e){var t=e.groups,n=e.users;return{groups:t.concat(r.groups),groupsPaging:r.paging,loading:!1,users:n.concat(o.users),usersPaging:o.paging}})},t.stopLoading)},t.onFilter=function(e){t.setState({filter:e},t.loadHolders)},t.onSearch=function(e){t.setState({query:e},t.loadHolders)},t.addPermissionToGroup=function(e,o,t){return e.map(function(e){return e.name===o?j({},e,{permissions:e.permissions.concat([t])}):e})},t.addPermissionToUser=function(e,o,t){return e.map(function(e){return e.login===o?j({},e,{permissions:e.permissions.concat([t])}):e})},t.removePermissionFromGroup=function(e,o,t){return e.map(function(e){return e.name===o?j({},e,{permissions:s()(e.permissions,t)}):e})},t.removePermissionFromUser=function(e,o,t){return e.map(function(e){return e.login===o?j({},e,{permissions:s()(e.permissions,t)}):e})},t.grantPermissionToGroup=function(e,o){return t.mounted?(t.setState(function(r){var n=r.groups;return{groups:t.addPermissionToGroup(n,e,o)}}),b.o({groupName:e,permission:o,organization:t.props.organization&&t.props.organization.key}).then(function(){},function(){t.mounted&&t.setState(function(r){var n=r.groups;return{groups:t.removePermissionFromGroup(n,e,o)}})})):Promise.resolve()},t.grantPermissionToUser=function(e,o){return t.mounted?(t.setState(function(r){var n=r.users;return{users:t.addPermissionToUser(n,e,o)}}),b.p({login:e,permission:o,organization:t.props.organization&&t.props.organization.key}).then(function(){},function(){t.mounted&&t.setState(function(r){var n=r.users;return{users:t.removePermissionFromUser(n,e,o)}})})):Promise.resolve()},t.revokePermissionFromGroup=function(e,o){return t.mounted?(t.setState(function(r){var n=r.groups;return{groups:t.removePermissionFromGroup(n,e,o)}}),b.t({groupName:e,permission:o,organization:t.props.organization&&t.props.organization.key}).then(function(){},function(){t.mounted&&t.setState(function(r){var n=r.groups;return{groups:t.addPermissionToGroup(n,e,o)}})})):Promise.resolve()},t.revokePermissionFromUser=function(e,o){return t.mounted?(t.setState(function(r){var n=r.users;return{users:t.removePermissionFromUser(n,e,o)}}),b.u({login:e,permission:o,organization:t.props.organization&&t.props.organization.key}).then(function(){},function(){t.mounted&&t.setState(function(r){var n=r.users;return{users:t.addPermissionToUser(n,e,o)}})})):Promise.resolve()},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t.state={filter:"all",groups:[],loading:!0,query:"",users:[]},t}return S(o,e),o.prototype.componentDidMount=function(){this.mounted=!0,this.loadHolders()},o.prototype.componentWillUnmount=function(){this.mounted=!1},o.prototype.render=function(){return i.createElement("div",{className:"page page-limited"},i.createElement(O.a,{suggestions:"global_permissions"}),i.createElement(u.a,{title:Object(p.l)("global_permissions.permission")}),i.createElement(c,{loading:this.state.loading,organization:this.props.organization}),i.createElement(_,{filter:this.state.filter,grantPermissionToGroup:this.grantPermissionToGroup,grantPermissionToUser:this.grantPermissionToUser,groups:this.state.groups,groupsPaging:this.state.groupsPaging,loadHolders:this.loadHolders,loading:this.state.loading,onFilter:this.onFilter,onLoadMore:this.onLoadMore,onSearch:this.onSearch,query:this.state.query,revokePermissionFromGroup:this.revokePermissionFromGroup,revokePermissionFromUser:this.revokePermissionFromUser,users:this.state.users,usersPaging:this.state.usersPaging}))},o}(i.PureComponent);o.default=w},714:function(e,o,t){"use strict";t.d(o,"a",function(){return u});var r=t(695),n=t(696),s=t(704),i=t(752),a=t(703);t(723);function u(e){var o=e.children,t=void 0===o?r.createElement(i.a,{fill:a.gray71,size:12}):o,u=e.tagName,p=void 0===u?"div":u;return r.createElement(p,{className:n("help-tooltip",e.className)},r.createElement(s.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},r.createElement("span",{className:"display-inline-flex-center"},t)))}},718:function(e,o,t){"use strict";t.d(o,"a",function(){return a});var r,n=t(695),s=t(739),i=(r=function(e,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])})(e,o)},function(e,o){function t(){this.constructor=e}r(e,o),e.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)});function a(e){var o=e.suggestions;return n.createElement(s.a.Consumer,null,function(e){var t=e.addSuggestions,r=e.removeSuggestions;return n.createElement(u,{addSuggestions:t,removeSuggestions:r,suggestions:o})})}var u=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return i(o,e),o.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},o.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},o.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},o.prototype.render=function(){return null},o}(n.PureComponent)},723:function(e,o,t){var r=t(724);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(699)(r,n);r.locals&&(e.exports=r.locals)},724:function(e,o,t){(e.exports=t(698)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},737:function(e,o,t){"use strict";t.d(o,"a",function(){return p});var r=t(695),n=t(696),s=t(707),i=t(28),a=t(706),u=function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&(t[r[n]]=e[r[n]])}return t};function p(e){var o,t=e.ready,p=void 0===t||t,l=u(e,["ready"]),c=l.total&&l.total>l.count,g=r.createElement("a",{className:"spacer-left",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),l.loadMore&&l.loadMore()}},Object(i.l)("show_more")),m=r.createElement("a",{className:"spacer-left",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),l.reload&&l.reload()}},Object(i.l)("reload")),f=n("spacer-top note text-center",{"new-loading":!p},l.className);return l.needReload&&l.reload?o=m:c&&l.loadMore&&(o=g),r.createElement("footer",{className:f},Object(i.m)("x_of_y_shown",Object(a.formatMeasure)(l.count,"INT",null),Object(a.formatMeasure)(l.total,"INT",null)),o,l.loading&&r.createElement(s.a,{className:"text-bottom spacer-left position-absolute"}))}}}]);
//# sourceMappingURL=21.1561907751625.chunk.js.map