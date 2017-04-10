import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';
import string from 'rollup-plugin-string';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/web/index.js',
  plugins: [
    sass({
      output: 'dist/hig.css'
    }),
    string({
			include: '**/*.html'
		}),
    commonjs({
      include: 'node_modules/**'
    }),
    json(),
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  format: 'umd',
  moduleName: 'Hig',
  dest: 'dist/hig.js' // equivalent to --output
};