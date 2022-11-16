import * as Cesium from "cesium";
import Camera from "../scene/camera/Camera";
/**
 * @class Map
 * 地图相关操作类
 */
declare class Map {
    /**
     * @constant
     * @desc 相机相关操作类
     */
    _camera: Camera;
    /**
     * @constant
     * @desc 相机相关操作类
     */
    get camera(): Camera;
    /**
     * 地图相关操作类
     * @param {Cesium.Viewer} viewer
     */
    constructor(viewer: Cesium.Viewer);
}
export default Map;
