var express = require('express');
var http = require('http');
var server = express();
var mny = 100;
var stack = ['middle1','middle2','middle3'];
//中央
server.use(function(req,res,next){
    req.mny = mny;
    next();
});
//省政府
server.use(function(req,res,next){
    req.mny = req.mny-20;
    next();
});
//市政府
server.use(function(req,res,next){
    req.mny = req.mny-30;
    next();
});
//村里
server.use(function(req,res,next){
    req.mny = req.mny-40;
    res.send("0");
});
server.use(function(req,res,next){
   res.send(""+req.mny);
});
server.listen(8080);



