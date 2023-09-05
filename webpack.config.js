import path from 'path';
import { fileURLToPath } from 'url';
import WebpackNodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  target: 'node',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externalsPresets: { node: true },
  externals: [WebpackNodeExternals()], // Exclude node_modules
  module: {
    rules: [
      // Add rules for handling JavaScript files with Babel (if needed)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // Add rules for handling CSS files (if needed)
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Add rules for handling image files (if needed)
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
    ],
  },
};
