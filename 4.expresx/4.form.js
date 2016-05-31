var express = require('express');
var http = require('http');
var server = express();
server.set('view engine','html');
server.set('views',__dirname);
var db = require('./db');
var bodyParser = require('body-parser');
server.engine('.html',require('ejs').__express);
server.use(express.static(__dirname));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.get('/',function(req,res){
   res.end('hello')
});

server.get('/reg',function(req,res){
    res.render('reg',{});
   // res.sendfile('./reg.html');
});

server.post('/reg',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    db.model.create({username:username,password:password},function(err,user){
        //res.render('success',{user:user});
        console.log(user);
        res.sendfile('./success.html');
    });
});

server.get('/success',function(req,res){
    res.render('success',{});
});


server.listen(8080);



