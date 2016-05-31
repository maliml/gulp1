/**
 * {
 * rss: 16,154,624, 进程的常驻内存 16M 7M不属于堆内存
 * heapTotal: 9,751,808,  V8已经申请到的堆内存总量 9M
 * heapUsed: 3,952,576 } V8已经使用的堆内存总量 3M
 */
console.log(process.memoryUsage());