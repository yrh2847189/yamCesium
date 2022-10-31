import Cesium from "../../cesium/Cesium";
import PlotTracker from "./PlotTracker";

interface Draw {
  flag: number,
  layerId: string,
  shape: Array<any>,
  shapeDic: any,
}

interface _editParams {
  objId: string,
  isEdit: boolean,
  shapeType: string,
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
  editHandler: any;
  _editParams: _editParams = {
    objId: "",
    isEdit: false,
    shapeType: ""
  };
  _shapeTypes: Array<string> = ["Polygon", "Polyline", "Rectangle", "Circle", "Point", "BufferLine", "StraightArrow", "AttackArrow", "PincerArrow"];

  constructor(viewer: any) {
    this.viewer = viewer;
    this.plotTracker = new PlotTracker(this.viewer);
    this.bindGloveEvent();
  }

  bindGloveEvent() {
    const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
    handler.setInputAction((movement: any) => {
      const pick = this.viewer.scene.pick(movement.position);
      if (!pick) {
        return;
      }
      const obj = pick.id;
      if (!obj || !obj.layerId || this.draw.flag == 0) {
        return;
      }
      const objId = obj.objId;
      //flag为编辑或删除标识,1为编辑，2为删除
      if (this.draw.flag == 1 && this._shapeTypes.indexOf(obj.shapeType) > -1) {
        this.draw.flag = 0;
        this._editParams = {
          objId: objId,
          isEdit: true,
          shapeType: obj.shapeType
        };
      } else if (this.draw.flag == 2) {
        this.clearEntityById(objId);
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }

  editShape() {
    this.draw.flag = 1;
    //清除标绘状态
    this.plotTracker.clear();
    return new Promise((resolve, reject) => {
      const timeId = setInterval(() => {
        if (this._editParams.isEdit) {
          clearInterval(timeId);
          this.editPoint(this._editParams.objId).then((res: any) => {
            this._editParams.isEdit = false;
            resolve(res);
          }).catch(() => {
            this._editParams.isEdit = false;
            reject();
          });
        }
      }, 100);
    });
  }

  drawPoint(options?: any) {
    const objId = (new Date()).getTime() + "";
    return new Promise((resolve, reject) => {
      this.plotTracker.trackPoint(options).then((position: any) => {
        this.draw.shapeDic[objId] = position;
        let entity = this.createPoint(position, objId);
        resolve({ position: position, entity: entity });
      }).catch((err: any) => {
        reject(err);
      });
    });
  }

  showPoint(options?: any) {
    const { position, objId } = options;
    let entity = this.createPoint(position, objId);
    return { position: position, entity: entity };
  }

  createPoint(position: any, objId: string) {
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
    return entity;
  }

  editPoint(objId: string) {
    let oldPosition = this.draw.shapeDic[objId];
    if (oldPosition instanceof Cesium.Cartesian3) {
      oldPosition = JSON.parse(JSON.stringify(oldPosition));
    }
    //先移除entity
    this.clearEntityById(objId);

    return new Promise((resolve, reject) => {
      this.plotTracker.pointDrawer.showModifyPoint({ position: oldPosition }).then((position: any) => {
        this.draw.shapeDic[objId] = position;
        let res = this.showPoint({ position: position, objId: objId });
        resolve(res);
      }).catch(() => {
        let res = this.showPoint({ position: oldPosition, objId: objId });
        reject(res);
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
