(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{365:function(s,a,t){"use strict";t.r(a);var n=t(8),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("阮一峰的bash教程，地址在"),a("a",{attrs:{href:"https://wangdoc.com/bash/",target:"_blank",rel:"noopener noreferrer"}},[s._v("阮一峰Bash教程"),a("OutboundLink")],1)])]),s._v(" "),a("h4",{attrs:{id:"命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令格式"}},[s._v("#")]),s._v(" 命令格式")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("bash")]),s._v(" 的命令格式总是这样的："),a("code",[s._v("command [arg1 ... [argN]]")])]),s._v(" "),a("li",[s._v("参数有长短形式，"),a("code",[s._v("-l")]),s._v(" 等同于 "),a("code",[s._v("-list")])])]),s._v(" "),a("h4",{attrs:{id:"命令组合符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令组合符"}},[s._v("#")]),s._v(" 命令组合符")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("&&")]),s._v(" 表示前一个命令执行成功后，才执行后一个命令")]),s._v(" "),a("li",[a("code",[s._v("||")]),s._v(" 表示前一个命令执行失败后，才执行后一个命令")]),s._v(" "),a("li",[a("code",[s._v(";")]),s._v(" 表示两个命令都执行，但并不关心执行结果")])]),s._v(" "),a("h4",{attrs:{id:"模式扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模式扩展"}},[s._v("#")]),s._v(" 模式扩展")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("?")]),s._v(" 扩展，匹配任意一个字符，可以连用，例如 "),a("code",[s._v("??.txt")])]),s._v(" "),a("li",[a("code",[s._v("*")]),s._v(" 扩展，匹配任意多个字符\n"),a("ul",[a("li",[a("code",[s._v(".*")]),s._v(" 用来匹配隐藏文件，"),a("code",[s._v(".[!.]*")]),s._v(" 用来匹配除了 "),a("code",[s._v(".")]),s._v(" 和 "),a("code",[s._v("..")]),s._v(" 之外的所有文件")]),s._v(" "),a("li",[s._v("Bash 4.0 引入了一个参数globstar，当该参数打开时，允许"),a("code",[s._v("**")]),s._v("匹配零个或多个子目录。因此，"),a("code",[s._v("**/*")]),s._v(".txt可以匹配顶层的文本文件和任意深度子目录的文本文件。详细介绍请看后面shopt命令的介绍。")])])]),s._v(" "),a("li",[s._v("方括号扩展，匹配任意一个字符，同正则，可以使用范围，如"),a("code",[s._v("[a-z]")])]),s._v(" "),a("li",[s._v("花括号扩展，扩展一个字符为给定的值，如 "),a("code",[s._v("d{a,e,i,o,u}g")]),s._v(" 会变为 "),a("code",[s._v("dag")]),s._v(","),a("code",[s._v("deg")]),s._v(","),a("code",[s._v("dig")]),s._v(","),a("code",[s._v("dag")]),s._v(","),a("code",[s._v("dug")]),s._v(" "),a("ul",[a("li",[s._v(",前面可以没有值，表示空")]),s._v(" "),a("li",[s._v("花括号扩展可以与其他模式共用，且总是领先于其他模式")]),s._v(" "),a("li",[a("code",[s._v("{a..b..c}")]),s._v("，会扩展为a-b，步长为c的序列")]),s._v(" "),a("li",[s._v("多个扩展连用，会有类似循环的效果\n"),a("ul",[a("li",[a("code",[s._v("echo {a..c}{1..3}")]),s._v("，输出 "),a("code",[s._v("a1 a2 a3 b1 b2 b3 c1 c2 c3")])])])])])]),s._v(" "),a("li",[a("code",[s._v("${!string*}")]),s._v("或"),a("code",[s._v("${!string@}")]),s._v("返回所有匹配给定字符串string的变量名。")]),s._v(" "),a("li",[a("code",[s._v("$(...)")]),s._v(" 可以扩展成另一个命令的运行结果，该命令的所有输出都会作为返回值。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\nTue Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" 00:01:13 CST "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面例子中，"),a("code",[s._v("$(date)")]),s._v(" 返回 "),a("code",[s._v("date")]),s._v(" 命令的运行结果。")]),s._v(" "),a("p",[s._v("还有另一种较老的语法，子命令放在反引号之中，也可以扩展成命令的运行结果。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\nTue Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" 00:01:13 CST "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("code",[s._v("$(...)")]),s._v("可以嵌套，比如"),a("code",[s._v("$(ls $(pwd))")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("$((...))")]),s._v("可以扩展成整数运算的结果。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("[[:class:]]")]),s._v("表示一个字符类，扩展成某一类特定字符之中的一个。常用的字符类如下。")])]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[[:alnum:]]：匹配任意英文字母与数字\n[[:alpha:]]：匹配任意英文字母\n[[:blank:]]：空格和 Tab 键。\n[[:cntrl:]]：ASCII 码 0-31 的不可打印字符。\n[[:digit:]]：匹配任意数字 0-9。\n[[:graph:]]：A-Z、a-z、0-9 和标点符号。\n[[:lower:]]：匹配任意小写字母 a-z。\n[[:print:]]：ASCII 码 32-127 的可打印字符。\n[[:punct:]]：标点符号（除了 A-Z、a-z、0-9 的可打印字符）。\n[[:space:]]：空格、Tab、LF（10）、VT（11）、FF（12）、CR（13）。\n[[:upper:]]：匹配任意大写字母 A-Z。\n[[:xdigit:]]：16进制字符（A-F、a-f、0-9）。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("请看下面的例子。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":upper:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令输出所有大写字母开头的文件名。")]),s._v(" "),a("p",[s._v("字符类的第一个方括号后面，可以加上感叹号!（或^），表示否定。比如，"),a("a",{attrs:{href:"%E6%88%96%5B%5E%5B:digit:%5D%5D"}},[s._v("![:digit:]")]),s._v("匹配所有非数字。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":digit:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令输出所有不以数字开头的文件名。")]),s._v(" "),a("p",[s._v("字符类也属于文件名扩展，如果没有匹配的文件名，字符类就会原样输出。")]),s._v(" "),a("p",[a("strong",[s._v("不存在以大写字母开头的文件")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":upper:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("*\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":upper:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面例子中，由于没有可匹配的文件，字符类就原样输出了。")]),s._v(" "),a("h4",{attrs:{id:"量词语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#量词语法"}},[s._v("#")]),s._v(" 量词语法")]),s._v(" "),a("p",[s._v("量词语法用来控制模式匹配的次数。它只有在 Bash 的extglob参数打开的情况下才能使用，不过一般是默认打开的。下面的命令可以查询。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" extglob\nextglob        \ton\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果extglob参数是关闭的，可以用下面的命令打开。")]),s._v(" "),a("p",[a("code",[s._v("$ shopt -s extglob")]),s._v("\n量词语法有下面几个。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pattern-list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：模式匹配零次或一次。\n*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pattern-list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：模式匹配零次或多次。\n+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pattern-list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：模式匹配一次或多次。\n@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pattern-list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：只匹配一次模式。\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pattern-list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("：匹配给定模式以外的任何内容。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" abc?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("txt\nabctxt abc.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面例子中，?(.)匹配零个或一个点。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" abc?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("def"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nabc abcdef\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面例子中，?(def)匹配零个或一个def。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" abc@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".txt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(".php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nabc.php abc.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面例子中，@(.txt|.php)匹配文件有且只有一个.txt或.php后缀名。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" abc+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".txt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nabc.txt abc.txt.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面例子中，+(.txt)匹配文件有一个或多个.txt后缀名。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".txt\na.txt abb.txt ac.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面例子中，!(b)表示匹配单个字母b以外的任意内容，所以除了ab.txt以外，其他文件名都能匹配。")]),s._v(" "),a("p",[s._v("量词语法也属于文件名扩展，如果不存在可匹配的文件，就会原样输出。")]),s._v(" "),a("p",[a("strong",[s._v("没有 abc 开头的文件名")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" abc?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("def"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nls: 无法访问"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abc?(def)'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 没有那个文件或目录\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面例子中，由于没有可匹配的文件，abc?(def)就原样输出，导致ls命令报错。")]),s._v(" "),a("h4",{attrs:{id:"shopt-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shopt-命令"}},[s._v("#")]),s._v(" "),a("code",[s._v("shopt")]),s._v(" 命令")]),s._v(" "),a("p",[s._v("shopt命令可以调整 Bash 的行为。它有好几个参数跟通配符扩展有关。")]),s._v(" "),a("p",[s._v("shopt命令的使用方法如下。")]),s._v(" "),a("p",[a("strong",[s._v("打开某个参数")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("optionname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("关闭某个参数")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("optionname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("查询某个参数关闭还是打开")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("optionname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",[a("li",[s._v("dotglob 参数")])]),s._v(" "),a("p",[s._v("dotglob参数可以让扩展结果包括隐藏文件（即点开头的文件）。")]),s._v(" "),a("p",[s._v("正常情况下，扩展结果不包括隐藏文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" *\nabc.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("打开dotglob，就会包括隐藏文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" dotglob\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" *\nabc.txt .config\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("nullglob 参数")])]),s._v(" "),a("p",[s._v("nullglob参数可以让通配符不匹配任何文件名时，返回空字符。")]),s._v(" "),a("p",[s._v("默认情况下，通配符不匹配任何文件名时，会保持不变。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" b*\nrm: 无法删除"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b*'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 没有那个文件或目录\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面例子中，由于当前目录不包括b开头的文件名，导致b*不会发生文件名扩展，保持原样不变，所以rm命令报错没有b*这个文件。")]),s._v(" "),a("p",[s._v("打开nullglob参数，就可以让不匹配的通配符返回空字符串。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" nullglob\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" b*\nrm: 缺少操作数\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("上面例子中，由于没有b*匹配的文件名，所以rm b*扩展成了rm，导致报错变成了”缺少操作数“。")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("failglob 参数")])]),s._v(" "),a("p",[s._v("failglob参数使得通配符不匹配任何文件名时，Bash 会直接报错，而不是让各个命令去处理。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" failglob\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" b*\nbash: 无匹配: b*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("上面例子中，打开failglob以后，由于b*不匹配任何文件名，Bash 直接报错了，不再让rm命令去处理。")]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("extglob 参数")])]),s._v(" "),a("p",[s._v("extglob参数使得 Bash 支持 ksh 的一些扩展语法。它默认应该是打开的。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" extglob\nextglob        \ton\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("它的主要应用是支持量词语法。如果不希望支持量词语法，可以用下面的命令关闭。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" extglob\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("nocaseglob 参数")])]),s._v(" "),a("p",[s._v("nocaseglob参数可以让通配符扩展不区分大小写。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" nocaseglob\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /windows/program*\n/windows/ProgramData\n/windows/Program Files\n/windows/Program Files "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x86"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("上面例子中，打开nocaseglob以后，program*就不区分大小写了，可以匹配ProgramData等。")]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[s._v("globstar 参数")])]),s._v(" "),a("p",[s._v("globstar参数可以使得**匹配零个或多个子目录。该参数默认是关闭的。")]),s._v(" "),a("p",[s._v("假设有下面的文件结构。")]),s._v(" "),a("p",[s._v("a.txt\nsub1/b.txt\nsub1/sub2/c.txt\n上面的文件结构中，顶层目录、第一级子目录sub1、第二级子目录sub1\\sub2里面各有一个文本文件。请问怎样才能使用通配符，将它们显示出来？")]),s._v(" "),a("p",[s._v("默认情况下，只能写成下面这样。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" *.txt */*.txt */*/*.txt\na.txt  sub1/b.txt  sub1/sub2/c.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这是因为*只匹配当前目录，如果要匹配子目录，只能一层层写出来。")]),s._v(" "),a("p",[s._v("打开globstar参数以后，"),a("strong",[s._v("匹配零个或多个子目录。因此，")]),s._v("/*.txt就可以得到想要的结果。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shopt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" globstar\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" **/*.txt\na.txt  sub1/b.txt  sub1/sub2/c.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("在阅读过程中发现，bash的教程对我并没有太大的工作上的帮助，剩余的内容我将阅读，不做整理，必要时查阅教程。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);