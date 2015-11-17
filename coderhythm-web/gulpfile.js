/**
 * Gulp config
 */

var gulp = require('gulp');

var paths = {
    scripts: 'app/**/*.js',
    styles: ['./app/**/*.css'],
    images: ['./app/**/*.png'],
    index: './app/index.html',
    views: ['app/**/*.html', '!app/index.html'],
    dist: './dist',
    distProd: './dist.prod',
    distScripts: './dist',
    scriptsDevServer: 'devServer/**/*.js'
};

// Copy all other files to dist directly
gulp.task('copy', function() {
    // Copy html
    gulp.src(paths.views)
        .pipe(gulp.dest(paths.dist));

    // copy index.html
    gulp.src(paths.index)
        .pipe(gulp.dest(paths.dist));

    // copy scripts
    gulp.src(paths.scripts)
        .pipe(gulp.dest(paths.dist));

    // copy styles
    gulp.src(paths.styles)
        .pipe(gulp.dest(paths.dist));

    // copy images
    gulp.src(paths.images)
        .pipe(gulp.dest(paths.dist));
});

gulp.task('default', function(){
    gulp.src(paths.scripts.concat(paths.html))
        .pipe(gulp.dest(paths.dist));
});


