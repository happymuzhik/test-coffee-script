const gulp = require('gulp');
const plumber = require('gulp-plumber');
const coffee = require('gulp-coffee');
const livereload = require('gulp-livereload');
const run_server = require('./server');
    
gulp.task('server', function(done) {
    run_server();
});

gulp.task('coffee', function() {
    gulp.src('./src/*.coffee')
        .pipe(plumber())
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest('./public/js'))
        .pipe(livereload());
});

gulp.task('default', ['coffee', 'server'], function() {
    livereload.listen();
	gulp.watch('./src/*.coffee', ['coffee']);
});