export const audio = () => {
    return app.gulp.src(app.path.src.audio)
        .pipe(app.gulp.dest(app.path.build.audio))
        .pipe(app.plugins.browsersync.stream());
}