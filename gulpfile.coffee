gulp = require "gulp"
$ = do require "gulp-load-plugins"
del = require "del"
runSequence = require "run-sequence"

gulp.task "init", ->
  return runSequence "clean", "bower"

gulp.task "clean", del.bind null, ["bower_components"]

gulp.task "bower", ->
  return $.bower().pipe gulp.dest "bower_components"
