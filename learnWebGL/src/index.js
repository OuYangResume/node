import * as THREE from 'three';

//创建一个场景
var _scene = new THREE.Scene();
//创建一个相机，视角，长宽比，近远裁剪面
var _camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
_camera.position.set(0, 300, 600);
_camera.lookAt(new THREE.Vector3(0, 0, 0))
//渲染器
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// var cube = new THREE.Mesh(geometry, material);
// _scene.add(cube);

var geometry = new THREE.BoxGeometry(200, 100, 100);
var material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
var mesh = new THREE.Mesh(geometry, material);
_scene.add(mesh);

// 创建平行光-照亮几何体
var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(-4, 8, 12);
_scene.add(directionalLight);
// 创建环境光
var ambientLight = new THREE.AmbientLight(0xffffff);
_scene.add(ambientLight);






var animate = function () {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render(_scene, _camera);
};

animate();