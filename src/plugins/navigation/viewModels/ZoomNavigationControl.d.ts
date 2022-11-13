import NavigationControl from "./NavigationControl";
/**
 * The model for a zoom in control in the navigation control tool bar
 *
 * @alias ZoomOutNavigationControl
 * @constructor
 * @abstract
 *
 * @param {Terria} terria The Terria instance.
 * @param {boolean} zoomIn is used for zooming in (true) or out (false)
 */
declare class ZoomNavigationControl extends NavigationControl {
    zoomIn: string;
    /**
     * Gets or sets the name of the control which is set as the control's title.
     * This property is observable.
     * @type {String}
     */
    name: string;
    /**
     * Gets or sets the text to be displayed in the nav control. Controls that
     * have text do not display the svgIcon.
     * This property is observable.
     * @type {String}
     */
    text: string;
    tooltip: string;
    /**
     * Gets or sets the CSS class of the control. This property is observable.
     * @type {String}
     */
    cssClass: string;
    relativeAmount: number;
    constructor(terria: any, zoomIn: any);
    /**
     * When implemented in a derived class, performs an action when the user clicks
     * on this control
     * @abstract
     * @protected
     */
    activate(): void;
    zoom(relativeAmount: number): void;
}
export default ZoomNavigationControl;
