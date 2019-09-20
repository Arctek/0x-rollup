import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'index.ts',
  output: [
    {
      file: "0x.rollup.js",
      format: 'cjs',
      sourcemap: true,
      external: ['path']
    }
  ],
  plugins: [
    builtins(),
    resolve({
      preferBuiltins: true,
      browser: true
    }),
    commonjs(),
    json(),
    typescript()
  ]
}