const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css () {
    return gulp
        .src('SCSS/app.scss') //Donde va a encontrar el archivo
        .pipe(autoprefixer()) //Que utilice autoprefixer
        .pipe(sass({outputStyle: 'expanded'})) // Como queremos que guarde el codigo
        .pipe(gulp.dest('css')) //Y donde debe guardar el codigo
}

function WatchArchivos () {
    gulp.watch('SCSS/*.scss', css);
    gulp.watch('index.html');
}

gulp.task('css', css);
gulp.task('watch', gulp.parallel(WatchArchivos));