module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: 'entry',
                targets: {
                    chrome: '58',
                    ie: '11',
                },
            },
        ],
    ],
    // plugins: ['@babel/plugin-syntax-dynamic-import'],
    plugins: [
        'babel-plugin-remove-vconsole',
        '@babel/plugin-syntax-dynamic-import',
         ['babel-plugin-import-replace-variable',{
            production:{
                api: 'api.pro'
            },
            test:{
                api: 'api.dev'
            },
            development:{
                api: 'api.dev'
            }
         }],
         "./src/cordova/babel-plugin/index"
    ],
}

