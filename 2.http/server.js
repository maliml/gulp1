//庆丰包子店模板
var http = require('http');
var fs =  require('fs');
var waitress = function(request,response){
    var url = request.url;
    console.log(url);
    if(url != '/' && url != "/favicon.ico"){
        response.writeHead(200,{"Content-Type":"text/css;charset=utf-8"});
        var content = fs.readFileSync("./"+url);
        response.end(content);
    }else{
        response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        var content = fs.readFileSync("./index.html");
        response.end(content);
    }

}
var baozi = http.createServer(waitress);//霍营装修好了
baozi.listen(8080);//开门营业
//url 统一资源定位符
//http://localhost:8080/css/index2.css?name=zfpx
//协议      域名=ip   端口 路径

