var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('styles', function() {
    return gulp.src('/src/Css/style.scss')
        .pipe(postcss([]))
        .pipe(gulp.dest(path / to / prod))
});