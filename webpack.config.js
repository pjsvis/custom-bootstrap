module.exports = {  
  entry: './app/app.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
    // tells webpack to query these directories for modules
    modulesDirectories: ["./app/components", "node_modules"]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}