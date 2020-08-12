

class JstsMap {
    constructor(options = {}) {
        this._initJstsObject()
    }

    /**
     * 初始化Jsts对象
     */
    _initJstsObject() {
        //const jsts = require('jsts')
        this.geoReader = new jsts.io.GeoJSONReader(),
            this.geoWriter = new jsts.io.GeoJSONWriter();
    }

    /**
     * 求geometry的面积,当geo不为Polygon,area为0
     * @param {*} geo 
     * @returns Number
     */
    getArea(geo) {
        let area = this.geoReader.read(geo).getArea();
        return area
    }

    /**
     *  求geometry的长度,当geo为Polygon,length为周长
     * @param {*} geo 
     * @returns Number
     */
    getLength(geo) {
        let length = this.geoReader.read(geo).getLength();
        return length
    }

    /**
     * 获取geometry的质心（形心）一定在物体内。
     * @param {*} geo 
     * @returns Point
     */
    getCentroid(geo) {
        let geoPoint = this.geoReader.read(geo).getCentroid();
        let Point = this.geoWriter.write(geoPoint);
        return Point
    }

    /**
     * 
     * @param {geometry} geo 需要缓冲的geometry
     * @param {Int} dis 缓冲距离
     * @param {Int} quadrantSegments -用于表示圆的象限的线段数 
     * @param {Int} endCapStyle -使用的端盖样式
     * BufferOp.CAP_ROUND -（默认）半圆
     * BufferOp.CAP_BUTT -垂直于末端的直线
     * BufferOp.CAP_SQUARE -半个正方形
     */
    buffer(geo, dis, quadrantSegments = 10, endCapStyle) {
        let bufferGeo = this.geoReader.read(geo).buffer(dis, quadrantSegments);
        let bufferPolygon = this.geoWriter.write(bufferGeo);
        return bufferPolygon
    }

    /**
     * 判断两个geometry是否相交
     * @param {*} geo1 
     * @param {*} geo2 
     * @returns Boolean
     */
    intersects(geo1, geo2) {
        return this.geoReader.read(geo1).intersects(this.geoReader.read(geo2));
    }

    /**
     * 两个geometry交集
     * @param {Geometry} geo1 
     * @param {Geometry} geo2 
     * @returns Polygon || MultiPolygon
     */
    intersection(geo1, geo2) {
        let intersectionGeometry = this.geoReader.read(geo1).intersection(this.geoReader.read(geo2));
        let intersectionPolygon = this.geoWriter.write(intersectionGeometry);
        return intersectionPolygon;
    }

    /**
     * 两个geometry的差集  geo1 -geo2
     * @param {*} geo1 
     * @param {*} geo2 
     * @returns Polygon || MultiPolygon
     */
    symDifference(geo1, geo2) {
        let symDifferenceGeometry = this.geoReader.read(geo1).difference(this.geoReader.read(geo2));
        let symDifferencePolygon = this.geoWriter.write(symDifferenceGeometry);
        return symDifferencePolygon;
    }

    /**
     * 求并集
     * @param {*} geo1 
     * @param {*} geo2 
     *  Polygon || MultiPolygon
     */
    union(geo1, geo2) {
        let unionGeometry = this.geoReader.read(geo1).union(this.geoReader.read(geo2));

        let unionPolygon = this.geoWriter.write(unionGeometry);

        return unionPolygon;
    }


}

export default JstsMap;
export { JstsMap }