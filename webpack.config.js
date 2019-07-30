const path=require('path')


module.exports={
    entry: {
        index:path.resolve(__dirname,'lib/index.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        library: "WatcherPagePV",
        libraryTarget: "umd",
        filename: "[name].js",
        auxiliaryComment: "WatcherPagePV",
        libraryExport: "default",
    },
    module:{
        rules: [
            // 'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入。
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/transform-runtime']
                    }
                }
            }
        ]
    }
}