var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
return gulp.src('scss/**/*.scss')
.pipe(sourcemaps.init())
.pipe(sass({
  outputStyle: 'expanded'
}))
.pipe(sourcemaps.write('.'))
.pipe(gulp.dest('css'))
.pipe(gulp.dest('css'))
});

gulp.task('autoprefixer', function() {
return gulp.src('css/base.css')
.pipe(autoprefixer ({
  browsers: ['last 2 versions'],
  cascade: false
}))
.pipe(gulp.dest('css'))
});