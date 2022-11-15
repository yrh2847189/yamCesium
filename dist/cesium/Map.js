(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../scene/camera/Camera"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Camera_1 = require("../scene/camera/Camera");
    /**
     * @class Map
     * 地图相关操作类
     */
    var Map = /** @class */ (function () {
        /**
         * 地图相关操作类
         * @param {Cesium.Viewer} viewer
         */
        function Map(viewer) {
            if (!viewer) {
                throw Error("the constructor of Map need a parameter of type Cesium.Viewer");
            }
            // 去除版权信息
            // @ts-ignore
            viewer._cesiumWidget._creditContainer.style.display = "none";
            this._camera = new Camera_1.default(viewer);
        }
        Object.defineProperty(Map.prototype, "camera", {
            /**
             * @constant
             * @desc 相机相关操作类
             */
            get: function () {
                return this._camera;
            },
            enumerable: false,
            configurable: true
        });
        return Map;
    }());
    exports.default = Map;
});
