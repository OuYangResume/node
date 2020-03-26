/*
 * @Author: your name
 * @Date: 2020-03-13 10:54:09
 * @LastEditTime: 2020-03-23 21:13:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/mapnik/index.js
 */

var mapnik = require('mapnik');
var fs = require('fs');
// register fonts and datasource plugins
mapnik.register_default_fonts();
mapnik.register_default_input_plugins();
var map = new mapnik.Map(4096, 4096);
map.load('./data/style.xml', function (err, map) {
    if (err) throw err;
    map.zoomAll();
    var im = new mapnik.Image(4096, 4096);
    map.render(im, function (err, im) {
        if (err) throw err;
        im.encode('png', function (err, buffer) {
            if (err) throw err;
            fs.writeFile('map.png', buffer, function (err) {
                if (err) throw err;
                console.log('saved map image to map.png');
            });
        });
    });
});