import * as Cesium from "cesium";
interface TencentImageryProviderOptions extends Cesium.UrlTemplateImageryProvider.ConstructorOptions {
    style?: string;
    subdomains?: string[];
    key?: string;
}
declare class TencentImageryProvider extends Cesium.UrlTemplateImageryProvider {
    constructor(options: TencentImageryProviderOptions);
}
export default TencentImageryProvider;
