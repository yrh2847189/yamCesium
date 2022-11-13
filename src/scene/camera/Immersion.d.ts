export default class Immersion {
    /**
     * viewer
     * @type {null}
     */
    viewer: any;
    scene: any;
    canvas: HTMLCanvasElement;
    viewModel: {
        enabled: boolean;
        firstPersonPerspective: boolean;
    };
    handler: any;
    clockEvent: Function | undefined;
    constructor(viewer: any);
    disEnable(): void;
    enable(): void;
    /**
     * 属性绑定
     */
    bindModel(): void;
}
