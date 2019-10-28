/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 09:12:51
 * @LastEditTime: 2019-10-28 17:05:20
 * @LastEditors: Please set LastEditors
 */
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
function init() {
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
    _camera.position.set(100, 300, 600);
    _camera.lookAt(new THREE.Vector3(250, 0, 0))

    let pointList = [
        [0, 0],
        [300, 0],
        [300, 100],
        [200, 200],
        [0, 200],
        [0, 0]
    ]
    const geometryArray = [];
    for (let i of pointList) {
        geometryArray.push(
            new THREE.Vector2(i[0], i[1])
        );
    }
    var shape = new THREE.Shape(geometryArray);
    var extrudeSettings = {
        steps: 2,
        depth: 20,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 1,
        bevelOffset: 0,
        bevelSegments: 1
    };
    /**创建轮廓的扫描轨迹(3D样条曲线)*/
    var curve = new THREE.SplineCurve3([
        new THREE.Vector3( 100, 500, -50 ),
        new THREE.Vector3( 100, 0, 0 ),
        new THREE.Vector3( 80, 500, 500 ),
        new THREE.Vector3( -50, 10, 100)
    ]);
    var geometry1 = new THREE.ExtrudeGeometry(//拉伸造型
        shape,//二维轮廓
        //拉伸参数
        {
            bevelEnabled:false,//无倒角
            extrudePath:curve,//选择扫描轨迹
            steps:50//扫描方向细分数
        }
    );
    // var geometry1 = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material1 = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
       // wireframe: true
    });
    var mesh = new THREE.Mesh(geometry1, material1);
    _scene.add(mesh)
    //position属性指定了相机所处的位置。
    //lookAt函数指定相机观察的方向。
    //实际上position的值和lookAt接收的参数都是一个类型为Vector3的对象，
    //这个对象用来表示三维空间中的坐标，它有三个属性：x、y、z分别代表距离x轴、距离y轴、距离z轴的距离。

    // 创建平行光-照亮几何体
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
    directionalLight.position.set(-400, 800, 1200);
    _scene.add(directionalLight);
    // 创建环境光
    var ambientLight = new THREE.AmbientLight(0xffffff);
    _scene.add(ambientLight);
   

    var axisHelper = new THREE.AxisHelper(600);
    _scene.add(axisHelper);

    var controls;
    function initControls() {

        controls = new OrbitControls(_camera, _renderer.domElement);

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

    let _renderer = new THREE.WebGLRenderer();
    //_renderer.setSize(window.innerWidth, window.innerHeight);
    let _container = document.getElementById('conianer');

    _renderer.setSize(_container.offsetWidth, _container.offsetHeight);
    _container.appendChild(_renderer.domElement);
    _renderer.render(_scene, _camera);

    function animate() {

        requestAnimationFrame(animate);
        _renderer.render(_scene, _camera);
    }

    animate()
    initControls()
}


export default {
    init: init
}