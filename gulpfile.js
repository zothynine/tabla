var gulp = require('gulp'),
    jslint = require('gulp-jslint'),
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
  gulp.src('./client/css/*.css').
    pipe(connect.reload());
});

gulp.task('jslint', function() {
    return gulp.src('./client/js/*.js')
            .pipe(jslint({
                reporter: function(evt) {
                    console.log('\n');
                    if (evt.pass) {
                        console.log(('JSLINT: NO ERRORS FOUND').green);
                    } else {
                        console.log(('JSLINT ERRORS:'.red));
                        for (var i = 0; i < evt.errors.length; i++) {
                            console.error((evt.errors[i].line+':'+evt.errors[i].character).red, (evt.errors[i].reason).red);
                        }
                        console.log('\n');
                    }
                }
            }));
});

gulp.task('watch', function() {
  gulp.watch('./client/js/*.js', ['jslint']);
  gulp.watch('./client/*.html', ['html']);
  gulp.watch('./client/css/*.css', ['css']);
});

gulp.task('default', ['connect', 'watch']);

