/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 16:10:25
 * @LastEditTime: 2019-08-28 11:38:41
 * @LastEditors: Please set LastEditors
 */

import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


var container;

function initContainer() {
    container = document.getElementById('conianer');
}


var renderer;

function initRender() {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    //告诉渲染器需要阴影效果
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 默认的是，没有设置的这个清晰 THREE.PCFShadowMap
    renderer.setClearColor(0xffffff);
    container.appendChild(renderer.domElement);

    //添加canvas的点击事件
    renderer.domElement.addEventListener('click', onMouseClick, false);
}

var camera;

function initCamera() {
    camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.set(0, 40, 100);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
}

var scene;

function initScene() {
    scene = new THREE.Scene();
}

var light;

function initLight() {
    scene.add(new THREE.AmbientLight(0x404040));

    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1);
    scene.add(light);
}

/**
 * @description: 添加mesh
 * @param {type} 
 * @return: 
 */
function initModel() {

    //辅助工具---坐标系
    var helper = new THREE.AxesHelper(10);
    scene.add(helper);

    var s = 25;

    var cube = new THREE.BoxGeometry(s, s, s);

    for (var i = 0; i < 3000; i++) {

        var material = new THREE.MeshBasicMaterial({ color: randomColor() });

        var mesh = new THREE.Mesh(cube, material);

        mesh.position.x = 800 * (2.0 * Math.random() - 1.0);
        mesh.position.y = 800 * (2.0 * Math.random() - 1.0);
        mesh.position.z = 800 * (2.0 * Math.random() - 1.0);

        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        mesh.rotation.z = Math.random() * Math.PI;

        mesh.updateMatrix();

        scene.add(mesh);

    }

}

//随机生成颜色
function randomColor() {
    var arrHex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
        strHex = "#",
        index;
    for (var i = 0; i < 6; i++) {
        index = Math.round(Math.random() * 15);
        strHex += arrHex[index];
    }
    return strHex;
}

//声明raycaster和mouse变量
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseClick(event) {

    //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
    mouse.x = (event.clientX / container.offsetWidth) * 2 - 1;
    mouse.y = - (event.clientY / container.offsetHeight) * 2 + 1;

    // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
    raycaster.setFromCamera(mouse, camera);

    // 获取raycaster直线和所有模型相交的数组集合
    var intersects = raycaster.intersectObjects(scene.children);

    console.log(intersects);

    //将所有的相交的模型的颜色设置为红色，如果只需要将第一个触发事件，那就数组的第一个模型改变颜色即可
    for (var i = 0; i < intersects.length; i++) {

        intersects[i].object.material.color.set(0xff0000);

    }

}


//初始化dat.GUI简化试验流程
var gui;

function initGui() {
    //声明一个保存需求修改的相关数据的对象
    controls = {

    };

    gui = new dat.GUI();

}

//初始化性能插件
var stats;

function initStats() {
    stats = new Stats();
    document.body.appendChild(stats.dom);
}

//用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
var controls;

function initControls() {

    controls = new OrbitControls(camera, renderer.domElement);

    // 如果使用animate方法时，将此函数删除
    //controls.addEventListener( 'change', render );
    // 使动画循环使用时阻尼或自转 意思是否有惯性
    controls.enableDamping = true;
    //动态阻尼系数 就是鼠标拖拽旋转灵敏度
    //controls.dampingFactor = 0.25;
    //是否可以缩放
    controls.enableZoom = true;
    //是否自动旋转
    controls.autoRotate = false;
    //设置相机距离原点的最远距离
    controls.minDistance = 50;
    //设置相机距离原点的最远距离
    controls.maxDistance = 200;
    //是否开启右键拖拽
    controls.enablePan = true;
}

function render() {
    renderer.render(scene, camera);
}

//窗口变动触发的函数
function onWindowResize() {

    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    render();
    renderer.setSize(container.offsetWidth, container.offsetHeight);

}

function animate() {
    //更新控制器
    render();

    //更新性能插件
    //  stats.update();

    //controls.update();

    requestAnimationFrame(animate);
}

function draw() {
    initContainer();
    initRender();
    initScene();
    initCamera();
    initLight();
    initModel();
    // initGui();
    initControls();
    //  initStats();

    animate();
    window.onresize = onWindowResize;
}


export default {
    init: draw
};