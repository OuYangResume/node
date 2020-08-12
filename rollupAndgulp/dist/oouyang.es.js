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
        // const jsts = require('jsts')
        debugger;
        this.geoReader = new jsts.io.GeoJSONReader(), this.geoWriter = new jsts.io.GeoJSONWriter();
      }
      /**
       * 两个geometry相交
       * @param {Geometry} geo1 
       * @param {Geometry} geo2 
       * @returns Polygon
       */

    }, {
      key: "intersection",
      value: function intersection(geo1, geo2) {
        var intersectionGeometry = this.geoReader.read(geo1).intersection(this.geoReader.read(geo2));
        var intersectionPolygon = this.geoWriter.write(intersectionGeometry);
        return intersectionPolygon;
      }
    }]);

    return JstsMap;
  }();

  exports.JstsMap = JstsMap;
  exports.Test = Test;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
