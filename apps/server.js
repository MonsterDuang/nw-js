const express = require('express');
const { createProxyMiddleware: proxy } = require('http-proxy-middleware');
// http-proxy-middleware版本1.0.5的时候默认导出的不是proxy的函数了，需要用以下注释的方式调用
// const { createProxyMiddleware: proxy } = require('http-proxy-middleware');
const path = require('path');
const { port = 8000, proxy: proxyConfig = {} } = require('./serverConfig');

const app = express();

app.use('/', express.static(path.join(__dirname, 'static')));

Object.keys(proxyConfig).map((key) => {
	app.use(key, proxy(proxyConfig[key]));
});

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});
