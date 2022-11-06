import * as Cesium from "cesium";
import Immersion from "./Immersion";
import HawkEyeMap from "./hawkEyeMap/HawkEyeMap";
// @ts-ignore
const Knockout = Cesium.knockout;
export default class Camera {
  viewer = null;
  /**
   * 第一人称视角
   */
  immersion: Immersion | null = null

  /**
   * 鹰眼图
   * @param viewer
   */
  hawkEye: HawkEyeMap | null = null;
  constructor(viewer: any) {
    if (!viewer) {
      throw Error("viewer can not be null");
    }
    this.immersion = new Immersion(viewer);
    this.hawkEye = new HawkEyeMap(viewer);
  }

}
