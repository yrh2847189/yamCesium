/**
 * 热力图
 */
import * as Cesium from "cesium";
interface heatMapOptions {
    viewer: Cesium.Viewer;
    rect: Cesium.Rectangle;
    max: number;
    data: any[];
    radius?: number;
    maxOpacity?: number;
    minOpacity?: number;
    blur?: number;
}
declare class Heatmap {
    /**
     * Viewer
     * @readonly
     * @private
     */
    private readonly _viewer;
    /**
     * 热力图
     * @private
     */
    heatmap: any;
    constructor(options: heatMapOptions);
    render(max: number, data: any): void;
    createRectangle(viewer: Cesium.Viewer, rect: Cesium.Rectangle): void;
    /**
     * 构建一些随机数据点
     * @param len 数据点个数
     */
    static randomData(len: number): {
        max: number;
        data: {
            x: number;
            y: number;
            value: number;
        }[];
    };
}
export default Heatmap;
