const { mix } = require('laravel-mix')

mix.js('src/index.js', 'dist/print.min_v1.0.47.2.js').styles('src/css/print.css', 'dist/print.min_v1.0.47.2.css')

mix.webpackConfig({
  output: {
    library: 'print-js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
})
