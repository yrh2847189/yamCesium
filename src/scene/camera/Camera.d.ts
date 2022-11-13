import * as Cesium from "cesium";
import Immersion from "./Immersion";
import HawkEyeMap from "./hawkEyeMap/HawkEyeMap";
export default class Camera {
    viewer: Cesium.Viewer;
    /**
     * 第一人称视角
     */
    immersion: Immersion | null;
    /**
     * 鹰眼图
     * @param viewer
     */
    hawkEye: HawkEyeMap | null;
    /**
     * 绕点旋转事件
     * @private
     */
    private aroundClockEvent;
    constructor(viewer: any);
    /**
     * 绕点旋转
     * @param position 绕点旋转的点
     * @param radius 旋转半径
     * @param duration 旋转时间
     * @param angle 旋转角度（速度）
     */
    flyAround(position: Cesium.Cartesian3, radius?: number, duration?: number, angle?: number): any;
    /**
     * 停止绕点旋转
     */
    stopAround(): void;
    look(lon: number, lat: number, offset: number): void;
    /**
     * 相机原地旋转
     */
    _cameraRotate(): void;
    private _rotateHeading;
}
