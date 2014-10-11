var gulp = require('gulp'),
    jslint = require('gulp-jslint');

gulp.task('jslint', function() {
    return gulp.src('client/js/*.js')
            .pipe(jslint());
});

gulp.task('watch', function() {
    gulp.watch('client/js/*.js', ['jslint']);
});

gulp.task('default', ['watch']);

