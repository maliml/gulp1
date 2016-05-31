//console.log(global);//全局对象 地球

/*
setTimeout(function(){
    console.log('welcome');
},1000);*/

console.log(__dirname);//目录 名
console.log(__filename);//文件的绝对路径
//当前进程 current working direcotry
console.log(process.cwd());
process.chdir('..');//change directory 修改目录
console.log(process.cwd());
//非阻塞IO 异步 单线程
//事件
//bind
/*process.stdin.on('data',function(data){
    console.log(data.toString());
    process.stdout.write(data.toString());
});*/
// Buffer 缓存区

process.argv.forEach(function(x){
    console.log(x);
});
