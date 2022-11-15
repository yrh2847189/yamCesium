import "./layer.css";
interface LayerOptions {
    title?: boolean | string;
    type?: number;
    content?: string | HTMLElement;
    skin?: string;
    offset?: string | Array<string>;
    area?: string | Array<string>;
    closeBtn?: number | boolean;
    shade?: number | Array<any> | boolean;
    shadeClose?: boolean;
    time?: number;
    zIndex?: number;
    fixed?: boolean;
    resize?: boolean;
    move?: string | boolean;
    yes?: Function;
    cancel?: Function;
}
export default class layer {
    static layers: Array<any>;
    static zIndex: number;
    static layerId: number;
    static close(index: number): void;
    static alert(content: string, options?: LayerOptions, yes?: Function): void;
    static confirm(content: string | LayerOptions, options?: LayerOptions): Promise<unknown>;
    static open(options: LayerOptions): Promise<unknown>;
}
export {};
