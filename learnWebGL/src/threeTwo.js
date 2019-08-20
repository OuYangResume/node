/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 15:00:55
 * @LastEditTime: 2019-08-20 15:27:16
 * @LastEditors: Please set LastEditors
 */
import * as THREE from 'three'

const {
    PerspectiveCamera, OrthographicCamera, Vector3, Texture, SpriteMaterial, Sprite,
    Scene, SphereGeometry, Mesh, MeshBasicMaterial, BoxGeometry,
    ImageUtils, WebGLRenderer, DirectionalLight, AmbientLight,
} = THREE;


let _renderer, _camera, _scene, mesh, _isUserInteracting;
var _lon = 0, _lat = 0;
var _onPointerDownLon = 0, _onPointerDownLat = 0;
var _onPointerDownPointerX = 0, _onPointerDownPointerY = 0;
var _lables = [];var _sprites = [];

let _cameraOrtho, _sceneOrtho;
var _clickableObjects = [];
//标记   {position:{lon:114,lat:38},logoUrl:'lableLogo.png',text:'我是一个标记'}
let lables = [{ position: { lon: 114, lat: 38 }, logoUrl: 'lableLogo.png', text: '我是一个标记' }], sprite = 'label';

/**
 * @description: 构造相机
 * @param {type} 
 * @return: 
 */
function initCamera() {

    _camera = new PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1100);
    _camera.target = new Vector3(0, 0, 0);

    _cameraOrtho = new OrthographicCamera(-window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight / 2, 1, 10);
    _cameraOrtho.position.z = 10;

    // _camera.position.set(0, 0, 2000);
    //lookAt函数指定相机观察的方向。
    //_camera.lookAt(new  Vector3(0, 0, 0))
    _scene = new Scene();
    _sceneOrtho = new Scene();
}

/**
 * @description: 构造渲染器
 * @param {type} 
 * @return: 
 */
function initRenderer() {
    _renderer = new WebGLRenderer();
    //将输出canvas的大小调整为(width, height)并考虑设备像素比，
    _renderer.setSize(window.innerWidth, window.innerHeight);
    //定义渲染器是否在渲染每一帧之前自动清除其输出。
    _renderer.autoClear = false;
    let _container = document.getElementById('conianer');
    //  stat = new Stats();
    // document.body.appendChild(stat.dom);
    //一个canvas，渲染器在其上绘制输出。
    _container.appendChild(_renderer.domElement);
    /**
     * @description: 监听当鼠标指针移动到元素上方，并按下鼠标按键（左、右键均可）时，会发生 mousedown 事件。
     * 并且记录起始的屏幕坐标，以及起始的相机lookAt的坐标。
     * @param {type} 
     * @return: 
     */
    _container.addEventListener('mousedown', (event) => {
        event.preventDefault();
        _isUserInteracting = true;
        _onPointerDownPointerX = event.clientX;
        _onPointerDownPointerY = event.clientY;
        _onPointerDownLon = _lon;
        _onPointerDownLat = _lat;
    });

    /**
     * @description: 当指针设备( 通常指鼠标 )在元素上移动时, mousemove 事件被触发。
     * 当_isUserInteracting为true时，实时计算当前相机lookAt的真实坐标。
     * @param {type} 
     * @return: 
     */
    _container.addEventListener('mousemove', (event) => {
        if (_isUserInteracting) {
            _lon = (_onPointerDownPointerX - event.clientX) * 0.1 + _onPointerDownLon;
            _lat = (event.clientY - _onPointerDownPointerY) * 0.1 + _onPointerDownLat;
        }
    });
    /**
     * @description: 当在元素上松开鼠标按键（左、右键均可）时，会发生 mouseup 事件。 
     * @param {type} 
     * @return: 
     */
    _container.addEventListener('mouseup', (event) => {
        _isUserInteracting = false;
    });

    /**
     * @description: 监听鼠标的滚轮事件
     * @param {type} 
     * @return: 
     */
    _container.addEventListener('mousewheel', function (e) {
        var delta = e.deltaY > 0 ? 15 : -15;
        if (_camera.fov + delta * 0.05 >= 10 && _camera.fov + delta * 0.05 <= 120) {
            _camera.fov += delta * 0.05;
            //更新摄像机投影矩阵。在任何参数被改变以后必须被调用。
            _camera.updateProjectionMatrix();
        }
    }, false);
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
    addSprites();
    _renderer.render(_scene, _camera);
    _renderer.render(_sceneOrtho, _cameraOrtho);
}

let _pRadius = 1000;

function calPosition() {
    //min() 方法可返回指定的数字中带有最低值的数字。
    // Math.max() 函数返回一组数中的最大值。
    _lat = Math.max(-85, Math.min(85, _lat));
    //将度转化为弧度。
    var phi = THREE.Math.degToRad(90 - _lat);
    var theta = THREE.Math.degToRad(_lon);
    _camera.target.x = _pRadius * Math.sin(phi) * Math.cos(theta);
    _camera.target.y = _pRadius * Math.cos(phi);
    _camera.target.z = _pRadius * Math.sin(phi) * Math.sin(theta);
    _camera.lookAt(_camera.target);
}
function initLable(lables, sprite) {
    if (sprite == 'label') {
        for (var i = 0; i < lables.length; i++) {
            _lables.push(createLableSprite(_sceneOrtho, lables[i].text, lables[i].position));
        }
    } else if (sprite == 'icon') {
        for (var i = 0; i < lables.length; i++) {
            _sprites.push(createSprite(lables[i].position, lables[i].logoUrl, lables[i].text));
        }
    }
}
// 创建文字标记
function createLableSprite(scene, name, position) {
    var canvas1 = document.createElement('canvas');
    var context1 = canvas1.getContext('2d');
    var metrics = context1.measureText(name);
    var width = metrics.width * 1.5;
    context1.font = "10px 宋体";
    context1.fillStyle = "rgba(0,0,0,0.95)";
    context1.fillRect(0, 0, width + 8, 20 + 8);
    context1.fillStyle = "rgba(0,0,0,0.2)";
    context1.fillRect(2, 2, width + 4, 20 + 4);
    context1.fillStyle = "rgba(255,255,255,0.95)";
    context1.fillText(name, 4, 20);
    var texture1 = new Texture(canvas1);
    texture1.needsUpdate = true;
    var spriteMaterial = new SpriteMaterial({ map: texture1 });
    var sprite1 = new Sprite(spriteMaterial);
    sprite1.scale.set(1.0, 1.0, 1.0);
    sprite1.position.set(0, 0, 0);
    sprite1.name = name;
    var lable = {
        name: name,
        pos: position,
        canvas: canvas1,
        context: context1,
        texture: texture1,
        sprite: sprite1
    };
    _sceneOrtho.add(lable.sprite);
   // _clickableObjects.push(lable.sprite);
    return lable;
}
// 创建图片标记
function createSprite(position, url, name) {
    const textureLoader = new TextureLoader();
    const ballMaterial = new SpriteMaterial({
        map: textureLoader.load(url)
    });
    const sp = {
        pos: position,
        name: name,
        sprite: new Sprite(ballMaterial)
    };
    sp.sprite.scale.set(32, 32, 1.0);
    sp.sprite.name = name;
    _sceneOrtho.add(sp.sprite);
    return sp;
}
function addSprites() {
    if (typeof (_sprites) != "undefined") {
        for (var i = 0; i < _sprites.length; i++) {
            var wp = geoPosition2World(_sprites[i].pos.lon, _sprites[i].pos.lat);
            var sp = worldPostion2Screen(wp, _camera);
            var test = wp.clone();
            test.project(_camera);
            if (test.x > -1 && test.x < 1 && test.y > -1 && test.y < 1 && test.z > -1 && test.z < 1) {
                _sprites[i].sprite.scale.set(32, 32, 32);
                _sprites[i].sprite.position.set(sp.x, sp.y, 1);
            }
            else {
                _sprites[i].sprite.scale.set(1.0, 1.0, 1.0);
                _sprites[i].sprite.position.set(0, 0, 0);
            }
        }
    }
    if (typeof (_lables) != "undefined") {
        for (var i = 0; i < _lables.length; i++) {
            var wp = geoPosition2World(_lables[i].pos.lon, _lables[i].pos.lat);
            var sp = worldPostion2Screen(wp, _camera);
            var test = wp.clone();
            test.project(_camera);
            if (test.x > -1 && test.x < 1 && test.y > -1 && test.y < 1 && test.z > -1 && test.z < 1) {
                var metrics = _lables[i].context.measureText(_lables[i].name);
                var width = metrics.width * 3.5;
                _lables[i].sprite.scale.set(400, 150, 1.0);
                _lables[i].sprite.position.set(sp.x + width, sp.y - 40, 1);
            }
            else {
                _lables[i].sprite.scale.set(1.0, 1.0, 1.0);
                _lables[i].sprite.position.set(0, 0, 0);
            }
        }
    }
}

function geoPosition2World(lon, lat) {
    lat = Math.max(-85, Math.min(85, lat));
    var phi = THREE.Math.degToRad(90 - lat);
    var theta = THREE.Math.degToRad(lon);

    var result = {
        x: _pRadius * Math.sin(phi) * Math.cos(theta),
        y: _pRadius * Math.cos(phi),
        z: _pRadius * Math.sin(phi) * Math.sin(theta)
    }
    return new Vector3(result.x, result.y, result.z);
}

function worldPostion2Screen(world_vector, camera) {
    var vector = world_vector.clone();
    vector.project(camera);
    var result = {
        x: Math.round((vector.x + 1) * window.innerWidth / 2 - window.innerWidth / 2),
        y: Math.round(window.innerHeight / 2 - (-vector.y + 1) * window.innerHeight / 2),
        z: 0
    };
    return new Vector3(result.x, result.y, result.z);
}
/**
 * @description: 添加球形
 * @param {type} 
 * @return: 
 */
function addSphereGeo() {
    let geometry = new SphereGeometry(1000, 60, 40);
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
initLable(lables, sprite);
animate();
