var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'client',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('./client/*.html')
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src('./client/css/*.css')
        .pipe(connect.reload());
});

gulp.task('javascript', function() {
    gulp.src('./client/js/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['./client/*.html'], ['html']);
    gulp.watch(['./client/css/*.css'], ['css']);
    gulp.watch(['./client/js/*.js'], ['javascript']);
});

gulp.task('default', ['connect', 'watch']);
