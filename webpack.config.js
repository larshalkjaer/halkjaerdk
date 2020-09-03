const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const settings = {
    distPath: path.join(__dirname, "dist"),
    srcPath: path.join(__dirname, "src"),
    publicPath: '/'
};

function srcPathExtend(subpath) {
    return path.join(settings.srcPath, subpath)
}

module.exports = (env, options) => {
    const isDevMode = options.mode === "development";

    return {
        devtool: isDevMode ? "source-map" : false,
        entry: "./src/index.js",
        output: {
            path: settings.distPath,
            filename: "bundle.js",
            publicPath: settings.publicPath
        },
        resolve: {
            extensions: [".js"],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(jpe?g|png|gif|svg|ico)$/i,
                    use: [{loader: "file-loader", options: {outputPath: "assets/"}}]
                }
            ]
        },
        devServer: {
            historyApiFallback: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: srcPathExtend("index.html")
            })
        ]
    };
};
