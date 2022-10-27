import Cesium from "../../cesium/Cesium";

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

  constructor(viewer: any) {
    this.viewer = viewer;
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
