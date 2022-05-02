(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{543:function(s,t,a){s.exports=a.p+"assets/img/2022-04-30-16-05-29.b47d57be.png"},544:function(s,t,a){s.exports=a.p+"assets/img/2022-05-02-13-29-48.f8ff0b90.png"},545:function(s,t,a){s.exports=a.p+"assets/img/2022-05-02-13-30-36.bb15c033.png"},546:function(s,t,a){s.exports=a.p+"assets/img/2022-05-02-15-08-13.6db5c91e.png"},547:function(s,t,a){s.exports=a.p+"assets/img/2022-05-02-15-08-33.93462065.png"},601:function(s,t,a){"use strict";a.r(t);var n=a(9),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("参考："),n("a",{attrs:{href:"https://web.dev/promises/#whats-all-the-fuss-about",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript Promises(Web.dev)"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"异步的概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异步的概念"}},[s._v("#")]),s._v(" "),n("strong",[s._v("异步的概念")])]),s._v(" "),n("p",[s._v("异步（Asynchronous, async）是与同步（Synchronous, sync）相对的概念。\n"),n("img",{attrs:{src:a(543),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"promise-对象与-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise-对象与-api"}},[s._v("#")]),s._v(" "),n("strong",[s._v("Promise 对象与 API")])]),s._v(" "),n("h3",{attrs:{id:"_1-promise-的状态「promisestate」"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-promise-的状态「promisestate」"}},[s._v("#")]),s._v(" "),n("strong",[s._v("1. Promise 的状态「PromiseState」")])]),s._v(" "),n("p",[s._v("对象的状态不受外界影响。Promise 对象代表一个异步操作，有三种状态")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("pending")]),s._v(": 初始状态，不是成功或失败状态。")]),s._v(" "),n("li",[n("strong",[s._v("resolved/fulfilled")]),s._v(": 意味着操作成功完成。")]),s._v(" "),n("li",[n("strong",[s._v("rejected")]),s._v(": 意味着操作失败。")])]),s._v(" "),n("p",[s._v("状态只会有以下两种变换，且一个promise对象只能改变一次")]),s._v(" "),n("ol",[n("li",[s._v("pending 变为 resolved")]),s._v(" "),n("li",[s._v("pending 变为 rejected")])]),s._v(" "),n("h3",{attrs:{id:"_2-promise-对象的值「promiseresult」"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-promise-对象的值「promiseresult」"}},[s._v("#")]),s._v(" "),n("strong",[s._v("2. Promise 对象的值「PromiseResult」")])]),s._v(" "),n("p",[s._v("保存着异步任务成功/失败的结果(返回值)")]),s._v(" "),n("h3",{attrs:{id:"_3-创建-promise-对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-promise-对象"}},[s._v("#")]),s._v(" "),n("strong",[s._v("3. 创建 Promise 对象")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建promise对象")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" promise "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 异步处理")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 完成处理 */")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Stuff worked!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调用resolve")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("reject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"It broke"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调用reject")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"_4-为-promise-对象添加回调"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-为-promise-对象添加回调"}},[s._v("#")]),s._v(" "),n("strong",[s._v("4. 为 Promise 对象添加回调")])]),s._v(" "),n("p",[s._v("对于已经实例化过的 promise 对象可以调用 promise.then() 方法，传递 resolve 和 reject 方法作为回调\npromise.then() 是 promise 最为常用的方法。")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("onFulfilled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" onRejected"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     \npromise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("onFulfilled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("onRejected"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("result")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// resolve回调函数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// reject回调函数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"_5-promised-resolve"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-promised-resolve"}},[s._v("#")]),s._v(" "),n("strong",[s._v("5. Promised.resolve()")])]),s._v(" "),n("p",[s._v("可以传入一个东西(参数)，返回一个promise对象")]),s._v(" "),n("ol",[n("li",[s._v("如果传了一个值，将它封装为成功的promise对象")]),s._v(" "),n("li",[s._v("如果传入了一个promise对象，则根据这个promise对象是否成功，返回成功/失败的promise对象")])]),s._v(" "),n("h3",{attrs:{id:"_6-promise-reject"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-promise-reject"}},[s._v("#")]),s._v(" "),n("strong",[s._v("6. Promise.reject()")])]),s._v(" "),n("p",[s._v("可以传入一个东西(参数)，返回一个"),n("strong",[s._v("失败的")]),s._v("promise对象")]),s._v(" "),n("h3",{attrs:{id:"_7-promise-all"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-promise-all"}},[s._v("#")]),s._v(" "),n("strong",[s._v("7. Promise.all()")])]),s._v(" "),n("p",[s._v("可以传入一个promise数组，返回他们的结果数组"),n("br"),s._v("\n如果promise数组里的对象都成功，则为成功")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" p1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Success"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" p2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OK"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" p3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Yes"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" results "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("p3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"_8-promise-race"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-promise-race"}},[s._v("#")]),s._v(" "),n("strong",[s._v("8. Promise.race()")])]),s._v(" "),n("p",[s._v("可以传入一个promise数组，返回最快完成的promise的结果")]),s._v(" "),n("h2",{attrs:{id:"promise-链式调用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise-链式调用"}},[s._v("#")]),s._v(" "),n("strong",[s._v("Promise 链式调用")])]),s._v(" "),n("p",[s._v("由于then的返回结果也是一个promise对象，因此可以链式调用.then 方法，串联多个任务")]),s._v(" "),n("h3",{attrs:{id:"异常穿透"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异常穿透"}},[s._v("#")]),s._v(" "),n("strong",[s._v("异常穿透")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("value")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// if xxx")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error!!"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("value")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 若之前的then里抛出了错误，则不会执行")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("222")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("value")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("333")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("warn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//error!!")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"中断-promise-链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#中断-promise-链"}},[s._v("#")]),s._v(" "),n("strong",[s._v("中断 promise 链")])]),s._v(" "),n("p",[s._v("一些情况下我们需要直接中断调用链，之后的 .then 与 .catch 都不执行，我们需要可以 return 一个pending状态的 promise对象，而 .then 与 .catch 是在状态改变之后才会调用的。")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("value")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// if xxx")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("value")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 若之前的then里return了pending状态的promise对象，则不会执行下面的代码")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("222")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("value")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("333")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("warn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"async-与-await"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#async-与-await"}},[s._v("#")]),s._v(" "),n("strong",[s._v("async 与 await")])]),s._v(" "),n("h3",{attrs:{id:"async-函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#async-函数"}},[s._v("#")]),s._v(" "),n("strong",[s._v("async 函数")])]),s._v(" "),n("blockquote",[n("p",[s._v("这是来自MDN的对 async函数的说明：async函数是使用async关键字声明的函数。 async函数是AsyncFunction构造函数的实例， 并且其中允许使用await关键字。async和await关键字让我们可以用一种更简洁的方式写出基于Promise的异步行为，而无需刻意地链式调用promise。")])]),s._v(" "),n("ol",[n("li",[s._v("函数的返回值为 promise 对象（thenable）")]),s._v(" "),n("li",[s._v("promise 对象的结果由 async 函数执行的返回值决定")])]),s._v(" "),n("h3",{attrs:{id:"await-表达式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#await-表达式"}},[s._v("#")]),s._v(" "),n("strong",[s._v("await 表达式")])]),s._v(" "),n("ol",[n("li",[s._v("await 右侧的表达式一般为 promise 对象，但也可以是其他的值")]),s._v(" "),n("li",[s._v("如果表达式是 promise 对象，await 返回的是 promise 成功的值")]),s._v(" "),n("li",[s._v("如果表达式是其他值，直接将此值作为 await 的返回值")])]),s._v(" "),n("p",[n("strong",[s._v("注意：")])]),s._v(" "),n("ol",[n("li",[s._v("await 必须写在 async 函数中，但 async 中可以没有 await")]),s._v(" "),n("li",[s._v("如果 await 的 promise 失败了，就会抛出异常，需要通过try...catch...捕获处理")])]),s._v(" "),n("h2",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" "),n("strong",[s._v("示例")])]),s._v(" "),n("h3",{attrs:{id:"promise-发送axios请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise-发送axios请求"}},[s._v("#")]),s._v(" promise 发送axios请求")]),s._v(" "),n("p",[n("strong",[s._v("代码：")]),n("br"),s._v(" "),n("img",{attrs:{src:a(544),alt:""}}),s._v(" "),n("strong",[s._v("浏览器终端输出：")]),n("br"),s._v(" "),n("img",{attrs:{src:a(545),alt:""}})]),s._v(" "),n("h3",{attrs:{id:"async-与-await-发送axios请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#async-与-await-发送axios请求"}},[s._v("#")]),s._v(" async 与 await 发送axios请求")]),s._v(" "),n("p",[n("strong",[s._v("代码：")]),n("br"),s._v(" "),n("img",{attrs:{src:a(546),alt:""}}),s._v(" "),n("strong",[s._v("浏览器终端输出：")]),n("br"),s._v(" "),n("img",{attrs:{src:a(547),alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);