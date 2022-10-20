import Camera from "../scene/camera/Camera";

export default class Gy {
  camera: any = null;

  constructor(viewer: any) {
    if (!viewer) {
      throw Error("viewer can not be null");
    }
    // 去除版权信息
    viewer._cesiumWidget._creditContainer.style.display = "none";
    this.camera = new Camera(viewer);
  }
}
