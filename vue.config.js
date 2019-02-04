const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        output: {
            filename: '[name].[contenthash].js',
            chunkFilename: '[name].[contenthash].js'
        },
        plugins: [
            new webpack.HashedModuleIdsPlugin()
        ],
        optimization: {
            runtimeChunk: 'single'
        }
    }
}