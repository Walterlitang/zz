const path = require("path");
//引入eslint插件
const ESLintPlugin=require("eslint-webpack-plugin");

module.exports = {
    //文件入口
    entry: "./src/main.js",
    //文件的输出路径
    output: {
        path: path.resolve(__dirname, "dist"),//文件路径
        filename: "js/main.js"//文件名
    },
    //加载器
    module: {
        rules: [
            //loader配置
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.styl$/,
                use: ["style-loader", "css-loader", "stylus-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    }
                },
                generator: {
                    //图片输出的路径名字
                    filename: "static/images/[hash][ext][query]",
                }
            },
            {
                test: /\.ttf$/,
                type: "asset/resource",//表示只加载资源不做其他处理，不会转换成base64的格式
                generator: {
                    //图片输出的路径名字
                    filename: "static/media/[hash][ext]",
                }
            }
        ]
    },
    //插件
    plugins: [
        //plugin配置
        new ESLintPlugin({
            context:path.resolve(__dirname,"src")
        })
    ],
    //模式
    mode: "development"
}