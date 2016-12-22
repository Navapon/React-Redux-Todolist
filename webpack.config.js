module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
        loaders: [
           {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel',
                query: { presets: ['es2015', 'react'] }
            },
        ]
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    }
}