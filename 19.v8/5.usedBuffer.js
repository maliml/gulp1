/**
 * rss: 16,150,528, 进程的常驻内存
 * heapTotal: 9,751,808 V8申请到的堆内存
 * heapUsed: 3,953,032 V8使用的堆内存
 * RSS 内存交换区 swap 文件系统  filesystem
 */
console.log(process.memoryUsage());

var showMemory = function(){
    var mem = process.memoryUsage();
    var format = function(bytes){
        return (bytes/1024/1024).toFixed(2)+'MB';
    }
    console.log('heapTotal:'+format(mem.heapTotal),'heapUsed:'+format(mem.heapUsed),'rss:'+format(mem.rss));
}
showMemory();

function useMem(){
    var size = 100*1024*1024;
    var arr = new Buffer(size);
    for(var i=0;i<size;i++){
        arr[i] = 0;
    }
    return arr;
}
var total = [];
for(j=0;j<20;j++){
    total.push(useMem());
    showMemory();
}
