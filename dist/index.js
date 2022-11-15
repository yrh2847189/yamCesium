(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "cesium", "./cesium/Map", "./imagery/baidu/BaiduImageryProvider", "./imagery/amap/AmapImageryProvider", "./imagery/tencent/TencentImageryProvider", "./imagery/tdt/TdtImageryProvider", "./imagery/google/GoogleImageryProvider", "./transform/CoordTransform", "./plugins/navigation/viewerCesiumNavigationMixin", "./scene/shortcut/Canvas2Image", "./plugins/cesiumZh/CesiumZh", "./plugins/lib/CesiumMethod", "./plugins/lib/PublicMethod", "./entity/dataSource/PrimitiveCluster", "./entity/dataSource/ClusterUtil", "./entity/plot/PlotTracker", "./entity/plot/Plot", "./entity/plot/measure/MeasureTools", "./effect/Effect"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Effect = exports.MeasureTools = exports.Plot = exports.PlotTracker = exports.ClusterUtil = exports.PublicMethod = exports.CesiumMethod = exports.CesiumZh = exports.Canvas2Image = exports.viewerCesiumNavigationMixin = exports.coordTransform = exports.GoogleImageryProvider = exports.TdtImageryProvider = exports.TencentImageryProvider = exports.BaiduImageryProvider = exports.AmapImageryProvider = exports.Map = exports.version = void 0;
    var Cesium = require("cesium");
    var pkg = require("../package.json");
    // 设置版本号
    exports.version = pkg.version;
    // 设置默认token
    Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0YWJlYzNkNS0yY2M0LTQxZWQtOGZhNi05MjEzYmVmZGVkNTkiLCJpZCI6MzU1NTEsImlhdCI6MTYwNDYyNzY2NH0.JxhQQxEvJTrmeARILcywKaPoPEPjO1RlqL28CRjktx8";
    var Map_1 = require("./cesium/Map");
    exports.Map = Map_1.default;
    // 图层加载
    var BaiduImageryProvider_1 = require("./imagery/baidu/BaiduImageryProvider");
    exports.BaiduImageryProvider = BaiduImageryProvider_1.default;
    var AmapImageryProvider_1 = require("./imagery/amap/AmapImageryProvider");
    exports.AmapImageryProvider = AmapImageryProvider_1.default;
    var TencentImageryProvider_1 = require("./imagery/tencent/TencentImageryProvider");
    exports.TencentImageryProvider = TencentImageryProvider_1.default;
    var TdtImageryProvider_1 = require("./imagery/tdt/TdtImageryProvider");
    exports.TdtImageryProvider = TdtImageryProvider_1.default;
    var GoogleImageryProvider_1 = require("./imagery/google/GoogleImageryProvider");
    exports.GoogleImageryProvider = GoogleImageryProvider_1.default;
    // 坐标转换工具
    var CoordTransform_1 = require("./transform/CoordTransform");
    exports.coordTransform = CoordTransform_1.default;
    // 指北针
    var viewerCesiumNavigationMixin_1 = require("./plugins/navigation/viewerCesiumNavigationMixin");
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
    var CesiumMethod_1 = require("./plugins/lib/CesiumMethod");
    exports.CesiumMethod = CesiumMethod_1.default;
    // PublicMethod
    var PublicMethod_1 = require("./plugins/lib/PublicMethod");
    exports.PublicMethod = PublicMethod_1.default;
    // primitive图元聚合 （打包KDBush会增加打包文件50kb）
    var PrimitiveCluster_1 = require("./entity/dataSource/PrimitiveCluster");
    // @ts-ignore
    Cesium.PrimitiveCluster = PrimitiveCluster_1.default;
    // export { PrimitiveCluster };
    // 聚合工具类
    var ClusterUtil_1 = require("./entity/dataSource/ClusterUtil");
    exports.ClusterUtil = ClusterUtil_1.default;
    // 绘制
    var PlotTracker_1 = require("./entity/plot/PlotTracker");
    exports.PlotTracker = PlotTracker_1.default;
    var Plot_1 = require("./entity/plot/Plot");
    exports.Plot = Plot_1.default;
    var MeasureTools_1 = require("./entity/plot/measure/MeasureTools");
    exports.MeasureTools = MeasureTools_1.default;
    var Effect_1 = require("./effect/Effect");
    exports.Effect = Effect_1.default;
});
