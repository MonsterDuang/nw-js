// package 配置示例

// main和name是必须的属性

// （1）"node-main"配置：指定一个js文件，该js文件是启动程序时最早运行文件，在node-main脚本中还可以访问全局的“window”对象，它指向DOM窗口，但是如果页面导航发生变化，访问到的window对象也会发生变化。因为它执行时间要早于DOM加载，所以要等页面加载完毕，才能使用“window”对象。同时，在DOM页面中，可以通过process.mainModule来获取node-main信息。

// （2）"single-instance"配置：简单地说，是指是否允许同时打开多个nw应用。

// （3）"kiosk"配置：如果该配置设为ture，则显示为全屏模式并屏蔽关闭按钮，即该显示器将会一直停留在nw应用的显示界面，类似于银行的排队等待办理业务的取票机界面。

const package = {
	/**指定程序的起始页面。*/
	main: 'index.html',
	/**字符串必须是小写字母或者数字，可以包含.或者_或者-不允许带空格。name必须全局唯一。*/
	name: 'demo',
	/**程序描述*/
	description: 'demo app of node-webkit',
	/**程序版本号*/
	version: '0.1.0',
	/**关键字*/
	keywords: ['demo', 'node-webkit'],
	/**bool值，如果设置为false，将禁用webkit的node支持。*/
	nodejs: true,
	/**
	 * 指定一个node.js文件，当程序启动时，该文件会被运行，启动时间要早于node-webkit加载html的时间。
	 * 它在node上下文中运行，可以用它来实现类似后台线程的功能。
	 * （不需要可注释不用）
	 */
	'node-main': 'js/node.js',
	/**
	 * bool值。默认情况下，如果将node-webkit程序打包发布，那么只能启动一个该应用的实例。
	 * 如果你希望允许同时启动多个实例，将该值设置为false。
	 */
	'single-instance': true,
	/**窗口属性设置 */
	window: {
		/**字符串，设置默认title。*/
		title: 'demo',
		/**窗口的icon。*/
		icon: 'link.png',
		/**bool值。是否显示导航栏。*/
		toolbar: false,
		/**bool值。是否允许调整窗口大小。*/
		resizable: true,
		/**是否全屏*/
		fullscreen: false,
		/**是否在win任务栏显示图标*/
		show_in_taskbar: true,
		/**bool值。如果设置为false，程序将无边框显示。*/
		frame: true,
		/**字符串。窗口打开时的位置，可以设置为“null”、“center”或者“mouse”。*/
		position: 'center',
		/**主窗口的的宽度。*/
		width: 800,
		/**主窗口的的高度。*/
		height: 670,
		/**窗口的最小宽度。*/
		min_width: 400,
		/**窗口的最小高度。*/
		min_height: 335,
		/**窗口显示的最大宽度，可不设。*/
		max_width: 800,
		/**窗口显示的最大高度，可不设。*/
		max_height: 670,
		/**bool值，如果设置为false，启动时窗口不可见。*/
		show: true,
		/**是否在任务栏显示图标。*/
		show_in_taskbar: true,
		/**
		 * bool值。是否使用kiosk模式。如果使用kiosk模式，
		 * 应用程序将全屏显示，并且阻止用户离开应用。
		 * */
		kiosk: false,
	},
	/**webkit设置*/
	webkit: {
		/**bool值，是否加载插件，如flash，默认值为false。*/
		plugin: true,
		/**bool值，是否加载Java applets，默认为false。*/
		java: false,
		/**bool值，是否启用页面缓存，默认为false。*/
		'page-cache': false,
	},
};
