var gulp = require('gulp');
/**
 * 拷贝多个文件
 * pipe 管道
 * ** 匹配任何字符，包括路径分隔符
 */
gulp.task('copyImage',function(){
 // return gulp.src('./app/images/*.jpg')
 //     .pipe(gulp.dest('dist/images'));

  //  return gulp.src('./app/images/*.{jpg,png}')
  //      .pipe(gulp.dest('dist/images'));

    return gulp.src('./app/images/**/*.bmp')
        .pipe(gulp.dest('dist/images'));
});

