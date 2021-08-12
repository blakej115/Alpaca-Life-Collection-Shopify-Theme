let mix = require('laravel-mix');

if (!mix.inProduction()) {
    mix
        .browserSync({
            proxy: 'logistix.lndo.site:49166',
            files: [
                'assets/**/*',
                'layout/**/*',
                'sections/**/*',
                'snippets/**/*',
                'templates/**/*',
            ]
        })
        .webpackConfig({devtool: "inline-source-map"}).sourceMaps()
}

mix
    .setPublicPath('assets/dist')
    .ts('assets/src/js/app.ts', 'assets/dist/js/')
    .postCss('assets/src/css/style.css', 'assets/dist/css/')
    .imagemin('images/*', {
        context: 'assets/src'
    })