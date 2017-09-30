const gulp = require('gulp')
const bump = require('gulp-bump')
const zip = require('gulp-zip')
const gutil = require('gulp-util')

gulp.task('default', function () {
  console.log('test')
})

gulp.task('bump', () => gulp.src(['./package.json'])
  .pipe(bump({ type: 'patch' }).on('error', gutil.log))
  .pipe(gulp.dest('./'))
)

gulp.task('zip', () => {
  const pkg = require('./package.json')
  return gulp.src('./**')
    .pipe(zip(pkg.name + '-' + pkg.version + '.zip'))
    .pipe(gulp.dest('../dist'))
})
