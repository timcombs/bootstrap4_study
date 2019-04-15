// bringing in the modules and storing them in variables
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss',
                   'src/scss/*.scss'])
    .pipe(sass())
    // eslint-disable-next-line quotes
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// move the js files into the src/js folder
gulp.task('js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js',
                   'node_modules/jquery/dist/jquery.min.js',
                   'node_modules/popper.js/dist/umd/popper.min.js'])
    // eslint-disable-next-line quotes
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
});

// static server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

  // launches a localhost: 3000 server
  browserSync.init({
    // eslint-disable-next-line quotes
    server: "./src"
  });

  // when any scss files and any html files are saved this refreshes localhost
  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss',
              'src/scss/*.scss'],
              gulp.series('sass'));
  // eslint-disable-next-line quotes
  gulp.watch("src/*.html").on('change', browserSync.reload);
}));

// typing gulp and hitting enter at the command line will run 
// any gulp.task named default - the tasks run are in the array
gulp.task('default', gulp.parallel('js', 'serve'));