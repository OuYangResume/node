// 帮助寻找node_modules里的包
import resolve from 'rollup-plugin-node-resolve';
//将非ES6语法的包转为ES6可用
import commonjs from 'rollup-plugin-commonjs';
import babel from "rollup-plugin-babel";
import json from 'rollup-plugin-json';
//压缩代码
import { terser } from 'rollup-plugin-terser';
const pkg = require('./package.json');

const isDev = process.env.NODE_ENV === 'production';

export default [
    {
        input: 'src/main.js',
        output: [
            // { file: pkg.main, format: 'cjs' },
            { file: pkg.main, format: 'es' },
            { file: pkg.module, format: 'umd', name: "oouyang" }
        ],
        plugins: [
            json(),
            resolve({
                module: true,
                jsnext: true,
                main: true
            }),
            commonjs(),
            babel({
               // exclude: ['node_modules/**'], // 防止打包node_modules下的文件
                runtimeHelpers: true,       // 使plugin-transform-runtime生效
            }),
            //isDev ? terser() : []
        ]
    }
];