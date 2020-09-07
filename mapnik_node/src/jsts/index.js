import axios from "axios"
//import * as turf from "@turf/turf"


import { version } from '../../package.json';
class jstsMap {
    constructor(options = {}) {
        this.name = 'oouyang';
        this.version = version;
    }
    getAreaInfoData(areacode) {
        let formData = new FormData()
        formData.append("token", "3086dae859bb41a4ab8855e827ed0747");
        formData.append("paramCode", "KJ5006");
        formData.append("areacode", areacode);
        return axios({
            method: 'post',
            url: 'http://58.250.156.18:8088/ksj_api/common_api/getKjQuery',
            data: formData
        }).then(res => {
            return res.data.data.data
        })
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name
    }
}

let jstsMapObjet = new jstsMap()
console.log(jstsMapObjet.getName())
export { jstsMap }

export default jstsMap 