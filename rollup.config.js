import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import html from 'rollup-plugin-fill-html';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        file: 'public/bundle.js',
        format: 'iife', // immediately-invoked function expression — suitable for <script> tags
        sourcemap: production ? 'none' : 'inline'
    },
    plugins: [
        resolve(), // tells Rollup how to find date-fns in node_modules
        commonjs(), // converts date-fns to ES modules
        babel(),
        postcss({
            plugins: []
        }),
        production && terser(), // minify, but only in production
        html({
            template: 'src/index.html',
            filename: 'index.html',
            
        })
    ]
};
