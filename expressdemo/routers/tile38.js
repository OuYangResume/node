
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
    getFleet.initFleet().then(resFleetObject => {
        res.send(resFleetObject);
    });
})

router.get('/getIntersectsQuery', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    getFleet.getIntersectsQuery().then(resFleetObject => {
        res.send(resFleetObject);
    });
})



let getFleet = {
    /**
     * @description: 组装数据的入口。
     * @param {type} 
     * @return: 
     */
    async initFleet() {
        let result1 = await this.getTruck1();
        let result2 = await this.getTruck2();
        let result3 = await this.getScanQuery();
        return {
            "result1": result1,
            "result2": result2,
            "result3": result3
        }
    },
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
        return client.get('fleet', 'truck1', { type: 'POINT', withfields: true }).then(data => {
            return data;
        });
    },

    /**
     * @description: 查询所有数据。。scanQuery方法
     * @param {type} 
     * @return: 
     */
    getScanQuery() {
        let query = client.scanQuery('fleet').objects();
        return query.execute().then(results => {
            // console.dir(results);  // results is an object.
            return results;
        }).catch(err => {
            console.error("something went wrong! " + err);
        });
    },
    /**
     * @description: 带地理围栏的查询
     * // basic query that uses bounds 基础的范围查询
    client.intersectsQuery('fleet').bounds(33.462, -112.268, 33.491 - 112.245)
    // intersect with a circle of 1000 meter radius 在点1000米范围内查询
    client.intersectsQuery('fleet').circle(33.462, -112.268, 1000)
    // using cursor and limit for pagination 限制分页
    client.intersectsQuery('fleet').cursor(100).limit(50).bounds(33.462, -112.268, 33.491 - 112.245)
    // create a fence that triggeres when entering a polygon //自定义polygon查询
    let polygon = { "type": "Polygon", "coordinates": [[[-111.9787, 33.4411], [-111.8902, 33.4377], [-111.8950, 33.2892], [-111.9739, 33.2932], [-111.9787, 33.4411]]] };
    client.intersectsQuery('fleet').detect('enter', 'exit').object(polygon)
     * @param {type} 
     * @return: 
     */
    getIntersectsQuery() {
        let query = client.intersectsQuery('fleet').circle(33.5123, -112.2693, 1000)
        return query.execute().then(results => {
            return results  // results is an object.
        }).catch(err => {
            console.error("something went wrong! " + err);
        });
    }
}


module.exports = router
