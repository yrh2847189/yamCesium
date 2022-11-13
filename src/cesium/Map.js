import Camera from "../scene/camera/Camera";
export default class Map {
    constructor(viewer) {
        if (!viewer) {
            throw Error("the constructor of Map need a parameter of type Cesium.Viewer");
        }
        // 去除版权信息
        // @ts-ignore
        viewer._cesiumWidget._creditContainer.style.display = "none";
        this.camera = new Camera(viewer);
    }
}
