/*
 * 为了加快模块的载入速度，所有模块都会缓存
 * 缓存的是每个模块的exports对象
 * 而且exports能够访问模块内部的私有变化
 * 所以内部变量也会常驻老生代，不能释放
 *
 */
var leakArray  = [];
exports.leak = function(num){
    leakArray.push(num);
}
exports.clear = function(){
    leakArray = [];
}