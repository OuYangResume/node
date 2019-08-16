import * as THREE from 'three'


const {
    PerspectiveCamera, Vector3,
    Scene, SphereGeometry, Mesh, MeshBasicMaterial, BoxGeometry,
    ImageUtils, WebGLRenderer, DirectionalLight, AmbientLight,
    Math,
} = THREE;


let _renderer, _camera, _scene, mesh, _isUserInteracting;
var _lon = 0, _lat = 0;
var _onPointerDownLon = 0, _onPointerDownLat = 0;
var _onPointerDownPointerX = 0, _onPointerDownPointerY = 0;
/**
 * @description: 构造相机
 * @param {type} 
 * @return: 
 */
function initCamera() {
    _camera = new PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1100);
    _camera.target = new Vector3(0, 0, 0);
    debugger;
    // _camera.position.set(0, 0, 2000);
    //lookAt函数指定相机观察的方向。
    //_camera.lookAt(new  Vector3(0, 0, 0))
    _scene = new Scene();
}

/**
 * @description: 构造渲染器
 * @param {type} 
 * @return: 
 */
function initRenderer() {
    _renderer = new WebGLRenderer();
    _renderer.setSize(window.innerWidth, window.innerHeight);
    _renderer.autoClear = false;
    let _container = document.getElementById('conianer');
    _container.appendChild(_renderer.domElement);

    _container.addEventListener('mousedown', (event) => {
        event.preventDefault();
        _isUserInteracting = true;
        _onPointerDownPointerX = event.clientX;
        _onPointerDownPointerY = event.clientY;
        _onPointerDownLon = _lon;
        _onPointerDownLat = _lat;
    });


    _container.addEventListener('mousemove', (event) => {
        if (_isUserInteracting) {
            _lon = (_onPointerDownPointerX - event.clientX) * 0.1 + _onPointerDownLon;
            _lat = (event.clientY - _onPointerDownPointerY) * 0.1 + _onPointerDownLat;
        }
    });

    _container.addEventListener('mouseup', (event) => {
        _isUserInteracting = false;
    });
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
    calPosition();
    _renderer.render(_scene, _camera);
}

let _pRadius = 1000;
function calPosition() {
    _lat = Math.max(-85, Math.min(85, _lat));
    var phi = THREE.Math.degToRad(90 - _lat);
    var theta = THREE.Math.degToRad(_lon);
    _camera.target.x = _pRadius * Math.sin(phi) * Math.cos(theta);
    _camera.target.y = _pRadius * Math.cos(phi);
    _camera.target.z = _pRadius * Math.sin(phi) * Math.sin(theta);
    _camera.lookAt(_camera.target);
}
/**
 * @description: 添加球形
 * @param {type} 
 * @return: 
 */
function addSphereGeo() {
    let geometry = new SphereGeometry(1000, 100, 100);
    let material = new MeshBasicMaterial(
        { map: new ImageUtils.loadTexture('../img/p3.png') }
    )
    geometry.scale(-1, 1, 1); //x取反（面朝里）
    //创建球和添加贴图材质
    mesh = new Mesh(geometry, material);

    _scene.add(mesh);
    //相机的中心点移动到球的中心：
    _camera.position.set(0, 0, 0);
}



/**
 * @description: 添加箱子
 * @param {type} 
 * @return: 
 */
function addBoxGeo() {
    var geometry = new BoxGeometry(200, 100, 100);
    var material = new MeshBasicMaterial({ color: 0x00ff00 });
    var mesh = new Mesh(geometry, material);
    _scene.add(mesh);

    _camera.position.set(0, 300, 600);

    // 创建平行光-照亮几何体
    var directionalLight = new DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-4, 8, 12);
    _scene.add(directionalLight);
    // 创建环境光
    var ambientLight = new AmbientLight(0xffffff);
    _scene.add(ambientLight);
}


initCamera();
addSphereGeo();
//addBoxGeo()
initRenderer();
animate();
