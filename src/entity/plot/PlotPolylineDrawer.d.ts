export default class PlotPolylineDrawer {
    viewer: any;
    scene: any;
    clock: any;
    canvas: any;
    camera: any;
    ellipsoid: any;
    tooltip: any;
    entity: any;
    positions: any;
    tempPositions: any;
    drawHandler: any;
    modifyHandler: any;
    okHandler: any;
    cancelHandler: any;
    dragIcon: string;
    dragIconLight: string;
    material: any;
    toolBarIndex: any;
    markers: any;
    layerId: string;
    width: number;
    shapeColor: any;
    params: any;
    shapeName: string;
    floatingPoint: any;
    private isClickConfirm;
    constructor(viewer: any);
    clear(): void;
    showModifyPolyline(options: any): Promise<unknown>;
    startDrawPolyline(options: any): Promise<unknown>;
    _startModify(): void;
    _showPolyline2Map(): void;
    _showModifyPolyline2Map(): void;
    _updateModifyAnchors(oid: any): void;
    _updateNewMidAnchors(oid: any): void;
    _createPoint(cartesian: any, oid: any): any;
    _createMidPoint(cartesian: any, oid: any): any;
    _computeTempPositions(): void;
    _computeCenterPotition(p1: any, p2: any): any;
    _showToolBar(): Promise<void>;
    _createToolBar(): void;
    _getPositionsWithSid(): any;
    _getLonLat(cartesian: any): {
        lon: any;
        lat: any;
        alt: any;
        height: any;
    };
    _getLonLats(positions: any): any[];
    _isSimpleXYZ(p1: any, p2: any): boolean;
    _clearAnchors(): void;
    _clearMarkers(layerName: string): void;
}
