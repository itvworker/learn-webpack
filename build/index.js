const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js');

webpack(webpackConfig, (err, stats) => {

    console.log(err);
    console.log('----web-----------');
    console.log(stats.compilation.assets);
    console.log(stats.compilation.errors);
    console.log(stats.compilation.warnings);
    console.log('----web-----------');
    console.log(Object.keys(stats.compilation));
    
})
