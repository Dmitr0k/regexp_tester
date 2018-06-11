var   gulp = require('gulp'),
	browserSync = require("browser-sync").create();

gulp.task("server", function () {
	browserSync.init({
		server: { baseDir: './app/' },
		port: process.env.PORT || 5000, // localhost:5000
	});
      gulp.watch('app/**/*.html').on('change', browserSync.reload);
      gulp.watch('app/**/*.css').on('change', browserSync.reload);
});

// gulp.task('serveprod', function() {
// 	connect.server({
// 	  root: ['./app/'],
// 	  port: process.env.PORT || 5000, // localhost:5000
// 	  livereload: false
// 	});
// 	gulp.watch('app/**/*.html').on('change', browserSync.reload);
//       gulp.watch('app/**/*.css').on('change', browserSync.reload);
//     });

gulp.task('default', ['server']);