/*! For license information please see oauth2-oauth2.js.LICENSE.txt */
!function(){"use strict";var e,n={59725:function(e,n,i){var r=i(20144),o=i(4820),a=i(57612),l=i(10861),s=i.n(l),c={name:"OAuthItem",components:{Delete:a.Z,NcButton:s()},props:{client:{type:Object,required:!0}},data:function(){return{id:this.client.id,name:this.client.name,redirectUri:this.client.redirectUri,clientId:this.client.clientId,clientSecret:this.client.clientSecret,renderSecret:!1}},computed:{renderedSecret:function(){return this.renderSecret?this.clientSecret:"****"}},methods:{toggleSecret:function(){this.renderSecret=!this.renderSecret}}},d=i(93379),u=i.n(d),h=i(7795),p=i.n(h),m=i(90569),f=i.n(m),A=i(3565),v=i.n(A),g=i(19216),C=i.n(g),b=i(44589),y=i.n(b),w=i(54044),S={};S.styleTagTransform=y(),S.setAttributes=v(),S.insert=f().bind(null,"head"),S.domAPI=p(),S.insertStyleElement=C(),u()(w.Z,S),w.Z&&w.Z.locals&&w.Z.locals;var x=i(51900),_=(0,x.Z)(c,(function(){var t=this,e=t._self._c;return e("tr",[e("td",[e("table",{staticClass:"inline"},[e("tr",[e("td",[t._v(t._s(t.t("oauth2","Name")))]),t._v(" "),e("td",[t._v(t._s(t.name))])]),t._v(" "),e("tr",[e("td",[t._v(t._s(t.t("oauth2","Redirection URI")))]),t._v(" "),e("td",[t._v(t._s(t.redirectUri))])]),t._v(" "),e("tr",[e("td",[t._v(t._s(t.t("oauth2","Client Identifier")))]),t._v(" "),e("td",[e("code",[t._v(t._s(t.clientId))])])]),t._v(" "),e("tr",[e("td",[t._v(t._s(t.t("oauth2","Secret")))]),t._v(" "),e("td",[e("code",[t._v(t._s(t.renderedSecret))]),e("a",{staticClass:"icon-toggle has-tooltip",attrs:{title:t.t("oauth2","Show client secret")},on:{click:t.toggleSecret}})])])])]),t._v(" "),e("td",{staticClass:"action-column"},[e("NcButton",{attrs:{type:"tertiary-no-background","aria-label":t.t("oauth2","Delete")},on:{click:function(e){return t.$emit("delete",t.id)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Delete",{attrs:{size:20,title:t.t("oauth2","Delete")}})]},proxy:!0}])})],1)])}),[],!1,null,"142f39d4",null).exports,N=i(79753),U=i(42515),O=i(13299),I=i.n(O),R=i(79954),k={name:"App",components:{OAuthItem:_,NcSettingsSection:I(),NcButton:s()},props:{clients:{type:Array,required:!0}},data:function(){return{newClient:{name:"",redirectUri:"",errorMsg:"",error:!1},oauthDocLink:(0,R.j)("oauth2","oauth2-doc-link")}},computed:{instanceName:function(){return(0,U.getCapabilities)().theming.name}},methods:{deleteClient:function(t){var e=this;o.default.delete((0,N.generateUrl)("apps/oauth2/clients/{id}",{id:t})).then((function(n){e.clients=e.clients.filter((function(e){return e.id!==t}))}))},addClient:function(){var t=this;this.newClient.error=!1,o.default.post((0,N.generateUrl)("apps/oauth2/clients"),{name:this.newClient.name,redirectUri:this.newClient.redirectUri}).then((function(e){t.clients.push(e.data),t.newClient.name="",t.newClient.redirectUri=""})).catch((function(e){t.newClient.error=!0,t.newClient.errorMsg=e.response.data.message}))}}},T=i(50331),B={};B.styleTagTransform=y(),B.setAttributes=v(),B.insert=f().bind(null,"head"),B.domAPI=p(),B.insertStyleElement=C(),u()(T.Z,B),T.Z&&T.Z.locals&&T.Z.locals;var P=(0,x.Z)(k,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{title:t.t("oauth2","OAuth 2.0 clients"),description:t.t("oauth2","OAuth 2.0 allows external services to request access to {instanceName}.",{instanceName:t.instanceName}),"doc-url":t.oauthDocLink}},[t.clients.length>0?e("table",{staticClass:"grid"},[e("thead",[e("tr",[e("th",{attrs:{id:"headerContent"}}),t._v(" "),e("th",{attrs:{id:"headerRemove"}},[t._v("\n \n\t\t\t\t\t")])])]),t._v(" "),e("tbody",t._l(t.clients,(function(n){return e("OAuthItem",{key:n.id,attrs:{client:n},on:{delete:t.deleteClient}})})),1)]):t._e(),t._v(" "),e("br"),t._v(" "),e("h3",[t._v(t._s(t.t("oauth2","Add client")))]),t._v(" "),t.newClient.error?e("span",{staticClass:"msg error"},[t._v(t._s(t.newClient.errorMsg))]):t._e(),t._v(" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.addClient.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newClient.name,expression:"newClient.name"}],attrs:{id:"name",type:"text",name:"name",placeholder:t.t("oauth2","Name")},domProps:{value:t.newClient.name},on:{input:function(e){e.target.composing||t.$set(t.newClient,"name",e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newClient.redirectUri,expression:"newClient.redirectUri"}],attrs:{id:"redirectUri",type:"url",name:"redirectUri",placeholder:t.t("oauth2","Redirection URI")},domProps:{value:t.newClient.redirectUri},on:{input:function(e){e.target.composing||t.$set(t.newClient,"redirectUri",e.target.value)}}}),t._v(" "),e("NcButton",{staticClass:"inline-button",attrs:{"native-type":"submit"}},[t._v("\n\t\t\t\t"+t._s(t.t("oauth2","Add"))+"\n\t\t\t")])],1)])}),[],!1,null,"2483118c",null),D=P.exports;r.default.prototype.t=t,r.default.prototype.OC=OC;var L=(0,R.j)("oauth2","clients");new(r.default.extend(D))({propsData:{clients:L}}).$mount("#oauth2")},50331:function(t,e,n){var i=n(87537),r=n.n(i),o=n(23645),a=n.n(o)()(r());a.push([t.id,"\ntable[data-v-2483118c] {\n\tmax-width: 800px;\n}\n\n/** Overwrite button height and position to be aligned with the text input */\n.inline-button[data-v-2483118c] {\n\tmin-height: 34px !important;\n\tdisplay: inline-flex !important;\n}\n","",{version:3,sources:["webpack://./apps/oauth2/src/App.vue"],names:[],mappings:";AAgJA;CACA,gBAAA;AACA;;AAEA,4EAAA;AACA;CACA,2BAAA;CACA,+BAAA;AACA",sourcesContent:["\x3c!--\n  - @copyright Copyright (c) 2018 Roeland Jago Douma <roeland@famdouma.nl>\n  -\n  - @author Roeland Jago Douma <roeland@famdouma.nl>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program. If not, see <http://www.gnu.org/licenses/>.\n  -\n  --\x3e\n<template>\n\t<NcSettingsSection :title=\"t('oauth2', 'OAuth 2.0 clients')\"\n\t\t:description=\"t('oauth2', 'OAuth 2.0 allows external services to request access to {instanceName}.', { instanceName })\"\n\t\t:doc-url=\"oauthDocLink\">\n\t\t<table v-if=\"clients.length > 0\" class=\"grid\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th id=\"headerContent\" />\n\t\t\t\t\t<th id=\"headerRemove\">\n&nbsp;\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<OAuthItem v-for=\"client in clients\"\n\t\t\t\t\t:key=\"client.id\"\n\t\t\t\t\t:client=\"client\"\n\t\t\t\t\t@delete=\"deleteClient\" />\n\t\t\t</tbody>\n\t\t</table>\n\n\t\t<br>\n\t\t<h3>{{ t('oauth2', 'Add client') }}</h3>\n\t\t<span v-if=\"newClient.error\" class=\"msg error\">{{ newClient.errorMsg }}</span>\n\t\t<form @submit.prevent=\"addClient\">\n\t\t\t<input id=\"name\"\n\t\t\t\tv-model=\"newClient.name\"\n\t\t\t\ttype=\"text\"\n\t\t\t\tname=\"name\"\n\t\t\t\t:placeholder=\"t('oauth2', 'Name')\">\n\t\t\t<input id=\"redirectUri\"\n\t\t\t\tv-model=\"newClient.redirectUri\"\n\t\t\t\ttype=\"url\"\n\t\t\t\tname=\"redirectUri\"\n\t\t\t\t:placeholder=\"t('oauth2', 'Redirection URI')\">\n\t\t\t<NcButton native-type=\"submit\" class=\"inline-button\">\n\t\t\t\t{{ t('oauth2', 'Add') }}\n\t\t\t</NcButton>\n\t\t</form>\n\t</NcSettingsSection>\n</template>\n\n<script>\nimport axios from '@nextcloud/axios'\nimport OAuthItem from './components/OAuthItem.vue'\nimport { generateUrl } from '@nextcloud/router'\nimport { getCapabilities } from '@nextcloud/capabilities'\nimport NcSettingsSection from '@nextcloud/vue/dist/Components/NcSettingsSection.js'\nimport NcButton from '@nextcloud/vue/dist/Components/NcButton.js'\nimport { loadState } from '@nextcloud/initial-state'\n\nexport default {\n\tname: 'App',\n\tcomponents: {\n\t\tOAuthItem,\n\t\tNcSettingsSection,\n\t\tNcButton,\n\t},\n\tprops: {\n\t\tclients: {\n\t\t\ttype: Array,\n\t\t\trequired: true,\n\t\t},\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tnewClient: {\n\t\t\t\tname: '',\n\t\t\t\tredirectUri: '',\n\t\t\t\terrorMsg: '',\n\t\t\t\terror: false,\n\t\t\t},\n\t\t\toauthDocLink: loadState('oauth2', 'oauth2-doc-link'),\n\t\t}\n\t},\n\tcomputed: {\n\t\tinstanceName() {\n\t\t\treturn getCapabilities().theming.name\n\t\t},\n\t},\n\tmethods: {\n\t\tdeleteClient(id) {\n\t\t\taxios.delete(generateUrl('apps/oauth2/clients/{id}', { id }))\n\t\t\t\t.then((response) => {\n\t\t\t\t\t// eslint-disable-next-line vue/no-mutating-props\n\t\t\t\t\tthis.clients = this.clients.filter(client => client.id !== id)\n\t\t\t\t})\n\t\t},\n\t\taddClient() {\n\t\t\tthis.newClient.error = false\n\n\t\t\taxios.post(\n\t\t\t\tgenerateUrl('apps/oauth2/clients'),\n\t\t\t\t{\n\t\t\t\t\tname: this.newClient.name,\n\t\t\t\t\tredirectUri: this.newClient.redirectUri,\n\t\t\t\t}\n\t\t\t).then(response => {\n\t\t\t\t// eslint-disable-next-line vue/no-mutating-props\n\t\t\t\tthis.clients.push(response.data)\n\n\t\t\t\tthis.newClient.name = ''\n\t\t\t\tthis.newClient.redirectUri = ''\n\t\t\t}).catch(reason => {\n\t\t\t\tthis.newClient.error = true\n\t\t\t\tthis.newClient.errorMsg = reason.response.data.message\n\t\t\t})\n\t\t},\n\t},\n}\n<\/script>\n<style scoped>\n\ttable {\n\t\tmax-width: 800px;\n\t}\n\n\t/** Overwrite button height and position to be aligned with the text input */\n\t.inline-button {\n\t\tmin-height: 34px !important;\n\t\tdisplay: inline-flex !important;\n\t}\n</style>\n"],sourceRoot:""}]),e.Z=a},54044:function(t,e,n){var i=n(87537),r=n.n(i),o=n(23645),a=n.n(o)()(r());a.push([t.id,"\n.icon-toggle[data-v-142f39d4],\n.icon-delete[data-v-142f39d4] {\n\tdisplay: inline-block;\n\twidth: 16px;\n\theight: 16px;\n\tpadding: 10px;\n\tvertical-align: middle;\n}\ntd code[data-v-142f39d4] {\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\ntable.inline td[data-v-142f39d4] {\n\tborder: none;\n\tpadding: 5px;\n}\n","",{version:3,sources:["webpack://./apps/oauth2/src/components/OAuthItem.vue"],names:[],mappings:";AAuHA;;CAEA,qBAAA;CACA,WAAA;CACA,YAAA;CACA,aAAA;CACA,sBAAA;AACA;AACA;CACA,qBAAA;CACA,sBAAA;AACA;AACA;CACA,YAAA;CACA,YAAA;AACA",sourcesContent:["\x3c!--\n  - @copyright Copyright (c) 2018 Roeland Jago Douma <roeland@famdouma.nl>\n  -\n  - @author Roeland Jago Douma <roeland@famdouma.nl>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program. If not, see <http://www.gnu.org/licenses/>.\n  -\n  --\x3e\n<template>\n\t<tr>\n\t\t<td>\n\t\t\t<table class=\"inline\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td>{{ t('oauth2', 'Name') }}</td>\n\t\t\t\t\t<td>{{ name }}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>{{ t('oauth2', 'Redirection URI') }}</td>\n\t\t\t\t\t<td>{{ redirectUri }}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>{{ t('oauth2', 'Client Identifier') }}</td>\n\t\t\t\t\t<td><code>{{ clientId }}</code></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>{{ t('oauth2', 'Secret') }}</td>\n\t\t\t\t\t<td><code>{{ renderedSecret }}</code><a class=\"icon-toggle has-tooltip\" :title=\"t('oauth2', 'Show client secret')\" @click=\"toggleSecret\" /></td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</td>\n\t\t<td class=\"action-column\">\n\t\t\t<NcButton type=\"tertiary-no-background\"\n\t\t\t\t:aria-label=\"t('oauth2', 'Delete')\"\n\t\t\t\t@click=\"$emit('delete', id)\">\n\t\t\t\t<template #icon>\n\t\t\t\t\t<Delete :size=\"20\"\n\t\t\t\t\t\t:title=\"t('oauth2', 'Delete')\" />\n\t\t\t\t</template>\n\t\t\t</NcButton>\n\t\t</td>\n\t</tr>\n</template>\n\n<script>\n\nimport Delete from 'vue-material-design-icons/Delete.vue'\nimport NcButton from '@nextcloud/vue/dist/Components/NcButton.js'\n\nexport default {\n\tname: 'OAuthItem',\n\tcomponents: {\n\t\tDelete,\n\t\tNcButton,\n\t},\n\tprops: {\n\t\tclient: {\n\t\t\ttype: Object,\n\t\t\trequired: true,\n\t\t},\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tid: this.client.id,\n\t\t\tname: this.client.name,\n\t\t\tredirectUri: this.client.redirectUri,\n\t\t\tclientId: this.client.clientId,\n\t\t\tclientSecret: this.client.clientSecret,\n\t\t\trenderSecret: false,\n\t\t}\n\t},\n\tcomputed: {\n\t\trenderedSecret() {\n\t\t\tif (this.renderSecret) {\n\t\t\t\treturn this.clientSecret\n\t\t\t} else {\n\t\t\t\treturn '****'\n\t\t\t}\n\t\t},\n\t},\n\tmethods: {\n\t\ttoggleSecret() {\n\t\t\tthis.renderSecret = !this.renderSecret\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.icon-toggle,\n\t.icon-delete {\n\t\tdisplay: inline-block;\n\t\twidth: 16px;\n\t\theight: 16px;\n\t\tpadding: 10px;\n\t\tvertical-align: middle;\n\t}\n\ttd code {\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t}\n\ttable.inline td {\n\t\tborder: none;\n\t\tpadding: 5px;\n\t}\n</style>\n"],sourceRoot:""}]),e.Z=a}},i={};function r(t){var e=i[t];if(void 0!==e)return e.exports;var o=i[t]={id:t,loaded:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=n,e=[],r.O=function(t,n,i,o){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],o=e[d][2];for(var l=!0,s=0;s<n.length;s++)(!1&o||a>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[s])}))?n.splice(s--,1):(l=!1,o<a&&(a=o));if(l){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,i,o]},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},r.j=5053,function(){r.b=document.baseURI||self.location.href;var t={5053:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,a=n[0],l=n[1],s=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(s)var d=s(r)}for(e&&e(n);c<a.length;c++)o=a[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(d)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),r.nc=void 0;var o=r.O(void 0,[7874],(function(){return r(59725)}));o=r.O(o)}();
//# sourceMappingURL=oauth2-oauth2.js.map?v=f841816d88a167bd06dc