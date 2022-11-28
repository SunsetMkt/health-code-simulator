/**
 * Minified by jsDelivr using Terser v5.9.0.
 * Original file: /npm/vue-demi@0.12.1/lib/index.iife.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.protected-code.example.orgusing-sri-with-dynamic-files
 */
!function(e){if(!e.VueDemi){var i={},o=e.Vue;if(o)if("2."===o.version.slice(0,2)){var n=e.VueCompositionAPI;if(n){for(var r in n)i[r]=n[r];i.isVue2=!0,i.isVue3=!1,i.install=function(){},i.Vue=o,i.Vue2=o,i.version=o.version}else console.error("[vue-demi] no VueCompositionAPI instance found, please be sure to import `@vue/composition-api` before `vue-demi`.")}else if("3."===o.version.slice(0,2)){for(var r in o)i[r]=o[r];i.isVue2=!1,i.isVue3=!0,i.install=function(){},i.Vue=o,i.Vue2=void 0,i.version=o.version,i.set=function(e,i,o){return Array.isArray(e)?(e.length=Math.max(e.length,i),e.splice(i,1,o),o):(e[i]=o,o)},i.del=function(e,i){Array.isArray(e)?e.splice(i,1):delete e[i]}}else console.error("[vue-demi] Vue version "+o.version+" is unsupported.");else console.error("[vue-demi] no Vue instance found, please be sure to import `vue` before `vue-demi`.");e.VueDemi=i}}(window);
//# sourceMappingURL=/sm/6b89c3c9f9d6dfdbb1bb9db23dfe3bf2213ccb7437e5b718f41319faad5b8a38.map