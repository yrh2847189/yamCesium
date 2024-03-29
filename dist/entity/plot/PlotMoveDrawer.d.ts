declare class PlotMoveDrawer {
    viewer: any;
    scene: any;
    clock: any;
    canvas: any;
    camera: any;
    ellipsoid: any;
    objId: any;
    leftDownFlag: boolean;
    pointDragged: any;
    startPoint: any;
    polylinePreviousCoordinates: any;
    polygonPreviousCoordinates: any;
    rectanglePreviousCoordinates: any;
    ellipsePreviousCoordinates: any;
    pointPreviousCoordinates: any;
    rectanglePosition: any;
    bufferLinePreviousCoordinates: any;
    straightArrowCoordinates: any;
    attackArrowCoordinates: any;
    pincerArrowCoordinates: any;
    rectanglePoint: any;
    currentsPoint: any;
    savePointCurrentsPoint: any;
    savePolylineCurrentsPoint: any;
    savePolygonCurrentsPoint: any;
    saveRectangleCurrentsPoint: any;
    saveCircleCurrentsPoint: any;
    saveBufferLineCurrentsPoint: any;
    saveAttackArrowCurrentsPoint: any;
    savePincerArrowCurrentsPoint: any;
    saveStraightArrowCurrentsPoint: any;
    saveRectangle: any;
    saveAttackArrow: any;
    savePincerArrow: any;
    pincerPoints: any;
    pincerPointsCart: any;
    attackPoints: any;
    attackPointsCart: any;
    startTime: any;
    obj: any;
    moveHandler: any;
    circleOutlineEntity: any;
    plot: any;
    constructor(viewer: any, plot: any);
    clear(): void;
    moveShape(): Promise<unknown>;
    clickPolygon(pointDragged: any): void;
    clickPolyline(pointDragged: any): void;
    clickRectangle(pointDragged: any): void;
    clickCircle(pointDragged: any): void;
    clickPoint(pointDragged: any): void;
    clickBufferLine(pointDragged: any): void;
    clickStraightArrow(pointDragged: any): void;
    clickAttackArrow(pointDragged: any): void;
    clickPincerArrow(pointDragged: any): void;
    confirmClick(): void;
    getEntityByObjId(objId: any): any;
}
export default PlotMoveDrawer;
