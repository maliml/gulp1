var express = require('express');
var http = require('http');
var server = express();
server.listen(8080);
server.get('/',function(req,res){
    res.setHeader('ContentType',"text/html;charset=utf-8");
    res.send('欢迎光临');
});
server.get('/buy',function(req,res){
    res.send({name:'zfpx'});
});
server.all('*',function(req,res){
    console.log(http.STATUS_CODES[404]);
    res.sendStatus(404);
});


