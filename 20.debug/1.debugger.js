/**
 * node 内建了调试协议客户端。
 * 启动的时候带上debug参数就可以实现调试了
 *
 * 1.调试前，需要通过debugger在代码中设置断点，执行时会中断
 * 2.在node中开启调试功能
 * 3.用内建的客户端与V8建立连接
 * */

var a = 1;
setTimeout(function(){
    debugger;
    console.log('world');
},1000);
console.log('hello');