import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';


export default {
    input: 'src/jsts/index.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        json(),
        resolve()
    ]
};