let path=require("path");

module.exports ={
    entry:'./src/index.js',//入口
    output:{//出口
        //文件名
        filename:"build.js",
        //路径必须上绝对路径
        path:path.resolve("./dist")
    },
    devServer:{},//开发服务器
    module://模块配置
    {

    },
    plugins:[//插件

    ],
    mode:"development",
    resolve:{
        
    }
}