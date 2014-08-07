var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify');	


gulp.task('styles', function() {
	return gulp.src('src/assets/styles/*.css')
		.pipe(autoprefixer(['last 3 versions'], { cascade: true }))
		.pipe(gulp.dest('dist/assets/styles'));
		//.pipe(notify({ message: 'Styles task complete!'}));
});

gulp.task('move-markdown', function() {
	return gulp.src('src/*.php')
		.pipe(gulp.dest('dist'));
		//.pipe(notify({ message: 'Moved markdown!'}));
});

gulp.task('images', function() {
	return gulp.src('src/assets/imgs/**')
		.pipe(gulp.dest('dist/assets/imgs'));
		//.pipe(notify({ message: 'Images task complete!'}));
});

gulp.task('js', function() {
	return gulp.src('src/assets/js/**')
		.pipe(gulp.dest('dist/assets/js'));
		//.pipe(notify({ message: 'JS task complete!'}));
});

gulp.task('watch', function() {
	gulp.watch('src/assets/styles/*.css', ['styles']);
	gulp.watch('src/**/*.php', ['move-markdown']);
	gulp.watch('src/assets/imgs/**', ['images']);
	gulp.watch('src/assets/js/**', ['js']);
});

gulp.task('default', function() {
	gulp.start('watch', 'styles', 'move-markdown', 'js', 'images');
});

