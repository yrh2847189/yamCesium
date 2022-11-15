import * as Cesium from "cesium";
import { Cartesian2, Ellipsoid } from "cesium";
interface BaiduMercatorTilingSchemeOptions {
    resolutions?: number[];
    ellipsoid?: Ellipsoid;
    numberOfLevelZeroTilesX?: number;
    numberOfLevelZeroTilesY?: number;
    rectangleSouthwestInMeters?: Cartesian2;
    rectangleNortheastInMeters?: Cartesian2;
}
/**
 * @class
 * @extends Cesium.WebMercatorTilingScheme
 */
declare class BaiduMercatorTilingScheme extends Cesium.WebMercatorTilingScheme {
    _projection: any;
    resolutions: any;
    _rectangle: any;
    constructor(options: BaiduMercatorTilingSchemeOptions);
    /**
     *
     * @param x
     * @param y
     * @param level
     * @param result
     * @returns {module:cesium.Rectangle|*}
     */
    tileXYToNativeRectangle(x: number, y: number, level: string, result: any): any;
    /**
     *
     * @param position
     * @param level
     * @param result
     * @returns {undefined|*}
     */
    positionToTileXY(position: any, level: string, result: any): any;
}
export default BaiduMercatorTilingScheme;
