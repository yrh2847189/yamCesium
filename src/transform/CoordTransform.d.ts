/**
 * @Author: Caven
 * @Date: 2021-01-31 20:40:25
 */
declare class CoordTransform {
    /**
     * BD-09 To GCJ-02
     * @param lng
     * @param lat
     * @returns {number[]}
     */
    static BD09ToGCJ02(lng: number, lat: number): number[];
    /**
     * GCJ-02 To BD-09
     * @param lng
     * @param lat
     * @returns {number[]}
     * @constructor
     */
    static GCJ02ToBD09(lng: number, lat: number): number[];
    /**
     * WGS-84 To GCJ-02
     * @param lng
     * @param lat
     * @returns {number[]}
     */
    static WGS84ToGCJ02(lng: number, lat: number): number[];
    /**
     * GCJ-02 To WGS-84
     * @param lng
     * @param lat
     * @returns {number[]}
     * @constructor
     */
    static GCJ02ToWGS84(lng: number, lat: number): number[];
    /**
     *
     * @param lng
     * @param lat
     * @returns {number[]}
     */
    static delta(lng: number, lat: number): number[];
    /**
     *
     * @param lng
     * @param lat
     * @returns {number}
     */
    static transformLng(lng: number, lat: number): number;
    /**
     *
     * @param lng
     * @param lat
     * @returns {number}
     */
    static transformLat(lng: number, lat: number): number;
    /**
     *
     * @param lng
     * @param lat
     * @returns {boolean}
     */
    static out_of_china(lng: number, lat: number): boolean;
}
export default CoordTransform;
//# sourceMappingURL=CoordTransform.d.ts.map