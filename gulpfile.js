// GULP = Needed for SASS, not readable in current version browsers, meaning we can write
// in SCSS, CSS preprosser, CSS with a tree structure and allow code to be cleaner and more 
// efficient. Needs to be compiled and minified for efficiency as previously said no browser
// supports the SCSS library

'use strict';

//Dependencies
//Calling dependancies that are required
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


//SCSS  - CSS
// Variables containting input and output path for sass and css

var SCSS_SRC ='./src/Assets/scss/**/*.scss';
var SCSS_DEST ='./src/Assets/css';

//Compile SCSS
// Pipe = allows us to chain tasks together in GULP
gulp.task('compile_scss', function() {
  
  gulp.src(SCSS_SRC) // compiling
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS()) // minifing
  .pipe(rename({ suffix: '.min'}))
  .pipe(changed(SCSS_DEST)) // only affecting changed files
  .pipe(gulp.dest(SCSS_DEST)); // outputing


});

//Detect changes in SCSS
//watches stream, and when change detected it will run a function, function here is compile
// which is an array 
gulp.task('watch_scss', function(){
	gulp.watch(SCSS_SRC,['compile_scss']);
});


//Run tasks
gulp.task('default', ['watch_scss']);