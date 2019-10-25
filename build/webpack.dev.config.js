const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 
const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        liveReload: true,
        overlay: true, //beautify error messages
        port: 8081,
        historyApiFallback: true
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        }),
        // new BundleAnalyzerPlugin()
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});
