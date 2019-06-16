const gulp = require("gulp");
const ts = require("gulp-typescript");
const nodemon = require('gulp-nodemon')
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');


const tsProject = ts.createProject("tsconfig.json", { noImplicitAny: true });

// 默认任务
gulp.task("default", ["copy", "compile", "watch"], function () {
    console.log('started .....')
})

// 复制配置文件
gulp.task('copy', function () {
    return gulp.src("./src/config/**/*.json")
        .pipe(gulp.dest("./dist/config"))     
})

// 编译
gulp.task("compile", function () {
    return gulp.src("./src/**/*.ts")
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(tsProject())
        .js
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest("dist"));
})

gulp.task('build',['compile','copy'])


// 删除
gulp.task('del', function (cb) {
    return del([
        'dist/**',
    ], cb);
});

// 监听变化
gulp.task('watch', ['compile'], function (done) {
    var stream = nodemon({
        script: 'dist/app.js',
        watch: 'src/**',
        tasks: ['copy', 'compile'],
        done: done,
        ext: 'ts html json'
    })
    return stream
})