import CesiumNavigation from "./CesiumNavigation";
import "./styles/cesium-navigation.css";
/**
 * @class
 * A mixin which adds the Compass/Navigation widget to the Viewer widget.
 * Rather than being called directly, this function is normally passed as
 * a parameter to {@link Viewer#extend}, as shown in the example below.
 * @exports viewerCesiumNavigationMixin
 *
 * @param {Viewer} viewer The viewer instance.
 * @param {{}} options The options.
 *
 * @exception {DeveloperError} viewer is required.
 *
 * @demo {@link http://localhost:8080/index.html|run local server with examples}
 *
 * @example
 * var viewer = new Cesium.Viewer('cesiumContainer');
 * viewer.extend(viewerCesiumNavigationMixin);
 */
declare function viewerCesiumNavigationMixin(viewer: any, options: any): void;
declare namespace viewerCesiumNavigationMixin {
    var mixinWidget: (cesiumWidget: any, options: any) => CesiumNavigation;
}
export default viewerCesiumNavigationMixin;
