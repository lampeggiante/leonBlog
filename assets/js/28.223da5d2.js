(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{341:function(t,e,a){"use strict";a.r(e);var v=a(8),r=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("内容非原创，仅做整理。仅供学习交流，不作商用，请勿转载！")])]),t._v(" "),e("h1",{attrs:{id:"介绍-前端性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍-前端性能优化"}},[t._v("#")]),t._v(" 介绍：前端性能优化")]),t._v(" "),e("h2",{attrs:{id:"前端性能优化的定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化的定义"}},[t._v("#")]),t._v(" 前端性能优化的定义")]),t._v(" "),e("h3",{attrs:{id:"前端的定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端的定义"}},[t._v("#")]),t._v(" 前端的定义")]),t._v(" "),e("p",[t._v("前端是"),e("strong",[t._v("直接面向用户的接口")]),t._v("，负责与用户行为发生交互")]),t._v(" "),e("p",[t._v("常见的前端场景：PC、移动端、终端、Web、H5、Android、iOS")]),t._v(" "),e("h3",{attrs:{id:"web-performance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-performance"}},[t._v("#")]),t._v(" web performance")]),t._v(" "),e("blockquote",[e("p",[t._v("Web performance is the objective measurements and the perceived user experience of load time and runtime. Web performance is how long a site takes to load, become interactive and responsive, and how smooth the content is during user interactions - is the scrolling smooth? are buttons clickable? Are pop-ups quick to load and display, and do they animate smoothly as they do so? Web performance includes both objective measurements like time to load, frames per second, and time to become interactive, and subjective experiences of how long it felt like it took the content to load.")])]),t._v(" "),e("p",[t._v("网页性能是评判网页在加载与运行时，用户可感知的使用体验的客观指标。前端性能包含一些常见的指标：加载时间，帧率，网页可交互的时间，主观感受内容的加载时间。")]),t._v(" "),e("blockquote",[e("p",[t._v("The longer it takes for a site to respond, the more users will abandon the site. It is important to minimize the loading and response times and add additional features to conceal latency by making the experience as available and interactive as possible, as soon as possible, while asynchronously loading in the longer tail parts of the experience.")])]),t._v(" "),e("p",[t._v("网页响应用户操作的时间越长，会导致更多的用户放弃使用这个网站。因此，最大化减少加载和响应时间，让功能变得尽快可用与具有交互性。")]),t._v(" "),e("h3",{attrs:{id:"web-生命周期的三个阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-生命周期的三个阶段"}},[t._v("#")]),t._v(" web 生命周期的三个阶段")]),t._v(" "),e("ol",[e("li",[t._v("加载阶段： 发出请求到渲染出完整页面的过程")]),t._v(" "),e("li",[t._v("交互阶段：从页面加载完成到用户交互的整个过程")]),t._v(" "),e("li",[t._v("关闭阶段：用户发出关闭指令后页面所做的一些清理工作")])]),t._v(" "),e("h3",{attrs:{id:"性能优化的定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化的定义"}},[t._v("#")]),t._v(" 性能优化的定义")]),t._v(" "),e("p",[t._v("在Web页面的整个生命周期中，占用更小的资源，以更快的速度运行。")]),t._v(" "),e("h2",{attrs:{id:"为什么要做性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要做性能优化"}},[t._v("#")]),t._v(" 为什么要做性能优化")]),t._v(" "),e("p",[t._v("性能优化有助于让产品具有更好的使用体验，从而做到更高的业务转化率")]),t._v(" "),e("h3",{attrs:{id:"性能是系统设计的标尺"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能是系统设计的标尺"}},[t._v("#")]),t._v(" 性能是系统设计的标尺")]),t._v(" "),e("ol",[e("li",[t._v("《高并发系统设计40问》中指出，高并发系统的设计目标为"),e("strong",[t._v("高可用、高性能、高扩展")])]),t._v(" "),e("li",[t._v("前端产品的设计要考虑性能、稳定性、易用性、可扩展性")])]),t._v(" "),e("h3",{attrs:{id:"性能优化有助于提高业务转化率"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化有助于提高业务转化率"}},[t._v("#")]),t._v(" 性能优化有助于提高业务转化率")]),t._v(" "),e("p",[t._v("根据 "),e("code",[t._v("Google")]),t._v(" 的统计数据，性能越好的网页，用户离开的比率会越小（跳失率）")]),t._v(" "),e("h3",{attrs:{id:"性能优化的原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化的原则"}},[t._v("#")]),t._v(" 性能优化的原则")]),t._v(" "),e("ol",[e("li",[t._v("性能优化是问题导向的，不是无中生有")]),t._v(" "),e("li",[t._v("要遵从二八定律，把握性能优化的关键指标")]),t._v(" "),e("li",[t._v("要找到数据支撑")]),t._v(" "),e("li",[t._v("持续、分阶段的优化")])]),t._v(" "),e("h1",{attrs:{id:"衡量-常用的前端性能优化指标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#衡量-常用的前端性能优化指标"}},[t._v("#")]),t._v(" 衡量：常用的前端性能优化指标")]),t._v(" "),e("h2",{attrs:{id:"w3c-performance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#w3c-performance"}},[t._v("#")]),t._v(" W3C performance")]),t._v(" "),e("p",[e("img",{attrs:{src:"/leonBlog/img/w3cperformance.jpg",alt:"W3C Performance"}})]),t._v(" "),e("ol",[e("li",[t._v("DNS解析耗时: domainLookupEnd - domainLookupStart")]),t._v(" "),e("li",[t._v("TCP连接耗时: connectEnd - connectStart")]),t._v(" "),e("li",[t._v("SSL安全连接耗时: connectEnd - secureConnectionStart")]),t._v(" "),e("li",[t._v("网络请求耗时(TTFB): responseStart - requestStart")]),t._v(" "),e("li",[t._v("数据传输耗时: responseEnd - responseStart")]),t._v(" "),e("li",[t._v("DOM解析耗时: domInteractive - responseEnd")]),t._v(" "),e("li",[t._v("资源加载耗时: loadEventStart - domContentLoadedEventEnd")]),t._v(" "),e("li",[t._v("首包时间: responseStart - domainLookupStart")]),t._v(" "),e("li",[t._v("首次渲染时间 / 白屏时间: responseEnd - fetchStart")]),t._v(" "),e("li",[t._v("首次可交互时间: domInteractive - fetchStart")]),t._v(" "),e("li",[t._v("DOM Ready时间: domContentLoadEventEnd - fetchStart")]),t._v(" "),e("li",[t._v("⻚面完全加载时间: loadEventStart - fetchStart")])]),t._v(" "),e("h2",{attrs:{id:"lighthouse-指标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lighthouse-指标"}},[t._v("#")]),t._v(" lighthouse 指标")]),t._v(" "),e("ol",[e("li",[t._v("FCP - First Contentful Paint(首次内容渲染)")]),t._v(" "),e("li",[t._v("SI - Speed Index(速度指数)")]),t._v(" "),e("li",[t._v("LCP - Largest Contentful Paint(最大内容绘制)")]),t._v(" "),e("li",[t._v("TTI - Time to Interactive(可交互时间)")]),t._v(" "),e("li",[t._v("TBT - Total Blocking Time(总阻塞时间)")]),t._v(" "),e("li",[t._v("CLS - Cumulative Layout Shift(累积布局偏移)")])]),t._v(" "),e("h2",{attrs:{id:"常用性能检测工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用性能检测工具"}},[t._v("#")]),t._v(" 常用性能检测工具")]),t._v(" "),e("ul",[e("li",[t._v("chorome performance")]),t._v(" "),e("li",[t._v("chorome lighthouse")])]),t._v(" "),e("h1",{attrs:{id:"方法-如何进行性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法-如何进行性能优化"}},[t._v("#")]),t._v(" 方法：如何进行性能优化")]),t._v(" "),e("h2",{attrs:{id:"性能的影响因素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能的影响因素"}},[t._v("#")]),t._v(" 性能的影响因素")]),t._v(" "),e("ul",[e("li",[t._v("用户的使用环境")]),t._v(" "),e("li",[t._v("站点自身的性能表现\n"),e("ul",[e("li",[t._v("网络性能")]),t._v(" "),e("li",[t._v("渲染性能")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:"/leonBlog/img/domRender.jpg",alt:"渲染dom过程"}})]),t._v(" "),e("h2",{attrs:{id:"网络优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络优化"}},[t._v("#")]),t._v(" 网络优化")]),t._v(" "),e("ul",[e("li",[t._v("减少关键资源数")]),t._v(" "),e("li",[t._v("减少关键资源的RTT（round-trip time）\n"),e("ul",[e("li",[t._v("升级HTTP协议")]),t._v(" "),e("li",[t._v("使用HTTP缓存")]),t._v(" "),e("li",[t._v("优化接口请求")]),t._v(" "),e("li",[t._v("使用数据缓存")]),t._v(" "),e("li",[t._v("DNS预解析")]),t._v(" "),e("li",[t._v("使用CDN")]),t._v(" "),e("li",[t._v("减少关键资源的个数和减少关键资源的大小搭配")])])]),t._v(" "),e("li",[t._v("减少关键资源的大小\n"),e("ul",[e("li",[t._v("代码分割")]),t._v(" "),e("li",[t._v("压缩")]),t._v(" "),e("li",[t._v("静态资源服务器开启Gzip")]),t._v(" "),e("li",[t._v("非首屏延迟加载")])])])]),t._v(" "),e("h2",{attrs:{id:"渲染优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染优化"}},[t._v("#")]),t._v(" 渲染优化")]),t._v(" "),e("p",[e("img",{attrs:{src:"/leonBlog/img/frameRender.png",alt:"帧渲染"}})]),t._v(" "),e("ul",[e("li",[t._v("提高单帧的渲染速度\n"),e("ul",[e("li",[t._v("合成线程 > 重绘 > 重排（影响从小到大）\n"),e("ul",[e("li",[t._v("合理利用 css 合成动画")]),t._v(" "),e("li",[t._v("避免强制同步布局和布局抖动\n"),e("ul",[e("li",[t._v("DOM 批处理")]),t._v(" "),e("li",[t._v("transform")])])])])]),t._v(" "),e("li",[t._v("避免频繁的垃圾回收")]),t._v(" "),e("li",[t._v("减少JS文件的执行时间\n"),e("ul",[e("li",[t._v("长任务拆分")]),t._v(" "),e("li",[t._v("优化代码执行逻辑\n"),e("ul",[e("li",[t._v("合理的错误处理")]),t._v(" "),e("li",[t._v("串行接口优化")]),t._v(" "),e("li",[t._v("空间换时间")]),t._v(" "),e("li",[t._v("按需加载")]),t._v(" "),e("li",[t._v("图表渲染优化")])])]),t._v(" "),e("li",[t._v("耗时的计算任务移除主线程")])])])])])]),t._v(" "),e("h3",{attrs:{id:"布局抖动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#布局抖动"}},[t._v("#")]),t._v(" 布局抖动")]),t._v(" "),e("p",[t._v("在一段JS代码中，反复执行布局操作，就是布局抖动")])])}),[],!1,null,null,null);e.default=r.exports}}]);