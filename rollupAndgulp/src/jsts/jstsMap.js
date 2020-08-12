

class JstsMap {
    constructor(options = {}) {
        this._initJstsObject()
    }

    /**
     * 初始化Jsts对象
     */
    _initJstsObject() {
       // const jsts = require('jsts')
        debugger
        this.geoReader = new jsts.io.GeoJSONReader(),
            this.geoWriter = new jsts.io.GeoJSONWriter();
    }


    /**
     * 两个geometry相交
     * @param {Geometry} geo1 
     * @param {Geometry} geo2 
     * @returns Polygon
     */
    intersection(geo1, geo2) {
        let intersectionGeometry = this.geoReader.read(geo1).intersection(this.geoReader.read(geo2));

        let intersectionPolygon = this.geoWriter.write(intersectionGeometry);

        return intersectionPolygon;
    }

}

export default JstsMap;
export { JstsMap }