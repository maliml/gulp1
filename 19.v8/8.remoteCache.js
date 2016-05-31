/**
 * 进程之间无法共享内存，如果在进程 中使用缓存，会浪费 内存空间
 * 不太好更新
 * 1.外部缓存 有良好的过期策略以及自身内存管理，不影响 NODE性能。
 * 2.进程之间可以共享缓存
 */

var redis = require('redis');
var client = redis.createClient(6379,'123.57.143.189');
function get(key,callback){
    client.get(key,function(err,result){
        if(result){
            callback(null,result);
        }else{
            var value = 'get from database';
            set(key,value,function(){
                callback(null,value);
            });
        }
    });
}
function set(key,value,callback){
    client.set(key,value,function(err){
        client.expire(key,10);
        callback(err);
    });
}

set('name','zfpx',function(){
    console.log('set sucessfully');
});

get('name',function(err,result){
    console.log(result);
});