// customized from https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js
// TODO: babel polyfills or runtime
// TODO: server setup

const path = require('path')
const webpack = require('webpack')

const dev = process.env.NODE_ENV === 'development'
const buildDir = path.resolve('lib')
const srcDir = path.resolve('src')

function formatWindowsUri(path) {
  return path.replace(/\\/g, '/')
}

module.exports = /** @type {import('webpack').Configuration} */ ({
  entry: [path.resolve(srcDir, 'index.ts')],
  output: {
    path: buildDir,
    // filename is the template for entry points
    // chunk is the template for generated (split) assets from the entry point
    // they don't really have any meaningful differences for consumers, as long as their names don't collide
    filename: dev ? '[name].js' : '[name].[chunkhash:6].js',
    chunkFilename: dev ? '[name].chunk.js' : '[name].[chunkhash:6].chunk.js',
    // useful comments in dev mode about where the module was located
    pathinfo: dev,
    // the template generator for sourcemapped files' paths in browser dev tools
    devtoolModuleFilenameTemplate(info) {
      return formatWindowsUri(path.relative(srcDir, info.absoluteResourcePath))
    },
  },
  mode: dev ? 'development' : 'production',
  resolve: {
    mainFields: ['module', 'main'],
    extensions: ['.ts', '.js', '.json'],
    modules: ['node_modules', srcDir],
  },
  module: {
    // makes missing exports an error instead of warning
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: /\.[tj]s$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  // ignore .babelrc and babel.config.js
                  babelrc: false,
                  configFile: false,
                  // emit source maps
                  sourceMaps: true,
                  // creates a cache directory (babel-laoder ONLY)
                  cacheDirectory: true,
                  // minify and cache the minification step in PROD
                  compact: !dev,
                  cacheCompression: !dev,
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        loose: true,
                        modules: false,
                        targets: {
                          node: 10,
                        },
                      },
                    ],
                    '@babel/preset-typescript',
                  ],
                  plugins: [
                    // decorators have to come before class proeprties
                    [
                      '@babel/plugin-proposal-decorators',
                      // @decorate  | INSTEAD OF:
                      // export foo | export @decorate foo
                      {
                        decoratorsBeforeExport: true,
                      },
                    ],
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-proposal-throw-expressions',
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(dev ? 'development' : 'production'),
    }),
  ],
  optimization: {
    minimize: false,
  },
  // always use source-map to allow CSS source maps in dev mode
  devtool: 'source-map',
  performance: false,
})
