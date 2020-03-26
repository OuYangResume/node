/*
 * @Author: your name
 * @Date: 2020-03-26 17:32:42
 * @LastEditTime: 2020-03-26 17:34:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/simpleVue/workers.js
 */
let arr = ["./images/dapeng1_20180915.jpg",
    "./images/dapeng2_20180915.jpg",
    "./images/dapeng3_20180915.jpg",
    "./images/hzzx1_20180930.jpg",
    "./images/hzzx2_20180930.jpg",
    "./images/hzzx3_20180930.jpg"];
for (let i = 0, len = arr.length; i < len; i++) {
    let req = new XMLHttpRequest();
    debugger;
    req.open('GET', arr[i], true);
    req.responseType = "blob";
    req.setRequestHeader("client_type", "DESKTOP_WEB");
    req.onreadystatechange = () => {
        if (req.readyState == 4) {
            postMessage(req.response);
        }
    };
    req.send(null);
}