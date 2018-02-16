var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    watch = require('gulp-watch'),
    htmlmin = require('gulp-htmlmin'),
    server = require('gulp-server-livereload'),
    concatCss = require('gulp-concat-css'),
    uglify = require('gulp-uglify');


gulp.task('default', function() {

    //js
    gulp.src('src/js/**.js')
        // .pipe(uglify())
        .pipe(gulp.dest('out/js'));

    gulp.src('src/img/**/**')
        .pipe(gulp.dest('out/img'));
    //css

    gulp.src('src/**/*.css')
        // .pipe(concatCss("bundle.css"))
        .pipe(cleanCSS({ compatibility: 'ie10' }))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('out'));



    //html
    gulp.src('src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('out'));
    gulp.src('src/pages/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('out/pages'));

});