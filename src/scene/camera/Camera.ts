import Cesium from "../../cesium/Cesium";
import Immersion from "./Immersion";

const Knockout = Cesium.knockout;
export default class Camera {
  viewer = null;
  /**
   * 第一人称视角
   */
  immersion: Immersion | null = null
  constructor(viewer: any) {
    if (!viewer) {
      throw Error("viewer can not be null");
    }
    this.immersion = new Immersion(viewer);
  }

}
