export default class PlotPincerArrowDrawer {
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
    outlineMaterial: any;
    fill: boolean;
    outline: boolean;
    outlineWidth: number;
    extrudedHeight: number;
    toolBarIndex: any;
    markers: any;
    layerId: string;
    shapeColor: any;
    outlineColor: any;
    shapeName: any;
    terrainHeight: any;
    isClickConfirm: boolean;
    constructor(viewer: any);
    clear(): void;
    showModifyPincerArrow(options: any): Promise<unknown>;
    startDrawPincerArrow(options: any): Promise<unknown>;
    _startModify(): void;
    _showRegion2Map(): void;
    _showModifyRegion2Map(): void;
    _removeDuplicate(lonLats: any): void;
    _createPoint(cartesian: any, oid: any): any;
    _computeTempPositions(): void;
    _computeCenterPotition(p1: any, p2: any): any;
    createToolBar(): Promise<void>;
    _getLonLat(cartesian: any): {
        lon: any;
        lat: any;
        alt: any;
    };
    _getLonLatArr(positions: any): any[][];
    _isSimpleXYZ(p1: any, p2: any): boolean;
    _clearMarkers(layerName: string): void;
    _clearAnchors(): void;
}
