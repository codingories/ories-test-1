(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{159:function(t,e,n){},160:function(t,e,n){},161:function(t,e,n){},162:function(t,e,n){},163:function(t,e,n){},178:function(t,e,n){"use strict";var a=n(159);n.n(a).a},179:function(t,e,n){"use strict";var a=n(160);n.n(a).a},180:function(t,e,n){"use strict";var a=n(161);n.n(a).a},181:function(t,e,n){"use strict";var a=n(162);n.n(a).a},182:function(t,e,n){"use strict";var a=n(163);n.n(a).a},183:function(t,e,n){},199:function(t,e,n){"use strict";var a={name:"header1"},s=(n(179),n(1)),i=Object(s.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"f8c321b8",null);e.a=i.exports},200:function(t,e,n){"use strict";var a={name:"footer.vue"},s=(n(180),n(1)),i=Object(s.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"3b384fa9",null);e.a=i.exports},201:function(t,e,n){"use strict";var a={name:"content.vue"},s=(n(181),n(1)),i=Object(s.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content1"},[this._t("default")],2)}),[],!1,null,"c49cbe34",null);e.a=i.exports},202:function(t,e,n){"use strict";var a={name:"GuluSider",data:()=>({visible:!0}),methods:{}},s=(n(182),n(1)),i=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"6ca0b3ae",null);e.a=i.exports},203:function(t,e,n){"use strict";var a={name:"GuluLayout",data:()=>({layoutClass:{hasSider:!1}}),mounted(){this.$children.forEach(t=>{"GuluSider"===t.$options.name&&(this.layoutClass.hasSider=!0)})}},s=(n(178),n(1)),i=Object(s.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"f91f2d7e",null);e.a=i.exports},210:function(t,e,n){"use strict";var a=n(183);n.n(a).a},227:function(t,e,n){"use strict";n.r(e);n(25),n(96);var a=n(203),s=n(199),i=n(200),r=n(201),c=n(202),o={components:{GLayout:a.a,GHeader:s.a,GFooter:i.a,GContent:r.a,GSider:c.a},data:function(){return{content:'\n        <g-layout style="color: white; margin-bottom:50px;">\n          <g-header style="height: 50px; background:lightskyblue;">\n            header\n          </g-header>\n          <g-content style="height: 100px; background:deepskyblue;">\n            content\n          </g-content>\n          <g-footer style="height: 50px; background:lightskyblue;">\n            footer\n          </g-footer>\n        </g-layout>\n\n    '.replace(/^ {8}/gm,"").trim()}}},u=(n(210),n(1)),l=Object(u.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),n("g-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[n("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      header\n    ")]),t._v(" "),n("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n      content\n    ")]),t._v(" "),n("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      footer\n    ")])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,"65f9dfe9",null);e.default=l.exports}}]);