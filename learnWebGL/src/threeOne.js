/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 09:12:51
 * @LastEditTime: 2019-08-24 11:03:43
 * @LastEditors: Please set LastEditors
 */
import * as THREE from "three"
function init(){
    let _scene = new THREE.Scene();
    //（正交投影相机）他不具有透视效果，即物体的大小不受远近距离的影响，对应的是投影中的正交投影。
    //我们数学课本上所画的几何体大多数都采用这种投影。
    // _camera = new OrthographicCamera(left, right, top, bottom, near, far);
    //left, right, top, bottom分别对应上、下、左、右、远、近的一个距离，
    //超过这些距离的元素将不会出现在视野范围内，也不会被浏览器绘制。
    //实际上，这六个距离就构成了一个立方体，所以OrthographicCamera的可视范围永远在这个立方体内。
    
    // let _camera = new THREE.OrthographicCamera(-window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight / 2, 0.1, 1000);
    // _camera.lookAt(new THREE.Vector3(0, 0, 0))
    
    
    //创建（透视相机），这符合我们正常人的视野，近大远小，对应的是投影中的透视投影。
    //_camera = new PerspectiveCamera(fov, aspect, near, far);
    //视角，长宽比，近,远裁剪面
    var _camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    _camera.position.set(0, 300, 600);
    _camera.lookAt(new THREE.Vector3(0, 0, 0))
    
    //position属性指定了相机所处的位置。
    //lookAt函数指定相机观察的方向。
    //实际上position的值和lookAt接收的参数都是一个类型为Vector3的对象，
    //这个对象用来表示三维空间中的坐标，它有三个属性：x、y、z分别代表距离x轴、距离y轴、距离z轴的距离。
    
    
    var geometry = new THREE.BoxGeometry(200, 100, 100);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var mesh = new THREE.Mesh(geometry, material);
    _scene.add(mesh);
    
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3( -100, 0, 0) );
    geometry.vertices.push(new THREE.Vector3( 0, 100, 0) );
    geometry.vertices.push(new THREE.Vector3( 100, 0, 0) );
    var LineMaterial = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
    var line = new THREE.Line( geometry, LineMaterial );
    _scene.add(line)
    
    // 创建平行光-照亮几何体
    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-4, 8, 12);
    _scene.add(directionalLight);
    // 创建环境光
    var ambientLight = new THREE.AmbientLight(0xffffff);
    _scene.add(ambientLight);
    
    
    var axisHelper = new THREE.AxisHelper(600);
    _scene.add(axisHelper);
    
    
    
    let _renderer = new THREE.WebGLRenderer();
    //_renderer.setSize(window.innerWidth, window.innerHeight);
    let  _container = document.getElementById('conianer');
    
    _renderer.setSize(_container.offsetWidth, _container.offsetHeight);
    _container.appendChild(_renderer.domElement);
    _renderer.render(_scene, _camera);
    
    function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        _renderer.render(_scene, _camera);
    }
    
    animate()
}


export default {
    init:init
}