(()=>{"use strict";var e={672:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(519),r=i.n(n)()((function(e){return e[1]}));r.push([e.id,".remove-border-bottom[data-v-738c2b1a] .publish-sidebar .publish-section-actions{border-bottom-width:0}",""]);const s=r},519:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(r[a]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);n&&r[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),t.push(l))}},t}},994:(e,t,i)=>{var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),a=[];function o(e){for(var t=-1,i=0;i<a.length;i++)if(a[i].identifier===e){t=i;break}return t}function l(e,t){for(var i={},n=[],r=0;r<e.length;r++){var s=e[r],l=t.base?s[0]+t.base:s[0],c=i[l]||0,u="".concat(l," ").concat(c);i[l]=c+1;var d=o(u),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(a[d].references++,a[d].updater(h)):a.push({identifier:u,updater:v(h,t),references:1}),n.push(u)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=i.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=s(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function h(e,t,i,n){var r=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var s=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function f(e,t,i){var n=i.css,r=i.media,s=i.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,m=0;function v(e,t){var i,n,r;if(t.singleton){var s=m++;i=p||(p=c(t)),n=h.bind(null,i,s,!1),r=h.bind(null,i,s,!0)}else i=c(t),n=f.bind(null,i,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var i=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var r=o(i[n]);a[r].references--}for(var s=l(e,t),c=0;c<i.length;c++){var u=o(i[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}i=s}}}}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={id:n,exports:{}};return e[n](s,s.exports,i),s.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function t(t){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?e(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const r={props:{publishContainer:String,initialReference:String,initialFieldset:Object,initialValues:Object,initialMeta:Object,initialTitle:String,initialLocalizations:Array,initialLocalizedFields:Array,initialHasOrigin:Boolean,initialOriginValues:Object,initialOriginMeta:Object,initialSite:String,breadcrumbs:Array,initialActions:Object,method:String,isCreating:Boolean,initialReadOnly:Boolean,initialIsRoot:Boolean,contentType:String},data:function(){return{actions:this.initialActions,saving:!1,localizing:!1,fieldset:this.initialFieldset,title:this.initialTitle,values:_.clone(this.initialValues),meta:_.clone(this.initialMeta),localizations:_.clone(this.initialLocalizations),localizedFields:this.initialLocalizedFields,hasOrigin:this.initialHasOrigin,originValues:this.initialOriginValues||{},originMeta:this.initialOriginMeta||{},site:this.initialSite,error:null,errors:{},isRoot:this.initialIsRoot,readOnly:this.initialReadOnly}},computed:{shouldShowSites:function(){return this.localizations.length>1},hasErrors:function(){return this.error||Object.keys(this.errors).length},somethingIsLoading:function(){return!this.$progress.isComplete()},canSave:function(){return!this.readOnly&&this.isDirty&&!this.somethingIsLoading},isBase:function(){return"base"===this.publishContainer},isDirty:function(){return this.$dirty.has(this.publishContainer)},activeLocalization:function(){return _.findWhere(this.localizations,{active:!0})},originLocalization:function(){return _.findWhere(this.localizations,{origin:!0})},computedBreadcrumbs:function(){var e={url:this.breadcrumbs[0].url,text:this.breadcrumbs[0].text};return"site"!==this.contentType&&(e.text="".concat(this.breadcrumbs[0].text," (").concat(this.breadcrumbs[1].text,")")),e}},watch:{saving:function(e){this.$progress.loading("".concat(this.publishContainer,"-defaults-publish-form"),e)}},methods:{clearErrors:function(){this.error=null,this.errors={}},save:function(){var e=this;if(this.canSave){this.saving=!0,this.clearErrors();var i=t(t({},this.values),{blueprint:this.fieldset.handle,_localized:this.localizedFields});this.$axios[this.method](this.actions.save,i).then((function(t){e.saving=!1,e.isCreating||e.$toast.success(__("Saved")),e.$refs.container.saved(),e.$nextTick((function(){return e.$emit("saved",t)}))})).catch((function(t){return e.handleAxiosError(t)}))}},handleAxiosError:function(e){if(this.saving=!1,e.response&&422===e.response.status){var t=e.response.data,i=t.message,n=t.errors;this.error=i,this.errors=n,this.$toast.error(i)}else this.$toast.error(__("Something went wrong"))},localizationSelected:function(e){var t=this;e.active||this.isDirty&&!confirm(__("Are you sure? Unsaved changes will be lost."))||(this.$dirty.remove(this.publishContainer),this.localizing=e.handle,this.isBase&&window.history.replaceState({},"",e.url),this.$axios.get(e.url).then((function(i){var n=i.data;t.values=n.values,t.originValues=n.originValues,t.originMeta=n.originMeta,t.meta=n.meta,t.localizations=n.localizations,t.localizedFields=n.localizedFields,t.hasOrigin=n.hasOrigin,t.actions=n.actions,t.fieldset=n.blueprint,t.isRoot=n.isRoot,t.site=e.handle,t.localizing=!1,t.$nextTick((function(){return t.$refs.container.clearDirtyState()}))})))},setFieldValue:function(e,t){this.hasOrigin&&this.desyncField(e),this.$refs.container.setFieldValue(e,t)},syncField:function(e){confirm(__("Are you sure? This field's value will be replaced by the value in the original entry."))&&(this.localizedFields=this.localizedFields.filter((function(t){return t!==e})),this.$refs.container.setFieldValue(e,this.originValues[e]),this.meta[e]=this.originMeta[e])},desyncField:function(e){this.localizedFields.includes(e)||this.localizedFields.push(e),this.$refs.container.dirty()}},mounted:function(){var e=this;this.$keys.bindGlobal(["mod+s"],(function(t){t.preventDefault(),e.save()}))},created:function(){window.history.replaceState({},document.title,document.location.href.replace("created=true",""))}};var s=i(994),a=i.n(s),o=i(672),l={insert:"head",singleton:!1};a()(o.Z,l);o.Z.locals;function c(e,t,i,n,r,s,a,o){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=o?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}const u=c(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"remove-border-bottom"},[i("header",{staticClass:"mb-3"},[i("breadcrumb",{attrs:{url:e.computedBreadcrumbs.url,title:e.computedBreadcrumbs.text}}),e._v(" "),i("div",{staticClass:"flex items-center"},[i("h1",{staticClass:"flex-1",domProps:{textContent:e._s(e.title)}}),e._v(" "),e.readOnly?i("div",{staticClass:"flex pt-px text-2xs text-grey-60"},[i("svg-icon",{staticClass:"w-4 mr-sm -mt-sm",attrs:{name:"lock"}}),e._v(" "+e._s(e.__("Read Only"))+"\n            ")],1):e._e(),e._v(" "),e.readOnly?e._e():i("button",{staticClass:"ml-2 btn-primary min-w-100",class:{"opacity-25":!e.canSave},attrs:{disabled:!e.canSave},domProps:{textContent:e._s(e.__("Save"))},on:{click:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}})])],1),e._v(" "),i("publish-container",{ref:"container",attrs:{name:e.publishContainer,blueprint:e.fieldset,values:e.values,reference:e.initialReference,meta:e.meta,errors:e.errors,site:e.site,"localized-fields":e.localizedFields,"is-root":e.isRoot},on:{updated:function(t){e.values=t}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.container,r=t.components,s=t.setFieldMeta;return i("div",{},[e._l(r,(function(t){return i(t.name,e._b({key:t.name,tag:"component",attrs:{container:n}},"component",t.props,!1))})),e._v(" "),i("publish-sections",{attrs:{"read-only":e.readOnly,syncable:e.hasOrigin,"can-toggle-labels":!0,"enable-sidebar":e.shouldShowSites},on:{updated:e.setFieldValue,"meta-updated":s,synced:e.syncField,desynced:e.desyncField,focus:function(e){return n.$emit("focus",e)},blur:function(e){return n.$emit("blur",e)}},scopedSlots:e._u([{key:"actions",fn:function(t){t.shouldShowSidebar;return[e.shouldShowSites?i("div",{staticClass:"p-2"},[i("label",{staticClass:"mb-1 font-medium publish-field-label",domProps:{textContent:e._s(e.__("Sites"))}}),e._v(" "),e._l(e.localizations,(function(t){return i("div",{key:t.handle,staticClass:"flex items-center px-2 py-1 -mx-2 text-sm cursor-pointer",class:t.active?"bg-blue-100":"hover:bg-grey-20",on:{click:function(i){return e.localizationSelected(t)}}},[i("div",{staticClass:"flex items-center flex-1"},[e._v("\n                                "+e._s(t.name)+"\n                                "),e.localizing===t.handle?i("loading-graphic",{staticClass:"flex items-center ml-1",staticStyle:{"padding-bottom":"0.05em"},attrs:{size:14,text:""}}):e._e()],1),e._v(" "),t.origin?i("div",{staticClass:"badge-sm bg-orange",domProps:{textContent:e._s(e.__("Origin"))}}):e._e(),e._v(" "),t.active?i("div",{staticClass:"badge-sm bg-blue",domProps:{textContent:e._s(e.__("Active"))}}):e._e(),e._v(" "),!t.root||t.origin||t.active?e._e():i("div",{staticClass:"badge-sm bg-purple",domProps:{textContent:e._s(e.__("Root"))}})])}))],2):e._e()]}}],null,!0)})],2)}}])})],1)}),[],!1,null,"738c2b1a",null).exports;const d=c({name:"social-images-preview-fieldtype",mixins:[Fieldtype]},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[this.meta.image?i("img",{attrs:{src:this.meta.image}}):i("div",{staticClass:"p-3 text-center border rounded",staticStyle:{"border-color":"#c4ccd4","background-color":"#fafcff"}},[i("small",{staticClass:"mb-0 help-block"},[e._v("Save the entry to generate your first "+e._s(this.meta.title)+" image.")])])])}),[],!1,null,null,null).exports;Statamic.booting((function(){Statamic.component("defaults-publish-form",u),Statamic.component("social_images_preview-fieldtype",d)}))})()})();