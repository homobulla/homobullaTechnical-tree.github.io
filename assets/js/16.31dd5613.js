(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{164:function(t,s,a){t.exports=a.p+"assets/img/getUserMedia.e77f986d.png"},171:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"getusermedia"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getusermedia","aria-hidden":"true"}},[this._v("#")]),this._v(" getUserMedia")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("MediaDevices.getUserMedia()")]),this._v(" 会提示用户给予使用媒体输入的许可，媒体输入会产生一个 "),s("code",[this._v("MediaStream")]),this._v("，里面包含了请求的媒体类型的轨道。此流可以包含一个视频轨道（来自硬件或者虚拟视频源，比如相机、视频采集设备和屏幕共享服务等等）、一个音频轨道（同样来自硬件或虚拟音频源，比如麦克风、A/D 转换器等等），也可能是其它轨道类型。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"支持情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持情况","aria-hidden":"true"}},[this._v("#")]),this._v(" 支持情况")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:a(164),alt:"location"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[this._v("#")]),this._v(" 语法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("var promise = navigator.mediaDevices.getUserMedia(constraints)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 参数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("constraints\n作为一个 MediaStreamConstraints 对象，指定了请求的媒体类型和相对应的参数。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"返回值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回值","aria-hidden":"true"}},[this._v("#")]),this._v(" 返回值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("返回一个 "),s("code",[this._v("Promise")]),this._v(" ， 这个 "),s("code",[this._v("Promise")]),this._v(" 成功后的回调函数带一个 "),s("code",[this._v("MediaStream")]),this._v(" 对象作为其参数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常","aria-hidden":"true"}},[this._v("#")]),this._v(" 异常")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("返回一个 "),s("code",[this._v("Promise")]),this._v(" ， 这个"),s("code",[this._v("Promise")]),this._v("成功后的回调函数带一个 "),s("code",[this._v("MediaStream")]),this._v("对象作为其参数。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" video "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#video'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myConstraints "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        video"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            facingMode"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'user'")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 优先调用前置摄像头")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    navigator"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mediaDevices"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getUserMedia")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myConstraints"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        stream "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            video"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("URL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createObjectURL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stream"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            video"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("play")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        error "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" error"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])])}],e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("提起移动端调用设备摄像头，我们很容易就想到借助 "),a("a",{attrs:{href:"http://www.phonegapcn.com/docs/zh/1.4.1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PhoneGap"),a("OutboundLink")],1),t._v(" 或 "),a("a",{attrs:{href:"http://cordova.axuer.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cordova"),a("OutboundLink")],1),t._v(" 。如果只是想在 Web 页面简单的用一下，那不妨试试 HTML5 的 User Media API 。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),a("p",[t._v("点击"),a("a",{attrs:{href:"https://homobulla.site/Technical-tree/code/getUserMedia.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("此处"),a("OutboundLink")],1),t._v("，查看上述代码在移动端上的表现。(请用手机打开该网页)")])])},n,!1,null,null,null);r.options.__file="6.md";s.default=r.exports}}]);