/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 10:15:34
 * @LastEditTime: 2019-08-26 16:43:22
 * @LastEditors: Please set LastEditors
 */
import * as THREE from 'three'
const {
    PerspectiveCamera, OrthographicCamera, Vector3, Texture, SpriteMaterial, Sprite,
    Scene, SphereGeometry, Mesh, MeshBasicMaterial, BoxGeometry,
    ImageUtils, WebGLRenderer, DirectionalLight, AmbientLight,
} = THREE;
//OrbitControls不是核心的一部分。您必须将类转换为模块并单独导入它。
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class VR {
    constructor(options) {
        //检查参数并挂载
        this._initParm(options)
        this._init();
    }


    _init() {
        console.log(this);
        this._scene = new Scene();
        this._renderer = new WebGLRenderer();
        this._renderer.setSize(this._container.offsetWidth, this._container.offsetHeight);
        //一个canvas，渲染器在其上绘制输出。
        this._container.appendChild(this._renderer.domElement);
        //
        this._camera = new PerspectiveCamera(this.cameraPara.fov, this.cameraPara.aspect, this.cameraPara.near, this.cameraPara.far);
      //  this._camera.position.set(this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z);
        this._camera.lookAt(new Vector3(0, 0, 0))

        let mesh = this._addImg(this.imageUrl);
        this._scene.add(mesh);
        this._camera.position.set(20, 0, 0);

        //坐标插件
        this._scene.add(new THREE.AxisHelper(1000));
    }
    render() {
        this._renderer.render(this._scene, this._camera);
    }
    

    _addImg(url) {
        const texture = THREE.ImageUtils.loadTexture(url);
        const material = new MeshBasicMaterial({ map: texture });
        const geometry = new SphereGeometry(10, 256, 256);
        // const geometry = new THREE.SphereGeometry(50, 256, 256);
        const mesh = new Mesh(geometry, material);
        // 渲染球体的双面
        material.side = THREE.DoubleSide;
        return mesh;
    }


    _initParm(options) {
        //检查
        if (!options.container) {
            console.error("请设置必填字段container")
            return;
        } else {
            this._container = document.getElementById(options.container);
            if (this._container == null) {
                console.error("没有找到id为" + options.container + "元素")
                return;
            }
        }
        //检查渲染图片
        if (!options.imageUrl) {
            console.error("请设置必填字段imageUrl")
            return;
        } else {
            this._imageUrl = options.imageUrl;
        }

        //默认相机参数
        this.cameraPara = { "fov": 90, "aspect": this._container.offsetWidth / this._container.offsetHeight, "near": 0.1, "far": 100 };
        this.cameraPosition = { "x": 0, "y": 0, "z": 0 }; 
        let cameraPara = options.cameraPara, cameraPosition = options.cameraPosition
        if (cameraPara) {
            for (var property in cameraPara) {
                if (!this.cameraPara[property]) {
                    console.error(property + "字段无效,请检查")
                } else {
                    this.cameraPara[property] = cameraPara[property];
                }

            }
        }
        if (cameraPosition) {
            for (var property in cameraPosition) {
                if (!this.cameraPosition[property]) {
                    console.error(property + "字段无效,请检查")
                } else {
                    this.cameraPosition[property] = cameraPosition[property];
                }
            }
        }
    }
}

export default VR;