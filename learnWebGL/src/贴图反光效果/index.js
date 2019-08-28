/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 11:22:06
 * @LastEditTime: 2019-08-28 11:39:09
 * @LastEditors: Please set LastEditors
 */

import * as THREE from 'three';
import * as dat from 'dat.gui';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
var renderer, camera, scene, gui, light, stats, controls, sphereMesh, sphereMaterial;


var container;

function initContainer() {
    container = document.getElementById('conianer');
}
function initRender() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xeeeeee);
    renderer.shadowMap.enabled = true;
    //告诉渲染器需要阴影效果
    container.appendChild(renderer.domElement);
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 12, 15);
}


/**
 * @description: 创建场景，并设置场景的背景
 * @param {type} 
 * @return: 
 */
function initScene() {
    //给场景添加天空盒子纹理
    var cubeTextureLoader = new THREE.CubeTextureLoader();
    cubeTextureLoader.setPath('../../img/sky/');
    //六张图片分别是朝前的（posz）、朝后的（negz）、朝上的（posy）、朝下的（negy）、朝右的（posx）和朝左的（negx）。
    var cubeTexture = cubeTextureLoader.load([
        'px.jpg', 'nx.jpg',
        'py.jpg', 'ny.jpg',
        'pz.jpg', 'nz.jpg'
    ]);

    scene = new THREE.Scene();

    scene.background = cubeTexture;
}

//初始化dat.GUI简化试验流程
function initGui() {
    //声明一个保存需求修改的相关数据的对象
    gui = {
        changeBg: function () {
            scene.background = new THREE.CubeTextureLoader()
                .setPath('/lib/textures/cube/pisa/')
                .load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);

            sphereMaterial.envMap = scene.background;
        }
    };
    var datGui = new dat.GUI();
    //将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）
    datGui.add(gui, "changeBg");
}

function initLight() {
    scene.add(new THREE.AmbientLight(0xffffff));

    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 20, -20);

    light.castShadow = true;
    light.shadow.camera.top = 10;
    light.shadow.camera.bottom = -10;
    light.shadow.camera.left = -10;
    light.shadow.camera.right = 10;

    //告诉平行光需要开启阴影投射
    light.castShadow = true;

    scene.add(light);
}

function initModel() {

    //辅助工具
    var helper = new THREE.AxesHelper(50);
    scene.add(helper);

    //添加中间显示的球体
    var geometry = new THREE.SphereBufferGeometry(5, 100, 50);
    //将纹理的环境纹理设置为scene的背景纹理
    sphereMaterial = new THREE.MeshLambertMaterial({ envMap: scene.background });
    sphereMesh = new THREE.Mesh(geometry, sphereMaterial);
    scene.add(sphereMesh);
}

//初始化性能插件
function initStats() {
    stats = new Stats();
    document.body.appendChild(stats.dom);
}

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
    controls.minDistance = 1;
    //设置相机距离原点的最远距离
    controls.maxDistance = 2000;
    //是否开启右键拖拽
    controls.enablePan = true;
}

function render() {
    renderer.render(scene, camera);
}

//窗口变动触发的函数
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {
    //更新控制器
    render();
    //更新性能插件
    // stats.update();
    controls.update();
    requestAnimationFrame(animate);
}

function draw() {
    //兼容性判断
    // if (!Detector.webgl) Detector.addGetWebGLMessage();
    initContainer();
    // initGui();
    initRender();
    initScene();
    initCamera();
    initLight();
    initModel();
    initControls();
    // initStats();

    animate();
    window.onresize = onWindowResize;
}


export default {
    init: draw
}