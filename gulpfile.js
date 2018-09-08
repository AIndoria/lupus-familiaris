let gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer");
nested = require("postcss-nested");

gulp.task("default", function(){
  console.log("running gulp...");
});

gulp.task("styles", function(){
  return gulp.src("./assets/styles/styles.css")
  .pipe(postcss([nested, autoprefixer]))
  .pipe(gulp.dest("./assets/styles/final/"));
});

gulp.task("watch", function(){
  watch("./assets/styles/*.css", function(){
    gulp.start("styles");
  });
});