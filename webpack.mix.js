let mix = require('laravel-mix')
require('laravel-mix-imagemin')

if (!mix.inProduction()) {
    mix
        .browserSync({
            proxy: 'http://127.0.0.1:9292',
            files: [
                'src/**/*',
                'layout/**/*',
                'sections/**/*',
                'snippets/**/*',
                'templates/**/*',
            ]
        })
        .webpackConfig({devtool: "inline-source-map"}).sourceMaps()
}

mix
    .setPublicPath('assets')
    .js('src/js/app.js', 'assets/')
    .postCss('src/css/style.css', 'assets/')
    .imagemin('*', {
        context: 'src/images'
    })