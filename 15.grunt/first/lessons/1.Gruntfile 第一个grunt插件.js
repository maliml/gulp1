//创建一个grunt插件
module.exports = function(grunt){
 grunt.registerTask('default',function(){
    // console.log('hello everyone');
     grunt.log.writeln('hello everyone')
 });
}