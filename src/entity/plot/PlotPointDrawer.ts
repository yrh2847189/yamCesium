import PlotToolTip from "./GlobeTooltip";
import Cesium from "../../cesium/Cesium";
import layer from "../../plugins/lib/layer/Layer";

export default class PlotPointDrawer {

  viewer: any;
  scene: any;
  clock: any;
  canvas: any;
  camera: any;
  ellipsoid: any;
  tooltip: any;
  entity: any;
  position: any;
  drawHandler: any;
  modifyHandler: any;
  okHandler: any;
  cancelHandler: any;
  image: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjUlEQVQ4T5WTO0gDQRCG598TUohgLqUIChcSEBsfjQ9MEWvtFDs7E+0tUllaa5JSECzstLdI46NQGxESc2JELBMLCxEuO86dXkhiAndX7c3O/PvPzregHl+sWBlpOioOQyXdbW7qsjGgq/VM4r07Hd0Bs2gfMfMkgT6hKcKAI0nfTBwF8NDIWJvtNR0CZsF+kcSaBFO9nEnskQiDjaw17u+3BKKF6q38TPcp7Agz0d1HNj7jBj2BWNHeF9sLspwLIiA5p9LOaz1j7cLM26Ni+wygqYDFXhoz3YOwCvPwaRkKObG1FEZAzF+S1nuI5e0dDV6XXubDCdANGCeIFp63xNAGiBdDCTBdM9Qxhg+qKWUgJyLpMAIMKrFD0oJQp1mdBx2hf4g7SgW94o3RpU+udVaWE0FcSHFJxlhzqWyB5FIobYwFEZAJ1HwaO1D+o9EWkbU+QldyesSnsEVie7JLpdacFotf4siQgqYicjTTkFK4cOlrz//3Gr07ETqJdRJQiV/qdIWgyo1t663b2Q/kAI6uzOBy0gAAAABJRU5ErkJggg==";
  toolBarIndex: any;
  layerId: string = "globeEntityDrawerLayer";

  constructor(viewer: any) {
    this.viewer = viewer;
    this.scene = viewer.scene;
    this.clock = viewer.clock;
    this.canvas = viewer.scene.canvas;
    this.camera = viewer.scene.camera;
    this.ellipsoid = viewer.scene.globe.ellipsoid;
    this.tooltip = new PlotToolTip(viewer.container);
  }

  clear() {
    if (this.drawHandler) {
      this.drawHandler.destroy();
      this.drawHandler = null;
    }
    if (this.modifyHandler) {
      this.modifyHandler.destroy();
      this.modifyHandler = null;
    }
    if (this.toolBarIndex != null) {
      // layer.close(this.toolBarIndex);
    }
    this.entity = null;
    this._clearMarkers(this.layerId);
    this.tooltip.setVisible(false);
  }

  showModifyPoint(position: any, okHandler: Function, cancelHandler: Function) {
    this.position = position;
    this.okHandler = okHandler;
    this.cancelHandler = cancelHandler;
    this.entity = null;
    this._createPoint();
    this._startModify();
  }

  startDrawPoint(okHandler: Function, cancelHandler: Function) {
    this.okHandler = okHandler;
    this.cancelHandler = cancelHandler;
    this.entity = null;
    this.position = null;
    var floatingPoint = null;
    this.drawHandler = new Cesium.ScreenSpaceEventHandler(this.canvas);

    this.drawHandler.setInputAction((event: any) => {
      const wp = event.position;
      if (!Cesium.defined(wp)) {
        return;
      }
      const ray = this.camera.getPickRay(wp);
      if (!Cesium.defined(ray)) {
        return;
      }
      const cartesian = this.scene.globe.pick(ray, this.scene);
      if (!Cesium.defined(cartesian)) {
        return;
      }
      this.position = cartesian;
      this.entity.position.setValue(cartesian);
      this.tooltip.setVisible(false);
      this._startModify();
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    this.drawHandler.setInputAction((event: any) => {
      const wp = event.endPosition;
      if (!Cesium.defined(wp)) {
        return;
      }
      this.tooltip.showAt(wp, "<p>选择位置</p>");
      const ray = this.camera.getPickRay(wp);
      if (!Cesium.defined(ray)) {
        return;
      }
      const cartesian = this.scene.globe.pick(ray, this.scene);
      if (!Cesium.defined(cartesian)) {
        return;
      }
      this.position = cartesian;
      if (this.entity == null) {
        this._createPoint();
      } else {
        this.entity.position.setValue(cartesian);
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  }

  _startModify() {
    let isMoving = false;
    let pickedAnchor: any = null;
    if (this.drawHandler) {
      this.drawHandler.destroy();
      this.drawHandler = null;
    }
    this._showToolBar();

    this.modifyHandler = new Cesium.ScreenSpaceEventHandler(this.canvas);

    this.modifyHandler.setInputAction((event: any) => {
      const wp = event.position;
      if (!Cesium.defined(wp)) {
        return;
      }
      const ray = this.camera.getPickRay(wp);
      if (!Cesium.defined(ray)) {
        return;
      }
      const cartesian = this.scene.globe.pick(ray, this.scene);
      if (!Cesium.defined(cartesian)) {
        return;
      }
      if (isMoving) {
        isMoving = false;
        pickedAnchor.position.setValue(cartesian);
        const oid = pickedAnchor.oid;
        this.position = cartesian;
        this.tooltip.setVisible(false);
      } else {
        const pickedObject = this.scene.pick(wp);
        if (!Cesium.defined(pickedObject)) {
          return;
        }
        if (!Cesium.defined(pickedObject.id)) {
          return;
        }
        const entity = pickedObject.id;
        if (entity.layerId != this.layerId || entity.flag != "anchor") {
          return;
        }
        pickedAnchor = entity;
        isMoving = true;
        this.tooltip.showAt(wp, "<p>移动位置</p>");
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    this.modifyHandler.setInputAction((event: any) => {
      if (!isMoving) {
        return;
      }
      const wp = event.endPosition;
      if (!Cesium.defined(wp)) {
        return;
      }
      this.tooltip.showAt(wp, "<p>移动位置</p>");

      const ray = this.camera.getPickRay(wp);
      if (!Cesium.defined(ray)) {
        return;
      }
      const cartesian = this.scene.globe.pick(ray, this.scene);
      if (!Cesium.defined(cartesian)) {
        return;
      }
      pickedAnchor.position.setValue(cartesian);
      const oid = pickedAnchor.oid;
      this.position = cartesian;
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  }

  _createPoint() {
    const point = this.viewer.entities.add({
      position: this.position,
      billboard: {
        image: this.image,
        eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, 0)),
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND, //绝对贴地
        clampToGround: true,
        disableDepthTestDistance: Number.POSITIVE_INFINITY //元素在正上方
      }
    });
    point.oid = 0;
    point.layerId = this.layerId;
    point.flag = "anchor";
    this.entity = point;
    return point;
  }

  _showToolBar() {
    // this._createToolBar();
    layer.confirm("哈哈哈", {
        title: "操作",
        content: "测试",
        type: 1,
        area: ["300px", "200px"],
        skin: "yam-layer-title-lan", //加上边框
        shade: 0.3,
        shadeClose: true,
        move: true
      }, (index: any) => {
        this.clear();
        layer.close(index);
        if (this.okHandler) {
          const lonLat = this._getLonLat(this.position);
          this.okHandler(this.position, lonLat);

        }
      }, (index: any) => {
        this.clear();
        layer.close(index);
        if (this.cancelHandler) {
          this.cancelHandler();
        }
      }
    );
    // var width = $(window).width();
    // var wTop = 60;
    // var wLeft = parseInt((width - 145) / 2);
    // this.toolBarIndex = layer.open({
    //   title: false,
    //   type: 1,
    //   fixed: true,
    //   resize: false,
    //   shade: 0,
    //   content: $("#shapeEditContainer"),
    //   offset: [wTop + "px", wLeft + "px"],
    //   move: "#shapeEditRTCorner"
    // });
    // var cssSel = "#layui-layer" + this.toolBarIndex + " .layui-layer-close2";
    // $(cssSel).hide();
  }

  _createToolBar() {
    // var this = this;
    // var objs = $("#shapeEditContainer");
    // objs.remove();
    // var html = "<div id=\"shapeEditContainer\" style=\"padding: 10px 10px;\">"
    //   + "    <button name=\"btnOK\" class=\"layui-btn layui-btn-xs layui-btn-normal\"> 确定 </button>"
    //   + "    <button name=\"btnCancel\" class=\"layui-btn layui-btn-xs layui-btn-danger\"> 取消 </button>"
    //   + "    <div id=\"shapeEditRTCorner\" style=\"width: 16px; position: absolute; right: 0px; top: 0px; bottom: 0px\">"
    //   + "    </div>"
    //   + "</div>";
    // $("body").append(html);
    //
    // var btnOK = $("#shapeEditContainer button[name='btnOK']");
    // var btnCancel = $("#shapeEditContainer button[name='btnCancel']");
    // btnOK.unbind("click").bind("click", function() {
    //   this.clear();
    //   // layer.close(this.toolBarIndex);
    // if (this.okHandler) {
    //   const lonLat = this._getLonLat(this.position);
    //   this.okHandler(this.position, lonLat);
    // }
    // });
    // btnCancel.unbind("click").bind("click", function() {
    //   this.clear();
    //   // layer.close(this.toolBarIndex);
    //   if (this.cancelHandler) {
    //     this.cancelHandler();
    //   }
    // });
  }

  _getLonLat(cartesian: any) {
    const cartographic = this.ellipsoid.cartesianToCartographic(cartesian);
    cartographic.height = this.viewer.scene.globe.getHeight(cartographic);
    const pos = {
      lon: cartographic.longitude,
      lat: cartographic.latitude,
      alt: cartographic.height,
      height: cartographic.height
    };
    pos.lon = Cesium.Math.toDegrees(pos.lon);
    pos.lat = Cesium.Math.toDegrees(pos.lat);
    return pos;
  }

  _clearMarkers(layerName: string) {
    var entityList = this.viewer.entities.values;
    if (entityList == null || entityList.length < 1)
      return;
    for (let i = 0; i < entityList.length; i++) {
      var entity = entityList[i];
      if (entity.layerId == layerName) {
        this.viewer.entities.remove(entity);
        i--;
      }
    }
  }
}
