(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{353:function(t,a,s){"use strict";s.r(a);var h=s(8),v=Object(h.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"问题记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题记录"}},[t._v("#")]),t._v(" 问题记录")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),a("p",[t._v("在部署网页到github-pages上时，发现我的网页只有根路由可以直接通过url访问，而其他路由不行，只能通过将history路由更改为hash路由才能正常访问")]),t._v(" "),a("p",[t._v("因此，我发现自己在路由方面的知识还有所不足，特意写下此篇作为记录。")])]),t._v(" "),a("h2",{attrs:{id:"后端路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端路由"}},[t._v("#")]),t._v(" 后端路由")]),t._v(" "),a("p",[t._v("在 web 开发早期，一直是后端路由占据主要地位，每次用户发出请求，URL就会发生变化，后端收到请求之后就会根据路由渲染对应的页面，将页面返回到本地。")]),t._v(" "),a("h2",{attrs:{id:"前端路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端路由"}},[t._v("#")]),t._v(" 前端路由")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("前端路由是单页面应用兴起之后才开始出现的。")])]),t._v(" "),a("h3",{attrs:{id:"hash-模式路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-模式路由"}},[t._v("#")]),t._v(" Hash 模式路由")]),t._v(" "),a("p",[t._v("早起的前端路由实现就是基于location.hash来实现的，location.hash就是路由#后面的内容，其原理就是通过hashchange监听#后面的内容的变化来进行页面更新。hash模式是利用浏览器不会对#后面的路径对服务端发起请求。")]),t._v(" "),a("p",[t._v("使用hash模式有两个特点：")]),t._v(" "),a("ul",[a("li",[t._v("改变hash值，浏览器不会重新加载页面")]),t._v(" "),a("li",[t._v("当刷新页面时，hash不会传给服务器")]),t._v(" "),a("li",[t._v("也就是说http://localhost/#a与http://localhost/这两个路由其实都是去请求http://localhost这个页面的内容，至于为什么它们可以渲染出不同的页面，这个是前端自己来判断的，不需要后端配置。")])]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("可以兼容低版本浏览器，支持IE8")]),t._v(" "),a("li",[t._v("只有#之前的内容才会作为URL发送给服务器，就算服务端没有对路由进行全覆盖也不会返回404")]),t._v(" "),a("li",[t._v("hash改变都会在浏览器访问的历史记录中增加一个记录，所以可以通过浏览器进行前进后退，如果想在hash模式下不保存记录，可以使用location.replace")])]),t._v(" "),a("h3",{attrs:{id:"history模式路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history模式路由"}},[t._v("#")]),t._v(" History模式路由")]),t._v(" "),a("p",[t._v("history是基于HTML5新增的pushState和replaceState两个API以及浏览器的popState事件监听历史栈的改变，只要历史栈有信息发生改变，就会触发该事件。这种模式同样也是不会向后端发起请求的。")]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("该模式的路由不带#，看起来更美观")]),t._v(" "),a("li",[t._v("pushState设置的URL可以是任意的与当前URL同源的URL，而hash只能改变#后面的内容")])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("IE9及其以下版本浏览器不支持，IE10开始支持")])]),t._v(" "),a("p",[t._v("vue-router会检测浏览器版本，当无法启用history模式时会自动降级为hash模式")]),t._v(" "),a("h2",{attrs:{id:"解决路由问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决路由问题"}},[t._v("#")]),t._v(" 解决路由问题")]),t._v(" "),a("ul",[a("li",[t._v("将 basename 加入到路由定义中")]),t._v(" "),a("li",[t._v("加入 404 页面进行重定向")]),t._v(" "),a("li",[t._v("index.html 配合解析路径，replaceState到对应的路由")])]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://medium.com/@JammsL/%E5%BE%9E%E5%81%9A%E4%B8%AD%E5%AD%B8-github-pages%E9%87%8D%E6%95%B4%E6%80%8E%E6%9C%83404-%E8%B7%AF%E7%94%B1%E5%91%A2-%E4%B8%8A-3c9e174cb643",target:"_blank",rel:"noopener noreferrer"}},[t._v("上集"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://medium.com/@JammsL/%E5%BE%9E%E5%81%9A%E4%B8%AD%E5%AD%B8-github-pages%E9%87%8D%E6%95%B4%E6%80%8E%E6%9C%83404-%E8%B7%AF%E7%94%B1%E5%91%A2-%E4%B8%8B-05d91f4b68b7",target:"_blank",rel:"noopener noreferrer"}},[t._v("下集"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=v.exports}}]);