const gulp = require('gulp');
const plumber = require('gulp-plumber');
const coffee = require('gulp-coffee');
const livereload = require('gulp-livereload');

gulp.task('coffee', function() {
    gulp.src('./src/*.coffee')
        .pipe(plumber())
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest('./public/'))
        .pipe(livereload());
});

gulp.task('watch', ['coffee'], function() {
    livereload.listen();
	gulp.watch('./src/*.coffee',['coffee']);
});