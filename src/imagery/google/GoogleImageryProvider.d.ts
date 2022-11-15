import * as Cesium from "cesium";
interface GoogleImageryProviderOptions extends Cesium.UrlTemplateImageryProvider.ConstructorOptions {
    style?: string;
    subdomains?: string[];
}
declare class GoogleImageryProvider extends Cesium.UrlTemplateImageryProvider {
    constructor(options: GoogleImageryProviderOptions);
}
export default GoogleImageryProvider;
