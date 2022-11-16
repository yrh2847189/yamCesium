/// <reference types="node" />
import * as Cesium from "cesium";
import "./raindrop.css";
declare class Weather {
    viewer: Cesium.Viewer;
    stage: any;
    sign: boolean;
    snowLayer: string;
    snowPolygon: any;
    darkTime: NodeJS.Timer | undefined;
    FogStage: Cesium.PostProcessStage | undefined;
    viewModel: {
        lightRainEnabled: boolean;
        moderateRainEnabled: boolean;
        heavyRainEnabled: boolean;
        raindropEnabled: boolean;
        thunderEnabled: boolean;
        snowEnabled: boolean;
        overcastEnabled: boolean;
        cloudyEnabled: boolean;
        sunnyEnabled: boolean;
        nightViewEnabled: boolean;
        screenFogEnabled: boolean;
    };
    readonly defaultSkyBoxSource: any;
    showStatus: {
        cloud: boolean;
        sun: boolean;
    };
    stages: any;
    postProcessStages: Cesium.PostProcessStageCollection;
    skyAtmosphere: Cesium.SkyAtmosphere;
    constructor(viewer: Cesium.Viewer);
    /**
     * 属性绑定
     */
    bindModel(): void;
    closeFunction(funcName: string): void;
    rain(name: string, shader: string): void;
    raindrop(): void;
    removeElement(): void;
    lightRain(): void;
    moderateRain(): void;
    heavyRain(): void;
    snow(): void;
    overcast(): void;
    shaderLight(): string;
    shaderMod(): string;
    shaderHeavy(): string;
    shaderSnow(): string;
    shaderOvercast(): string;
    shaderFog(delta: number): string;
    thunderstorm(): void;
    timeout(): void;
    addRainDrop(): void;
    cloudy(): void;
    sunny(): void;
    darkness(): void;
    changeToDark(): void;
    changeToDayLight(): void;
    screenFog(delta: number): void;
    /**
     * 加载天空盒子
     * @param {string} sources 天空盒子图片路径 如果不传表示恢复默认天空盒子
     * @param {string} sources.negativeX
     * @param {string} sources.negativeX
     * @param {string} sources.positiveY
     * @param {string} sources.negativeY
     * @param {string} sources.positiveZ
     * @param {string} sources.negativeZ
     */
    loadSkybox(sources?: {
        positiveX: string;
        negativeX: string;
        positiveY: string;
        negativeY: string;
        positiveZ: string;
        negativeZ: string;
    }): void;
    clear(): void;
}
export default Weather;
