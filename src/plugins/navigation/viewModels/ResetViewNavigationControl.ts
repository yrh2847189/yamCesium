import Cesium from "../../../cesium/Cesium";
import svgReset from "../svgPaths/svgReset";
import NavigationControl from "./NavigationControl";

var defined = Cesium.defined;
var Camera = Cesium.Camera;
var Rectangle = Cesium.Rectangle;
var Cartographic = Cesium.Cartographic;

/**
 * The model for a zoom in control in the navigation control tool bar
 *
 * @alias ResetViewNavigationControl
 * @constructor
 * @abstract
 *
 * @param {Terria} terria The Terria instance.
 */
class ResetViewNavigationControl extends NavigationControl {
  // terria: any;
  name: string;
  tooltip: string;
  navigationLocked: boolean;
  svgIcon: any;
  svgHeight: number | undefined;
  svgWidth: number | undefined;
  cssClass: string | undefined;
  isActive: boolean = false;

  constructor(terria: any) {
    super(terria);
    // this.terria = terria;
    /**
     * Gets or sets the svg icon of the control.  This property is observable.
     * @type {Object}
     */
    this.svgIcon = svgReset;
    /**
     * Gets or sets the name of the control which is set as the control's title.
     * This property is observable.
     * @type {String}
     */
    this.name = "重置视角";
    this.navigationLocked = false;
    this.tooltip = "重置视角";
    /**
     * Gets or sets the height of the svg icon.  This property is observable.
     * @type {Integer}
     */
    this.svgHeight = 15;
    /**
     * Gets or sets the width of the svg icon.  This property is observable.
     * @type {Integer}
     */
    this.svgWidth = 15;
    /**
     * Gets or sets the CSS class of the control. This property is observable.
     * @type {String}
     */
    this.cssClass = "navigation-control-icon-reset";
  }

  setNavigationLocked(locked: any) {
    this.navigationLocked = locked;
  }

  resetView() {
    // this.terria.analytics.logEvent('navigation', 'click', 'reset');
    if (this.navigationLocked) {
      return;
    }
    var scene = this.terria.scene;

    var sscc = scene.screenSpaceCameraController;
    if (!sscc.enableInputs) {
      return;
    }

    this.isActive = true;

    var camera = scene.camera;

    if (defined(this.terria.trackedEntity)) {
      // when tracking do not reset to default view but to default view of tracked entity
      var trackedEntity = this.terria.trackedEntity;
      this.terria.trackedEntity = undefined;
      this.terria.trackedEntity = trackedEntity;
    } else {
      // reset to a default position or view defined in the options
      if (this.terria.options.defaultResetView) {
        if (this.terria.options.defaultResetView && this.terria.options.defaultResetView instanceof Cartographic) {
          camera.flyTo({
            destination: scene.globe.ellipsoid.cartographicToCartesian(this.terria.options.defaultResetView)
          });
        } else if (this.terria.options.defaultResetView && this.terria.options.defaultResetView instanceof Rectangle) {
          try {
            Rectangle.validate(this.terria.options.defaultResetView);
            camera.flyTo({
              destination: this.terria.options.defaultResetView,
              orientation: {
                heading: Cesium.Math.toRadians(5.729578)
              }
            });
          } catch (e) {
            console.log("Cesium-navigation/ResetViewNavigationControl:   options.defaultResetView Cesium rectangle is  invalid!");
          }
        }
      } else if (typeof camera.flyHome === "function") {
        camera.flyHome(1);
      } else {
        camera.flyTo({ "destination": Camera.DEFAULT_VIEW_RECTANGLE, "duration": 1 });
      }
    }
    this.isActive = false;
  }

  /**
   * When implemented in a derived class, performs an action when the user clicks
   * on this control
   * @abstract
   * @protected
   */
  activate() {
    this.resetView();
  }
}


// ResetViewNavigationControl.prototype = Object.create(NavigationControl.prototype);


export default ResetViewNavigationControl;
