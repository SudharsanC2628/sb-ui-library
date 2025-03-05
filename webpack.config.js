const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

// module.exports = {
// entry: "./src/main.ts",
// externals: [nodeExternals()],
// output: {
//     filename: "index.js",
//     path: path.resolve(__dirname, "dist"),
//     library: {
//         name: "san-storybook",
//         type: "umd",
//     }
// },
// plugins: [new CleanWebpackPlugin()],
// module: {
//     rules: [
//         {
//             test: /\(js|jsx|ts|tsx)$/,
//             exclude: /node_modules/,
//             use: {
//                 loader: "babel-loader",
//                 options: [{
//                     "@babel/preset-env",
//                     "@babel/preset-typescript",
//                     "@babel/preset-react"
//                 }]
//             }
//         }
//     ]
// }
// }

module.exports = {
    externals: [nodeExternals()],
    entry: './src/main.ts', // the entry point for our app
    output: {
        path: path.resolve(__dirname, 'dist'), // the output folder for our bundled files
        filename: 'index.js', // the name of the output file
        libraryTarget: 'commonjs',
        library: {
            name: "san-storybook",
            type: "amd",
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/, // the file extensions to match
                exclude: /node_modules/, // the folder to exclude
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-typescript",
                                "@babel/preset-react"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/, // the file extensions to match
                exclude: /node_modules/, // the folder to exclude
                use: [
                    { loader: 'style-loader' },
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require("sass"),
                        },
                    },
                ]
            }
        ]
    },
    plugins: [new CleanWebpackPlugin()],
    externals: {
        'react': {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'ReactDOM',
            root: 'ReactDOM'
        }
    },
};