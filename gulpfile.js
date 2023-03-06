var gulp = require('gulp');
var browserSync = require('browser-sync').create();

function myTask(cb) {

    
    gulp.task('browser-sync', function() {
        browserSync.init({
            server: {
                baseDir: "./"
            }
        });
        
        gulp.watch("*.html").on("change", reload);
        
    });
}


  
exports.default = myTask