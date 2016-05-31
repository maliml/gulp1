/**
 * 如何定会义多任务
 * @param grunt
 */

module.exports = function(grunt){
  //初始化配置信息，可以定义属性和值
   grunt.initConfig({
       eat:{//eat是一个task的名字
            food:'rice',//里面是一个target的名字  目标
            drink:'orange',//
            vegatable:'potato'//
        }
   });

    grunt.registerMultiTask('eat',function(){
        for(var i=0;i<10;i++){
            grunt.log.writeln
            ('I am eating '+i+' of '+this.target+","+this.data);
        }
    });

}