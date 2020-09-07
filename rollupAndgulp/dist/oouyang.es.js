(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.oouyang = {}));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var version = "1.0.0";

  var Test = /*#__PURE__*/function () {
    function Test() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, Test);

      this.name = options.name || 'oouyang';
      this.version = version;
    }
    /**
     * 获取jstsMap的名称
     * @return name
     */


    createClass(Test, [{
      key: "getName",
      value: function getName() {
        return this.name;
      }
      /**
       * 设置jstsMap的名称
       * @param {String} name 
       */

    }, {
      key: "setName",
      value: function setName(name) {
        this.name = name;
      }
      /**
       * 获取当前版本号
       */

    }, {
      key: "getVersion",
      value: function getVersion() {
        return this.version;
      }
    }]);

    return Test;
  }();

  var JstsMap = /*#__PURE__*/function () {
    function JstsMap() {

      classCallCheck(this, JstsMap);

      this._initJstsObject();
    }
    /**
     * 初始化Jsts对象
     */


    createClass(JstsMap, [{
      key: "_initJstsObject",
      value: function _initJstsObject() {
        //const jsts = require('jsts')
        this.geoReader = new jsts.io.GeoJSONReader(), this.geoWriter = new jsts.io.GeoJSONWriter();
      }
      /**
       * @desc 求geometry的面积,当geo不为Polygon,area为0
       * @param {*} geo 
       * @returns Number
       */

    }, {
      key: "getArea",
      value: function getArea(geo) {
        var area = this.geoReader.read(geo).getArea();
        return area;
      }
      /**
       *  求geometry的长度,当geo为Polygon,length为周长
       * @param {*} geo 
       * @returns Number
       */

    }, {
      key: "getLength",
      value: function getLength(geo) {
        var length = this.geoReader.read(geo).getLength();
        return length;
      }
      /**
       * 获取geometry的质心（形心）一定在物体内。
       * @param {*} geo 
       * @returns Point
       */

    }, {
      key: "getCentroid",
      value: function getCentroid(geo) {
        var geoPoint = this.geoReader.read(geo).getCentroid();
        var Point = this.geoWriter.write(geoPoint);
        return Point;
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

    }, {
      key: "buffer",
      value: function buffer(geo, dis) {
        var quadrantSegments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
        var bufferGeo = this.geoReader.read(geo).buffer(dis, quadrantSegments);
        var bufferPolygon = this.geoWriter.write(bufferGeo);
        return bufferPolygon;
      }
      /**
       * 判断两个geometry是否相交
       * @param {*} geo1 
       * @param {*} geo2 
       * @returns Boolean
       */

    }, {
      key: "intersects",
      value: function intersects(geo1, geo2) {
        return this.geoReader.read(geo1).intersects(this.geoReader.read(geo2));
      }
      /**
       * 两个geometry交集
       * @param {Geometry} geo1 
       * @param {Geometry} geo2 
       * @returns Polygon || MultiPolygon
       */

    }, {
      key: "intersection",
      value: function intersection(geo1, geo2) {
        var intersectionGeometry = this.geoReader.read(geo1).intersection(this.geoReader.read(geo2));
        var intersectionPolygon = this.geoWriter.write(intersectionGeometry);
        return intersectionPolygon;
      }
      /**
       * 两个geometry的差集  geo1 -geo2
       * @param {*} geo1 
       * @param {*} geo2 
       * @returns Polygon || MultiPolygon
       */

    }, {
      key: "symDifference",
      value: function symDifference(geo1, geo2) {
        var symDifferenceGeometry = this.geoReader.read(geo1).difference(this.geoReader.read(geo2));
        var symDifferencePolygon = this.geoWriter.write(symDifferenceGeometry);
        return symDifferencePolygon;
      }
      /**
       * 求并集
       * @param {*} geo1 
       * @param {*} geo2 
       *  Polygon || MultiPolygon
       */

    }, {
      key: "union",
      value: function union(geo1, geo2) {
        var unionGeometry = this.geoReader.read(geo1).union(this.geoReader.read(geo2));
        var unionPolygon = this.geoWriter.write(unionGeometry);
        return unionPolygon;
      }
    }]);

    return JstsMap;
  }();

  var index = 42;

  function main () {
    console.log('the answer is ' + index);
  }

  exports.JstsMap = JstsMap;
  exports.Test = Test;
  exports.default = main;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
