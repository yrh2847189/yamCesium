interface drawOptions {
    confirmHandler?: Function;
    position?: any;
}
export default class PlotPointDrawer {
    viewer: any;
    scene: any;
    clock: any;
    canvas: any;
    camera: any;
    ellipsoid: any;
    tooltip: any;
    entity: any;
    position: any;
    drawHandler: any;
    modifyHandler: any;
    okHandler: any;
    cancelHandler: any;
    image: string;
    toolBarIndex: any;
    layerId: string;
    isClickConfirm: boolean;
    constructor(viewer: any);
    clear(): void;
    showModifyPoint(options: drawOptions): Promise<unknown>;
    startDrawPoint(options: drawOptions): Promise<unknown>;
    _startModify(): void;
    _createPoint(): any;
    _showToolBar(): Promise<void>;
    _getLonLat(cartesian: any): {
        lon: any;
        lat: any;
        alt: any;
        height: any;
    };
    _clearMarkers(layerName: string): void;
}
export {};
//# sourceMappingURL=PlotPointDrawer.d.ts.map