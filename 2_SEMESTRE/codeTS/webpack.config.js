import { resolve as _resolve } from 'path';

export const mode = 'development';
export const entry = './src/index.ts';
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        configFile: 'tsconfig.frontend.json',
      },
    },
  ],
};
export const resolve = {
  extensions: ['.tsx', '.ts', '.js'],
};
export const output = {
  filename: 'bundle.js',
  path: _resolve(__dirname, 'frontend', 'assets', 'js'),
};
export const devtool = 'source-map';
