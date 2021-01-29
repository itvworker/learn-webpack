const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js');

webpack(webpackConfig, (err, stats) => {
   
    // console.log(err)
    // console.log(stats)
})
