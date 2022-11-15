/**
 * 效果
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./CircleSpread", "./RadarScan"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CircleSpread_1 = require("./CircleSpread");
    var RadarScan_1 = require("./RadarScan");
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
        }
        return Effect;
    }());
    exports.default = new Effect();
});
