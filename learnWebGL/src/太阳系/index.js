/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-02 16:27:02
 * @LastEditTime: 2019-09-02 17:59:04
 * @LastEditors: Please set LastEditors
 */
import * as THREE from 'three';
import * as dat from 'dat.gui';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let container;
function initContainer() {
    container = document.getElementById("conianer");
}

let renderer;
function initRender() {
    renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);
}

let scene;

function initScene() {
    scene = new THREE.Scene();
}

let camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.set(0, 0, 1000);
}

let light;
function initLight() {

    scene.add(new THREE.AmbientLight(0xFFD700));

    light = new THREE.DirectionalLight(0xFFD700);
    light.position.set(0, 0, 0);

    light.castShadow = true;
    light.shadow.camera.top = 10;
    light.shadow.camera.bottom = -10;
    light.shadow.camera.left = -10;
    light.shadow.camera.right = 10;

    //告诉平行光需要开启阴影投射
    light.castShadow = true;

    scene.add(light);
}

/**
 * @description: 添加模型的入口。
 * @param {type} 
 * @return: 
 */
function initModel() {
    //辅助工具
    var helper = new THREE.AxesHelper(1000);
    scene.add(helper);
    addSunGeo();
    addRunWay()
}

function addSunGeo() {
    //添加中间显示的球体
    var geometry = new THREE.SphereBufferGeometry(100, 100, 50);
    //将纹理的环境纹理设置为scene的背景纹理
    var sphereMaterial = new THREE.MeshPhongMaterial({
        color: 0xFFD700
    });
    var sphereMesh = new THREE.Mesh(geometry, sphereMaterial);
    sphereMesh.position.set(0, 0, 0);
    scene.add(sphereMesh);
}

function addRunWay() {
    var geometry = new THREE.CircleBufferGeometry(300, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    var circle = new THREE.Mesh(geometry, material);
    scene.add(circle);
}


let controls;

function initControls() {

    controls = new OrbitControls(camera, renderer.domElement);
    //设置控制器的中心点
    //controls.target.set( 0, 5, 0 );
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
    controls.autoRotateSpeed = 0.5;
    //设置相机距离原点的最远距离
    controls.minDistance = 150;
    //设置相机距离原点的最远距离
    controls.maxDistance = 1000;
    //是否开启右键拖拽
    controls.enablePan = true;
}

//窗口变动触发的函数
function onWindowResize() {

    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);

}
//每帧额外的运算
function render() {
    renderer.render(scene, camera);
}

function animate() {
    //每帧额外的运算
    render();
    controls.update();
    requestAnimationFrame(animate);
}

function draw() {

    initContainer();
    initRender();
    initScene();
    initCamera();
    initLight();
    initModel();
    initControls();

    animate();
    window.onresize = onWindowResize;
}

export default {
    init: draw
}