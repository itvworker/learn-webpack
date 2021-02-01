let loaderUtils = require('loader-utils');
module.exports = function (source) {
    // const options = loaderUtils.getOptions(this)
    let opt = loaderUtils.getOptions(this) 
    let str = ""
    
     if(opt && opt.resources) {
        opt.resources.forEach(element => {
            str +="@import '"+element+"';"
        });
     }
    source =str+source

    console.log(source);
    return source
}