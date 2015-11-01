// Less configuration
var combiner = require('stream-combiner2');
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    var combined = combiner.obj([
        gulp.src('custom/custom-bootstrap.less')
            .pipe(less())
            .pipe(gulp.dest(function (f) {
                return f.base;
            }))        
    ]);
    combined.on('error', console.error.bind(console));
    return combined;
});

gulp.task('default', function() {
    gulp.watch('custom/*.less', ['less']);
})