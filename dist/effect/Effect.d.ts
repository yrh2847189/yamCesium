/**
 * 效果
 */
import CircleSpread from "./CircleSpread";
import RadarScan from "./RadarScan";
import HeatMap from "./Heatmap";
declare class Effect {
    /**
     * 圆扩散
     */
    circleSpread: typeof CircleSpread;
    /**
     * 雷达扫描
     */
    radarScan: typeof RadarScan;
    /**
     * 热力图
     */
    heatMap: typeof HeatMap;
}
declare const _default: Effect;
export default _default;
