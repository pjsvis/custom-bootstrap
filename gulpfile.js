// Less configuration
var combiner = require('stream-combiner2');
var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');

gulp.task('default', function(){
    gulp.src('custom/custom-bootstrap.less')
    .pipe(less())
    .pipe(gulp.dest('custom'));
});

gulp.task('combined', function() {
  var combined = combiner.obj([
    gulp.src('custom/custom-bootstrap.less'),
    less(),
    gulp.dest('custom')
  ]);

  // any errors in the above streams will get caught
  // by this listener, instead of being thrown:
  combined.on('error', console.error.bind(console));
  return combined;
});



// Let VS Code do the watching as gulp exits on error
gulp.task('less-combined', function() {
     gulp.watch('custom/*.less', ['combined']);
     return gulp.on('error', console.error.bind(console));
     return gulp;
})

