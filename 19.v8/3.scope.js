/**
 * 作用域
 * person 在每次被调用的时候会创建相应的作用域，
 * 执行完成之后，作用域销毁，内部局部活动变量也被销毁
 * 局部变量存活时间较短
 **/
var person = function(){
    var name = {name:'zfpx'};
}
person();

/**
 * 垃圾回收的基本过程
 * 1.标识符查找 就是变量名
 *
 * 单独作用域的形成
 * 函数的调用 with
 */
function say(){
    console.log(name);
}

function first(){
    var name = 'first';
    function second(){
        var name ='second';
        function third(){
            console.log(name);
        }
        third();
    }
    second();
}
first();

/**
 * 变量如何释放
 * 全局变量无法销毁
 * 只能通过delete删除引用或重新赋值
 **/
global.name = 'zfpx';
age = {age:6};
console.log(global.name);
delete global.name;
delete global.age;
age = null;
