var gulp = require('gulp');
var uglify = require('gulp-uglify'); // 压缩
var minifyCss = require('gulp-minify-css');
var stripDebug = require('gulp-strip-debug'); // 该插件用来去掉console和debugger语句
var useref = require('gulp-useref');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var paths = {
  js: [//js 目录
    'admin/*',
    'bin/*',
    'common/*',
    'config/*',
    'routes/*',
    'services/*',
    'test/*',
    'tests/*'
  ],
  css:[
      'public/css/*'
  ],
  img:[
    'public/img/*'
  ]
};

gulp.task('default', function () {
  // 将你的默认的任务代码放在这


});

var output = "./dist/"; // output

/* 开发环境 */
gulp.task('develop', function() {
  gulp.src(paths.js)
      .pipe(gulp.dest(output + '/js'));

  gulp.src(paths.css)
      .pipe(gulp.dest(output + '/css'));

  gulp.src(paths.img)
      .pipe(gulp.dest(output + '/images'));

});

