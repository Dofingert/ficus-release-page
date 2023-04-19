const baiduCode = require("./config/baiduCode.js");
module.exports = {
	theme: "vdoing", // 使用依赖包主题
	// theme: require.resolve('../../vdoing'), // 使用本地主题 (先将vdoing主题文件下载到本地：https://github.com/xugaoyi/vuepress-theme-vdoing)

	title: "ficus",
	description: "一款结构化的 markdown 编辑管理器",
	// base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
	head: [
		// 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
		["link", { rel: "icon", href: "/img/favicon.png" }], //favicons，资源放在public文件夹
		["meta", { name: "keywords", content: "editor,markdown,electron,ficus" }],
		["meta", { name: "theme-color", content: "#89D3B1" }], // 移动浏览器主题颜色
		[
			"script",
			{},
			`
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://ficus.world/bdapi/hm.js?31d16925859d7ef5721696ab9f4e8087";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        `,
		],
		[
			"link",
			{
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css",
			},
		],
		[
			"link",
			{
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css",
			},
		],
	],

	// 主题配置
	themeConfig: {
		nav: [
			{ text: "首页", link: "/" },
			{
				text: "指南",
				link: "/pages/162381/",
				items: [
					{
						text: "产品介绍",
						link: "/pages/162381/",
						// items: [
						// 	{ text: "初衷与灵感", link: "/pages/22792a/" },
						// 	{ text: "产品概述", link: "/pages/162381/" },
						// 	{ text: "快速上手", link: "/pages/c454a8/" },
						// ],
					},
					{
						text: "功能",
						link: "/pages/b4868b/",
						// items: [
						// 	{ text: "功能分区", link: "/pages/b4868b/" },
						// 	{ text: "ficus 功能", link: "/pages/ed68ff/" },
						// 	{ text: "其他功能", link: "/pages/e7580b/" },
						// ],
					},
					{
						text: "典型场景",
						link: "/pages/947a09/",
					},
					{
						text: "评论与问答",
						link: "/pages/6338d8/",
					},
				],
			},
			{
				text: "开发",
				link: "/pages/fc3ecc/",
				items: [
					{
						text: "文档",
						link: "/pages/fc3ecc/",
						items: [
							{
								text: "需求功能",
								link: "/pages/fc3ecc/",
								items: [
									{ text: "原型设计", link: "/pages/fc3ecc/" },
									{ text: "理论支撑", link: "/pages/b190d0/" },
								],
							},
							{
								text: "技术规格",
								link: "/pages/a15ca0/",
								items: [
									{ text: "项目架构", link: "/pages/a15ca0/" },
									{ text: "测试", link: "/pages/7e127e/" },
								],
							},
						],
					},
					{
						text: "日志",
						link: "/pages/375bc4/",
						items: [
							{ text: "开发日志", link: "/pages/375bc4/", items: [] },
							{ text: "宣发日志", link: "/pages/a59530/", items: [] },
						],
					},
				],
			},
			// { text: "资源", link: "/pages/db78e2/" },
			{ text: "下载", link: "/pages/53ff34/" },
			{
				text: "支持",
				link: "/pages/87ba98/",
				// items: [
				// 	{ text: "支持我们", link: "/pages/87ba98/" },
				// 	{ text: "如何提issue", link: "/pages/2ef32c/" },
				// 	{ text: "如何贡献代码", link: "/pages/3b0ecc/" },
				// ],
			},
			{ text: "团队", link: "/pages/bf7fc9/" },
		],
		sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
		logo: "/img/favicon.png", // 导航栏logo
		repo: "Thysrael/Ficus", // 导航栏右侧生成Github链接
		searchMaxSuggestions: 10, // 搜索结果显示最大数
		lastUpdated: "上次更新", // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
		defaultMode: "light",

		// docsDir: 'docs', // 编辑的文件夹
		// editLinks: true, // 编辑链接
		// editLinkText: '编辑',

		// 以下配置是Vdoing主题改动的和新增的配置
		sidebar: { mode: "structuring", collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

		// sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
		updateBar: {
			// 最近更新栏
			showToArticle: false, // 显示到文章页底部，默认true
			// moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
		},
		// titleBadge: false, // 文章标题前的图标是否显示，默认true
		// titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
		//   '图标地址1',
		//   '图标地址2'
		// ],

		pageStyle: "line", // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

		// contentBgStyle: 1,

		category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
		tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
		// archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

		author: {
			// 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
			name: "Thysrael", // 必需
			href: "https://github.com/Thysrael", // 可选的
		},
	},

	// 插件
	plugins: [
		["fulltext-search"], // 全文搜索

		// [
		// 	"vuepress-plugin-baidu-tongji", // 百度统计
		// 	{
		// 		hm: baiduCode || "01293bffa6c3962016c08ba685c79d78",
		// 	},
		// ],

		[
			"one-click-copy",
			{
				// 代码块复制按钮
				copySelector: [
					'div[class*="language-"] pre',
					'div[class*="aside-code"] aside',
				], // String or Array
				copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
				duration: 1000, // prompt message display time.
				showInMobile: false, // whether to display on the mobile side, default: false.
			},
		],
		[
			"vuepress-plugin-baidu-tongji", // 百度统计
			{
				hm: baiduCode || "31d16925859d7ef5721696ab9f4e8087",
			},
		],
		[
			"demo-block",
			{
				// demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
				settings: {
					// jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
					// cssLib: ['http://xxx'], // 在线示例中的css依赖
					// vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
					jsfiddle: false, // 是否显示 jsfiddle 链接
					codepen: true, // 是否显示 codepen 链接
					horizontal: false, // 是否展示为横向样式
				},
			},
		],
		[
			"vuepress-plugin-zooming", // 放大图片
			{
				selector: ".theme-vdoing-content img:not(.no-zoom)",
				options: {
					bgColor: "rgba(0,0,0,0.6)",
				},
			},
		],
		[
			"@vuepress/last-updated", // "上次更新"时间格式
			{
				transformer: (timestamp, lang) => {
					const dayjs = require("dayjs"); // https://day.js.org/
					return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
				},
			},
		],
		[
			"@vssue/vuepress-plugin-vssue",
			{
				platform: "github",

				// 其他的 Vssue 配置
				owner: "Thysrael",
				repo: "ficus",
				clientId: "f66372fa5e1dd212d623",
				clientSecret: "b7425d0a1cc64d16de57f537cb8a5aeef73cbf16",
			},
		],
	],

	markdown: {
		// lineNumbers: true,
		extractHeaders: ["h2", "h3", "h4", "h5", "h6"], // 提取标题到侧边栏的级别，默认['h2', 'h3']
	},

	extendMarkdown(md) {
		md.set({ html: true });
		md.use(require("markdown-it-katex"));
	},

	// 监听文件变化并重新构建
	extraWatchFiles: [".vuepress/config.js"],
};
