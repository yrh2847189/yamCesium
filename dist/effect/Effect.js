/**
 * 效果
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./CircleSpread", "./RadarScan", "./Heatmap"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CircleSpread_1 = __importDefault(require("./CircleSpread"));
    var RadarScan_1 = __importDefault(require("./RadarScan"));
    var Heatmap_1 = __importDefault(require("./Heatmap"));
    var Effect = /** @class */ (function () {
        function Effect() {
            /**
             * 圆扩散
             */
            this.circleSpread = CircleSpread_1.default;
            /**
             * 雷达扫描
             */
            this.radarScan = RadarScan_1.default;
            /**
             * 热力图
             */
            this.heatMap = Heatmap_1.default;
        }
        return Effect;
    }());
    exports.default = new Effect();
});
