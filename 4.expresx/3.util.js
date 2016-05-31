var express = require('express');
var http = require('http');
var server = express();
/*var url = require('url');
var querystring = require('querystring');*/
server.get('/user/:id',function(req,res){
    console.log(req.params.id);
    res.send("用户需要"+req.query.num+"个"+req.query.type);
});
server.get('*',function(req,res){
    console.log(req);
    console.log(req.url);
    console.log(req.query);
    res.send("用户需要"+req.query.num+"个"+req.query.type);
});
server.listen(8080);



