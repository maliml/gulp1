var gulp = require('gulp');
/**
 * 拷贝一个文件
 * pipe 管道
 */
gulp.task('copyHtml',function(){
  return gulp.src('./app/index.html')
      .pipe(gulp.dest('dist'));
});

