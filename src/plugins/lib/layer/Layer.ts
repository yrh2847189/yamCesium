import "./layer.css";

interface LayerOptions {
  title: boolean | string,
  type?: number,
  content: string | HTMLElement,
  skin?: string,
  offset?: string | Array<string>,
}

export default class layer {

  static layers: Array<any> = [];
  static zIndex: number = 20001123;
  static layerId: number = 10000;

  static close(index: number) {

  }

  static open(options: LayerOptions) {
    const layerDiv = document.createElement("div");
    let html = `
     <div class="yam-layer-shade" id="yam-layer-shade${this.layerId}" style="z-index: ${this.zIndex++};background-color: rgb(0, 0, 0); opacity: 0.3;"></div>
     <div class="yam-layer yam-layer-dialog" id="yam-layer${this.layerId}" style="z-index: ${this.zIndex++};">
       <div class="yam-layer-title">${options.title}</div>
        <div class="yam-layer-content">${options.content}</div>
    </div>
     `;
    layerDiv.innerHTML = html;
    document.body.appendChild(layerDiv);
    const layer = document.querySelector(`#yam-layer${this.layerId}`) as HTMLElement;
    const clientWidth = layer.clientWidth;
    const clientHeight = layer.clientHeight;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const top = (windowHeight - clientHeight) / 2;
    const left = windowWidth / 2 - clientWidth / 2;
    layer.style.top = top + "px";
    layer.style.left = left + "px";
  }
}
