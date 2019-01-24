const express = require('express')
var proxy = require('http-proxy-middleware');
const app = express()


// proxy middleware options
var options = {
    target: 'http://172.17.0.179/ArcGIS/rest/services/FTKSJ/NANSHAN_CGCS2000/MapServer', // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
        //   '^/api/old-path': '/api/new-path', // rewrite path
        //   '^/api/remove/path': '/path', // remove base path
        "^/api": ""
    },
    onProxyReq: function (proxyReq, req, res) {
        proxyReq.setHeader('Access-Control-Allow-Origin', '*')
    }
}
// create the proxy (without context)
var exampleProxy = proxy(options)

app.use('/api', exampleProxy);
const port = 8081;
//开启监听
app.listen(port, () => console.log('Example app listening on port' + port + ' !'))