import * as THREE from 'three'

let _scene = new THREE.Scene();
let _sceneOrtho = new THREE.Scene();

let _renderer, _camera, _cameraOrtho, mesh;

/**
 * @description: 构造相机
 * @param {type} 
 * @return: 
 */
function initCamera() {
    _camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1100);
    // _camera.target = new THREE.Vector3(0, 0, 0);
    _camera.position.set(0, 0, 2000);
    //lookAt函数指定相机观察的方向。
      _camera.lookAt(new THREE.Vector3(0, 0, 0))
}

/**
 * @description: 构造渲染器
 * @param {type} 
 * @return: 
 */
function initRenderer() {
    _renderer = new THREE.WebGLRenderer();
    _renderer.setSize(window.innerWidth, window.innerHeight);
    let _container = document.getElementById('conianer');
    _container.appendChild(_renderer.domElement);
}

/**
 * @description: 构造动画
 * @param {type} 
 * @return: 
 */
function animate() {
    requestAnimationFrame(animate);
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    _renderer.render(_scene, _camera);
}

/**
 * @description: 添加球形
 * @param {type} 
 * @return: 
 */
function addSphereGeo() {
    //创建球和添加贴图材质
    mesh = new THREE.Mesh(new THREE.SphereGeometry(1000, 60, 40),
        new THREE.MeshBasicMaterial(
            { map: new THREE.ImageUtils.loadTexture('../img/p3.jpg') }
        ));
    //将Material的scale的一个属性设置为负值，材料即可附着在几何体的内部：
    mesh.scale.x = -1;
    _scene.add(mesh);
    //相机的中心点移动到球的中心：
   // _camera.position.set(0, 0, 0);
}



/**
 * @description: 添加箱子
 * @param {type} 
 * @return: 
 */
function addBoxGeo() {
    var geometry = new THREE.BoxGeometry(200, 100, 100);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var mesh = new THREE.Mesh(geometry, material);
    _scene.add(mesh);

    _camera.position.set(0, 300, 600);

    // 创建平行光-照亮几何体
    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-4, 8, 12);
    _scene.add(directionalLight);
    // 创建环境光
    var ambientLight = new THREE.AmbientLight(0xffffff);
    _scene.add(ambientLight);
}


initCamera();
//addSphereGeo();
addBoxGeo()
initRenderer();
animate();
