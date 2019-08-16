import * as THREE from 'three';

let scene = new THREE.Scene();

let renderer = new THREE.WebGLRenderer();
let container = document.getElementById('conianer');
container.appendChild(renderer.domElement);
debugger;
//创建相机
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 1000);
//指定相机观察的方向
camera.lookAt(new THREE.Vector3(0, 0, 0.0001));
//指定了相机所处的位置。
camera.position.set(0, 0, 0);

let VRObject=new THREE.Object3D();

scene.add(camera);
scene.add(VRObject);



/**
 * @description: 设置相机的默认属性
 * @param {type} 
 * @return: 
 */
function setCameraPara(cameraPara, cameraPosition) {
    cameraPara = { "fov": 90, "aspect": container.innerWidth / container.innerHeight, "near": 0.001, "far": 1000 };
    cameraPosition = { "x": 0, "y": 0, "z": 0 };
    if (cameraPara) {
        for (var property in cameraPara) {
            cameraPara[property] = cameraPara[property];
        }
    }
    if (cameraPosition) {
        for (var property in cameraPosition) {
            cameraPosition[property] = cameraPosition[property];
        }
    }
};