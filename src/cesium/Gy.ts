import Camera from "../scene/camera/Camera";

export default class Gy {
  camera: any = null;
  constructor(viewer: any) {
    if (!viewer) {
      throw Error("viewer can not be null");
    }
    this.camera = new Camera(viewer);
  }
}
