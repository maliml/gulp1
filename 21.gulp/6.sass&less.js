var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
/**
 * 拷贝多个文件
 * pipe 管道
 * ** 匹配任何字符，包括路径分隔符
 * ! 表示拒绝匹配，排除文件
 *
 */
gulp.task('copyHtml',function(){
    return gulp.src('./app/*.html')
        .pipe(gulp.dest('dist'));
});
gulp.task('watch',function(){
    gulp.watch('./app/*.html',['copyHtml']);
});

gulp.task('copyImage',function(){
    return gulp.src('./app/images/**/*.bmp')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('copyScripts',function(){
    return gulp.src(['./app/scripts/*.js','!./app/scripts/page.js'])
        .pipe(gulp.dest('dist/scripts'));
});
gulp.task('sass',function(){
    return gulp.src('app/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('less',function(){
    return gulp.src('app/styles/page.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('default',['copyHtml','copyImage','copyScripts']);

