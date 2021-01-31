const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TestPlugin = require('../plugins/TestPlugin')
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode:"production",
    entry: {
        app: ['./src/index.js'],
    },
    output: {
        path: resolve('dist'),
        filename: '[name].[hash:4].js', // [name]打包后的文件名称,进入是什么名字出来也是
        chunkFilename: '[name].[hash].js',
        publicPath: './',
    },
    module: {
        rules: [
            {
                test: /\.(js|ht)$/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), //打包之前清理文件夹
        new TestPlugin({
            name:"webpack"
        })
    ]
}
