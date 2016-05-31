var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var connect = require('gulp-connect');
var concat = require('gulp-concat');

gulp.task('concatScript',function(){
    return gulp.src(['./app/scripts/*.js']).pipe(concat('join.js'))
        .pipe(gulp.dest('dist/scripts'));
});
/**
 *实时预览
 */
gulp.task('server',function(){
    connect.server({
        root:'dist',//设置文件根目录
        port:8080,//设置端口
        livereload:true//动态加载，实时刷新
    });
});
gulp.task('copyHtml',function(){
    return gulp.src('./app/*.html')
        .pipe(gulp.dest('dist')).pipe(connect.reload());
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
gulp.task('default',['server','watch']);
//gulp.task('default',['copyHtml','copyImage','copyScripts']);

