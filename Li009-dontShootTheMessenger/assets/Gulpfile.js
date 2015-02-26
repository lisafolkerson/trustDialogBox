 var gulp = require('gulp');
 var sass = require( 'gulp-sass' );


 gulp.task( 'styles', function(){
 	gulp.src( './styles.scss' )
 	.pipe(sass())
 	.pipe(gulp.dest( './css' ))
 }); // end gulp.task(styles)

 
 gulp.task( 'watch', function(){ 	
	gulp.watch( './styles.scss', [ 'styles' ]);
 }); //end gulp.task(watch)