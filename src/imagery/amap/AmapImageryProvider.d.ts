import * as Cesium from "cesium";
interface AmapImageryProviderOptions extends Cesium.UrlTemplateImageryProvider.ConstructorOptions {
    style?: string;
    crs?: string;
}
/**
 * @class
 * @desc 高德地图图层
 * @extends Cesium.UrlTemplateImageryProvider
 */
declare class AmapImageryProvider extends Cesium.UrlTemplateImageryProvider {
    constructor(options: AmapImageryProviderOptions);
}
export default AmapImageryProvider;
