/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 10:42:39
 * @LastEditTime: 2019-10-23 16:03:12
 * @LastEditors: Please set LastEditors
 */
//  import VR from "./VR效果/threeFour.js/index.js"

// let  opt = {
//     container: 'conianer',//容器
//     imageUrl: '../img/p1.jpg',//图片路径
//     cameraPara:{
//         // fov:92,
//         // asd:"Asd",
//         // far:10000
//     },
//     lables: [
//         { position: { lon: -72.00, lat: 9.00 }, logoUrl: '', text: '蓝窗户' },
//         { position: { lon: 114.12, lat: 69.48 }, logoUrl: '', text: '一片云彩' },
//         { position: { lon: 132.48, lat: -12.24 }, logoUrl: '', text: '大海' }
//     ],
//     widthSegments: 60,//水平切段数
//     heightSegments: 40,//垂直切段数（值小粗糙速度快，值大精细速度慢）
//     pRadius: 1000,//全景球的半径，推荐使用默认值
//     minFocalLength: 6,//镜头最小拉近距离
//     maxFocalLength: 100,//镜头最大拉近距离
// }
// let sss =new VR(opt);
// function animate() {
//     sss.render();
//     requestAnimationFrame(animate)
// }

// animate()


//import VR from "./粒子的点击事件/index.js"

//import VR from "./VR效果/threeThree.js"

//import VR from "./雪花下落效果/index.js"

//import VR from "./贴图反光效果/index.js"

//import VR from "./太阳系/index.js"

import VR from "./自定义geo/index.js"

VR.init()