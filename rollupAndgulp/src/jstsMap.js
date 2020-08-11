

import { version } from '../package.json';
class jstsMap {
    constructor(options = {}) {
        this.name = options.name || 'oouyang';
        this.version = version;
    }

    /**
     * 获取jstsMap的名称
     * @return name
     */
    getName() {
        return this.name;
    }

    /**
     * 设置jstsMap的名称
     * @param {String} name 
     */
    setName(name) {
        this.name = name
    }

    /**
     * 获取当前版本号
     */
    getVersion() {
        return this.version;
    }
}

export { jstsMap }

export default jstsMap 