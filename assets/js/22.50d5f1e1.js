(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{189:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this","aria-hidden":"true"}},[s._v("#")]),s._v(" this")]),s._v(" "),a("p",[s._v("首先"),a("code",[s._v("this")]),s._v("提供了一种更加优雅的方式来隐式“传递”一个对象的引用。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("this")]),s._v("并不指向函数本身")]),s._v(" "),a("li",[a("code",[s._v("this")]),s._v("指向函数的作用域，在"),a("strong",[s._v("某种情况下正确")])])]),s._v(" "),a("p",[a("code",[s._v("this")]),s._v("在任何情况下都不指向函数的词法作用域，作用域“对象”无法通过"),a("code",[s._v("JavaScript")]),s._v("代码访问，它存在于"),a("code",[s._v("JavaScript")]),s._v("引擎内部。")]),s._v(" "),a("h3",{attrs:{id:"this到底是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this到底是什么？","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("code",[s._v("this")]),s._v("到底是什么？")]),s._v(" "),a("p",[a("code",[s._v("this")]),s._v("是在运行时进行绑定的，它的上下文取决于函数调用时的各种条件。"),a("code",[s._v("this")]),s._v("的绑定和函数声明的位置没有任何关系。")]),s._v(" "),a("p",[s._v("当一个函数被调用时，会创建一个活动记录（有时也叫执行上下文），这个记录会包含函数在哪儿被调用的（调用栈）、函数的调用方法、传入的参数等信息，而"),a("code",[s._v("this")]),s._v("就是记录中的一个属性，会在函数执行的过程中用到。")]),s._v(" "),a("h3",{attrs:{id:"绑定规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定规则","aria-hidden":"true"}},[s._v("#")]),s._v(" 绑定规则")]),s._v(" "),a("h4",{attrs:{id:"默认绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认绑定","aria-hidden":"true"}},[s._v("#")]),s._v(" 默认绑定")]),s._v(" "),a("p",[s._v("即独立函数调用的情况，此时"),a("code",[s._v("this")]),s._v("指向全局对象。这里要区分一下非严格模式和严格模式"),a("code",[s._v("strict mode")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token string"}},[s._v('"use strict"')]),s._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token keyword"}},[s._v("this")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// TypeError:this is undefined")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"隐式绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐式绑定","aria-hidden":"true"}},[s._v("#")]),s._v(" 隐式绑定")]),s._v(" "),a("p",[s._v("即调用位置是否有上下文对象，或者说被某个对象拥有或包含。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token keyword"}},[s._v("this")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    a"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    foo\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nobj"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("对象属性引用链中只有最顶层或者说最后一层会影响调用位置。当然隐式绑定的"),a("code",[s._v("this")]),s._v("实质上来说很容易被丢失，换句话说它会进行默认绑定，从而将"),a("code",[s._v("this")]),s._v("绑定到全局对象或者"),a("code",[s._v("undefind")]),s._v("，取决于是否严格模式。")]),s._v(" "),a("h4",{attrs:{id:"显式绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显式绑定","aria-hidden":"true"}},[s._v("#")]),s._v(" 显式绑定")]),s._v(" "),a("p",[s._v("我们可以用原型上提供的方法来进行显式绑定，即"),a("code",[s._v("call apply")]),s._v(",")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token keyword"}},[s._v("this")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("obj"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("a"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nfoo"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("call")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// undefined")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这两个方法同样传入基本类型来当作"),a("code",[s._v("this")]),s._v("的绑定对象，这其中会经过“装箱操作”，暂时转化成对象形式（"),a("code",[s._v("new String(..) new Boolean(..) new Number(..)")])]),s._v(" "),a("p",[s._v("但显式绑定也无法解决绑定丢失的问题。")]),s._v(" "),a("h4",{attrs:{id:"硬绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬绑定","aria-hidden":"true"}},[s._v("#")]),s._v(" 硬绑定")]),s._v(" "),a("p",[s._v("所谓硬绑定是显式绑定的一个变种，")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token keyword"}},[s._v("this")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    a"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{attrs:{class:"token function-variable function"}},[s._v("bar")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    foo"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("call")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 只要调用bar就会强制绑定obj上")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("bar")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bar"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("100")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 硬绑定的bar不可能再修改它的this")]),s._v("\nbar"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("call")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("window"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("这种硬绑定是一种非常常用的方式，在ES5中提供了内置的方法"),a("code",[s._v("Funtion.prototype.bind")]),s._v("方法，"),a("code",[s._v("bind(...)")]),s._v("会返回一个硬编码的新函数，它会把参数设置为"),a("code",[s._v("this")]),s._v("的上下文并调用原始函数。")]),s._v(" "),a("h4",{attrs:{id:"new-绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-绑定","aria-hidden":"true"}},[s._v("#")]),s._v(" new 绑定")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("JavaScript")]),s._v("中，"),a("code",[s._v("new")]),s._v("操作符的意义和其他面向对象的语言完全不同。而所谓的构造函数，本质上是普通的函数而已，只不过它们是被"),a("code",[s._v("new")]),s._v("操作符调用的。")]),s._v(" "),a("p",[s._v("当我们使用"),a("code",[s._v("new")]),s._v("操作符时，它其实做了四件事：")]),s._v(" "),a("ol",[a("li",[s._v("创建（或者说构造）一个全新的对象。")]),s._v(" "),a("li",[s._v("这个新对象会被执行 [[ 原型 ]] 连接。")]),s._v(" "),a("li",[s._v("这个新对象会绑定到函数调用的 this。")]),s._v(" "),a("li",[s._v("如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。")])]),s._v(" "),a("p",[a("code",[s._v("new")]),s._v("会构造一个新对象并将它绑定到函数调用中的"),a("code",[s._v("this")]),s._v("上。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("this")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bar "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bar"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("//2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"判断this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断this","aria-hidden":"true"}},[s._v("#")]),s._v(" 判断"),a("code",[s._v("this")])]),s._v(" "),a("ol",[a("li",[s._v("函数被"),a("code",[s._v("new")]),s._v("调用：this绑定的是新创建的对象")]),s._v(" "),a("li",[s._v("函数通过"),a("code",[s._v("apply call")]),s._v("显式绑定：this绑定的是指定对象")]),s._v(" "),a("li",[s._v("函数在某个上下文对象中调用：this绑定这个上下文对象")]),s._v(" "),a("li",[s._v("都不是则默认绑定。")])])])}],!1,null,null,null);e.options.__file="5.md";t.default=e.exports}}]);