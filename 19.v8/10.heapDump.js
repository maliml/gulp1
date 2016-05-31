
var heapDump = require('heapdump');
var http = require('http');
http.createServer(function (req,res) {
    var leakArray = [];
    leakArray.push(Math.random()+"");
    res.end('hello');
}).listen(8080);