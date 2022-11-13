import * as Cesium from "cesium";
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
    constructor(options?: any);
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
