
const express = require('express')
const router = express.Router()
var Tile38 = require('tile38');
var client = new Tile38({ host: '127.0.0.1', port: 9851, debug: true });
// save a location
client.set('fleet', 'truck4', [33.5123, -112.2693]);
// save a location with additional fields
client.set('fleet', 'truck5', [33.5123, -112.2693], { value: 10, othervalue: 20 });



router.get('/getFleet', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    let result1 = getFleet.getTruck1();

    console.log("adsfsda", result1)
    let query = client.scanQuery('fleet').objects();
    query.execute().then(results => {
        // console.dir(results);  // results is an object.
        let resultObject = {
            "result1": result1,
            "result2": results
        }
        res.send(resultObject);

    }).catch(err => {
        console.error("something went wrong! " + err);
    });

})

let getFleet = {
    /**
     * @description: 查询fleet
     * @param {type} 
     * @return: 
     */
    getTruck1() {
        return client.get('fleet', 'truck1').then(data => {
            // console.log(data); // prints coordinates in geoJSON format
            return data;
        }).catch(err => {
            console.log(err); // id not found  
        });
    },

    /**
     * @description: return the data as type POINT, and include FIELDS as well.  
     * @param {type} 
     * @return: 
     */
    getTruck2() {
        client.get('fleet', 'truck1', { type: 'POINT', withfields: true }).then(data => {
            console.log(`truck2 is at ${data.point.lat},${data.point.lon}`);
            console.dir(data.fields);
            res.send(data);
        });
    }


}


module.exports = router
