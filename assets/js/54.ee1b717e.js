(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{369:function(t,s,a){"use strict";a.r(s);var r=a(8),v=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ul",[s("li",[t._v("Web 是建立在何种技术之上")]),t._v(" "),s("li",[t._v("HTTP 协议是如何诞生并发展的")])])]),t._v(" "),s("h2",{attrs:{id:"名词定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#名词定义"}},[t._v("#")]),t._v(" 名词定义")]),t._v(" "),s("p",[s("strong",[t._v("客户端")]),t._v("：通过请求获取服务器资源的客体，如浏览器")]),t._v(" "),s("p",[s("strong",[t._v("HTTP（HyperText Transfer Protocol）")]),t._v("：超文本传输协议")]),t._v(" "),s("p",[s("strong",[t._v("WWW（World Wide Web）")]),t._v("：万维网")]),t._v(" "),s("p",[s("strong",[t._v("协议")]),t._v("： 计算机与网络设备要相互通信，双方就必须基于相同的方法。比如，如何探测到通信目标、由哪一边先发起通信、使用哪种语言进行通信、怎样结束通信等规则都需要事先确定。不同的硬件、操作系统之间的通信，所有的这一切都需要一种规则。而我们就把这种规则称为协议（protocol）")]),t._v(" "),s("p",[s("strong",[t._v("TCP/IP")]),t._v("：TCP/IP 是互联网相关的各类协议族的总称。协议中存在各式各样的内容。从电缆的规格到 IP 地址的选定方法、寻找异地用户的方法、双方建立通信的顺序，以及 Web 页面显示需要处理的步骤，等等。像这样把与互联网相关联的协议集合起来总称为 TCP/IP。也有说法认为，TCP/IP 是指 TCP 和 IP 这两种协议。还有一种说法认为，TCP/IP 是在 IP 协议的通信过程中，使用到的协议族的统称。")]),t._v(" "),s("h2",{attrs:{id:"tcp-ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip"}},[t._v("#")]),t._v(" TCP/IP")]),t._v(" "),s("h3",{attrs:{id:"tcp-ip-的分层管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-的分层管理"}},[t._v("#")]),t._v(" TCP/IP 的分层管理")]),t._v(" "),s("p",[s("strong",[t._v("四层")]),t._v("：应用层、传输层、网络层、数据链路层")]),t._v(" "),s("h4",{attrs:{id:"应用层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),s("p",[t._v("应用层决定了向用户提供应用服务时通信的活动。")]),t._v(" "),s("p",[t._v("常见协议：")]),t._v(" "),s("ul",[s("li",[t._v("FTP（File Transfer Protocol）文件传输协议")]),t._v(" "),s("li",[t._v("DNS（Domain Name System）域名系统")]),t._v(" "),s("li",[t._v("HTTP")])]),t._v(" "),s("h4",{attrs:{id:"传输层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),s("p",[t._v("对接应用层，提供"),s("strong",[t._v("处于网络连接中的")]),t._v("两台计算机之间的数据传输")]),t._v(" "),s("p",[t._v("常见协议：")]),t._v(" "),s("ul",[s("li",[t._v("TCP（Transmission Control Protocol）")]),t._v(" "),s("li",[t._v("UDP（User Data Protocol）")])]),t._v(" "),s("h4",{attrs:{id:"网络层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[t._v("#")]),t._v(" 网络层")]),t._v(" "),s("p",[t._v("网络层用来处理在网络上流动的数据包。数据包是网络传输的最小数据单位。该层规定了通过怎样的路径（所谓的传输路线）到达对方计算机，并把数据包传送给对方。")]),t._v(" "),s("p",[t._v("与对方计算机之间通过多台计算机或网络设备进行传输时，网络层所起的作用就是在众多的选项内选择一条传输路线。")]),t._v(" "),s("p",[t._v("IP 协议在这一层")]),t._v(" "),s("h4",{attrs:{id:"数据链路层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层"}},[t._v("#")]),t._v(" 数据链路层")]),t._v(" "),s("p",[t._v("用来处理连接网络的硬件部分。包括控制操作系统、硬件的设备驱动、NIC（Network Interface Card，网络适配器，即网卡），及光纤等物理可见部分（还包括连接器等一切传输媒介）。硬件上的范畴均在链路层的作用范围之内。")]),t._v(" "),s("h3",{attrs:{id:"tcp-ip-通信传输流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-通信传输流"}},[t._v("#")]),t._v(" TCP/IP 通信传输流")]),t._v(" "),s("p",[t._v("发送端在层与层之间传输数据时，每经过一层时必定会被打上一个该层所属的首部信息。反之，接收端在层与层传输数据时，每经过一层时会把对应的首部消去。")]),t._v(" "),s("p",[t._v("这种把数据信息包装起来的做法称为封装（encapsulate）。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/leonBlog/img/tcp_transfer.png",alt:"TCP通信传输流"}})]),t._v(" "),s("h3",{attrs:{id:"ip、tcp、dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip、tcp、dns"}},[t._v("#")]),t._v(" IP、TCP、DNS")]),t._v(" "),s("h4",{attrs:{id:"ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip"}},[t._v("#")]),t._v(" IP")]),t._v(" "),s("p",[t._v("IP 协议的作用是把各种数据包传送给对方。而要保证确实传送到对方那里，则需要满足各类条件。其中两个重要的条件是 IP 地址和 MAC 地址（Media Access Control Address）。")]),t._v(" "),s("p",[t._v("IP 地址指明了节点被分配到的地址，MAC 地址是指网卡所属的固定地址。IP 地址可以和 MAC 地址进行配对。IP 地址可变换，但 MAC 地址基本上不会更改。")]),t._v(" "),s("h5",{attrs:{id:"使用-arp-协议凭借-mac-地址进行通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-arp-协议凭借-mac-地址进行通信"}},[t._v("#")]),t._v(" 使用 ARP 协议凭借 MAC 地址进行通信")]),t._v(" "),s("p",[t._v("IP 间的通信依赖 MAC 地址。在网络上，通信的双方在同一局域网（LAN）内的情况是很少的，通常是经过多台计算机和网络设备中转才能连接到对方。而在进行中转时，会利用下一站中转设备的 MAC 地址来搜索下一个中转目标。这时，会采用 ARP 协议（AddressResolution Protocol）。ARP 是一种用以解析地址的协议，根据通信方的 IP 地址就可以反查出对应的 MAC 地址。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("无论哪台计算机、哪台网络设备，他们都无法全面掌握互联网中的细节")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/leonBlog/img/ip_usage.png",alt:"ip协议的作用"}})]),t._v(" "),s("h2",{attrs:{id:"uri-和-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uri-和-url"}},[t._v("#")]),t._v(" URI 和 URL")]),t._v(" "),s("h3",{attrs:{id:"uri-的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uri-的概念"}},[t._v("#")]),t._v(" URI 的概念")]),t._v(" "),s("p",[t._v("URI 是 Uniform Resource Identifier 的缩写。")]),t._v(" "),s("p",[t._v("URI 用字符串标识某一互联网资源，而 URL 表示资源的地点（互联网上所处的位置）。可见 URL 是 URI 的子集。")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ftp://ftp.is.co.za/rfc/rfc1808.txt\nhttp://www.ietf.org/rfc/rfc2396.txt\nldap://[2001:db8::7]/c=GB?objectClass?one\nmailto:John.Doe@example.com\nnews:comp.infosystems.www.servers.unix\ntel:+1-816-555-1212\ntelnet://192.0.2.16:80/\nurn:oasis:names:specification:docbook:dtd:xml:4.1.2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h3",{attrs:{id:"uri-的格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uri-的格式"}},[t._v("#")]),t._v(" URI 的格式")]),t._v(" "),s("p",[t._v("绝对 URI 的格式，以如下的 URI 为例")]),t._v(" "),s("p",[t._v("http://user:pass@www.example.jp:80/dir/index.html?uid=1#ch1")]),t._v(" "),s("p",[s("strong",[t._v("协议类型")]),t._v("："),s("code",[t._v("http:")]),t._v(" "),s("code",[t._v("https:")])]),t._v(" "),s("p",[s("strong",[t._v("登录信息（认证）")]),t._v("："),s("code",[t._v("user:pass")]),t._v(" 指定用户名和密码作为从服务端获取资源时的必要登录信息（身份认证）。此项是可选项")]),t._v(" "),s("p",[s("strong",[t._v("服务器地址")]),t._v("："),s("code",[t._v("www.example.jp")]),t._v(" 使用绝对 URI 必须指定待访问的服务器地址。地址可以是类似 hackr.jp 这种 DNS 可解析的名称，或是 192.168.1.1 这类 IPv4 地址名，还可以是 [0:0:0:0:0:0:0:1] 这样用方括号括起来的 IPv6 地址名。")]),t._v(" "),s("p",[s("strong",[t._v("服务器端口")]),t._v("："),s("code",[t._v("80")]),t._v(" 指定服务器连接的网络端口号。此项也是可选项，若用户省略则自动使用默认端口号。")]),t._v(" "),s("p",[s("strong",[t._v("带层次的文件路径")]),t._v("："),s("code",[t._v("/dir/index.html")]),t._v(" 指定服务器上的文件路径来定位特指的资源。这与 UNIX 系统的文件目录结构相似。")]),t._v(" "),s("p",[s("strong",[t._v("查询字符串")]),t._v("："),s("code",[t._v("uid=1")]),t._v(" 针对已指定的文件路径内的资源，可以使用查询字符串传入任意参数。此项可选。")]),t._v(" "),s("p",[s("strong",[t._v("片段标识符")]),t._v("：使用片段标识符通常可标记出已获取资源中的子资源（文档内的某个位置）。但在 RFC 中并没有明确规定其使用方法。该项也为可选项。")])])}),[],!1,null,null,null);s.default=v.exports}}]);