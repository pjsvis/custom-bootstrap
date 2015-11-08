// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var debug = require('gulp-debug');
var inject = require('gulp-inject');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');

gulp.task('bootstrap', function () {
    return gulp.src('custom/custom-bootstrap.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('custom'))
        .pipe(gulp.dest('custom'));
});

// Lint all custom TypeScript files.
gulp.task('ts-lint', function () {
    return gulp.src('app/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

// Compile TypeScript and include references to library and app .d.ts files.
gulp.task('compile-ts', function () {

    return gulp.src('app/app.ts')
        .pipe(tsc({
            noImplicitAny: true,
            out: 'build.js'
        }))
        .pipe(gulp.dest('app'))
});

// NOTE: We do the watching from VSC
// Watch for file changes
// gulp.task('watch', function() {
//     gulp.watch([config.allTypeScript], ['bootstrap', 'ts-lint', 'compile-ts']);
// });

gulp.task('default', ['bootstrap', 'compile-ts']);
//gulp.task('default', ['bootstrap', 'ts-lint', 'compile-ts']);



