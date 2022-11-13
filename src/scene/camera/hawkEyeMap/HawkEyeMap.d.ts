import "./hawkEyeMap.css";
export default class HawkEyeMap {
    viewer: any;
    hawkEyeMap: any;
    viewModel: {
        enabled: boolean;
    };
    eye: HTMLDivElement | undefined;
    constructor(viewer: any);
    init(): void;
    bindEvent(): void;
    destroy(): void;
    syncMap(): void;
    /**
     * 属性绑定
     */
    bindModel(): void;
}
