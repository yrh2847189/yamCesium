/**
 * 效果
 */
import CircleSpread from "./CircleSpread";
import RadarScan from "./RadarScan";
class Effect {
    constructor() {
        /**
         * 圆扩散
         */
        this.circleSpread = CircleSpread;
        /**
         * 雷达扫描
         */
        this.radarScan = RadarScan;
    }
}
export default new Effect();
