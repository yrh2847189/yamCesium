/**
 * @Author: Caven
 * @Date: 2021-01-30 22:41:41
 */
declare class BaiduMercatorProjection {
    isWgs84: boolean;
    constructor();
    getDistanceByMC(point1?: any, point2?: any): number;
    /**
     * 根据经纬度坐标计算两点间距离;
     * @param point1
     * @param point2
     * @returns {number|*} 返回两点间的距离
     */
    getDistanceByLL(point1?: any, point2?: any): number;
    /**
     * 平面直角坐标转换成经纬度坐标;
     * @param point
     * @returns {Point|{lng: number, lat: number}}
     */
    convertMC2LL(point?: any): {
        lng: any;
        lat: any;
    };
    /**
     * 经纬度坐标转换成平面直角坐标;
     * @param point 经纬度坐标
     * @returns {{lng: number, lat: number}|*}
     */
    convertLL2MC(point?: any): any;
    /**
     *
     * @param fromPoint
     * @param factor
     * @returns {{lng: *, lat: *}}
     */
    convertor(fromPoint?: any, factor?: any): {
        lng: any;
        lat: any;
    };
    /**
     *
     * @param x1
     * @param x2
     * @param y1
     * @param y2
     * @returns {number}
     */
    getDistance(x1: number, x2: number, y1: number, y2: number): number;
    /**
     *
     * @param deg
     * @returns {number}
     */
    toRadians(deg: number): number;
    /**
     *
     * @param rad
     * @returns {number}
     */
    toDegrees(rad: number): number;
    /**
     *
     * @param v
     * @param a
     * @param b
     * @returns {number}
     */
    getRange(v: number, a: number, b: number): number;
    /**
     *
     * @param v
     * @param a
     * @param b
     * @returns {*}
     */
    getLoop(v: number, a: number, b: number): number;
    /**
     *
     * @param point
     * @returns {{lng: number, lat: number}|*}
     */
    lngLatToMercator(point?: any): any;
    /**
     *
     * @param point
     * @returns {{x: (number|*), y: (number|*)}}
     */
    lngLatToPoint(point?: any): {
        x: any;
        y: any;
    };
    /**
     * 墨卡托变换至经纬度
     * @param point 墨卡托
     * @returns Point 经纬度
     */
    mercatorToLngLat(point?: any): {
        lng: any;
        lat: any;
    };
    /**
     * 平面到球面坐标
     * @param point 平面坐标
     * @returns Point 球面坐标
     */
    pointToLngLat(point?: any): {
        lng: any;
        lat: any;
    };
    /**
     * 地理坐标转换至像素坐标
     * @param point 地理坐标
     * @param zoom 级别
     * @param mapCenter 地图中心点，注意为了保证没有误差，这里需要传递墨卡托坐标
     * @param mapSize 地图容器大小
     */
    pointToPixel(point: any, zoom: number, mapCenter?: any, mapSize?: any): {
        x: number;
        y: number;
    } | undefined;
    /**
     * 像素坐标转换至地理坐标
     * @param pixel 像素坐标
     * @param zoom 级别
     * @param mapCenter 地图中心点，注意为了保证没有误差，这里需要传递墨卡托坐标
     * @param mapSize 地图容器大小
     */
    pixelToPoint(pixel: any, zoom: number, mapCenter?: any, mapSize?: any): {
        lng: any;
        lat: any;
    } | undefined;
    /**
     *
     * @param zoom
     * @returns {number}
     */
    getZoomUnits(zoom: number): number;
}
export default BaiduMercatorProjection;
