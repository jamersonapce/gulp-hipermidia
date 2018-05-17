const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const concat = require('gulp-concat');



gulp.task('copy', ['clean'], function() {

    return gulp.src('src/img/**/*')
        .pipe(gulp.dest('dist/img') );
});

gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build-img', ['copy'], function() {
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('merge-css', function() {
    gulp.src(['dist/css/normalize.min.css',
        'src/css/bootstrap.min.css',
        'src/css/global.css'])
        .pipe(concat('site.css') )
        .pipe(gulp.dest('dist/css') );
}