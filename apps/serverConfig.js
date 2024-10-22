module.exports = {
	/**
	 * port-服务启动的端口
	 */
	port: 8898,

	/**
	 * 代理的配置-可以设置多个代理
	 * @param key - 代理的匹配路径
	 * target-代理的目标地址
	 * changeOrigin-是否改变来源
	 * ws-是否支持socket
	 * pathRewrite-路径重写
	 */
	proxy: {
		'/*': {
			// target: 'http://192.168.1.10:9988/',
			target: 'https://doctor.shenzhenheling.com/',
			changeOrigin: true, // 是否改变域名
		},
	},
};
