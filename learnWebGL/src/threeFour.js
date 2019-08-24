/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 10:15:34
 * @LastEditTime: 2019-08-24 10:51:48
 * @LastEditors: Please set LastEditors
 */
import * as THREE from 'three'
//OrbitControls不是核心的一部分。您必须将类转换为模块并单独导入它。
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


class VR {
    constructor(options) {
        
        this.setCameraPara(this,options.cameraPara,options.cameraPosition)
    }

    setCameraPara(that, cameraPara, cameraPosition) {
        that.cameraPara = { "fov": 90, "aspect": that.container.innerWidth / that.container.innerHeight, "near": 0.001, "far": 1000 };
        that.cameraPosition = { "x": 0, "y": 0, "z": 0 };
        if (cameraPara) {
            for (var property in cameraPara) {
                that.cameraPara[property] = cameraPara[property];
            }
        }
        if (cameraPosition) {
            for (var property in cameraPosition) {
                that.cameraPosition[property] = cameraPosition[property];
            }
        }
    }
}

export default VR;