(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{194:function(n,t,o){},195:function(n,t,o){},221:function(n,t,o){"use strict";var e=o(194);o.n(e).a},222:function(n,t,o){"use strict";var e=o(195);o.n(e).a},229:function(n,t,o){"use strict";o.r(t);o(25),o(96);var e=o(198),c=o(157);o(0).a.use(e.a);var i={components:{GButton:c.a},data:function(){return{content:"\n        <style>\n          .gulu-toast {\n            z-index: 30;\n          }\n        </style>\n\n        <div>\n          <g-button @click=\"onClickButton\">上方弹出</g-button>\n        </div>\n\n        methods: {\n          onClickButton () {\n            this.$toast('你知道我在等你吗？', {\n              closeButton: {\n                text: '知道了',\n                callback: () => {\n                  console.log('他说知道了')\n                }\n              }\n            })\n          }\n        },\n    ".replace(/^ {8}/gm,"").trim()}},methods:{onClickButton:function(){this.$toast("你知道我在等你吗？",{closeButton:{text:"知道了",callback:function(){console.log("他说知道了")}}})}}},s=(o(221),o(222),o(1)),u=Object(s.a)(i,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticStyle:{"padding-top":"16px"}},[o("h2",[n._v("设置关闭按钮")]),n._v(" "),n._m(0),n._v(" "),o("div",[o("g-button",{on:{click:n.onClickButton}},[n._v("上方弹出")])],1),n._v(" "),n._m(1),n._v(" "),o("pre",[o("code",[n._v(n._s(n.content))])])])}),[function(){var n=this.$createElement,t=this._self._c||n;return t("p",[t("strong",[this._v("预览")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("p",[t("strong",[this._v("代码")])])}],!1,null,"9b01f1e2",null);t.default=u.exports}}]);