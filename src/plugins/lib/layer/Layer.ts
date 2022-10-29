import "./layer.css";

interface LayerOptions {
  title?: boolean | string,
  type?: number,
  content?: string | HTMLElement,
  skin?: string,
  offset?: string | Array<string>,
  area?: string | Array<string>,
  closeBtn?: number | boolean,
  shade?: number | Array<any> | boolean,
  shadeClose?: boolean,
  time?: number,
  zIndex?: number,
  fixed?: boolean,
  resize?: boolean,
  move?: string | boolean,
  yes?: Function,
  cancel?: Function,
}

export default class layer {

  static layers: Array<any> = [];
  static zIndex: number = 20001123;
  static layerId: number = 10000;

  static close(index: number) {
    const layerContainer = document.querySelector("#yam-layer-container" + index);
    if (layerContainer) {
      layerContainer.remove();
    }
  }

  static alert(content: string, options?: LayerOptions, yes?: Function) {
    const layerOptions = {
      title: false,
      type: 0,
      content: content,
      skin: "yam-layer-title-lan", //加上边框
      shade: 0.3,
      shadeClose: true,
      move: true,
      yes: yes || function() {
        layer.close(layer.layerId);
      }
    };
    if (options) {
      Object.assign(layerOptions, options);
    }
    this.open(layerOptions);
  }

  static confirm(content: string | LayerOptions, options?: LayerOptions) {
    if (arguments.length === 1) {
      options = content as LayerOptions;
      content = options.content as string;
    }
    const layerOptions = {
      title: false,
      type: 0,
      content: content as string,
      skin: "yam-layer-title-lan", //加上边框
      shade: 0.3,
      shadeClose: true,
      move: true
    };
    if (options) {
      Object.assign(layerOptions, options);
    }
    return this.open(layerOptions).then((layerId) => {
      return new Promise((resolve, reject) => {
        const btn = document.createElement("div");
        btn.classList.add("yam-layer-btn");
        const yes = document.createElement("a");
        yes.classList.add("yam-layer-btn-yes");
        yes.innerHTML = "确定";
        btn.appendChild(yes);
        yes.addEventListener("click", () => {
          resolve(layerId);
        });
        const cancel = document.createElement("a");
        cancel.classList.add("yam-layer-btn-cancel");
        cancel.innerHTML = "取消";
        btn.appendChild(cancel);
        cancel.addEventListener("click", () => {
          reject(layerId);
        });
        const layer = document.querySelector(`#yam-layer${this.layerId}`) as HTMLElement;
        layer.appendChild(btn);
      });
    });
  }

  static open(options: LayerOptions) {
    this.close(this.layerId);
    if (!options.title) {
      options.title = "信息";
    }
    const layerDiv = document.createElement("div");
    let html = `
     <div class="yam-layer-shade" id="yam-layer-shade${this.layerId}" style="z-index: ${this.zIndex++};background-color: rgb(0, 0, 0); opacity: 0.3;"></div>
     <div class="yam-layer yam-layer-dialog" id="yam-layer${this.layerId}" style="z-index: ${this.zIndex++};">
       <div class="yam-layer-title">${options.title}</div>
        <div class="yam-layer-content">${options.content}</div>
    </div>
     `;
    layerDiv.innerHTML = html;
    layerDiv.id = "yam-layer-container" + this.layerId;
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

    if (options.offset) {
      if (typeof options.offset === "string") {
        const offset = options.offset.split(" ");
        layer.style.top = offset[0];
        layer.style.left = offset[1];
      } else {
        layer.style.top = options.offset[0] + "px";
        layer.style.left = options.offset[1] + "px";
      }
    }
    if (options.skin) {
      layer.classList.add(options.skin);
    }
    if (options.area) {
      if (typeof options.area === "string") {
        const area = options.area.split(" ");
        layer.style.width = area[0];
        layer.style.height = area[1];
      } else {
        layer.style.width = options.area[0] + "px";
        layer.style.height = options.area[1] + "px";
      }
    }
    if (options.closeBtn) {
      const closeBtn = document.createElement("span");
      closeBtn.classList.add("yam-layer-close");
      closeBtn.innerHTML = "×";
      layer.appendChild(closeBtn);
      closeBtn.addEventListener("click", () => {
        this.close(this.layerId);
      });
    }
    if (options.shade) {
      const shade = document.querySelector(`#yam-layer-shade${this.layerId}`) as HTMLElement;
      if (typeof options.shade === "number") {
        shade.style.backgroundColor = `rgba(0,0,0,${options.shade})`;
      } else if (typeof options.shade === "boolean") {
        shade.style.backgroundColor = `rgba(0, 0, 0, 0.3)`;
      } else {
        shade.style.backgroundColor = `rgba(${options.shade[0]},${options.shade[1]},${options.shade[2]},${options.shade[3]})`;
      }
    }
    if (options.shadeClose) {
      const shade = document.querySelector(`#yam-layer-shade${this.layerId}`) as HTMLElement;
      shade.addEventListener("click", () => {
        this.close(this.layerId);
      });
    }
    if (options.time) {
      setTimeout(() => {
        this.close(this.layerId);
      }, options.time);
    }
    if (options.resize) {
      window.addEventListener("resize", () => {
        const clientWidth = layer.clientWidth;
        const clientHeight = layer.clientHeight;
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const top = (windowHeight - clientHeight) / 2;
        const left = windowWidth / 2 - clientWidth / 2;
        layer.style.top = top + "px";
        layer.style.left = left + "px";
      });
    }
    if (options.move) {
      if (typeof options.move === "string") {
        const move = document.querySelector(options.move) as HTMLElement;
        move.addEventListener("mousedown", (e) => {
          const x = e.clientX - layer.offsetLeft;
          const y = e.clientY - layer.offsetTop;
          document.onmousemove = (e) => {
            const left = e.clientX - x;
            const top = e.clientY - y;
            layer.style.left = left + "px";
            layer.style.top = top + "px";
          };
          document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        });
      } else {
        const move = document.querySelector(`#yam-layer${this.layerId}`) as HTMLElement;
        move.addEventListener("mousedown", (e) => {
          const x = e.clientX - layer.offsetLeft;
          const y = e.clientY - layer.offsetTop;
          document.onmousemove = (e) => {
            const left = e.clientX - x;
            const top = e.clientY - y;
            layer.style.left = left + "px";
            layer.style.top = top + "px";
          };
          document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        });
      }
    }
    // if (options.yes) {
    //   const btn = document.createElement("div");
    //   btn.classList.add("yam-layer-btn");
    //   const yes = document.createElement("a");
    //   yes.classList.add("yam-layer-btn-yes");
    //   yes.innerHTML = "确定";
    //   btn.appendChild(yes);
    //   yes.addEventListener("click", () => {
    //     options.yes && options.yes(this.layerId);
    //   });
    //   if (options.cancel) {
    //     const cancel = document.createElement("a");
    //     cancel.classList.add("yam-layer-btn-cancel");
    //     cancel.innerHTML = "取消";
    //     btn.appendChild(cancel);
    //     cancel.addEventListener("click", () => {
    //       options.cancel && options.cancel(this.layerId);
    //     });
    //   }
    //   layer.appendChild(btn);
    // }
    this.layers.push(this.layerId);
    // return this.layerId;
    return new Promise((resolve, reject) => {
      resolve(this.layerId);
    });
  }
}
