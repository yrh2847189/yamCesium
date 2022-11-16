declare class DistanceLegendViewModel {
    terria: any;
    _removeSubscription: any;
    _lastLegendUpdate: any;
    eventHelper: any;
    enableDistanceLegend: any;
    distanceLabel: any;
    barWidth: any;
    constructor(options: any);
    destroy(): void;
    show(container: any): void;
    static create(options: any): DistanceLegendViewModel;
}
export default DistanceLegendViewModel;
