(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{172:function(t,s,a){"use strict";a.r(s);var n=a(0),v=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"作用域和闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域和闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用域和闭包")]),t._v(" "),a("p",[t._v("作用域是根据名称查找变量的一套规则。")]),t._v(" "),a("p",[t._v("在 JS 中，有函数作用域和块作用域，二者的行为基本是一致的。任何声明在\n某个作用域内的变量，都将附属于这个作用域。而这其中涉及到一个"),a("strong",[t._v("提升")]),t._v("的问题，一句话概括就是：包括变量和函数在内的所有声明都会在任何代码被执行前首先被处理。所有的声明都会被编译器放置到代码最顶部（函数比变量声明优先级高）。")]),t._v(" "),a("p",[t._v("而所谓的闭包是词法作用域的体现。即"),a("strong",[t._v("闭包是基于词法作用域书写代码时所产生的自然结果")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("词法作用域就是定义在词法阶段的作用域。换句话说，词法作用域是由你在写代码时将变量和块作用域写在哪里来决定的，因此当词法分析器处理代码时会保持作用域不变（大部分情况下是这样的）。")])]),t._v(" "),a("h3",{attrs:{id:"闭包的产生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包的产生","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包的产生")]),t._v(" "),a("p",[a("strong",[t._v("当函数可以记住并访问所在的词法作用域时，就产生了闭包")]),t._v("，即使函数是在当前词法作用域之外执行。")]),t._v(" "),a("p",[t._v("无论通过何种手段"),a("strong",[t._v("将内部函数传递到所在的词法作用域以外")]),t._v("，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包。")]),t._v(" "),a("h3",{attrs:{id:"词法作用域与动态作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域与动态作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" 词法作用域与动态作用域")]),t._v(" "),a("p",[t._v("在JS中并不具有动态作用域，而只有词法作用域。")]),t._v(" "),a("p",[t._v("动态作用域并不关心函数和作用域是如何声明以及在何处声明的，只关心它们从何处调用。换句话说，作用域链是基于调用栈的，而不是代码中的作用域嵌套。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("bar")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("bar")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("上面代码中，如果按照动态作用域，在"),a("code",[t._v("bar")]),t._v("调用后，生成函数"),a("code",[t._v("foo")]),t._v("的词法作用域，其中"),a("code",[t._v("a")]),t._v("会基于调用栈来查找，最后得到"),a("code",[t._v("a=3")]),t._v("。但在"),a("code",[t._v("JavaScript")]),t._v("中，只有词法作用域即"),a("code",[t._v("a")]),t._v("的定义过程发生在书写代码的阶段，当函数foo()不管在哪里调用，其中"),a("code",[t._v("a")]),t._v("的值只会在全局作用域中查找。词法作用域让 foo() 中的 a 通过 RHS 引用到了全局作用域中的 a，因此会输出 2。")]),t._v(" "),a("p",[t._v("一句话，"),a("strong",[t._v("无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定。")])]),t._v(" "),a("h3",{attrs:{id:"闭包好坏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包好坏","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包好坏")]),t._v(" "),a("ul",[a("li",[t._v("生成块级作用域")]),t._v(" "),a("li",[t._v("模块化代码输出")]),t._v(" "),a("li",[t._v("常驻内存，一直有对当前作用域的引用，垃圾回收机制不会回收。")])])])}],!1,null,null,null);v.options.__file="4.md";s.default=v.exports}}]);