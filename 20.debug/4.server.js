var http = require('http');
http.createServer(function(req,res){
    res.write('hello');
    res.write('world');
    res.end('end');
}).listen(9000);