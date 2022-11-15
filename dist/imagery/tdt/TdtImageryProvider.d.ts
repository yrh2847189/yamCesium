import * as Cesium from "cesium";
interface TdtImageryProviderOptions extends Cesium.UrlTemplateImageryProvider.ConstructorOptions {
    style?: string;
    subdomains?: string[];
    key?: string;
}
declare class TdtImageryProvider extends Cesium.UrlTemplateImageryProvider {
    constructor(options: TdtImageryProviderOptions);
}
export default TdtImageryProvider;
