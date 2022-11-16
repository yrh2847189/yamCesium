/**
 * 热力图
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "heatmap-ts", "cesium"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var heatmap_ts_1 = __importDefault(require("heatmap-ts"));
    var Cesium = __importStar(require("cesium"));
    var Heatmap = /** @class */ (function () {
        function Heatmap(options) {
            this._viewer = options.viewer;
            var heatDoc = document.createElement("div");
            heatDoc.setAttribute("style", "width:1000px;height:1000px;margin: 0px;display: none;");
            document.body.appendChild(heatDoc);
            var config = {
                container: heatDoc,
                radius: Cesium.defaultValue(options.radius, 20),
                maxOpacity: Cesium.defaultValue(options.maxOpacity, .5),
                minOpacity: Cesium.defaultValue(options.minOpacity, 0),
                blur: Cesium.defaultValue(options.blur, .75)
            };
            this.heatmap = new heatmap_ts_1.default(config);
            this.render(options.max, options.data);
            this.createRectangle(this._viewer, options.rect);
            return this.heatmap;
        }
        Heatmap.prototype.render = function (max, data) {
            this.heatmap.setData({
                max: max,
                data: data
            });
        };
        Heatmap.prototype.createRectangle = function (viewer, rect) {
            this.heatmap = viewer.entities.add({
                name: "Rotating rectangle with rotating texture coordinate",
                show: true,
                rectangle: {
                    coordinates: rect,
                    material: this.heatmap.renderer.canvas // 核心语句，填充热力图
                }
            });
        };
        /**
         * 构建一些随机数据点
         * @param len 数据点个数
         */
        Heatmap.randomData = function (len) {
            var points = [];
            var max = 0;
            var width = 1000;
            var height = 1000;
            while (len--) {
                var val = Math.floor(Math.random() * 1000);
                max = Math.max(max, val);
                var point = {
                    x: Math.floor(Math.random() * width),
                    y: Math.floor(Math.random() * height),
                    value: val
                };
                points.push(point);
            }
            return { max: max, data: points };
        };
        return Heatmap;
    }());
    exports.default = Heatmap;
});
