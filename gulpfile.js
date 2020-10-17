// 处理css文件
const gulp = require("gulp");
const scss = require("gulp-sass");
const minifyCss = require("gulp-minify-css");
const rename = require(("gulp-rename"));
gulp.task("sassCommon",function(){
    return gulp.src("./stylesheet/common.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("common.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scssAll", function(){
    return gulp.src("stylesheet/*.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

// 处理JS文件
gulp.task("scripts",function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

// 处理HTML文件
gulp.task("copt-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})

// 处理数据
gulp.task("data",function(){
    return gulp.src(["*.json","!package.json","!package-lock.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

// 处理图片
gulp.task("images",function(){
    return gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

// 一次性执行多个任务
gulp.task("build",["sassCommon","scripts","copt-html","data","images","scssAll"],function(){
    console.log("项目成功");
})


// 建立监听
gulp.task("watch",function(){
    gulp.watch("./stylesheet/common.scss",["sassCommon"]);
    gulp.watch("stylesheet/*.scss",["scssAll"]);
    gulp.watch(["*.js","!gulpfile.js"],["scripts"]);
    gulp.watch("*.html",["copt-html"]);
    gulp.watch(["*.json","!package.json","!package-lock.json"],["data"]);
    gulp.watch("images/**/*",["images"]);
})

// 启动一个服务器
const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:5500,
        livereload:true
    })
})

// 启动一个默认的任务
gulp.task("default",["watch","server"]);