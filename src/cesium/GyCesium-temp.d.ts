declare module  "src/cesium/Gy" {

  export class Immersion {
    viewer: any;
    scene: any;
    canvas: any;
    viewModel: any;
    constructor(viewer: any);
    enable(): undefined;
    bindModel(): undefined;
  }

  export class Camera {
    viewer: any;
    /**
     * 第一人称视角
     */
    immersion: Immersion;
    constructor(viewer: any);
  }
}
declare module "src/scene/camera/Immersion" {
  import {Immersion} from "src/cesium/Gy";
  export default Immersion;
}
declare module "src/scene/camera/Camera" {
  import {Camera} from "src/cesium/Gy";
  export default Camera;
}
