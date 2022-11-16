import * as turf from "@turf/turf";
import * as Cesium from "cesium";
declare class CesiumMethod {
    viewer: Cesium.Viewer;
    constructor(viewer: Cesium.Viewer);
    /**
     * 笛卡尔转经纬度
     * @param {Cartesian3} cartesian
     * @param withHeight
     * @return {Array<Number>}
     */
    static cartesian3ToLngLat(cartesian: Cesium.Cartesian3, withHeight?: boolean): number[];
    /**
     * 笛卡尔转经纬度
     * @param {Cartesian3} cartesian
     * @param withHeight
     * @return {Array<Number>}
     */
    static cartesian2ToLngLat(cartesian: Cesium.Cartesian3, withHeight?: boolean): number[];
    /**
     * 笛卡尔转经纬度
     * @param cartesian3s
     * @param withHeight
     * @return {Array<Array<number>>}
     */
    static cartesian3sToLngLats(cartesian3s: Array<Cesium.Cartesian3>, withHeight?: boolean): number[][];
    /**
     * 根据笛卡尔解析绝对中心坐标点
     * @param {Array<Cartesian3>} cartesian3s
     * @return {Feature<Point, Properties>}
     */
    static calcAbsoluteCenterByCartesian3s(cartesian3s: Array<Cesium.Cartesian3>): turf.helpers.Feature<turf.helpers.Point, turf.helpers.Properties>;
    /**
     * 根据笛卡尔解析绝对中心坐标点
     * @param {Array<Cartesian3>} cartesian3s
     * @return {{coord: coord, cart: Cartesian3}}
     */
    static countPolygonCenter(cartesian3s: Array<Cesium.Cartesian3>): {
        coord: turf.helpers.Position;
        cart: Cesium.Cartesian3;
    };
    /**
     * 计算多边形面积
     * @param {Array<Array>} coords 一个包含经纬度坐标的二维数组
     * @return {number}
     */
    static calcPolygonArea(coords: Array<Array<number>>): number;
    /**
     * 获取地形高度
     * @param positions
     * @param callback
     */
    getTerrainHeight(positions: Cesium.Cartographic[], callback: Function): void;
    /**
     * 获取camera高度
     */
    getCameraHeight(): number | null;
    /**
     * 获取camera中心点坐标
     * @returns {{lon: number, lat: number, height: number}}
     */
    getCenterPosition(): {
        lon?: undefined;
        lat?: undefined;
        height?: undefined;
    } | {
        lon: number;
        lat: number;
        height: number;
    };
    /**
     * 笛卡尔添加高度
     */
    static addHeightWithCartesian3(cartesian: Cesium.Cartesian3, height: number): Cesium.Cartesian3;
    /**
     * 根据两个笛卡尔坐标获取之间的距离
     * @param cartesian1
     * @param cartesian2
     */
    static measureDistanceWithCartesian3(cartesian1: Cesium.Cartesian3, cartesian2: Cesium.Cartesian3): number;
    static _computeCirclePolygon(positions: any): Cesium.Cartesian3[] | null;
    static _computeCirclePolygon2(center: any, radius: any): Cesium.Cartesian3[] | null;
    static _computeCircleRadius3D(positions: any): number;
}
export default CesiumMethod;
