/**
 * 如何创建一个文件和删除一个文件
 * @param grunt
 */

module.exports = function(grunt){
    //创建一个目录
    grunt.registerTask('create',function(){
        grunt.file.mkdir('test');
    });

    //删除一个目录
    grunt.registerTask('clean',function(){
        grunt.file.delete('test');
    });

}