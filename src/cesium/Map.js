import Camera from "../scene/camera/Camera";
/**
 * @class Map
 * 地图相关操作类
 */
class Map {
    /**
     * 地图相关操作类
     * @param {Cesium.Viewer} viewer
     */
    constructor(viewer) {
        if (!viewer) {
            throw Error("the constructor of Map need a parameter of type Cesium.Viewer");
        }
        // 去除版权信息
        // @ts-ignore
        viewer._cesiumWidget._creditContainer.style.display = "none";
        this._camera = new Camera(viewer);
    }
    /**
     * @constant
     * @desc 相机相关操作类
     */
    get camera() {
        return this._camera;
    }
}
export default Map;
