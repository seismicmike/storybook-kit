const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const { argv } = require("process");
const { css } = require("webpack");

module.exports = (env, args) => {
  const isDevelopment = argv.mode === "development";
  const cssFiles = glob.sync("./docroot/*/custom/**/*.scss", {
    nodir: true,
    ignore: ["**/_*", "node_modules/**", "**/node_modules/**"],
  });
  const cssEntryPoints = cssFiles.reduce((acc, file) => {
    const entryName = path
      .relative("./docroot", file)
      .replace(/\.[^/.]+$/, "")
      .replace("src/styles", "dist/styles");
    acc[entryName] = path.resolve(__dirname, file);
    return acc;
  }, {});
  const entryPoints = {
    ...cssEntryPoints,
  };

  return {
    mode: isDevelopment ? "development" : "production",
    entry: entryPoints,
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "docroot"),
    },
    devtool: isDevelopment ? "cheap-module-source-map" : false,
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: isDevelopment,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: ["autoprefixer"],
                },
                sourceMap: isDevelopment,
              },
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
                sassOptions: {
                  outputStyle: isDevelopment ? "expanded" : "compressed",
                },
                sourceMap: isDevelopment,
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
    plugins: [
      new RemoveEmptyScriptsPlugin(),
      new MiniCssExtractPlugin({
        filename: "../docroot/[name].css",
      }),
    ],
    watchOptions: {
      poll: 500,
      ignored: ["./node_modules"],
    },
  };
};
