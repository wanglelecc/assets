# Web开发骨架

### 描述
Web 应用骨架（基于Webpack），从Laravel 5.4中提取 
也可以参考 [ Laravel Mix ](https://d.laravel-china.org/docs/5.4/mix)  的使用文档

### 安装
```javascript
npm install
```

### 目录介绍
``` javascript
|--src  源文件目录
|--|--js JS文件目录
|--|--sass Sass 文件目录
|--dist   编译后的资源目录
|--|--css 编译后的CSS目录
|--|--js  编译后的JS目录
```

### 使用
```javascript
// 运行所有 Mix 任务...
npm run dev

// 运行所有 Mix 任务和压缩资源输出
npm run production

// 监控资源文件修改
npm run watch
```

### 使用样式
```javascript

// less 方法可以让你将 Less 编译为 CSS。下面的命令可以把 app.less 编译为 public/css/app.css。
mix.less('resources/assets/less/app.less', 'public/css');

// 多次调用 less 方法可以编译多个文件:
mix.less('resources/assets/less/app.less', 'public/css')
   .less('resources/assets/less/admin.less', 'public/css');

// 如果你想自定义编译后的 CSS 文件名, 你可以传递一个完整的路径到 less 方法的第二个参数:
mix.less('resources/assets/less/app.less', 'public/stylesheets/styles.css');   

// Sass 方法可以让你将 Sass 编译为 CSS。你可以使用此方法：
mix.sass('resources/assets/sass/app.scss', 'public/css');

// 同样的，如同 less 方法, 你可以将多个 Sass 文件编译为多个 CSS 文件，甚至可以自定义生成的 CSS 的输出目录：
mix.sass('resources/assets/sass/app.sass', 'public/css')
   .sass('resources/assets/sass/admin.sass', 'public/css/admin');

// 如果你只是想将一些纯 CSS 样式合并成单个的文件, 你可以使用 styles 方法。
mix.styles([
    'public/css/vendor/normalize.css',
    'public/css/vendor/videojs.css'
], 'public/css/all.css');

// 原生 JS
mix.scripts([
    'public/js/admin.js',
    'public/js/dashboard.js'
], 'public/js/all.js');
```

> 更多使用方法请查阅 [ Laravel Mix ](https://d.laravel-china.org/docs/5.4/mix) 相关文档。