gulp = require "gulp"
$ = do require "gulp-load-plugins"
del = require "del"
runSequence = require "run-sequence"

gulp.task "init", -> runSequence "clean", "bower"

gulp.task "clean", del.bind null, ["bower_components", "bundle.js*"]

gulp.task "bower", -> $.bower().pipe gulp.dest "bower_components"

gulp.task "watchify", $.watchify (watchify) ->
  buffer = require "vinyl-buffer"
  formatter = require "pretty-hrtime"
  time = process.hrtime()

  destFile = "bundle.js"

  return gulp.src "./src/app.js"
             .pipe $.plumber()
             .pipe watchify
                watch: true
                basedir: "./"
                debug: true
                transform: ["babelify"]
             .pipe buffer()
             .pipe $.sourcemaps.init
                loadMaps: true
             .pipe $.rename destFile
             .pipe $.sourcemaps.write "."
             .pipe gulp.dest "./"
             .on "end", ->
               taskTime = formatter process.hrtime time
               $.util.log "Bundled", $.util.colors.green(destFile), "in", $.util.colors.magenta(taskTime)

gulp.task "serve", ->
  electron = require("electron-connect").server.create()
  electron.start()
  gulp.watch "main.js", electron.restart
  gulp.watch ["index.html", "bundle.js"], electron.reload

gulp.task "watch", (done) -> runSequence ["watchify", "serve"], done
