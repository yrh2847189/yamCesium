import "./layer.css";
export default class layer {
    static close(index) {
        const layerContainer = document.querySelector("#yam-layer-container" + index);
        if (layerContainer) {
            layerContainer.remove();
        }
    }
    static alert(content, options, yes) {
        const layerOptions = {
            title: false,
            type: 0,
            content: content,
            skin: "yam-layer-title-lan",
            shade: 0.3,
            shadeClose: true,
            move: true,
            yes: yes || function () {
                layer.close(layer.layerId);
            }
        };
        if (options) {
            Object.assign(layerOptions, options);
        }
        this.open(layerOptions);
    }
    static confirm(content, options) {
        if (arguments.length === 1) {
            options = content;
            content = options.content;
        }
        const layerOptions = {
            title: false,
            type: 0,
            content: content,
            skin: "yam-layer-title-lan",
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
                const layer = document.querySelector(`#yam-layer${this.layerId}`);
                layer.appendChild(btn);
            });
        });
    }
    static open(options) {
        var _a;
        this.close(this.layerId);
        if (typeof options.title == "undefined") {
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
        const layer = document.querySelector(`#yam-layer${this.layerId}`);
        if (options.title == false) {
            (_a = layer === null || layer === void 0 ? void 0 : layer.querySelector(".yam-layer-title")) === null || _a === void 0 ? void 0 : _a.remove();
        }
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
                switch (options.offset) {
                    case "auto":
                        layer.style.top = top + "px";
                        layer.style.left = left + "px";
                        break;
                    case "t":
                        layer.style.top = "0px";
                        layer.style.left = left + "px";
                        break;
                    case "r":
                        layer.style.top = top + "px";
                        layer.style.left = windowWidth - clientWidth + "px";
                        break;
                    case "b":
                        layer.style.top = windowHeight - clientHeight + "px";
                        layer.style.left = left + "px";
                        break;
                    case "l":
                        layer.style.top = top + "px";
                        layer.style.left = "0px";
                        break;
                    case "lt":
                        layer.style.top = "0px";
                        layer.style.left = "0px";
                        break;
                    case "lb":
                        layer.style.top = windowHeight - clientHeight + "px";
                        layer.style.left = "0px";
                        break;
                    case "rt":
                        layer.style.top = "0px";
                        layer.style.left = windowWidth - clientWidth + "px";
                        break;
                    case "rb":
                        layer.style.top = windowHeight - clientHeight + "px";
                        layer.style.left = windowWidth - clientWidth + "px";
                        break;
                    default:
                        layer.style.top = options.offset;
                        layer.style.left = left + "px";
                }
            }
            else {
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
            }
            else {
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
        const shade = document.querySelector(`#yam-layer-shade${this.layerId}`);
        if (options.shade) {
            if (typeof options.shade === "number") {
                shade.style.backgroundColor = `rgba(0,0,0,${options.shade})`;
            }
            else if (typeof options.shade === "boolean") {
                shade.style.backgroundColor = `rgba(0, 0, 0, 0.3)`;
            }
            else {
                shade.style.backgroundColor = `rgba(${options.shade[0]},${options.shade[1]},${options.shade[2]},${options.shade[3]})`;
            }
        }
        else {
            shade.style.display = "none";
        }
        if (options.shadeClose) {
            const shade = document.querySelector(`#yam-layer-shade${this.layerId}`);
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
                const move = document.querySelector(options.move);
                move.style.userSelect = "none";
                move.style.cursor = "move";
                move.addEventListener("mousedown", (e) => {
                    const x = e.clientX - layer.offsetLeft;
                    const y = e.clientY - layer.offsetTop;
                    document.onmousemove = (e) => {
                        layer.style.left = e.clientX - x + "px";
                        layer.style.top = e.clientY - y + "px";
                        // 拖动div，禁止拖动超出屏幕
                        if (e.clientX - x < 0) {
                            layer.style.left = 0 + "px";
                        }
                        if (e.clientX - x > window.innerWidth - layer.clientWidth) {
                            layer.style.left = window.innerWidth - layer.clientWidth + "px";
                        }
                        if (e.clientY - y < 0) {
                            layer.style.top = 0 + "px";
                        }
                        if (e.clientY - y > window.innerHeight - layer.clientHeight) {
                            layer.style.top = window.innerHeight - layer.clientHeight + "px";
                        }
                    };
                    document.onmouseup = () => {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                });
            }
            else {
                const move = document.querySelector(`#yam-layer${this.layerId} .yam-layer-title`);
                if (move) {
                    move.style.userSelect = "none";
                    move.style.cursor = "move";
                    move.addEventListener("mousedown", (e) => {
                        const x = e.clientX - layer.offsetLeft;
                        const y = e.clientY - layer.offsetTop;
                        document.onmousemove = (e) => {
                            layer.style.left = e.clientX - x + "px";
                            layer.style.top = e.clientY - y + "px";
                            // 拖动div，禁止拖动超出屏幕
                            if (e.clientX - x < 0) {
                                layer.style.left = 0 + "px";
                            }
                            if (e.clientX - x > window.innerWidth - layer.clientWidth) {
                                layer.style.left = window.innerWidth - layer.clientWidth + "px";
                            }
                            if (e.clientY - y < 0) {
                                layer.style.top = 0 + "px";
                            }
                            if (e.clientY - y > window.innerHeight - layer.clientHeight) {
                                layer.style.top = window.innerHeight - layer.clientHeight + "px";
                            }
                        };
                        document.onmouseup = () => {
                            document.onmousemove = null;
                            document.onmouseup = null;
                        };
                    });
                }
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
layer.layers = [];
layer.zIndex = 20001123;
layer.layerId = 10000;
