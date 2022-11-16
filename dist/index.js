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
        define(["require", "exports", "cesium", "./cesium/Map", "./imagery/baidu/BaiduImageryProvider", "./imagery/amap/AmapImageryProvider", "./imagery/tencent/TencentImageryProvider", "./imagery/tdt/TdtImageryProvider", "./imagery/google/GoogleImageryProvider", "./transform/CoordTransform", "./plugins/navigation/viewerCesiumNavigationMixin", "./scene/shortcut/Canvas2Image", "./plugins/cesiumZh/CesiumZh", "./plugins/lib/CesiumMethod", "./plugins/lib/PublicMethod", "./entity/dataSource/PrimitiveCluster", "./entity/dataSource/ClusterUtil", "./entity/plot/PlotTracker", "./entity/plot/Plot", "./entity/plot/measure/MeasureTools", "./effect/Effect", "./scene/weather/SkyBoxOnGround", "./scene/weather/Weather"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Weather = exports.Effect = exports.MeasureTools = exports.Plot = exports.PlotTracker = exports.ClusterUtil = exports.PublicMethod = exports.CesiumMethod = exports.CesiumZh = exports.Canvas2Image = exports.viewerCesiumNavigationMixin = exports.coordTransform = exports.GoogleImageryProvider = exports.TdtImageryProvider = exports.TencentImageryProvider = exports.BaiduImageryProvider = exports.AmapImageryProvider = exports.Map = exports.version = void 0;
    var Cesium = __importStar(require("cesium"));
    var pkg = require("../package.json");
    // 设置版本号
    exports.version = pkg.version;
    // 设置默认token
    Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0YWJlYzNkNS0yY2M0LTQxZWQtOGZhNi05MjEzYmVmZGVkNTkiLCJpZCI6MzU1NTEsImlhdCI6MTYwNDYyNzY2NH0.JxhQQxEvJTrmeARILcywKaPoPEPjO1RlqL28CRjktx8";
    var Map_1 = __importDefault(require("./cesium/Map"));
    exports.Map = Map_1.default;
    // 图层加载
    var BaiduImageryProvider_1 = __importDefault(require("./imagery/baidu/BaiduImageryProvider"));
    exports.BaiduImageryProvider = BaiduImageryProvider_1.default;
    var AmapImageryProvider_1 = __importDefault(require("./imagery/amap/AmapImageryProvider"));
    exports.AmapImageryProvider = AmapImageryProvider_1.default;
    var TencentImageryProvider_1 = __importDefault(require("./imagery/tencent/TencentImageryProvider"));
    exports.TencentImageryProvider = TencentImageryProvider_1.default;
    var TdtImageryProvider_1 = __importDefault(require("./imagery/tdt/TdtImageryProvider"));
    exports.TdtImageryProvider = TdtImageryProvider_1.default;
    var GoogleImageryProvider_1 = __importDefault(require("./imagery/google/GoogleImageryProvider"));
    exports.GoogleImageryProvider = GoogleImageryProvider_1.default;
    // 坐标转换工具
    var CoordTransform_1 = __importDefault(require("./transform/CoordTransform"));
    exports.coordTransform = CoordTransform_1.default;
    // 指北针
    var viewerCesiumNavigationMixin_1 = __importDefault(require("./plugins/navigation/viewerCesiumNavigationMixin"));
    exports.viewerCesiumNavigationMixin = viewerCesiumNavigationMixin_1.default;
    // 截屏
    var Canvas2Image_1 = require("./scene/shortcut/Canvas2Image");
    Object.defineProperty(exports, "Canvas2Image", { enumerable: true, get: function () { return Canvas2Image_1.Canvas2Image; } });
    // 汉化
    var CesiumZh_1 = require("./plugins/cesiumZh/CesiumZh");
    Object.defineProperty(exports, "CesiumZh", { enumerable: true, get: function () { return CesiumZh_1.CesiumZh; } });
    // turf
    // 引入turf打包文件较大，建议在需要的时候再引入
    // const turf = require("@turf/turf");
    // export { turf };
    // CesiumMethod
    var CesiumMethod_1 = __importDefault(require("./plugins/lib/CesiumMethod"));
    exports.CesiumMethod = CesiumMethod_1.default;
    // PublicMethod
    var PublicMethod_1 = __importDefault(require("./plugins/lib/PublicMethod"));
    exports.PublicMethod = PublicMethod_1.default;
    // primitive图元聚合 （打包KDBush会增加打包文件50kb）
    var PrimitiveCluster_1 = __importDefault(require("./entity/dataSource/PrimitiveCluster"));
    // @ts-ignore
    Cesium.PrimitiveCluster = PrimitiveCluster_1.default;
    // export { PrimitiveCluster };
    // 聚合工具类
    var ClusterUtil_1 = __importDefault(require("./entity/dataSource/ClusterUtil"));
    exports.ClusterUtil = ClusterUtil_1.default;
    // 绘制
    var PlotTracker_1 = __importDefault(require("./entity/plot/PlotTracker"));
    exports.PlotTracker = PlotTracker_1.default;
    var Plot_1 = __importDefault(require("./entity/plot/Plot"));
    exports.Plot = Plot_1.default;
    var MeasureTools_1 = __importDefault(require("./entity/plot/measure/MeasureTools"));
    exports.MeasureTools = MeasureTools_1.default;
    var Effect_1 = __importDefault(require("./effect/Effect"));
    exports.Effect = Effect_1.default;
    // import skyBoxOnGround from "SkyBoxOnGround.js";
    var SkyBoxOnGround_1 = __importDefault(require("./scene/weather/SkyBoxOnGround"));
    // const skyBoxOnGround = require("scene/weather/SkyBoxOnGround.js");
    // @ts-ignore
    // Cesium.skyBoxOnGround = skyBoxOnGround;
    (0, SkyBoxOnGround_1.default)();
    /**
     * 天气
     */
    var Weather_1 = __importDefault(require("./scene/weather/Weather"));
    exports.Weather = Weather_1.default;
});
