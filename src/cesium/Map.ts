import Camera from "../scene/camera/Camera";

export default class Map {
  camera: any = null;

  constructor(viewer: any) {
    if (!viewer) {
      throw Error("the constructor of Map need a parameter of type Cesium.Viewer");
    }
    // 去除版权信息
    viewer._cesiumWidget._creditContainer.style.display = "none";
    this.camera = new Camera(viewer);
  }
}
