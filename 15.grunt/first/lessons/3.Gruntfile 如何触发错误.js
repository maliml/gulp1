/**
 * 如何触发警告和致命错误
 * @param grunt
 */

module.exports = function(grunt){
 grunt.registerTask('interview',function(status){
    if(status == 'has_boy'){
        //用C语言写个红黑树
        grunt.warn('write a red-black tree with c');
    }else if(status == 'married'){
        //用汇编写个红黑树
        grunt.fatal('write a red-black tree with assembly langular');
    }else{
        //用word文档写个hello world
        grunt.log.writeln('write hello world with word');
    }
    grunt.log.write('you have been accepted');//你来上班吧
 });
}