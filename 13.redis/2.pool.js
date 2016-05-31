/**
 * 连接池
 *
 */
var redis = require('redis');
var pool = require('generic-pool');
var p = pool.Pool({
    name:'redisPool',
    create:function(callback){
        var client = redis.createClient();
        callback(null,client);
    },
    destroy:function(){
        client.quit();
    },
    min:5,
    max:100,
    idleTimeoutMills:3000,//超过多长时间销毁这个连接
    log:true
});

p.acquire(function(err,client){
    client.select(1,function(){
        client.hmset('person_250',{name:123,age:456},function(err,result){
            console.log(arguments);
        });
    });
});