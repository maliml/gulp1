#debugger
node内建了调试协议客户端,启动的时候带上debug参数就可以实现调试了
#如何启动
node debug debug.js
#内置命令
help可以查看所有的命令
run (r) 运行此脚本
kill 停止此脚本
cont (c) 继续执行，直到下一个断点为止
next (n) 单点执行
step (s) 单点执行并且进入函数
out (o) 从函数中退出
backtrace (bt), 输出当前的堆栈
breakpoints 输出当前的所有断点
setBreakpoint (sb) 设置断点
clearBreakpoint (cb) 清除断点
watch(expr) 添加表达式到观察列表，进行观察
unwatch 从观察列表里移除对表达式的观察
watchers 列出所有的观察式和它们值
repl 实时交互环境 read eval print loop
restart 重启程序
list(num) 列出当前上下文前后num行的数据
scripts 列出当前加载的脚本
breakOnException 是否在异步发生时断住
version V8版本号
