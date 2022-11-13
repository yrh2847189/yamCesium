/**
 * The view-model for a control in the user interface
 *
 * @alias UserInterfaceControl
 * @constructor
 * @abstract
 *
 * @param {Terria} terria The Terria instance.
 */
declare class UserInterfaceControl {
    _terria: any;
    name: string;
    text: string | undefined;
    svgIcon: any;
    svgHeight: number | undefined;
    svgWidth: number | undefined;
    cssClass: string | undefined;
    isActive: boolean;
    get terria(): any;
    get hasText(): any;
    constructor(terria: any);
    /**
     * When implemented in a derived class, performs an action when the user clicks
     * on this control.
     * @abstract
     * @protected
     */
    activate(): void;
}
export default UserInterfaceControl;
//# sourceMappingURL=UserInterfaceControl.d.ts.map