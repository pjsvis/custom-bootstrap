// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function(){
    return gulp.src('custom/custom-bootstrap.less')
    .pipe(sourcemaps.init())    
    .pipe(less())
    .pipe(sourcemaps.write('custom'))
    .pipe(gulp.dest('custom'));
});



