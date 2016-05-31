var http = require('http');
var fs = require('fs');//文件操作模块
var querystring = require('querystring');
var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'123.57.143.189',
    port:3306,
    database:'test',
    user:'root',
    password:'zfpx2015'
})
http.createServer(function(request,response){
    console.log(request.url);
    if(request.url == '/'){
        fs.createReadStream('./index.html').pipe(response);
    }else if(request.url == '/jquery.js'){
        response.writeHead(200,{"Content-Type":"text/javascript"});
        fs.createReadStream('./jquery.js').pipe(response);
    }else if(request.url == '/add'){
        var formData = '';
        request.on('data',function(chunk){
            formData+=chunk;
        });
        request.on('end',function(){
            var formObj = querystring.parse(formData);
            var sql = 'insert into user(username,password,email) values(?,?,?)';
            conn.query(sql,[formObj.username,formObj.password,formObj.email],function(err,result){
                if(err)
                    console.error(err);
                else{
                    conn.query('select * from user   order by id asc',[],function(err,results){
                        response.end(JSON.stringify(results));
                    });
                }
            });

        })

    }else if(request.url == '/delete'){
        var formData = '';
        request.on('data',function(chunk){
            formData+=chunk;
        });
        request.on('end',function(){
            var formObj = querystring.parse(formData);
            var sql = 'delete from user where id in ('+formObj.userIds+')';
            conn.query(sql,[],function(err,result){
                if(err)
                    console.error(err);
                else{
                    conn.query('select * from user order by id asc',[],function(err,results){
                        response.end(JSON.stringify(results));
                    });
                }
            });

        })

    }else{
        response.write('else');
        response.end();
    }
//address, port
}).listen(8081);