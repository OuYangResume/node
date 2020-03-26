/*
 * @Author: your name
 * @Date: 2020-03-23 15:48:55
 * @LastEditTime: 2020-03-23 18:33:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/mapnik/test.js
 */
var mapnik = require('mapnik');

//console.dir(mapnik)
new mapnik.Image.open('input.png').save('output.png');