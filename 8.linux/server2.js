var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function(req,res){
    var host = req.headers.host;
    host = host.split(':')[0];
    switch(host){
        case 'baidu.com':
        case 'zfpx.baidu.com':
            proxy.web(req,res,{target:'http://www.baidu.com'});
        break;
        default :
            res.writeHead(200,{"Content-Type":'text/html'});
            res.end('no suitable proxy');
    }
});
server.listen(8080);