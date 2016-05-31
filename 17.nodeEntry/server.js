var http = require('http');
var fs = require('fs');
//现在要开个饭店
//1.找个地方 需要一个地址
//2.知道客人来了我们如何服务
//req 客户端的请求 res服务器端的响应
//http://localhost:8080/server.js
var server = http.createServer(function(req,res){
    var url = req.url;// /server.js
    if(url != '/favicon.ico'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        var content = fs.readFileSync(url.slice(1));
        res.end(content);
    }

});
server.listen(8080,'localhost');
