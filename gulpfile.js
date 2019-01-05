let gulp = require('gulp'), watch = require('gulp-watch');

gulp.task('default', function(){console.log`yipee yahoo wow.`});
gulp.task('html',  ()=>{console.log("Rent the tandem..");});
gulp.task('styles',  ()=>{
	console.log("Imagine STYLE tasks running here.");
	return gulp.src('./styles/figFlood.css').pipe(gulp.dest('./styles/temp.css'));
	;
	// see Udemy 4--12 or tutorialNotes
});



gulp.task('watch', function() {
	watch('./index.html', ()=>{
		gulp.start('html');
	});
	watch('./styles/**/*.css', ()=>{gulp.start('styles')}
});