const { resolve } = require('path');

module.exports = env => {
  return {
  	context: resolve('src'),
  	entry: './index.js',
	  output: {
	  	path: resolve('src/public/'),
	  	filename: 'bundle.js',
	  },
	  devtool: env.prod ? 'source-map' : 'eval',
	  module: {
	  	rules: [{ 
	  		test: /\.(jsx?)$/, 
	  		exclude: /(node_modules)/,
	  		loader: 'babel-loader', 
	  		options: { 
	  			presets: [
	  			  'env',
	  			  'es2015',
	  			  'es2016',
	  			  'react',
	  			  'stage-2'
	  			]
	  		}
	  	}, 
	  	{
		    test: /\.(gif|png|jpe?g|svg)$/i,
		    loaders: [
		      'file-loader', {
		        loader: 'image-webpack-loader',
		        options: {
		          gifsicle: {
		            interlaced: false,
		          },
		          optipng: {
		            optimizationLevel: 7,
		          },
		          pngquant: {
		            quality: '65-90',
		            speed: 4
		          },
		          mozjpeg: {
		            progressive: true,
		            quality: 65
		          },
		          // Specifying webp here will create a WEBP version of your JPG/PNG images
		          webp: {
		            quality: 75
		          }
		        }
		      }
		    ]
		  },
	  	{
	  		 test: /\.css$/,
	  		 exclude: /(node_modules)/,
	  		 loaders: [
	  		   'css-loader'
	  		 ]
	    }]
	  }
	}
}
