var gulp = require('gulp'),
    jslint = require('gulp-jslint');

gulp.task('jslint', function() {
    return gulp.src('client/js/*.js')
            .pipe(jslint({
                reporter: function(evt) {
                    console.log('\n');
                    for (var i = 0; i < evt.errors.length; i++) {
                        console.error((evt.errors[i].line+':'+evt.errors[i].character).red, (evt.errors[i].reason).red, (evt.errors[i].evidence).red);
                    }
                    console.log('\n');
                }
            }));
});

gulp.task('watch', function() {
    gulp.watch('client/js/*.js', ['jslint']);
});

gulp.task('default', ['watch']);

