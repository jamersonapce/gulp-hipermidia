const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const htmlReplace = require('gulp-html-replace');
const uglify = require('gulp-uglify');


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
        'src/css/global.css',
        'src/css/video.css',
        'src/css/section.css',
        'src/css/footer.css'])
        .pipe(concat('site.css') )
        .pipe(cleanCSS() )
        .pipe(gulp.dest('dist/css') );
});

gulp.task('html-replace', function() {
    gulp.src('src/**/*.html')
        .pipe(htmlReplace({css:'css/site.css'}) )
        .pipe(gulp.dest('dist') );
});

gulp.task('merge-js', function() {
    gulp.src(['src/js/jquery-3.3.1.min.js',
        'src/js/jquery.mb.YTPlayer.js',
        'src/js/global.js'])
        .pipe(concat('site.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});