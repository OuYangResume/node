/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 14:09:49
 * @LastEditTime: 2019-08-21 15:09:24
 * @LastEditors: Please set LastEditors
 */

import * as THREE from 'three'
//OrbitControls不是核心的一部分。您必须将类转换为模块并单独导入它。
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//const OrbitControls= require("./lib/OrbitControls")

function init() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    let _container = document.getElementById('conianer');
    //  stat = new Stats();
    // document.body.appendChild(stat.dom);
    //一个canvas，渲染器在其上绘制输出。
    _container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        90,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );
     camera.position.set(20, 0, 0);
   // camera.position.set(-0.3, 0, 0);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", render);
    controls.minDistance = 1;
    // controls.maxDistance = 200;
    controls.maxDistance = 20;
    controls.enablePan = false;

    // const geometry = new THREE.SphereGeometry(1, 10, 10);
    // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    // const mesh = new THREE.Mesh(geometry, material);
    const mesh = addImg("../img/p4.jpg");
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

init();


