var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    if(req.url != '/favicon.ico'){
        if(req.url.indexOf('.shtml') !=-1){
            fs.readFile(req.url.slice(1),function(err,content){
                res.end(content);
                content = content + ' from nginx';
                fs.write('/usr/share/nginx/html/'+req.url.slice(1),content);
            })
        }
    }
}).listen(3000);