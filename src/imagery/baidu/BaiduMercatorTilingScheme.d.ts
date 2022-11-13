import * as Cesium from "cesium";
declare class BaiduMercatorTilingScheme extends Cesium.WebMercatorTilingScheme {
    _projection: any;
    resolutions: any;
    _rectangle: any;
    constructor(options?: any);
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
