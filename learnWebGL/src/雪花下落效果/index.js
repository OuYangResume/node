/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 09:08:58
 * @LastEditTime: 2019-08-28 15:11:49
 * @LastEditors: Please set LastEditors
 */

import * as THREE from 'three';
import * as dat from 'dat.gui';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';




var container;

function initContainer() {
    container = document.getElementById('conianer');
}
var renderer;

function initRender() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(new THREE.Color(0xffffff)); //设置背景颜色
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);
}

var camera;

function initCamera() {
    camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 200);
    camera.position.set(0, 20, 100);
    camera.lookAt(new THREE.Vector3(0, 30, 0));
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


function initModel() {

    //轴辅助 （每一个轴的长度）
    var object = new THREE.AxesHelper(500);
    scene.add(object);

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
    controls.minDistance = 20;
    //设置相机距离原点的最远距离
    controls.maxDistance = 10000;
    //是否开启右键拖拽
    controls.enablePan = true;
}

//生成gui设置配置项
var gui;

var cloud;
function initGui() {
    //声明一个保存需求修改的相关数据的对象
    gui = {
        "size": 2,
        "transparent": true,
        "opacity": 0.6,
        "vertexColors": true,
        "color": 0xffffff,
        "sizeAttenuation": true,
        "rotateSystem": false,
        redraw: function () {
            if (cloud) {
                scene.remove(cloud);
            }
            createParticles(gui.size, gui.transparent, gui.opacity, gui.vertexColors, gui.sizeAttenuation, gui.color);
            //设置是否自动旋转
            controls.autoRotate = gui.rotateSystem;
        }
    };
    var datGui = new dat.GUI();
    //将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）gui.add(controls, 'size', 0, 10).onChange(controls.redraw);
    datGui.add(gui, 'size', 0.1, 10).onChange(gui.redraw);
    datGui.add(gui, 'transparent').onChange(gui.redraw);
    datGui.add(gui, 'opacity', 0, 1).onChange(gui.redraw);
    datGui.add(gui, 'vertexColors').onChange(gui.redraw);
    datGui.addColor(gui, 'color').onChange(gui.redraw);
    datGui.add(gui, 'sizeAttenuation').onChange(gui.redraw);
    datGui.add(gui, 'rotateSystem').onChange(gui.redraw);

    gui.redraw();
}

//生成粒子的方法
function createParticles(size, transparent, opacity, vertexColors, sizeAttenuation, color) {
    var texture = new THREE.TextureLoader().load("../../img/snow.png");
    //存放粒子数据的网格
    var geom = new THREE.Geometry();
    //样式化粒子的THREE.PointCloudMaterial材质
    var material = new THREE.PointsMaterial({
        size: size,
        transparent: transparent,
        opacity: opacity,
        vertexColors: vertexColors,
        sizeAttenuation: sizeAttenuation,
        color: color,
        map: texture,
        depthTest: false  //设置解决透明度有问题的情况
    });


    var range = 120;
    for (var i = 0; i < 15000; i++) {
        //添加顶点的坐标
        var particle = new THREE.Vector3(Math.random() * range - range / 2, Math.random() * range - range / 2, Math.random() * range - range / 2);
        particle.velocityY = 0.1 + Math.random() / 5;
        particle.velocityX = (Math.random() - 0.5) / 3;
        geom.vertices.push(particle);
        var color = new THREE.Color(0xffffff);
        //.setHSL ( h, s, l ) h — 色调值在0.0和1.0之间 s — 饱和值在0.0和1.0之间 l — 亮度值在0.0和1.0之间。 使用HSL设置颜色。
        //随机当前每个粒子的亮度
        //color.setHSL(color.getHSL().h, color.getHSL().s, Math.random() * color.getHSL().l);
        geom.colors.push(color);
    }

    //生成模型，添加到场景当中
    cloud = new THREE.Points(geom, material);
    cloud.verticesNeedUpdate = true;

    scene.add(cloud);
}

function render() {

    //产生雨滴动画效果
    var vertices = cloud.geometry.vertices;
    vertices.forEach(function (v) {

        v.y = v.y - (v.velocityY);
        v.x = v.x - (v.velocityX) * .5;

        if (v.y <= -60) v.y = 60;
        if (v.x <= -20 || v.x >= 20) v.velocityX = v.velocityX * -1;
    });

    //设置实时更新网格的顶点信息
    cloud.geometry.verticesNeedUpdate = true;

    renderer.render(scene, camera);
}

//窗口变动触发的函数
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    render();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {
    //更新控制器
    controls.update();
    render();

    //更新性能插件
  //  stats.update();
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
   // initStats();
    initGui();
    animate();
    window.onresize = onWindowResize;
}

export default {
    init: draw
}