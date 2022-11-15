import * as Cesium from "cesium";
/**
 * 百度地图图层参数
 * @interface
 */
interface BaiduImageryProviderOptions {
    /**
     * 图层类型 img:影像图，vec:矢量图，custom:自定义图
     */
    style?: string;
    /**
     * 投影方式 BD09:百度墨卡托，WGS84:WGS84坐标系
     */
    crs?: string;
}
/**
 * @desc 百度地图图层
 */
declare class BaiduImageryProvider {
    _url: string;
    _tileWidth: number;
    _tileHeight: number;
    _maximumLevel: number;
    _crs: string;
    _tilingScheme: any;
    _rectangle: any;
    _credit: any;
    _style: any;
    _token: string | undefined;
    /**
     * @param options {BaiduImageryProviderOptions} 百度地图图层参数
     * @param {Ellipsoid} [options.ellipsoid=Ellipsoid.WGS84] 其表面被平铺的椭球体。默认为WGS84椭球.
     * @param {Number} [options.numberOfLevelZeroTilesX=1] X方向上0级的平铺数瓦片树.
     * @param {Number} [options.numberOfLevelZeroTilesY=1] 级别0处Y方向的平铺数瓦片树.
     * @param {Cartesian2} [options.rectangleSouthwestInMeters] 覆盖的矩形的西南角瓷砖方案，单位为米。
     * 如果未指定此参数或矩形NortheastInMeters地球在经度方向上覆盖，在纬度方向上覆盖相等的距离方向，导致正方形投影.
     * @param {Cartesian2} [options.rectangleNortheastInMeters] 覆盖的矩形的东北角瓷砖方案，单位为米。
     * 如果未指定此参数或矩形SouthwestInMeters地球在经度方向上覆盖，在纬度方向上覆盖相等的距离方向，导致正方形投影.
     * @param {String} [options.style] 图层类型 img:影像图，vec:矢量图，custom:自定义图
     * @param {String} [options.crs] 投影方式 BD09:百度墨卡托，WGS84:WGS84坐标系
     */
    constructor(options: BaiduImageryProviderOptions);
    get url(): string;
    get token(): string | undefined;
    get tileWidth(): number;
    get tileHeight(): number;
    get maximumLevel(): number;
    get minimumLevel(): number;
    get tilingScheme(): any;
    get rectangle(): any;
    get ready(): boolean;
    get credit(): any;
    get hasAlphaChannel(): boolean;
    getTileCredits(x: number, y: number, level: string): void;
    requestImage(x: number, y: number, level: string): Promise<Cesium.CompressedTextureBuffer | Cesium.ImageryTypes> | undefined;
}
export default BaiduImageryProvider;
