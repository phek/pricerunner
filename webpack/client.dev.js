const path = require('path');
const webpack = require('webpack');

const BUILT_ASSETS_FOLDER = '/assets/';

module.exports = {
    name: 'client',
    target: 'web',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr',
        'babel-polyfill',
        'react-hot-loader/patch',
        path.resolve(__dirname, '../', 'src', 'app', 'client')
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.join(__dirname, '../', 'dist', 'client'),
        publicPath: BUILT_ASSETS_FOLDER
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    failOnWarning: false,
                    failOnError: true
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.scss'],
        modules: [
            path.join(__dirname, '../', 'src'),
            path.join(__dirname, '../', 'assets'),
            'node_modules'
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].js',
            minChunks: Infinity
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false
        }),
    ]
};
