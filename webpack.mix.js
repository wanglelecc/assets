const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// mix.setPublicPath('public');

mix.setPublicPath('public').options({
    fileLoaderDirs: {
        images: 'images',
        fonts: 'fonts'
    }
});

mix.js('src/js/app.js', 'js')
    .sass('src/sass/app.scss', 'css')
    .copyDirectory('src/images', 'public/images')
;

mix.browserSync({
    port: 5000,
    proxy: 'assets.56br.cc', // 这里修改成当前项目域名
    // 这里配置监控目录，只要符合规则的文件被修改，会立即发布资源并刷新页面（只有在 npm run watch 模式下哦）
    files: [
        'public/**/*.html',
		'src/js/**/*.js',
		'src/sass/**/*.sass'
    ]
});

mix.disableNotifications();