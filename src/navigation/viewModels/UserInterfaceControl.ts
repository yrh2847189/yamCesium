import Cesium from "../../cesium/Cesium";

var defined = Cesium.defined;
var defineProperties = Object.defineProperties;
var DeveloperError = Cesium.DeveloperError;
var Knockout = Cesium.knockout;

/**
 * The view-model for a control in the user interface
 *
 * @alias UserInterfaceControl
 * @constructor
 * @abstract
 *
 * @param {Terria} terria The Terria instance.
 */
class UserInterfaceControl {
  _terria: any;
  name: string;
  text: string | undefined;
  svgIcon: any;
  svgHeight: number | undefined;
  svgWidth: number | undefined;
  cssClass: string | undefined;
  isActive: boolean = false;

  get terria(): any {
    return this._terria;
  }

  get hasText(): any {
    return defined(this.text) && typeof this.text === "string";
  }

  constructor(terria: any) {
    let _this = this;
    if (!defined(terria)) {
      throw new DeveloperError("terria is required");
    }

    this._terria = terria;

    /**
     * Gets or sets the name of the control which is set as the controls title.
     * This property is observable.
     * @type {String}
     */
    this.name = "Unnamed Control";

    /**
     * Gets or sets the text to be displayed in the UI control.
     * This property is observable.
     * @type {String}
     */
    this.text = undefined;

    /**
     * Gets or sets the svg icon of the control.  This property is observable.
     * @type {Object}
     */
    this.svgIcon = undefined;

    /**
     * Gets or sets the height of the svg icon.  This property is observable.
     * @type {Integer}
     */
    this.svgHeight = undefined;

    /**
     * Gets or sets the width of the svg icon.  This property is observable.
     * @type {Integer}
     */
    this.svgWidth = undefined;

    /**
     * Gets or sets the CSS class of the control. This property is observable.
     * @type {String}
     */
    this.cssClass = undefined;

    /**
     * Gets or sets the property describing whether or not the control is in the active state.
     * This property is observable.
     * @type {Boolean}
     */
    this.isActive = false;

    Knockout.track(this, ["name", "svgIcon", "svgHeight", "svgWidth", "cssClass", "isActive"]);

    // defineProperties(UserInterfaceControl.prototype, {
    //   /**
    //    * Gets the Terria instance.
    //    * @memberOf UserInterfaceControl.prototype
    //    * @type {Terria}
    //    */
    //   terria: {
    //     get: function () {
    //       return _this._terria
    //     }
    //   },
    //   /**
    //    * Gets a value indicating whether this button has text associated with it.
    //    * @type {Object}
    //    */
    //   hasText: {
    //     get: function () {
    //       return defined(_this.text) && typeof _this.text === 'string'
    //     }
    //   }
    // })
  }

  /**
   * When implemented in a derived class, performs an action when the user clicks
   * on this control.
   * @abstract
   * @protected
   */
  activate() {
    throw new DeveloperError("activate must be implemented in the derived class.");
  }
}

export default UserInterfaceControl;
