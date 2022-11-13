/**
 * covert canvas to image
 * and save the image file
 */
export declare const Canvas2Image: {
    saveAsImage: (canvas: HTMLCanvasElement | string, width: number, height: number, type: string, fileName: string) => void;
    saveAsPNG: (canvas: HTMLCanvasElement, width: number, height: number, fileName: string) => void;
    saveAsJPEG: (canvas: HTMLCanvasElement, width: number, height: number, fileName: string) => void;
    saveAsGIF: (canvas: HTMLCanvasElement, width: number, height: number, fileName: string) => void;
    saveAsBMP: (canvas: HTMLCanvasElement, width: number, height: number, fileName: string) => void;
    convertToImage: (canvas: HTMLCanvasElement | string, width: number, height: number, type: string) => HTMLImageElement | undefined;
    convertToPNG: (canvas: HTMLCanvasElement, width: number, height: number) => HTMLImageElement | undefined;
    convertToJPEG: (canvas: HTMLCanvasElement, width: number, height: number) => HTMLImageElement | undefined;
    convertToGIF: (canvas: HTMLCanvasElement, width: number, height: number) => HTMLImageElement | undefined;
    convertToBMP: (canvas: HTMLCanvasElement, width: number, height: number) => HTMLImageElement | undefined;
};
//# sourceMappingURL=Canvas2Image.d.ts.map