/**
 * 跟踪垃圾回收日志
 **/
var ages = [];
for(var i=0;i<1000000;i++){
    ages.push(new Array(100));
}
ages = null;