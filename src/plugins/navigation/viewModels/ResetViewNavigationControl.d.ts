import NavigationControl from "./NavigationControl";
/**
 * The model for a zoom in control in the navigation control tool bar
 *
 * @alias ResetViewNavigationControl
 * @constructor
 * @abstract
 *
 * @param {Terria} terria The Terria instance.
 */
declare class ResetViewNavigationControl extends NavigationControl {
    name: string;
    tooltip: string;
    navigationLocked: boolean;
    svgIcon: any;
    svgHeight: number | undefined;
    svgWidth: number | undefined;
    cssClass: string | undefined;
    isActive: boolean;
    constructor(terria: any);
    setNavigationLocked(locked: any): void;
    resetView(): void;
    /**
     * When implemented in a derived class, performs an action when the user clicks
     * on this control
     * @abstract
     * @protected
     */
    activate(): void;
}
export default ResetViewNavigationControl;
