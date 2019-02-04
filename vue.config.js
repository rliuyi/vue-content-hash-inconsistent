const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        output: {
            filename: 'js/[name].[contenthash].js',
            chunkFilename: 'js/[name].[contenthash].js'
        },
        plugins: [
            new webpack.HashedModuleIdsPlugin()
        ],
        optimization: {
            runtimeChunk: 'single'
        }
    }
}