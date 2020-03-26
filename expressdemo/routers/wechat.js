/*
 * @Author: your name
 * @Date: 2020-03-08 18:01:41
 * @LastEditTime: 2020-03-08 19:02:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/expressdemo/routers/wechat.js
 */

const express = require('express')
const request = require('request')
const router = express.Router()

/**
 * @description: 获取小程序全局唯一后台接口调用凭据（access_token）
 * @param {type} 
 * @return: 
 */
const getAccessToken = function () {
    return new Promise((resolve, reject) => {
        const wechat = {
            appid: 'wxd795f4920a0fb54d',
            secret: '279ff1201dea393e956b7db286e56a17',
            grant_type:""//授权类型
        }
        let url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${wechat.appid}&secret=${wechat.secret}`;
        request.get(
            url,
            function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    body = JSON.parse(body)
                    console.log(body)
                    if (body.success) {
                        resolve(body)
                    } else {
                        resolve(body)
                    }
                }
            }
        )
    })
}

router.get('/', (req, res) => {
    getAccessToken().then(data => {
        res.send(data)
    });

})

module.exports = router;