import Cesium from "./cesium/Cesium";

const pkg = require("../package.json");
// 设置版本号
export const version = pkg.version;

// 图层加载
import BaiduImageryProvider from "./imagery/baidu/BaiduImageryProvider";
import AmapImageryProvider from "./imagery/amap/AmapImageryProvider";
import TencentImageryProvider from "./imagery/tencent/TencentImageryProvider";
import TdtImageryProvider from "./imagery/tdt/TdtImageryProvider";
import GoogleImageryProvider from "./imagery/google/GoogleImageryProvider";

Cesium.AmapImageryProvider = AmapImageryProvider;
Cesium.BaiduImageryProvider = BaiduImageryProvider;
Cesium.TencentImageryProvider = TencentImageryProvider;
Cesium.TdtImageryProvider = TdtImageryProvider;
Cesium.GoogleImageryProvider = GoogleImageryProvider;

// 坐标转换工具
import coordTransform from "./transform/CoordTransform";

export { coordTransform };

// 指北针
import viewerCesiumNavigationMixin from "./navigation/viewerCesiumNavigationMixin";
// import CesiumNavigation from "./navigation/CesiumNavigation";

// export { CesiumNavigation };

Cesium.viewerCesiumNavigationMixin = viewerCesiumNavigationMixin;

// 截屏
export { Canvas2Image } from "./scene/shortcut/Canvas2Image";

import Gy from "./cesium/Gy";

export { Gy };
