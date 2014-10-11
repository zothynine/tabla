var gulp = require('gulp'),
    jslint = require('gulp-jslint');

gulp.task('jslint', function() {
    return gulp.src('client/js/*.js')
            .pipe(jslint({
                node: true,
                evil: true,
                nomen: true,
                errorsOnly: false
            }))
            .on('error', function(error) {
                console.error(String(error));
            });
});

gulp.task('watch', function() {
    gulp.watch('client/js/*.js', ['jslint']);
});

gulp.task('default', ['watch']);
