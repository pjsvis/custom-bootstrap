// Less configuration
var combiner = require('stream-combiner2');
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('default', function() {
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

// Let VS Code do the watching as gulp exits on error
gulp.task('less-watch', function() {
    gulp.watch('custom/*.less', ['less']);
})