import UserInterfaceControl from './UserInterfaceControl';
/**
 * The view-model for a control in the navigation control tool bar
 *
 * @alias NavigationControl
 * @constructor
 * @abstract
 *
 * @param {Terria} terria The Terria instance.
 */
class NavigationControl extends UserInterfaceControl {
    constructor(terria) {
        super(terria);
    }
}
// var NavigationControl = function (terria: any) {
//   UserInterfaceControl.apply(this, arguments)
// }
// NavigationControl.prototype = Object.create(UserInterfaceControl.prototype)
export default NavigationControl;
