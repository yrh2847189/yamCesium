declare class PlotPolygonDrawer {
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
    isEdit: boolean;
    dragIcon: string;
    dragIconLight: string;
    material: any;
    outlineMaterial: any;
    fill: boolean;
    outline: boolean;
    outlineWidth: number;
    extrudedHeight: number;
    toolBarIndex: any;
    markers: any;
    layerId: string;
    params: any;
    ground: boolean;
    shapeColor: any;
    outlineColor: any;
    shapeName: any;
    terrainHeight: any;
    isClickConfirm: boolean;
    constructor(viewer: any);
    clear(): void;
    showModifyPolygon(options: any): Promise<unknown>;
    startDrawPolygon(options: any): Promise<unknown>;
    _startModify(): void;
    _showRegion2Map(): void;
    _showModifyRegion2Map(): void;
    _updateModifyAnchors(oid: any): void;
    _updateNewMidAnchors(oid: any): void;
    _createPoint(cartesian: any, oid: any): any;
    _createMidPoint(cartesian: any, oid: any): any;
    _computeTempPositions(): void;
    _computeCenterPotition(p1: any, p2: any): any;
    createToolBar(): Promise<void>;
    _isSimpleXYZ(p1: any, p2: any): boolean;
    _clearMarkers(layerName: string): void;
    _clearAnchors(): void;
}
export default PlotPolygonDrawer;
