import * as Cesium from "cesium";
import { Cartesian2, Ellipsoid } from "cesium";
/**
 * @class
 * @desc 高德地图瓦片坐标系
 * @extends Cesium.WebMercatorTilingScheme
 */
declare class AmapMercatorTilingScheme extends Cesium.WebMercatorTilingScheme {
    _projection: any;
    constructor(options?: {
        ellipsoid?: Ellipsoid;
        numberOfLevelZeroTilesX?: number;
        numberOfLevelZeroTilesY?: number;
        rectangleSouthwestInMeters?: Cartesian2;
        rectangleNortheastInMeters?: Cartesian2;
    });
}
export default AmapMercatorTilingScheme;
