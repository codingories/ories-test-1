(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{196:function(n,t,o){},197:function(n,t,o){},223:function(n,t,o){"use strict";var e=o(196);o.n(e).a},224:function(n,t,o){"use strict";var e=o(197);o.n(e).a},236:function(n,t,o){"use strict";o.r(t);o(25),o(96);var e=o(198),c=o(157);o(0).a.use(e.a);var s={components:{GButton:c.a},data:function(){return{content:"\n        <style>\n          .gulu-toast {\n            z-index: 30;\n          }\n        </style>\n\n        <div>\n          <g-button @click=\"onClickButton\">上方弹出</g-button>\n        </div>\n\n        methods: {\n          onClickButton () {\n            this.$toast('你知道我在等你吗？', {\n              closeButton: {\n                text: '知道了',\n                callback: () => {\n                  console.log('他说知道了')\n                }\n              }\n            })\n          }\n        },\n    ".replace(/^ {8}/gm,"").trim()}},methods:{onClickButton:function(){this.$toast('<strong style="color:red;">加粗的提示</strong>',{enableHtml:!0})}}},i=(o(223),o(224),o(1)),u=Object(i.a)(s,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticStyle:{"padding-top":"16px"}},[o("h2",[n._v("支持 HTML")]),n._v(" "),n._m(0),n._v(" "),o("div",[o("g-button",{on:{click:n.onClickButton}},[n._v("上方弹出")])],1),n._v(" "),n._m(1),n._v(" "),o("pre",[o("code",[n._v(n._s(n.content))])])])}),[function(){var n=this.$createElement,t=this._self._c||n;return t("p",[t("strong",[this._v("预览")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("p",[t("strong",[this._v("代码")])])}],!1,null,"fca8eb46",null);t.default=u.exports}}]);