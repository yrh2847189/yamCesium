import PlotPointDrawer from "./PlotPointDrawer";

import "./css/plot.css";
import PlotPolylineDrawer from "./PlotPolylineDrawer";
import PlotPolygonDrawer from "./PlotPolygonDrawer";
import PlotCircleDrawer from "./PlotCircleDrawer";
import PlotRectangleDrawer from "./PlotRectangleDrawer";

export default class PlotTracker {
  viewer: any;
  ctrArr: any = [];
  pointDrawer: PlotPointDrawer;
  polylineDrawer: PlotPolylineDrawer;
  polygonDrawer: PlotPolygonDrawer;
  rectangleDrawer: PlotRectangleDrawer;
  circleDrawer: PlotCircleDrawer;

  constructor(viewer: any) {
    this.viewer = viewer;
    this.pointDrawer = new PlotPointDrawer(viewer);
    this.polylineDrawer = new PlotPolylineDrawer(viewer);
    this.polygonDrawer = new PlotPolygonDrawer(viewer);
    this.rectangleDrawer = new PlotRectangleDrawer(viewer);
    this.circleDrawer = new PlotCircleDrawer(viewer);
    this.ctrArr.push(this.pointDrawer);
  }

  clear() {
    for (let i = 0; i < this.ctrArr.length; i++) {
      try {
        let ctr = this.ctrArr[i];
        if (ctr.clear) {
          ctr.clear();
        }
      } catch (err) {
        console.log("发生未知出错：GlobeTracker.clear");
      }
    }
  }

  trackPoint(options: any) {
    this.clear();
    if (this.pointDrawer == null) {
      this.pointDrawer = new PlotPointDrawer(this.viewer);
      this.ctrArr.push(this.pointDrawer);
    }
    return this.pointDrawer.startDrawPoint(options);
  }

  trackPolyline(options: any) {
    this.clear();
    if (this.polylineDrawer == null) {
      this.polylineDrawer = new PlotPolylineDrawer(this.viewer);
      this.ctrArr.push(this.polylineDrawer);
    }
    return this.polylineDrawer.startDrawPolyline(options);
  }

  trackPolygon(options: any) {
    this.clear();
    if (this.polygonDrawer == null) {
      this.polygonDrawer = new PlotPolygonDrawer(this.viewer);
      this.ctrArr.push(this.polygonDrawer);
    }
    return this.polygonDrawer.startDrawPolygon(options);
  }

  trackRectangle(options: any) {
    this.clear();
    if (this.rectangleDrawer == null) {
      this.rectangleDrawer = new PlotRectangleDrawer(this.viewer);
      this.ctrArr.push(this.rectangleDrawer);
    }
    return this.rectangleDrawer.startDrawRectangle(options);
  }

  trackCircle(options: any) {
    this.clear();
    if (this.circleDrawer == null) {
      this.circleDrawer = new PlotCircleDrawer(this.viewer);
      this.ctrArr.push(this.circleDrawer);
    }
    return this.circleDrawer.startDrawCircle(options);
  }
}
