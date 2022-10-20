// @ts-ignore
const turf = window.turf;
import Cesium from "../../cesium/Cesium";

const { Cartesian2, Cartesian3, Viewer } = Cesium;

export default class CesiumMethod {
  viewer: typeof Viewer = null;

  constructor(viewer: typeof Viewer) {
    this.viewer = viewer;
  }

  /**
   * 笛卡尔转经纬度
   * @param {Cartesian3} cartesian
   * @param withHeight
   * @return {Array<Number>}
   */
  static cartesianToCoordinate(cartesian: typeof Cartesian3, withHeight: boolean = false) {
    let cartographic = Cesium.Cartographic.fromCartesian(cartesian);
    let lon = Cesium.Math.toDegrees(cartographic.longitude);
    let lat = Cesium.Math.toDegrees(cartographic.latitude);
    let height = cartographic.height;
    if (withHeight) {
      return [lon, lat, height];
    } else {
      return [lon, lat];
    }
  }

  /**
   * 笛卡尔转经纬度
   * @param {Array<Cartesian3>} cartesians
   * @param withHeight
   * @return {Array<Array>}
   */
  static cartesiansToCoordinates(cartesians: Array<typeof Cartesian3>, withHeight: boolean = false) {
    let coordinates = [];
    for (let i = 0, len = cartesians.length; i < len; i++) {
      coordinates.push(this.cartesianToCoordinate(cartesians[i], withHeight));
    }
    return coordinates;
  }

  /**
   * 根据笛卡尔解析绝对中心坐标点
   * @param {Array<Cartesian3>} cartesians
   * @return {Feature<Point, Properties>}
   */
  static calcAbsoluteCenterByCartesians(cartesians: Array<typeof Cartesian3>) {
    let turfPoints = [];
    for (let i = 0, len = cartesians.length; i < len; i++) {
      turfPoints.push(turf.point(this.cartesianToCoordinate(cartesians[i])));
    }
    let center = turf.center(turf.featureCollection(turfPoints));
    return center;
  }

  /**
   * 根据笛卡尔解析绝对中心坐标点
   * @param {Array<Cartesian3>} cartesians
   * @return {{coord: Position, cart: Cartesian3}}
   */
  static countPolygonCenter(cartesians: Array<typeof Cartesian3>) {
    let tempPos = [];
    for (let i = 0, len = cartesians.length; i < len; i++) {
      tempPos.push(turf.point(this.cartesianToCoordinate(cartesians[i])));
    }
    let center = turf.center(turf.featureCollection(tempPos));
    let coord = center.geometry.coordinates;
    let cartesian = Cesium.Cartesian3.fromDegrees(coord[0], coord[1]);
    return {
      coord: coord,
      cart: cartesian
    };
  }

  /**
   * 计算多边形面积
   * @param {Array<Array>} coords 一个包含经纬度坐标的二维数组
   * @return {number}
   */
  static calcPolygonArea(coords: Array<typeof Array>) {
    let polygon = turf.polygon([coords]);
    let area = turf.area(polygon);
    return area;
  }

  /**
   * 获取地形高度
   * @param positions
   * @param callback
   */
  getTerrainHeight(positions: typeof Cartesian3, callback: Function) {
    let terrain = this.viewer.scene.terrainProvider;
    let promise = Cesium.sampleTerrainMostDetailed(terrain, positions);
    // if (terrainType == "old") {
    //     promise = Cesium.sampleTerrain(terrain, 17, positions);
    // }
    Cesium.when(promise, function(updatedPositions: typeof Cartesian3) {
      callback(updatedPositions);
    }).otherwise(function(error: any) {
      console.log(error);
    });
  }

  /**
   * 获取camera高度
   */
  getCameraHeight() {
    if (this.viewer) {
      let scene = this.viewer.scene;
      let ellipsoid = scene.globe.ellipsoid;
      let height = ellipsoid.cartesianToCartographic(this.viewer.camera.position).height;
      return height;
    }
    return null;
  }

  /**
   * 获取camera中心点坐标
   * @returns {{lon: number, lat: number, height: number}}
   */
  getCenterPosition() {
    let result = this.viewer.camera.pickEllipsoid(new Cesium.Cartesian2(this.viewer.canvas.clientWidth / 2, this.viewer.canvas
      .clientHeight / 2));
    let curPosition = Cesium.Ellipsoid.WGS84.cartesianToCartographic(result);
    let lon = curPosition.longitude * 180 / Math.PI;
    let lat = curPosition.latitude * 180 / Math.PI;
    let height = this.viewer.scene.globe.ellipsoid.cartesianToCartographic(this.viewer.camera.position).height;
    return {
      lon: lon,
      lat: lat,
      height: height
    };
  }

  /**
   * 笛卡尔添加高度
   */
  static addHeightWithCartesian(cartesian: typeof Cartesian3, height: number) {
    let cartographic = Cesium.Cartographic.fromCartesian(cartesian);
    let cartesian3 = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height + height);
    return cartesian3;
  }

  /**
   * 根据两个笛卡尔坐标获取之间的距离
   * @param cartesian1
   * @param cartesian2
   */
  static measureDistanceWithCartesian(cartesian1: typeof Cartesian3, cartesian2: typeof Cartesian2) {
    return Cesium.Cartesian3.distance(cartesian1, cartesian2);
  }
}

