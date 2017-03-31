var gulp = require('gulp');
var config = require('./gulp.config')();
var autoprefixer = require('gulp-autoprefixer');
var $ = require('gulp-load-plugins')({lazy: true});
var del = require('del');

gulp.task('styles', function() {
    
    log('Compiling sass --> CSS');

    return gulp
        .src(config.sass)
        .pipe($.sass())
        .pipe($.autoprefixer({browsers: ['last 2 version','> 5%']}))
        .pipe(gulp.dest(config.dest));
});

gulp.task('clean-styles', function(done) {
    var files = config.dest + '/*.css';
    clean(files, done);
});

gulp.task('sass-watcher', function() {
    gulp.watch([config.allsass], ['styles']);
});

////////////

function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path, done);
}

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}