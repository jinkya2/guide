const path = require('path')
module.exports = {
    entry: './src/Index.tsx', // Changed the entry file name
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: "development",
    devServer: {
        port: 4000,
        static: {
            directory: path.resolve(__dirname, './dist')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
}