
const express = require('express')
const router = express.Router()
const bodyParser=require('body-parser')
var Tile38 = require('tile38');
var client = new Tile38({ host: '127.0.0.1', port: 9851, debug: true });

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

router.use(bodyParser.urlencoded({ extended: true })); //注册body
router.use(bodyParser.json());//数据JSON类型
router.post('/insertFleet', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    // save a location
    client.set('fleet', 'truck4', [33.5123, -112.2693]);
    // save a location with additional fields
    client.set('fleet', 'truck5', [33.5123, -112.2693], { value: 10, othervalue: 20 });
    let geoJsonObject = {
        'type': 'Polygon',
        'coordinates': [[[-67.13734351262877, 45.137451890638886],
        [-66.96466, 44.8097],
        [-68.03252, 44.3252],
        [-69.06, 43.98],
        [-70.11617, 43.68405],
        [-70.64573401557249, 43.090083319667144],
        [-70.75102474636725, 43.08003225358635],
        [-70.79761105007827, 43.21973948828747],
        [-70.98176001655037, 43.36789581966826],
        [-70.94416541205806, 43.46633942318431],
        [-71.08482, 45.3052400000002],
        [-70.6600225491012, 45.46022288673396],
        [-70.30495378282376, 45.914794623389355],
        [-70.00014034695016, 46.69317088478567],
        [-69.23708614772835, 47.44777598732787],
        [-68.90478084987546, 47.184794623394396],
        [-68.23430497910454, 47.35462921812177],
        [-67.79035274928509, 47.066248887716995],
        [-67.79141211614706, 45.702585354182816],
        [-67.13734351262877, 45.137451890638886]]],
        'properties': {
            'name': 'point marker',
            'author': 'oouyang' ,
            'tel':'13135667053'
        }
    }
    client.set('cities', 'tempe2', geoJsonObject)

    res.send({"code":200})
})

router.post('/insertCities',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    console.dir(req.body)
    console.log("params",req.params)
    console.log("req.query",req.query)
    res.send("2ooo")
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
