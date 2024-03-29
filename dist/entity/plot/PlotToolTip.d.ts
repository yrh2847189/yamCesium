declare class PlotToolTip {
    _frameDiv: HTMLElement;
    _div: HTMLElement;
    _title: HTMLElement;
    constructor(frameDiv: HTMLElement);
    setVisible(visible: boolean): void;
    showAt(position: any, message: string): void;
}
export default PlotToolTip;
