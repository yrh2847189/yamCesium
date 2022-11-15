declare class NavigationViewModel {
    terria: any;
    eventHelper: any;
    enableZoomControls: any;
    enableCompass: any;
    navigationLocked: any;
    controls: any;
    svgCompassOuterRing: any;
    svgCompassGyro: any;
    svgCompassRotationMarker: any;
    showCompass: any;
    heading: any;
    isOrbiting: any;
    orbitCursorAngle: any;
    orbitCursorOpacity: any;
    orbitLastTimestamp: any;
    orbitFrame: any;
    orbitIsLook: any;
    orbitMouseMoveFunction: any;
    orbitMouseUpFunction: any;
    rotateMouseUpFunction: any;
    rotateMouseMoveFunction: any;
    isRotating: any;
    rotateInitialCursorAngle: any;
    rotateFrame: any;
    rotateIsLook: any;
    _unsubcribeFromPostRender: any;
    constructor(options: any);
    setNavigationLocked(locked: any): void;
    destroy(): void;
    show(container: any): void;
    /**
     * Adds a control to this toolbar.
     * @param {NavControl} control The control to add.
     */
    add(control: any): void;
    /**
     * Removes a control from this toolbar.
     * @param {NavControl} control The control to remove.
     */
    remove(control: any): void;
    /**
     * Checks if the control given is the last control in the control array.
     * @param {NavControl} control The control to remove.
     */
    isLastControl(control: any): boolean;
    handleMouseDown(viewModel: any, e: any): true | undefined;
    handleDoubleClick(viewModel: any, e: any): true | undefined;
    static create(options: any): NavigationViewModel;
    orbit(viewModel: any, compassElement: any, cursorVector: any): true | undefined;
    rotate(viewModel: any, compassElement: any, cursorVector: any): true | undefined;
}
export default NavigationViewModel;
