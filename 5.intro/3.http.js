var http = require('http');
var fs = require('fs');
//创建服务器
var server = http.createServer();
//request代表客户端请求对象 存放客户请求的各种信息
//response代表响应对象，代表响应给客户端的内容
server.on('request',function(request,response){
    var fileBytes = request.headers['content-length'];
    var uploadBytes = 0;
    var bufs = [];
    request.on('data',function(data){
        bufs.push(data);
        uploadBytes +=data.length;
        var progress = (uploadBytes/fileBytes)*100;
        response.write(progress+"%\n");
    });
    request.on('end',function(){
        fs.writeFile('a.wmv',Buffer.concat(bufs));
        response.end();
    });
});
server.listen(8088);