/**
 * 如何定义组合任务
 * @param grunt
 */

module.exports = function(grunt){
    grunt.registerTask('buy',function(){
        for(var i=0;i<10;i++){
            console.log('buy something');
        }

    });

    grunt.registerTask('cook',function(){
        for(var i=0;i<10;i++){
            console.log('cook something');
        }
    });

    grunt.registerTask('eat',function(){
        for(var i=0;i<10;i++){
            console.log('eat cooked');
        }

    });

 grunt.registerTask('dinner',['buy','cook','eat']);



}