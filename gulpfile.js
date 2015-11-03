// Less configuration
var plumber = require('gulp-plumber');
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
        gulp.src('custom/custom-bootstrap.less')
        .pipe(plumber({
           handleError: function (err) {
            console.log(err);
            this.emit('end');
        }
        }))
            .pipe(less())
            .pipe(gulp.dest(function (f) {
                return f.base;
            }))        
});

// Let VS Code do the watching as gulp exits on error
gulp.task('default', function() {
     gulp.watch('custom/*.less', ['less']);
     return gulp.on('error', console.error.bind(console));
    // return gulp;
})