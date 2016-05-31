/**
 * 定义和传递配置参数
 * @param grunt
 */

module.exports = function(grunt){
  //初始化配置信息，可以定义属性和值
   grunt.initConfig({
        say:{
            words:'hello'
        }
   });

    grunt.registerTask('say',function(){
        var words = grunt.config.get('say.words');
        
    });

}