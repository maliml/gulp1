var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    var url = req.url;
    if(url == "/"){
        fs.createReadStream('./form.html').pipe(res);
    ///reg?username=dd&password=ddd
    }else if(url.indexOf("/reg")==0){
      /*  console.log(url);
        var values =url.split('&');
        var obj = {username:values[0].split('=')[1],password:values[1].split('=')[1]};
        res.end(JSON.stringify(obj));*/
        var data = '';
        req.on('data',function(chunk){
            data += chunk;
        });
        req.on('end',function(){
            var values =data.split('&');
            var obj = {username:values[0].split('=')[1],password:values[1].split('=')[1]};
            res.end(JSON.stringify(obj));
        });
    }else{
        res.writeHead(404);
        res.end();
    }
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');