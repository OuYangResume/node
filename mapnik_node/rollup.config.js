import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace'


export default {
    input: 'src/jsts/index.js',
    output: {
        file: 'bundle.js',
        format: 'umd',
        name: 'oouyang'
    },
    plugins: [
        json(),
        resolve({
            module: true,
            jsnext: true,
            main: true
        }),
        replace({
            ENV: JSON.stringify(process.env.NODE_ENV || 'development')
          }),
        commonjs(),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ]
};