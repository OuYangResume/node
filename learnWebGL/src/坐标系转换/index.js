/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 14:00:59
 * @LastEditTime: 2019-08-28 18:53:42
 * @LastEditors: Please set LastEditors
 */

import * as THREE from 'three';
import * as dat from 'dat.gui';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
var renderer, camera, scene, gui, light, stats, controls;
var cube, cube2, cube3, earth;


var container;

function initContainer() {
    container = document.getElementById('conianer');
}
function initRender() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    // renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0xeeeeee);
    renderer.shadowMap.enabled = true;
    //告诉渲染器需要阴影效果
    container.appendChild(renderer.domElement);
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.set(0, 0, 100);
}

function initScene() {
    //给场景添加天空盒子纹理
    var cubeTextureLoader = new THREE.CubeTextureLoader();
    cubeTextureLoader.setPath('../../img/space/');
    //六张图片分别是朝前的（posz）、朝后的（negz）、朝上的（posy）、朝下的（negy）、朝右的（posx）和朝左的（negx）。
    var cubeTexture = cubeTextureLoader.load([
        'right.jpg', 'left.jpg',
        'top.jpg', 'bottom.jpg',
        'front.jpg', 'back.jpg'
    ]);

    scene = new THREE.Scene();

    scene.background = cubeTexture;
}

//初始化dat.GUI简化试验流程
function initGui() {
    //声明一个保存需求修改的相关数据的对象
    gui = {
    };
    var datGui = new dat.GUI();
    //将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）
}

function initLight() {
    scene.add(new THREE.AmbientLight(0x444444));

    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 10, 10);

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

    //添加地球
    var geometry = new THREE.SphereGeometry(5, 60, 30);
    material = new THREE.MeshPhongMaterial({
        color:0x666666
    });

    //添加高光贴图
    material.specularMap = new THREE.TextureLoader().load("../../img/earth_specular_2048.jpg");

    //添加高光颜色
    material.specular = new THREE.Color(0x00ffff);

    //添加高光的平滑度，默认为30，值越高越强烈
    material.shininess = 10;

    //添加到场景
    earth = new THREE.Mesh(geometry, material);
    scene.add(earth);


    var material = new THREE.MeshStandardMaterial({ color: 0x00ffff });

    //添加立方体
    var geometry = new THREE.BoxBufferGeometry(4, 4, 4);

    //添加第一个
     cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    //添加第二个
    cube2 = new THREE.Mesh(geometry, material);
    cube2.position.set(15, 15, -8);
    scene.add(cube2);

    //添加第三个
    cube3 = new THREE.Mesh(geometry, material);
    cube3.position.set(-15, 15, 8);
    scene.add(cube3);

    //添加中间显示的球体
    var geometry1 = new THREE.SphereBufferGeometry(23, 100, 50);
    //将纹理的环境纹理设置为scene的背景纹理
    var sphereMaterial = new THREE.MeshLambertMaterial({ envMap: scene.background });
    var sphereMesh = new THREE.Mesh(geometry1, sphereMaterial);
    scene.add(sphereMesh);



//     //添加地球
//     var geometry2 = new THREE.SphereGeometry(3, 60, 30);
//    var earthMaterial= new THREE.MeshPhongMaterial({
//         color: 0x666666
//     });

//     //将纹理的环境纹理设置为scene的背景纹理
//     var earthMaterial = new THREE.MeshLambertMaterial({ color: 0x666666 });
//     earthMaterial.specularMap = new THREE.TextureLoader().load("../../img/earth_specular_2048.jpg");
//     //添加高光颜色
//     earthMaterial.specular = new THREE.Color(0x00ffff);
//     //添加高光的平滑度，默认为30，值越高越强烈
//     earthMaterial.shininess = 30;
//     earth = new THREE.Mesh(geometry2, earthMaterial);

//     scene.add(earth);
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

//每帧额外的运算
function render() {
    renderer.render(scene, camera);

    //让地球自转
    earth.rotation.y += 0.01;
    //获取到窗口的一半高度和一半宽度
    let halfWidth = container.offsetWidth / 2;
    let halfHeight = container.offsetHeight / 2;

    let vector1 = cube.position.clone().project(camera);
    let vector2 = cube2.position.clone().project(camera);
    let vector3 = cube3.position.clone().project(camera);


    var oneLeft = (vector3.x * halfWidth + halfWidth).toString() + 'px';
    var oneTop = (-vector3.y * halfHeight + halfHeight).toString() + 'px';
    var one = document.getElementsByClassName('one')[0];
    one.style.position = "absolute";
    one.style.top = oneTop;
    one.style.left = oneLeft;

    // 修改第一个的div的位置
    // $(".one").css({
    //     left:vector1.x * halfWidth + halfWidth,
    //     top:-vector1.y * halfHeight + halfHeight
    // });


    // $(".two").css({
    //     left:vector2.x * halfWidth + halfWidth,
    //     top:-vector2.y * halfHeight + halfHeight
    // });


    // $(".three").css({
    //     left:vector3.x * halfWidth + halfWidth,
    //     top:-vector3.y * halfHeight + halfHeight
    // });

}

//窗口变动触发的函数
function onWindowResize() {

    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);

}

function animate() {
    //每帧额外的运算
    render();

    //更新性能插件
    //  stats.update();

    controls.update();


    requestAnimationFrame(animate);
}

function draw() {
    //兼容性判断
    // if (!Detector.webgl) Detector.addGetWebGLMessage();

    initContainer();
    //  initGui();
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