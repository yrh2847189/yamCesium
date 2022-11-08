import * as Cesium from "cesium";
import Immersion from "./Immersion";
import HawkEyeMap from "./hawkEyeMap/HawkEyeMap";
// @ts-ignore
const Knockout = Cesium.knockout;
export default class Camera {
  viewer: Cesium.Viewer;
  /**
   * 第一人称视角
   */
  immersion: Immersion | null = null;

  /**
   * 鹰眼图
   * @param viewer
   */
  hawkEye: HawkEyeMap | null = null;

  constructor(viewer: any) {
    if (!viewer) {
      throw Error("viewer can not be null");
    }
    this.viewer = viewer;
    this.immersion = new Immersion(viewer);
    this.hawkEye = new HawkEyeMap(viewer);

    // 相机原地旋转
    this.cameraRotate();
  }

  cameraRotate() {
    let timeId: string | number | NodeJS.Timeout | undefined;
    let handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
    handler.setInputAction((event: any) => {
      // 返回一个ray和地球表面的一个交点的Cartesian3坐标。
      let ray = this.viewer.camera.getPickRay(event.position);
      if (!ray) return;
      let cartesian = this.viewer.scene.globe.pick(ray, this.viewer.scene);
      if (!cartesian) return;
      timeId && clearInterval(timeId);
      timeId = setInterval(() => {
        this.rotateHeading();
      }, 30);
    }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

    handler.setInputAction((event: any) => {
      clearInterval(timeId);
    }, Cesium.ScreenSpaceEventType.LEFT_DOWN);
  }

  rotateHeading() {
    // 相机的当前heading
    let heading = Cesium.Math.toDegrees(this.viewer.camera.heading);
    if (heading >= 360 || heading <= -360) heading = 0;
    heading = heading + 0.25;//调节转动快慢
    let pitch = this.viewer.camera.pitch;
    let ellipsoid = this.viewer.scene.globe.ellipsoid;//获取椭球
    let cartographic = ellipsoid.cartesianToCartographic(this.viewer.camera.position);
    let lat = Cesium.Math.toDegrees(cartographic.latitude);
    let lng = Cesium.Math.toDegrees(cartographic.longitude);
    let distance = cartographic.height;
    this.viewer.scene.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(lng, lat, distance), // 点的坐标
      orientation: {
        heading: Cesium.Math.toRadians(heading),
        pitch: pitch
        // endTransform: Cesium.Matrix4.IDENTITY
      }
    });
  }

}
