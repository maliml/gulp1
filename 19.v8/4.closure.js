/**
 * 闭包
 *
 */

var school = function(){
    var name = '北京大学';
    (function(){
        //console.log(name);
    })();
}
school();

var school = function(){
    (function(){
        var name = '北京大学';
    })();
    //console.log(name);
}
school();

/**
 * 外部不能访问内部定义的变量
 * 闭包可以实现外部作用域访问内部作用域的变量或方法
 * 一般情况，city是局部变量，应该销毁
 * 但由于返回一个匿名函数，具备了访问city的能力
 * 所以无法回收的情况分为二种 一种全局 一种是闭包
 *
 *
 */
function City(name){
    this.name = name;
    this.age = 0;
}

var CityFactory = function(name){
    var city = new City(name);
    return function(){
        return city;
    }
}
var beijing = CityFactory('北京');
console.log(beijing());
