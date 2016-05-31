var redis = require('redis');
var client = redis.createClient(6379,'localhost');
client.on('error',function(err){
    console.log(err);
});
client.select(1,function(){
    client.hmset('person_100',{name:11,age:222},function(err,result){
        console.log(arguments);
    });
});

//存入
/*
npm install redis
key = person_100
   name tom
   age 100
 再全部获取并输出*/
