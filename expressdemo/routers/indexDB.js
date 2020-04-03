/*
 * @Author: your name
 * @Date: 2020-04-02 16:06:14
 * @LastEditTime: 2020-04-03 11:38:43
 * @LastEditors: Please set LastEditors
 * @Description: 测试数据字典存入浏览器数据indexDB中
 * @FilePath: /node/expressdemo/routers/indexDB.js
 */
const express = require('express')
const router = express.Router()

router.get('/getDictById', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    console.dir(req.query)
    let id = req.query.id;
    let data = {
        "sex": [{ value: "1", name: "男" }, { value: "2", name: "女" }],
        "houseType": [{ value: "1", name: "出租" }, { value: "2", name: "自用" }, { value: "3", name: "待租" }, { value: "4", name: "闲置" }, { value: "5", name: "部分出租" }, { value: "6", name: "其他" }],
        //户口类型
        "anmeldenType": [{ value: "1", name: "非农业家庭户" }, { value: "2", name: "农业家庭户" }, { value: "3", name: "非农业集体户" }, { value: "4", name: "农业集体户" }, { value: "5", name: "自理口粮户" }, { value: "6", name: "其它" }],
        "eventLevel": [{ value: "A", name: "紧急" }, { value: "B", name: "重要" }, { value: "C", name: "一般" }]
    }
    let resData = {};
    for (let i in data) {
        if (id == i) {
            resData[id] = data[i];
        }
    }
    console.log(resData);
    res.send(resData);
})
module.exports = router;