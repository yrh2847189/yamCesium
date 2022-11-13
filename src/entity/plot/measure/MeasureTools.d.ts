import * as Cesium from "cesium";
export default class MeasureTools {
    viewer: Cesium.Viewer;
    entityCollection: Cesium.Entity[];
    dis: string;
    distance: number;
    pointEntity: Cesium.Entity | undefined;
    tempEntityCollection: Cesium.Entity[];
    turf: any;
    viewModel: any;
    constructor(viewer: Cesium.Viewer, turf: any);
    /**
     * 属性绑定
     */
    bindModel(): void;
    clear(): void;
    clearTempEntity(): void;
    closeOtherFunc(nowFunc: any): void;
    getCollection(): Cesium.Entity[];
    destroy(): void;
    measurePoint(): void;
    measureDis(): void;
    measureHeight(): void;
    measureArea(): void;
    addPoint(position: Cesium.Cartesian3): Cesium.Entity;
    addLine(positions: Cesium.Cartesian3[]): void;
    addPolyGon(positions: Cesium.Cartesian3[]): void;
    addLabel(centerPoint: Cesium.Cartesian3, text: string): Cesium.Entity;
    addLabelWithPoint(centerPoint: Cesium.Cartesian3, text: string): Cesium.Entity;
    getLengthText(firstPoint: Cesium.Cartesian3, secondPoint: Cesium.Cartesian3): number;
    getArea(points: Cesium.Cartesian3[]): string;
    getCenterOfGravityPoint(mPoints: Cesium.Cartesian3[]): Cesium.Cartesian3;
}
//# sourceMappingURL=MeasureTools.d.ts.map