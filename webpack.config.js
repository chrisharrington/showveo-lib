const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        filename: 'index.js',
        publicPath: '/',
        path: path.resolve(__dirname, './'),
        library: 'showveo-lib',
        libraryTarget: 'umd'
    },
    resolve: {
        alias: {
            '@lib': path.resolve(__dirname, './')
        },
        extensions: [
            '.ts',
            '.js'
        ],
        modules: [
            './node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                exclude: [
                    /node_modules/,
                ],
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    }
}