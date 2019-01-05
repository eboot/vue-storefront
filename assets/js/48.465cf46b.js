(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{162:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("Starting with 1.4.0 release Vue Storefront is supporting Magento2 product reviews. Unfortunately, Magento2 REST API doesn't contain any Reviews-related endpoints, so to make it work you need to install "),a("a",{attrs:{href:"https://github.com/DivanteLtd/magento2-review-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("additional Magento2 module"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Installation steps (in your Magento2 directory):")]),e._v(" "),e._m(1),a("p",[e._v("You should be aware that Reviews are stored in the Elastic Search. To display Reviews correctly You need to update Your "),a("a",{attrs:{href:"https://github.com/DivanteLtd/mage2vuestorefront/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mage2vuestorefront"),a("OutboundLink")],1),e._v(" and run the Reviews sync:")]),e._v(" "),e._m(2)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"product-reviews"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#product-reviews","aria-hidden":"true"}},[this._v("#")]),this._v(" Product Reviews")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("config repositories.divante vcs https://github.com/DivanteLtd/magento2-review-api.git\ncomposer require divante/magento2-review-api:dev-master\nphp bin/magento setup:upgrade\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("node --harmony cli.js reviews\n")])])])}],!1,null,null,null);n.options.__file="reviews.md";t.default=n.exports}}]);