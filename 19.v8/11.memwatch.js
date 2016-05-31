var memwatch = require('memwatch-next');
var util = require('util');
/**
 * 泄露事件发射器
 * 连接5次垃圾回收后，内存仍然没有释放，则会触发此事件
 * leak 事件
 */
memwatch.on('leak',function(info){
    console.log('leak:',info);
});
/**
 * 状态事件发射器
 * 每当全堆垃圾 收集的时候，会触发stats事件
 * 这个事件会传递内存的统计信息
 *stats: { num_full_gc: 1, 第几次全垃圾回收
  num_inc_gc: 7, 第几次增量GC
  heap_compactions: 1, 第几次对老生代进行整理
  usage_trend: 0, 使用趋势
  estimated_base: 6959728, 预估基数
  current_base: 6959728, 当前基数
  min: 0, 最小量
  max: 0 }最大量
 */
memwatch.on('stats',function(stats){
    console.log('stats:',stats);
});

var http = require('http');
var leakArray = [];
var hd = new memwatch.HeapDiff();//堆的差异
var count  = 0;
/**
 * { before: { nodes: 24296, size_bytes: 3706808, size: '3.54 mb' },
  after: { nodes: 41128, size_bytes: 5729386, size: '5.46 mb' },
  change:
   { size_bytes: 2022578,
     size: '1.93 mb', //变化的内存
     freed_nodes: 2562,// 释放 回收的对象数量
     allocated_nodes: 19394,//新分配的数量
     details:
      [ { what: 'Array',//哪种类型
          size_bytes: 866520,
          size: '846.21 kb',
          '+': 4387,
          '-': 1405 },
 */
http.createServer(function (req,res) {
    leakArray.push(Math.random()+"");
    res.end('hello');
    if(count++==10000){
        var diff = hd.end();
        console.log(util.inspect(diff,{depth:10}));
    }
}).listen(8080);

var s = {p:{p:{p:{p:'person'}}}}
//1 {p:{Object}}
//2 {p:{p:{Object}}}