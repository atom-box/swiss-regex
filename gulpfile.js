let gulp = require('gulp'), watch = require('gulp-watch');

gulp.task('default', function(){console.log`yipee yahoo wow.`});
gulp.task('html',  ()=>{console.log("Rent the tandem..");});
gulp.task('watch', function() {
	watch('./index.html', ()=>{
		gulp.start('html');
	});
});