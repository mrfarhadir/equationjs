var gulp = require('gulp');
var Jasmine = require('jasmine');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jasmine = new Jasmine();

function defaultTask(done) {
    // place code for your default task here
  done();
}

function copy(done) {
    gulp.src('./src/*.js')
    .pipe(gulp.dest('./dist/'))
    done()
}

function unitTests(done) {
    jasmine.loadConfigFile('spec/support/jasmine.json');
    jasmine.configureDefaultReporter({
        // The `timer` passed to the reporter will determine the mechanism for seeing how long the suite takes to run.
        timer: new jasmine.jasmine.Timer(),
        // The `print` function passed the reporter will be called to print its results.
        print: function() {
            process.stdout.write(arguments);
        },
        // `showColors` determines whether or not the reporter should use ANSI color codes.
        showColors: true
    });
    jasmine.execute()
    done()
}

function minify(done) {
    gulp.src('./dist/*.js')
       .pipe(uglify())
       .pipe(rename({
            suffix: '.min'
        }))
       .pipe(gulp.dest('dist/'))
    done()
}
 
gulp.task('minify', minify);
gulp.task('unitTests', unitTests)
gulp.task('default', defaultTask);
gulp.task('copy', copy);
