/**
 * 圆扩散
 */
import * as Cesium from "cesium";
interface circleSpreadOptions {
    viewer: Cesium.Viewer;
    center: Cesium.Cartesian3;
    color: Cesium.Color;
    radius: number;
    duration: number;
}
declare class CircleSpread {
    viewer: Cesium.Viewer;
    /**
     * 生成动态圆
     * @param options 参数
     * @param options.viewer viewer
     * @param options.center 中心点
     * @param options.color 颜色
     * @param options.radius 半径
     * @param options.duration 持续时间
     */
    constructor(options: circleSpreadOptions);
    /**
     * 生成动态圆
     * @param options
     */
    addCircleScan(options: circleSpreadOptions): Cesium.PostProcessStage;
    shader(): string;
}
export default CircleSpread;
