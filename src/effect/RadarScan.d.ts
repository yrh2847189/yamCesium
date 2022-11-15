/**
 * 雷达扫描
 */
import * as Cesium from "cesium";
interface radarScanOptions {
    viewer: Cesium.Viewer;
    center: Cesium.Cartesian3;
    color: Cesium.Color;
    radius: number;
    duration: number;
}
declare class RadarScan {
    viewer: Cesium.Viewer;
    /**
     * 生成雷达扫描效果
     * @param options 参数
     * @param options.viewer viewer
     * @param options.center 中心点
     * @param options.color 颜色
     * @param options.radius 半径
     * @param options.duration 持续时间
     */
    constructor(options: radarScanOptions);
    /**
     * 生成雷达扫描效果
     * @param options
     * @param options 参数
     * @param options.viewer viewer
     * @param options.center 中心点
     * @param options.color 颜色
     * @param options.radius 半径
     * @param options.duration 持续时间
     */
    addRadarScan(options: radarScanOptions): Cesium.PostProcessStage;
    /**
     * @version 2.0
     */
    shader(): string;
}
export default RadarScan;
