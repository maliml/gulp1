var http = require('http');
var fs = require('fs');
http.createServer(function (req,res) {
   /* var content = fs.readFile('./bigfile.log');
    res.end(content);*/
    fs.createReadStream('./bigfile.log').pipe(res);

}).listen(8080);