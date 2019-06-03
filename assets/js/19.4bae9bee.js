(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{168:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),a("p",[a("code",[t._v("JavaScript")]),t._v("是一种弱类型的脚本语言，即在定义变量时无需指定其类型，而在程序运行过程中会判断类型。")]),t._v(" "),a("p",[t._v("一个变量可以存放两种类型的值，基本类型的值（primitive values）和引用类型的值（reference values）。")]),t._v(" "),a("p",[a("code",[t._v("ES6")]),t._v(" 引入了一种新的原始数据类型 "),a("code",[t._v("Symbol")]),t._v("，表示独一无二的值。它是 "),a("code",[t._v("JavaScript")]),t._v(" 语言的第七种数据类型，前六种是："),a("code",[t._v("Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）")]),t._v("。")]),t._v(" "),a("p",[t._v("其中"),a("code",[t._v("null")]),t._v("是一个很有意思的类型，"),a("code",[t._v("typeof null")]),t._v("的结果为"),a("code",[t._v("Object")]),t._v(",原因是不同的对象在底层都表示为二进制，在 JavaScript 中二进制前三位都为 0 的话会被判断为 "),a("code",[t._v("object")]),t._v(" 类型，"),a("code",[t._v("null")]),t._v(" 的二进制表示是全 0，自然前三位也是 0，所以执行 "),a("code",[t._v("typeof")]),t._v(" 时会返回"),a("code",[t._v("“object”")]),t._v("。")]),t._v(" "),a("p",[t._v("引用类型统称为 Object 类型。细分的话，有："),a("code",[t._v("Object")]),t._v(" 类型、"),a("code",[t._v("Array")]),t._v(" 类型、"),a("code",[t._v("Date")]),t._v(" 类型、"),a("code",[t._v("RegExp")]),t._v(" 类型、"),a("code",[t._v("Function")]),t._v(" 类型 等。")]),t._v(" "),a("p",[t._v("基本类型的值是按值访问，其值是不可变的。引用类型的值是按引用访问的。")]),t._v(" "),a("p",[t._v("引用类型有属性和方法，而基本类型则没有，但经常会遇到下面这种代码：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'homo'")]),t._v("\nstr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" bulla\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("S")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toUpperCase")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//看起来字符串s也有方法toUpperCase()，和对象行为很相似")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('//"test"')]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("S")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('//"TEST"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("blockquote",[a("p",[t._v("为什么字符串具有和对象相似的特征，可以调用方法设置属性？这里有个概念：包装对象（wrapper object)")])]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("number string boolean")]),t._v("这三种类型调用方法时，JS 会将他们转化成"),a("strong",[t._v("临时的包装对象")]),t._v("，调用完包装对象的方法后即被"),a("strong",[t._v("丢弃")]),t._v("。这就是所谓的装箱操作。")]),t._v(" "),a("p",[t._v("基本类型和引用类型的区别在于计算机存储方式的不同，基本类型的值是存放在栈内存里的，而引用类型的值存放在堆内存之中，而 JS 无法直接操纵对象的内存空间，也就是说引用类型在栈中保留了"),a("strong",[t._v("变量标识符和指向堆内存中该对象的指针")]),t._v("，而它的堆内存之中才真正保留了对象的内容。")]),t._v(" "),a("h2",{attrs:{id:"对类型的判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对类型的判断","aria-hidden":"true"}},[t._v("#")]),t._v(" 对类型的判断")]),t._v(" "),a("p",[a("code",[t._v("typeof")]),t._v("只能判断基本值，引用值除了"),a("code",[t._v("function")]),t._v("其他都是"),a("code",[t._v("object")]),t._v(","),a("code",[t._v("typeof null")]),t._v("的结果是"),a("code",[t._v("object")]),t._v("，"),a("code",[t._v("typeof Symbol()")]),t._v("的值是"),a("code",[t._v("symbol")])]),t._v(" "),a("p",[t._v("一般判断引用类型可以使用"),a("code",[t._v("instanceof")]),t._v("来判断其构造器")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" somefoods "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nsomefoods "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Array")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("或者使用"),a("code",[t._v("toString")]),t._v("方法")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toString"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// "[object Array]"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}],!1,null,null,null);e.options.__file="2.md";s.default=e.exports}}]);