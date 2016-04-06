var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
     gulp.src('./app/assets/sass/screen.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/assets/css'));
});