/**
 * @alias CesiumNavigation
 * @constructor
 *
 * @param {Viewer|CesiumWidget} viewerCesiumWidget The Viewer or CesiumWidget instance
 */
declare class CesiumNavigation {
    _onDestroyListeners: any[];
    distanceLegendViewModel: any;
    navigationViewModel: any;
    navigationDiv: any;
    distanceLegendDiv: any;
    terria: any;
    container: any;
    _navigationLocked: boolean;
    constructor(viewerCesiumWidget: any, options: any);
    /**
     * @param {Viewer|CesiumWidget} viewerCesiumWidget The Viewer or CesiumWidget instance
     * @param options
     */
    initialize(viewerCesiumWidget: any, options: any): void;
    setNavigationLocked(locked: any): void;
    getNavigationLocked(): boolean;
    destroy(): void;
    addOnDestroyListener(callback: any): void;
}
export default CesiumNavigation;
//# sourceMappingURL=CesiumNavigation.d.ts.map