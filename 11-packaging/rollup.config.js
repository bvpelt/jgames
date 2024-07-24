// rollup.config.js
//import resolve from '@rollup/plugin-node-resolve';
//import commonjs from '@rollup/plugin-commonjs';
//import terser from '@rollup/plugin-terser';
import { babel } from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/scripts/main.js',
    output: {
      file: 'app/dist/game.js',
      format: 'iife',
      name: 'Game',
      sourcemap: 'inline'
    },
    plugins: [
      //resolve(), // tells Rollup how to find date-fns in node_modules
      //commonjs(), // converts date-fns to ES modules
      //production && terser(), // minify, but only in production
      babel({
        babelHelpers: 'bundled',
        exclude: "node_modules/**",
        presets: ["@babel/preset-env"],
        plugins: ["babel-plugin-transform-html-import-to-string"],
        extensions: [".js", ".html"],
      }),
      json(),
    ]
  }