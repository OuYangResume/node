/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 14:09:49
 * @LastEditTime: 2019-08-27 17:32:03
 * @LastEditors: Please set LastEditors
 */

import * as THREE from 'three'
//OrbitControls不是核心的一部分。您必须将类转换为模块并单独导入它。
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//const OrbitControls= require("./lib/OrbitControls")

function init() {
    const renderer = new THREE.WebGLRenderer();
    //设置设备像素比。通常用于避免HiDPI设备上绘图模糊
    renderer.setPixelRatio(window.devicePixelRatio);
    let _container = document.getElementById('conianer');
    renderer.setSize(_container.offsetWidth, _container.offsetHeight);

    //  stat = new Stats();
    // document.body.appendChild(stat.dom);
    //一个canvas，渲染器在其上绘制输出。
    _container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        90,
        _container.offsetWidth / _container.offsetHeight,
        0.1,
        100
    );
    camera.position.set(20, 0, 0);
    // camera.position.set(-0.3, 0, 0);

    const controls = new OrbitControls(camera, renderer.domElement);
    // 如果使用animate方法时，将此函数删除
    // controls.addEventListener("change", render)
    // 使动画循环使用时阻尼或自转 意思是否有惯性
    controls.enableDamping = true;
    //动态阻尼系数 就是鼠标拖拽旋转灵敏度
    //controls.dampingFactor = 0.25;
    //是否可以缩放
    controls.enableZoom = true;
    //是否自动旋转
    controls.autoRotate = false;
    //设置相机距离原点的最远距离
    controls.minDistance = 1;
    //设置相机距离原点的最远距离
    controls.maxDistance = 20;
    //是否开启右键拖拽
    controls.enablePan = false;

    // const geometry = new THREE.SphereGeometry(1, 10, 10);
    // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    // const mesh = new THREE.Mesh(geometry, material);
    const mesh = addImg("../img/p1.jpg");
    // const mesh = addImg("https://qhyxpicoss.kujiale.com/r/2019/07/01/L3D137S8ENDIADDWAYUI5L7GLUF3P3WS888_3000x4000.jpg?x-oss-process=image/resize,m_fill,w_1600,h_920/format,webp", scene, 1);
    scene.add(mesh);

    controls.update();
    controls.target.copy(mesh.position);

    function render() {
        renderer.render(scene, camera);
    }

    function r() {
        render();
        requestAnimationFrame(r)
    }
    //坐标插件
    scene.add(new THREE.AxisHelper(1000));
    r()
}

function addImg(url) {
    const texture = THREE.ImageUtils.loadTexture(url);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const geometry = new THREE.SphereGeometry(10, 256, 256);
    // const geometry = new THREE.SphereGeometry(50, 256, 256);
    const mesh = new THREE.Mesh(geometry, material);
    // 渲染球体的双面
    material.side = THREE.DoubleSide;
    return mesh;
}

export default {
    init: init
};


