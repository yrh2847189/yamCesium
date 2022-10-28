import Cesium from "../../cesium/Cesium";
import PlotTracker from "./PlotTracker";

interface Draw {
  flag: number,
  layerId: string,
  shape: Array<any>,
  shapeDic: any,
}

export default class Plot {
  viewer: any;
  draw: Draw = {
    flag: 0,
    layerId: "globeDrawerDemoLayer",
    shape: [],
    shapeDic: {}
  };
  plotTracker: PlotTracker;

  constructor(viewer: any) {
    this.viewer = viewer;
    this.plotTracker = new PlotTracker(this.viewer);
  }

  bindGloveEvent() {
    let _this = this;
    let handler = new Cesium.ScreenSpaceEventHandler(_this.viewer.scene.canvas);
    handler.setInputAction((movement: any) => {
      let pick = _this.viewer.scene.pick(movement.position);
      if (!pick) {
        return;
      }
      let obj = pick.id;
      if (!obj || !obj.layerId || _this.draw.flag == 0) {
        return;
      }
      let objId = obj.objId;
      //flag为编辑或删除标识,1为编辑，2为删除
      if (_this.draw.flag === 1) {
        switch (obj.shapeType) {
          case "polygon":
            _this.draw.flag = 0;
            break;
          case "polyline":
            _this.draw.flag = 0;
            break;
          case "rectangle":
            _this.draw.flag = 0;
            break;
          case "circle":
            _this.draw.flag = 0;
            break;
          case "point":
            _this.draw.flag = 0;
            break;
          case "billboard":
            _this.draw.flag = 0;
            break;
          case "bufferLine":
            _this.draw.flag = 0;
            break;
          case "straightArrow":
            _this.draw.flag = 0;
            break;
          case "attackArrow":
            _this.draw.flag = 0;
            break;
          case "pincerArrow":
            _this.draw.flag = 0;
            break;
          default:
            break;
        }
      } else if (_this.draw.flag == 2) {
        _this.clearEntityById(objId);
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }

  showPoint() {
    const objId = (new Date()).getTime() + "";
    return new Promise((resolve, reject) => {
      this.plotTracker.trackPoint((position: any, lonLat: any) => {
        const cartographics = Cesium.Cartographic.fromCartesian(position);
        let lat = Cesium.Math.toDegrees(cartographics.latitude);
        let lng = Cesium.Math.toDegrees(cartographics.longitude);
        const entity = this.viewer.entities.add({
          layerId: this.draw.layerId,
          objId: objId,
          shapeType: "Point",
          position: position,
          billboard: {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjUlEQVQ4T5WTO0gDQRCG598TUohgLqUIChcSEBsfjQ9MEWvtFDs7E+0tUllaa5JSECzstLdI46NQGxESc2JELBMLCxEuO86dXkhiAndX7c3O/PvPzregHl+sWBlpOioOQyXdbW7qsjGgq/VM4r07Hd0Bs2gfMfMkgT6hKcKAI0nfTBwF8NDIWJvtNR0CZsF+kcSaBFO9nEnskQiDjaw17u+3BKKF6q38TPcp7Agz0d1HNj7jBj2BWNHeF9sLspwLIiA5p9LOaz1j7cLM26Ni+wygqYDFXhoz3YOwCvPwaRkKObG1FEZAzF+S1nuI5e0dDV6XXubDCdANGCeIFp63xNAGiBdDCTBdM9Qxhg+qKWUgJyLpMAIMKrFD0oJQp1mdBx2hf4g7SgW94o3RpU+udVaWE0FcSHFJxlhzqWyB5FIobYwFEZAJ1HwaO1D+o9EWkbU+QldyesSnsEVie7JLpdacFotf4siQgqYicjTTkFK4cOlrz//3Gr07ETqJdRJQiV/qdIWgyo1t663b2Q/kAI6uzOBy0gAAAABJRU5ErkJggg==",
            eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, 0)),
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND, //绝对贴地
            clampToGround: true,
            disableDepthTestDistance: Number.POSITIVE_INFINITY //元素在正上方
          },
          clampToGround: true
        });
        this.draw.shape.push(entity);
        resolve(position);
      }, () => {
        console.log("取消绘制");
        reject("取消绘制");
      });
    });
  }

  clearEntityById(objId: string) {
    let _this = this;
    let entityList = _this.viewer.entities.values;
    if (entityList == null || entityList.length < 1) {
      return;
    }
    for (let i = 0; i < entityList.length; i++) {
      let entity = entityList[i];
      if (entity.layerId === _this.draw.layerId && entity.objId === objId) {
        _this.viewer.entities.remove(entity);
        i--;
      }
    }
  }

  getParams(objId: string) {
    let _this = this;
    let entityList = _this.viewer.entities.values;
    if (entityList == null || entityList.length < 1) {
      return;
    }
    for (let i = 0; i < entityList.length; i++) {
      let entity = entityList[i];
      if (entity.layerId === _this.draw.layerId && entity.objId === objId) {
        i--;
        return entity;
      }
    }
  }
}
