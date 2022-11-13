import PlotTracker from "./PlotTracker";
import PlotMoveDrawer from "./PlotMoveDrawer";
interface Draw {
    flag: number;
    layerId: string;
    shape: Array<any>;
    shapeDic: any;
}
interface _editParams {
    objId: string;
    isEdit: boolean;
    shapeType: string;
}
export default class Plot {
    viewer: any;
    draw: Draw;
    plotTracker: PlotTracker;
    moveDrawer: PlotMoveDrawer;
    editHandler: any;
    _editParams: _editParams;
    _shapeTypes: Array<string>;
    constructor(viewer: any);
    bindGloveEvent(): void;
    moveShape(): Promise<unknown>;
    editShape(): Promise<unknown>;
    drawPoint(options?: any): Promise<unknown>;
    showPoint(options?: any): {
        position: any;
        entity: any;
    };
    createPoint(position: any, objId: string): any;
    editPoint(objId: string): Promise<unknown>;
    drawPolyline(options?: any): Promise<unknown>;
    showPolyline(options: any): {
        positions: any;
        entity: any;
    };
    createPolyline(positions: any, objId: string): any;
    editPolyline(objId: string): Promise<unknown>;
    drawPolygon(options?: any): Promise<unknown>;
    showPolygon(options: any): {
        positions: any;
        entity: any;
    };
    createPolygon(positions: Array<any>, objId: string): any;
    editPolygon(objId: string): Promise<unknown>;
    drawRectangle(options?: any): Promise<unknown>;
    showRectangle(options: any): {
        positions: any;
        entity: any;
    };
    createRectangle(positions: Array<any>, objId: string): any;
    editRectangle(objId: string): Promise<unknown>;
    drawCircle(options?: any): Promise<unknown>;
    showCircle(options: any): {
        positions: any;
        entity: any;
    };
    createCircle(positions: any, objId: string): any;
    editCircle(objId: string): Promise<unknown>;
    drawAttackArrow(options?: any): Promise<unknown>;
    showAttackArrow(options: any): {
        positions: any;
        entity: any;
    };
    createAttackArrow(positions: any, objId: string): any;
    editAttackArrow(objId: string): Promise<unknown>;
    drawPincerArrow(options?: any): Promise<unknown>;
    showPincerArrow(options: any): {
        positions: any;
        entity: any;
    };
    createPincerArrow(positions: any, objId: string): any;
    editPincerArrow(objId: string): Promise<unknown>;
    drawStraightArrow(options?: any): Promise<unknown>;
    showStraightArrow(options: any): {
        positions: any;
        entity: any;
    };
    createStraightArrow(positions: any, objId: string): any;
    editStraightArrow(objId: string): Promise<unknown>;
    clearEntityById(objId: string): void;
    getEntity(objId: string): any;
}
export {};
