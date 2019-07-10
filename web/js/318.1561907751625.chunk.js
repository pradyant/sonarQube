(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{1029:function(e,t,o){"use strict";var n,r=o(695),i=o(696),a=o(28),l=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handlePublicClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onChange("public")},t.handlePrivateClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onChange("private")},t}return l(t,e),t.prototype.render=function(){return r.createElement("div",{className:i("visibility-select",this.props.className)},r.createElement("a",{className:"link-base-color link-no-underline visibility-select-option",href:"#",id:"visibility-public",onClick:this.handlePublicClick},r.createElement("i",{className:i("icon-radio",{"is-checked":"public"===this.props.visibility})}),r.createElement("span",{className:"spacer-left"},Object(a.l)("visibility.public"))),this.props.showDetails&&r.createElement("span",{className:"visibility-details note"},Object(a.l)("visibility.public.description.long")),this.props.canTurnToPrivate?r.createElement(r.Fragment,null,r.createElement("a",{className:"link-base-color link-no-underline huge-spacer-left visibility-select-option",href:"#",id:"visibility-private",onClick:this.handlePrivateClick},r.createElement("i",{className:i("icon-radio",{"is-checked":"private"===this.props.visibility})}),r.createElement("span",{className:"spacer-left"},Object(a.l)("visibility.private"))),this.props.showDetails&&r.createElement("span",{className:"visibility-details note"},Object(a.l)("visibility.private.description.long"))):r.createElement(r.Fragment,null,r.createElement("span",{className:"huge-spacer-left text-muted cursor-not-allowed visibility-select-option",id:"visibility-private"},r.createElement("i",{className:i("icon-radio",{"is-checked":"private"===this.props.visibility})}),r.createElement("span",{className:"spacer-left"},Object(a.l)("visibility.private"))),this.props.showDetails&&r.createElement("span",{className:"visibility-details note"},Object(a.l)("visibility.private.description.long"))))},t}(r.PureComponent);t.a=s},1201:function(e,t,o){"use strict";var n,r=o(695),i=o(850),a=o(707),l=o(719),s=o(716),c=o(697),p=o(28),u=o(715),d=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={done:!1,loading:!0},t.fetchPermissionTemplates=function(){Object(i.l)(t.props.organization).then(function(e){var o=e.permissionTemplates;t.mounted&&t.setState({loading:!1,permissionTemplates:o})},function(){t.mounted&&t.setState({loading:!1})})},t.handleSubmit=function(){return t.state.permissionTemplate?Object(i.b)({organization:t.props.organization,projectKey:t.props.project.key,templateId:t.state.permissionTemplate}).then(function(){t.mounted&&(t.props.onApply&&t.props.onApply(),t.setState({done:!0}))}):Promise.reject(void 0)},t.handlePermissionTemplateChange=function(e){var o=e.value;t.setState({permissionTemplate:o})},t}return d(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchPermissionTemplates()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this,t=Object(p.m)("projects_role.apply_template_to_xxx",this.props.project.name);return r.createElement(l.a,{header:t,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},function(o){var n=o.onCloseClick,i=o.onFormSubmit,l=o.submitting;return r.createElement("form",{id:"project-permissions-apply-template-form",onSubmit:i},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,t)),r.createElement("div",{className:"modal-body"},e.state.done?r.createElement(u.a,{variant:"success"},Object(p.l)("projects_role.apply_template.success")):r.createElement(r.Fragment,null,e.state.loading?r.createElement("i",{className:"spinner"}):r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"project-permissions-template"},Object(p.l)("template"),r.createElement("em",{className:"mandatory"},"*")),e.state.permissionTemplates&&r.createElement(s.c,{clearable:!1,id:"project-permissions-template",onChange:e.handlePermissionTemplateChange,options:e.state.permissionTemplates.map(function(e){return{label:e.name,value:e.id}}),value:e.state.permissionTemplate})))),r.createElement("footer",{className:"modal-foot"},r.createElement(a.a,{className:"spacer-right",loading:l}),!e.state.done&&r.createElement(c.i,{disabled:l||!e.state.permissionTemplate},Object(p.l)("apply")),r.createElement(c.h,{onClick:n},Object(p.l)(e.state.done?"close":"cancel"))))})},t}(r.PureComponent);t.a=m},2033:function(e,t,o){"use strict";o.r(t);var n,r=o(705),i=o(746),a=o.n(i),l=o(695),s=o(711),c=o.n(s),p=o(1199),u=o(1224),d=o(737),m=o(925),g=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleToggleUser=function(e,o){return e.permissions.includes(o)?t.props.revokePermissionFromUser(e.login,o):t.props.grantPermissionToUser(e.login,o)},t.handleToggleGroup=function(e,o){return e.permissions.includes(o)?t.props.revokePermissionFromGroup(e.name,o):t.props.grantPermissionToGroup(e.name,o)},t.handleSelectPermission=function(e){t.props.onPermissionSelect(e)},t}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.filter,o=e.groups,n=e.groupsPaging,r=e.users,i=e.usersPaging,s=m.a[this.props.component.qualifier];"public"===this.props.visibility&&(s=a()(s,"user","codeviewer"));var c=Object(m.e)(s,"projects_role"),g=0,f=0;return"users"!==t&&(g+=o.length,f+=n?n.total:o.length),"groups"!==t&&(g+=r.length,f+=i?i.total:r.length),l.createElement(l.Fragment,null,l.createElement(u.a,{filter:this.props.filter,groups:this.props.groups,onSelectPermission:this.handleSelectPermission,onToggleGroup:this.handleToggleGroup,onToggleUser:this.handleToggleUser,permissions:c,query:this.props.query,selectedPermission:this.props.selectedPermission,users:this.props.users},l.createElement(p.a,{filter:this.props.filter,onFilter:this.props.onFilterChange,onSearch:this.props.onQueryChange,query:this.props.query})),l.createElement(d.a,{count:g,loadMore:this.props.onLoadMore,total:f}))},t}(l.PureComponent),b=o(1201),h=o(697),v=o(28),y=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={applyTemplateModal:!1},t.handleApplyTemplate=function(){t.setState({applyTemplateModal:!0})},t.handleApplyTemplateClose=function(){t.mounted&&t.setState({applyTemplateModal:!1})},t}return y(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.component,t=e.configuration,o=null!=t&&t.canApplyPermissionTemplate,n=["VW","SVW","APP"].includes(e.qualifier)?Object(v.l)("roles.page.description_portfolio"):Object(v.l)("roles.page.description2"),r="TRK"===e.qualifier&&e.visibility?Object(v.l)("visibility",e.visibility,"description",e.qualifier):void 0;return l.createElement("header",{className:"page-header"},l.createElement("h1",{className:"page-title"},Object(v.l)("permissions.page")),this.props.loading&&l.createElement("i",{className:"spinner"}),o&&l.createElement("div",{className:"page-actions"},l.createElement(h.a,{className:"js-apply-template",onClick:this.handleApplyTemplate},Object(v.l)("projects_role.apply_template")),this.state.applyTemplateModal&&l.createElement(b.a,{onApply:this.props.loadHolders,onClose:this.handleApplyTemplateClose,organization:e.organization,project:e})),l.createElement("div",{className:"page-description"},l.createElement("p",null,n),r&&l.createElement("p",null,r)))},t}(l.PureComponent),x=o(726),O=o(715);function P(e){var t=e.component,o=e.onClose,n=e.onConfirm,r=t.qualifier;return l.createElement(x.a,{confirmButtonText:Object(v.l)("projects_role.turn_project_to_public",r),header:Object(v.m)("projects_role.turn_x_to_public",t.name),onClose:o,onConfirm:n},l.createElement(O.a,{variant:"warning"},Object(v.l)("projects_role.are_you_sure_to_turn_project_to_public.warning",r)),l.createElement("p",null,Object(v.l)("projects_role.are_you_sure_to_turn_project_to_public",r)))}var j=o(980),_=o(1029),w=o(850),E=(o(1200),function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}()),T=function(){return(T=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},C=function(e){function t(t){var o=e.call(this,t)||this;return o.mounted=!1,o.stopLoading=function(){o.mounted&&o.setState({loading:!1})},o.loadUsersAndGroups=function(e,t){var n=o.props.component,r=o.state,i=r.filter,a=r.query,l=r.selectedPermission,s="groups"!==i?w.n({projectKey:n.key,q:a||void 0,permission:l,organization:n.organization,p:e}):Promise.resolve({paging:void 0,users:[]}),c="users"!==i?w.m({projectKey:n.key,q:a||void 0,permission:l,organization:n.organization,p:t}):Promise.resolve({paging:void 0,groups:[]});return Promise.all([s,c])},o.loadHolders=function(){return o.setState({loading:!0}),o.loadUsersAndGroups().then(function(e){var t=e[0],n=e[1];o.mounted&&o.setState({groups:n.groups,groupsPaging:n.paging,loading:!1,users:t.users,usersPaging:t.paging})},o.stopLoading)},o.onLoadMore=function(){var e=o.state,t=e.usersPaging,n=e.groupsPaging;return o.setState({loading:!0}),o.loadUsersAndGroups(t?t.pageIndex+1:1,n?n.pageIndex+1:1).then(function(e){var t=e[0],n=e[1];o.mounted&&o.setState(function(e){var o=e.groups,r=e.users;return{groups:o.concat(n.groups),groupsPaging:n.paging,loading:!1,users:r.concat(t.users),usersPaging:t.paging}})},o.stopLoading)},o.handleFilterChange=function(e){o.mounted&&o.setState({filter:e},o.loadHolders)},o.handleQueryChange=function(e){o.mounted&&o.setState({query:e},o.loadHolders)},o.handlePermissionSelect=function(e){o.mounted&&o.setState(function(t){return{selectedPermission:t.selectedPermission===e?void 0:e}},o.loadHolders)},o.addPermissionToGroup=function(e,t){return o.state.groups.map(function(o){return o.name===e?T({},o,{permissions:o.permissions.concat([t])}):o})},o.addPermissionToUser=function(e,t){return o.state.users.map(function(o){return o.login===e?T({},o,{permissions:o.permissions.concat([t])}):o})},o.removePermissionFromGroup=function(e,t){return o.state.groups.map(function(o){return o.name===e?T({},o,{permissions:a()(o.permissions,t)}):o})},o.removePermissionFromUser=function(e,t){return o.state.users.map(function(o){return o.login===e?T({},o,{permissions:a()(o.permissions,t)}):o})},o.grantPermissionToGroup=function(e,t){return o.mounted?(o.setState({loading:!0,groups:o.addPermissionToGroup(e,t)}),w.o({projectKey:o.props.component.key,groupName:e,permission:t,organization:o.props.component.organization}).then(o.stopLoading,function(){o.mounted&&o.setState({loading:!1,groups:o.removePermissionFromGroup(e,t)})})):Promise.resolve()},o.grantPermissionToUser=function(e,t){return o.mounted?(o.setState({loading:!0,users:o.addPermissionToUser(e,t)}),w.p({projectKey:o.props.component.key,login:e,permission:t,organization:o.props.component.organization}).then(o.stopLoading,function(){o.mounted&&o.setState({loading:!1,users:o.removePermissionFromUser(e,t)})})):Promise.resolve()},o.revokePermissionFromGroup=function(e,t){return o.mounted?(o.setState({loading:!0,groups:o.removePermissionFromGroup(e,t)}),w.t({projectKey:o.props.component.key,groupName:e,permission:t,organization:o.props.component.organization}).then(o.stopLoading,function(){o.mounted&&o.setState({loading:!1,groups:o.addPermissionToGroup(e,t)})})):Promise.resolve()},o.revokePermissionFromUser=function(e,t){return o.mounted?(o.setState({loading:!0,users:o.removePermissionFromUser(e,t)}),w.u({projectKey:o.props.component.key,login:e,permission:t,organization:o.props.component.organization}).then(o.stopLoading,function(){o.mounted&&o.setState({loading:!1,users:o.addPermissionToUser(e,t)})})):Promise.resolve()},o.handleOrganizationUpgrade=function(){var e=o.props,t=e.component,n=e.organization;n&&(o.props.onComponentChange({configuration:T({},t.configuration,{canUpdateProjectVisibilityToPrivate:!0})}),o.props.fetchOrganization(n.key))},o.handleVisibilityChange=function(e){"public"===e?o.openDisclaimer():o.turnProjectToPrivate()},o.turnProjectToPublic=function(){o.props.onComponentChange({visibility:"public"}),w.e(o.props.component.key,"public").then(function(){o.loadHolders()},function(){o.props.onComponentChange({visibility:"private"})})},o.turnProjectToPrivate=function(){o.props.onComponentChange({visibility:"private"}),w.e(o.props.component.key,"private").then(function(){o.loadHolders()},function(){o.props.onComponentChange({visibility:"public"})})},o.openDisclaimer=function(){o.mounted&&o.setState({disclaimer:!0})},o.closeDisclaimer=function(){o.mounted&&o.setState({disclaimer:!1})},o.state={disclaimer:!1,filter:"all",groups:[],loading:!0,query:"",users:[]},o}return E(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.loadHolders()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e,t=this.props,o=t.component,n=t.organization,r=o.configuration&&o.configuration.canUpdateProjectVisibilityToPrivate;n&&!r&&(e=n.actions&&n.actions.admin&&"TRK"===this.props.component.qualifier&&!n.canUpdateProjectsVisibilityToPrivate);return l.createElement("div",{className:"page page-limited",id:"project-permissions-page"},l.createElement(c.a,{title:Object(v.l)("permissions.page")}),l.createElement(S,{component:o,loadHolders:this.loadHolders,loading:this.state.loading}),l.createElement("div",null,l.createElement(_.a,{canTurnToPrivate:r,className:"big-spacer-top big-spacer-bottom",onChange:this.handleVisibilityChange,visibility:o.visibility}),e&&n&&l.createElement(j.a,{className:"big-spacer-bottom",onOrganizationUpgrade:this.handleOrganizationUpgrade,organization:n}),this.state.disclaimer&&l.createElement(P,{component:o,onClose:this.closeDisclaimer,onConfirm:this.turnProjectToPublic})),l.createElement(f,{component:o,filter:this.state.filter,grantPermissionToGroup:this.grantPermissionToGroup,grantPermissionToUser:this.grantPermissionToUser,groups:this.state.groups,groupsPaging:this.state.groupsPaging,onFilterChange:this.handleFilterChange,onLoadMore:this.onLoadMore,onPermissionSelect:this.handlePermissionSelect,onQueryChange:this.handleQueryChange,query:this.state.query,revokePermissionFromGroup:this.revokePermissionFromGroup,revokePermissionFromUser:this.revokePermissionFromUser,selectedPermission:this.state.selectedPermission,users:this.state.users,usersPaging:this.state.usersPaging,visibility:o.visibility}))},t}(l.PureComponent),N=o(708),k={fetchOrganization:o(779).f};t.default=Object(r.connect)(function(e,t){var o=t.component;return{currentUser:Object(N.getCurrentUser)(e),organization:Object(N.getOrganizationByKey)(e,o.organization)}},k)(C)},709:function(e,t,o){"use strict";o.d(t,"a",function(){return l});var n=o(695),r=o(740),i=o(696),a=function(){return(a=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function l(e){return n.createElement(r,a({className:i("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:i("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}r.setAppElement("#content")},716:function(e,t,o){"use strict";o.d(t,"c",function(){return m}),o.d(t,"b",function(){return g}),o.d(t,"a",function(){return f});var n=o(695),r=o(697),i=o(710),a=(o(727),function(){return(a=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}),l=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(o[n[r]]=e[n[r]])}return o},s=o.e(366).then(o.bind(null,770)),c=Object(i.a)(function(){return s}),p=Object(i.a)(function(){return s.then(function(e){return{default:e.Creatable}})}),u=Object(i.a)(function(){return s.then(function(e){return{default:e.Async}})});function d(){return n.createElement(r.d,{className:"button-tiny spacer-left text-middle",iconProps:{size:12}})}function m(e){var t=e.innerRef,o=l(e,["innerRef"]),r=c,i=!!o.clearable&&Boolean(o.value);return n.createElement(r,a({},o,{clearRenderer:d,clearable:i,ref:t}))}function g(e){var t=p;return n.createElement(t,a({},e,{clearRenderer:d}))}function f(e){return n.createElement(u,a({},e))}},719:function(e,t,o){"use strict";var n,r=o(695),i=o(709),a=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),l=function(){return(l=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(o[n[r]]=e[n[r]])}return o},c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return a(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,o=e.header,n=e.onClose,a=(e.onSubmit,s(e,["children","header","onClose","onSubmit"]));return r.createElement(i.a,l({contentLabel:o,onRequestClose:n},a),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(r.Component);t.a=c},726:function(e,t,o){"use strict";var n,r=o(695),i=o(719),a=o(707),l=o(697),s=o(28),c=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),p=function(){return(p=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.handleSubmit=function(){var e=t.props.onConfirm(t.props.confirmData);return e?e.then(t.props.onClose,function(){}):void t.props.onClose()},t.renderModalContent=function(e){var o=e.onCloseClick,n=e.onFormSubmit,i=e.submitting,c=t.props,p=c.children,u=c.confirmButtonText,d=c.confirmDisable,m=c.header,g=c.headerDescription,f=c.isDestructive,b=c.cancelButtonText,h=void 0===b?Object(s.l)("cancel"):b;return r.createElement("form",{onSubmit:n},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,m),g),r.createElement("div",{className:"modal-body"},p),r.createElement("footer",{className:"modal-foot"},r.createElement(a.a,{className:"spacer-right",loading:i}),r.createElement(l.i,{autoFocus:!0,className:f?"button-red":void 0,disabled:i||d},u),r.createElement(l.h,{disabled:i,onClick:o},h)))},t}return c(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t={header:e.header,onClose:e.onClose,noBackdrop:e.noBackdrop,size:e.size};return r.createElement(i.a,p({onSubmit:this.handleSubmit},t),this.renderModalContent)},t}(r.PureComponent);t.a=u},727:function(e,t,o){var n=o(728);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(699)(n,r);n.locals&&(e.exports=n.locals)},728:function(e,t,o){(e.exports=o(698)(!1)).push([e.i,".Select{position:relative;display:inline-block;vertical-align:middle;font-size:12px;text-align:left}.Select,.Select div,.Select input,.Select span{box-sizing:border-box}.Select.is-disabled>.Select-control{background-color:#ebebeb!important;border-color:#ddd!important}.Select.is-disabled>.Select-control:hover{box-shadow:none!important}.Select.is-disabled .Select-arrow-zone{cursor:not-allowed!important;pointer-events:none!important}.Select.is-disabled .Select-placeholder,.Select.is-disabled .Select-value{color:#bbb!important}.Select-control{position:relative;display:table;width:100%;height:24px;line-height:22px;border:1px solid #cdcdcd;border-collapse:separate;border-radius:2px;background-color:#fff;color:#444;cursor:default;outline:none;overflow:hidden}.is-searchable.is-open>.Select-control{cursor:text}.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff}.is-open>.Select-control>.Select-arrow{border-color:transparent transparent #999;border-width:0 5px 5px}.is-searchable.is-focused:not(.is-open)>.Select-control{cursor:text}.is-focused:not(.is-open)>.Select-control{border-color:#4b9fd5}.Select-placeholder{color:#777}.Select-placeholder,:not(.Select--multi)>.Select-control .Select-value{bottom:0;left:0;line-height:23px;padding-left:8px;padding-right:24px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-value [class^=icon-]{padding-top:5px}.Select-value img,.Select-value svg{padding-top:4px}.Select-option .outline-badge,.Select-value .outline-badge{height:20px;line-height:19px;margin-top:1px}.Select-option [class^=icon-],.Select-option img,.Select-option svg{padding-top:2px}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value .Select-value-label,.has-value:not(.Select--multi)>.Select-control>.Select-value .Select-value-label{color:#444}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:focus,.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:hover,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:focus,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select-input{vertical-align:top;height:22px;padding-left:8px;padding-right:8px;outline:none}.Select-input>input{background:none transparent;border:0;cursor:default;display:inline-block;font-family:inherit;font-size:12px;height:22px;margin:0;outline:none;padding:0;box-shadow:none;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:16px}.Select-loading{animation:Select-animation-spin .4s linear infinite;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#444;display:inline-block}.Select-clear-zone,.Select-loading{width:16px;height:16px;position:relative;vertical-align:middle}.Select-clear-zone{animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;text-align:center;padding-right:4px}.Select-clear-zone:hover .Select-clear{background-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEzLjk2OSAxLjQwNkw4LjM5IDYuOTg0bDUuNTc4IDUuNTc5LTEuNDA2IDEuNDA2TDYuOTg0IDguMzlsLTUuNTc4IDUuNTc4TDAgMTIuNTYzbDUuNTc4LTUuNTc5TDAgMS40MDYgMS40MDYgMGw1LjU3OCA1LjU3OEwxMi41NjMgMGwxLjQwNiAxLjQwNnoiIGZpbGw9IiNlNzE0MzgiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==)}.Select-clear{display:block;width:9px;height:9px;background-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEzLjk2OSAxLjQwNkw4LjM5IDYuOTg0bDUuNTc4IDUuNTc5LTEuNDA2IDEuNDA2TDYuOTg0IDguMzlsLTUuNTc4IDUuNTc4TDAgMTIuNTYzbDUuNTc4LTUuNTc5TDAgMS40MDYgMS40MDYgMGw1LjU3OCA1LjU3OEwxMi41NjMgMGwxLjQwNiAxLjQwNnoiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==);background-size:9px 9px;text-indent:-9999px}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:20px;padding-right:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:4px 4px 2px;display:inline-block;height:0;width:0}.is-open .Select-arrow,.Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;top:100%;width:100%;z-index:7500;-webkit-overflow-scrolling:touch;box-shadow:0 6px 12px rgba(0,0,0,.175)}.Select-menu{max-height:198px;padding:5px 0;overflow-y:auto}.Select-option{display:block;line-height:20px;padding:0 8px;box-sizing:border-box;color:#444;font-size:12px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.Select-option:last-child{border-bottom-right-radius:2px;border-bottom-left-radius:2px}.Select-option.is-focused{background-color:#f3f3f3}.Select-option.is-disabled{font-weight:600;cursor:default}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-value{background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid rgba(0,126,255,.24);color:#444;display:inline-block;font-size:12px;line-height:14px;margin:1px 4px 1px 1px;vertical-align:top}.Select-value-label{font-size:12px}.is-searchable.is-open .Select-value-label{opacity:.5}.Select-big .Select-control{padding-top:4px;padding-bottom:4px}.Select-big .Select-placeholder{margin-top:4px;margin-bottom:4px}.Select-big .Select-value-label{display:inline-block;margin-top:7px;line-height:16px}.Select-big .Select-option{padding:7px 8px;line-height:16px}.Select-big img,.Select-big svg{padding-top:0}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{display:inline-block;max-width:200px;border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#444}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}.Select-aria-only{display:none}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}",""])},737:function(e,t,o){"use strict";o.d(t,"a",function(){return c});var n=o(695),r=o(696),i=o(707),a=o(28),l=o(706),s=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(o[n[r]]=e[n[r]])}return o};function c(e){var t,o=e.ready,c=void 0===o||o,p=s(e,["ready"]),u=p.total&&p.total>p.count,d=n.createElement("a",{className:"spacer-left",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),p.loadMore&&p.loadMore()}},Object(a.l)("show_more")),m=n.createElement("a",{className:"spacer-left",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),p.reload&&p.reload()}},Object(a.l)("reload")),g=r("spacer-top note text-center",{"new-loading":!c},p.className);return p.needReload&&p.reload?t=m:u&&p.loadMore&&(t=d),n.createElement("footer",{className:g},Object(a.m)("x_of_y_shown",Object(l.formatMeasure)(p.count,"INT",null),Object(l.formatMeasure)(p.total,"INT",null)),t,p.loading&&n.createElement(i.a,{className:"text-bottom spacer-left position-absolute"}))}},980:function(e,t,o){"use strict";var n,r=o(695),i=o(689),a=o(701),l=o(938),s=o(1051),c=o(707),p=o(709),u=o(697),d=o(842),m=o(769),g=o(28),f=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),b=Object(d.a)(s.a),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={ready:!1},t}return f(t,e),t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,Object(m.a)("billing/billing").then(function(){e.mounted&&e.setState({ready:!0})},function(){})},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this,t=Object(g.l)("billing.upgrade_box.upgrade_to_paid_plan");return this.state.ready?r.createElement(p.a,{contentLabel:t,noBackdrop:this.props.insideModal,onRequestClose:this.props.onClose,shouldCloseOnOverlayClick:!1,size:"medium"},r.createElement("div",{className:"modal-head"},r.createElement("h2",null,t)),r.createElement(b,{onCommit:this.props.onUpgradeDone,organizationKey:this.props.organization.key,subscriptionPlans:this.props.subscriptionPlans},function(t){var o=t.onSubmit,n=t.processingUpgrade,a=t.renderFormFields,s=t.renderNextCharge,p=t.renderRecap,d=t.renderSubmitButton;return r.createElement("form",{id:"organization-paid-plan-form",onSubmit:o},r.createElement("div",{className:"modal-body modal-container"},r.createElement("div",{className:"huge-spacer-bottom"},r.createElement("p",{className:"spacer-bottom"},r.createElement(i.FormattedMessage,{defaultMessage:Object(g.l)("billing.upgrade.org_x_advantages"),id:"billing.coupon.description",values:{org:r.createElement("strong",null,e.props.organization.name)}})),r.createElement(l.a,null)),a(),r.createElement("div",{className:"big-spacer-top"},p())),r.createElement("footer",{className:"modal-foot display-flex-center display-flex-space-between"},s()||r.createElement("span",null),r.createElement("div",null,r.createElement(c.a,{loading:n}),d(),r.createElement(u.h,{onClick:e.props.onClose},Object(g.l)("cancel")))))})):null},t}(r.PureComponent),v=o(953),y=o(815),S=o(965),x=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={subscriptionPlans:[],upgradeOrganizationModal:!1},t.fetchSubscriptionPlans=function(){return Object(S.a)().then(function(e){t.mounted&&t.setState({subscriptionPlans:e})})},t.handleUpgradeClick=function(){t.setState({upgradeOrganizationModal:!0})},t.handleUpgradeOrganizationModalClose=function(){t.mounted&&t.setState({upgradeOrganizationModal:!1})},t.handleOrganizationUpgrade=function(){t.props.onOrganizationUpgrade(),t.handleUpgradeOrganizationModalClose()},t}return x(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchSubscriptionPlans()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){if(!Object(g.i)("billing.upgrade_box.header"))return null;var e=this.state,t=e.subscriptionPlans,o=e.upgradeOrganizationModal,n=t[0]&&t[0].price;return r.createElement(r.Fragment,null,r.createElement(v.a,{className:this.props.className,title:Object(g.l)("billing.upgrade_box.header"),titleInfo:void 0!==n&&r.createElement(i.FormattedMessage,{defaultMessage:Object(g.l)("billing.price_from_x"),id:"billing.price_from_x",values:{price:r.createElement("span",{className:"big"},Object(y.f)(n))}})},r.createElement(r.Fragment,null,r.createElement(l.a,null),r.createElement("div",{className:"big-spacer-left"},r.createElement(u.a,{className:"js-upgrade-organization",onClick:this.handleUpgradeClick},Object(g.l)("billing.paid_plan.upgrade")),r.createElement(a.Link,{className:"spacer-left",target:"_blank",to:"/about/pricing"},Object(g.l)("billing.pricing.learn_more"))))),o&&r.createElement(h,{insideModal:this.props.insideModal,onClose:this.handleUpgradeOrganizationModalClose,onUpgradeDone:this.handleOrganizationUpgrade,organization:this.props.organization,subscriptionPlans:t}))},t}(r.PureComponent);t.a=O}}]);
//# sourceMappingURL=318.1561907751625.chunk.js.map