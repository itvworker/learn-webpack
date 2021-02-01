const { Compiler } = require("webpack");

class TestPlugin {
    constructor(content){
      console.log('webpack');
      console.log(content);
    }
    // 将 `apply` 定义为其原型方法，此方法以 compiler 作为参数
    apply(compiler) {
      // 指定要附加到的事件钩子函数
      // console.log(compiler);
      // compiler.hooks.emit.tapAsync(
      //   'TestPlugin',
      //   (compilation, callback) => {
      //     console.log('This is an example plugin!');
      //     console.log('Here’s the `compilation` object which represents a single build of assets:', compilation);
          
        
      //     callback();x
      //   }
      // );
      // compiler.options.module.rules.push({ test: /\.(css)$/, loader: 'css-loader' })
   
      // console.log(compiler.options);
      
      // compiler.hooks.entryOption.tapAsync('TestPlugin',(arg, callback)=>{
      //   console.log('-----------------------');
      //   console.log(arguments);
      //   callback()
      // })
      
 
      
    }

    
  }

  module.exports = TestPlugin;