const HtmlWebpackPlugin = require("html-webpack-plugin"); // Require  html-webpack-plugin plugin

console.log("dir:", __dirname);

module.exports = {
  entry: __dirname + "/src/app/index.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + "/dist", // Folder to store generated bundle
    filename: "bundle.js", // Name of generated bundle after build
    publicPath: "/" // public URL of the output directory when referenced in a browser
  },
  module: {
    // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  plugins: [
    // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      filename: "index.html",
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/about.html",
      filename: "about.html",
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/bruksela.html",
      filename: "bruksela.html",
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/berlin.html",
      filename: "berlin.html",
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/nowa/index.html",
      filename: "nowa.html",
      inject: true
    })
  ],
  devServer: {
    // configuration for webpack-dev-server
    contentBase: "./src/public", //source of static assets
    port: 8080 // port to run dev-server
  }
};
