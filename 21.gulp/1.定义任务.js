var gulp = require('gulp');
/**
 * 定义一个任务
 * hello  定义
 */
gulp.task('hello',function(){
  console.log('hello');
});

gulp.task('world',function(){
    console.log('world');
});
//定义一个组合任务
gulp.task('default',['hello','world']);

