const path = require('path')
const webpack = require('webpack')
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack')
const TerserPlugin = require('terser-webpack-plugin')

const imageminGifsicle = require('imagemin-gifsicle')
const imageminJpegtran = require('imagemin-jpegtran')
const imageminOptipng = require('imagemin-optipng')
const imageminSvgo = require('imagemin-svgo')
const bundleOutputDir = './wwwroot/dist/'

module.exports = env => {
  const isDevBuild = !(env && env.prod)
  const devMode = isDevBuild ? 'development' : 'production'

  return [
    {
      mode: 'production',
      entry: { Home: './ClientApp/views/home/home.ts' },
      stats: { modules: false },
      context: __dirname,
      resolve: {
        extensions: [
          '.json',
          '.js',
          '.jsx',
          '.ts',
          '.css',
          '.scss',
          '*',
          '.vue',
          '.json'
        ],
        alias: { vue$: 'vue/dist/vue.esm.js' }
      },
      devtool: 'source-map',
      devServer: { historyApiFallback: true, noInfo: true, overlay: true },
      performance: { hints: false },
      module: {
        rules: [
          {
            test: /\.vue$/,
            include: /ClientApp/,
            loader: 'vue-loader',
            options: {
              loaders: { js: 'awesome-typescript-loader?silent=true' }
            }
          },
          // {
          //   test: /\.vue$/,
          //   include: /ClientApp/,
          //   loader: 'vue-loader',
          //   options: {
          //     loaders: {
          //       css: [
          //         // MiniCssExtractPlugin.loader,
          //         'vue-style-loader',
          //         'css-loader',
          //         'sass-loader',
          //         'postcss-loader'
          //       ],
          //       scss: [
          //         // MiniCssExtractPlugin.loader,
          //         'vue-style-loader',
          //         'css-loader',
          //         'postcss-loader',
          //         'sass-loader'
          //       ],
          //       sass: [
          //         // MiniCssExtractPlugin.loader,
          //         'vue-style-loader',
          //         'css-loader',
          //         'sass-loader?indentedSyntax'
          //       ]
          //     }
          //   }
          // },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.js$/,
            loader: 'babel-loader'
          },
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true }
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            loader: 'file-loader',
            options: {
              emitFile: true // Don't forget emit images
            }
          },
          {
            test: /\.(eot|woff2?|ttf|otf)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000,
                  name: '[name].[ext]',
                  outputPath: 'assets/fonts'
                }
              }
            ]
          }
          // { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
        ]
      },
      output: {
        path: path.join(__dirname, bundleOutputDir),
        filename: 'js/[name].js',
        publicPath: '/dist/'
      },
      optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }]
            },
            canPrint: true
          })
        ]
      },
      plugins: [
        new CheckerPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(isDevBuild ? 'development' : 'production')
          }
        }), // }), //   manifest: require('./wwwroot/dist/vendor-manifest.json') //   context: __dirname, // new webpack.DllReferencePlugin({
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
          filename: 'css/[name].css'
        }),
        new CopyWebpackPlugin([
          {
            from: './ClientApp/assets/images/',
            to: './assets/images/'
          },
          {
            from: './ClientApp/assets/static/',
            to: './assets/static/'
          }
        ]),
        // Make sure that the plugin is after any plugins that add images, example `CopyWebpackPlugin`
        new ImageminPlugin({
          bail: false, // Ignore errors on corrupted images
          cache: true,
          name: 'a[path][name].[ext]',
          imageminOptions: {
            // Lossless optimization with custom option
            // Feel free to experement with options for better result for you
            plugins: [
              imageminGifsicle({
                interlaced: true,
                optimizationLevel: 5
              }),
              imageminJpegtran({
                progressive: true,
                optimizationLevel: 5
              }),
              imageminOptipng({
                optimizationLevel: 5
              }),
              imageminSvgo({
                removeViewBox: true,
                optimizationLevel: 5
              })
            ]
          },
          loader: false
        })
      ].concat(
        isDevBuild
          ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
              filename: '[file].map', // Remove this line if you prefer inline source maps
              moduleFilenameTemplate: path.relative(
                bundleOutputDir,
                '[resourcePath]'
              ) // Point sourcemap entries to the original file locations on disk
            })
          ]
          : []
      )
    }
  ]
}
