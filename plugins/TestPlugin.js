class TestPlugin {
    // 将 `apply` 定义为其原型方法，此方法以 compiler 作为参数
    apply(compiler) {
      // 指定要附加到的事件钩子函数
      // console.log(compiler);
      // compiler.hooks.emit.tapAsync(
      //   'TestPlugin',
      //   (compilation, callback) => {
      //     console.log('This is an example plugin!');
      //     console.log('Here’s the `compilation` object which represents a single build of assets:', compilation);
          
         
          
      //     callback();
      //   }
      // );
    
      

     
      console.log( Object.keys(compiler.hooks.entryOption));
      
    }

    
  }

  module.exports = TestPlugin;