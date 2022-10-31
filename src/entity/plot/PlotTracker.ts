import PlotPointDrawer from "./PlotPointDrawer";

import './css/plot.css'
import PlotPolylineDrawer from "./PlotPolylineDrawer";

export default class PlotTracker {
  viewer: any;
  ctrArr: any = [];
  pointDrawer: PlotPointDrawer;
  polylineDrawer: PlotPolylineDrawer;

  constructor(viewer: any) {
    this.viewer = viewer;
    this.pointDrawer = new PlotPointDrawer(viewer);
    this.polylineDrawer = new PlotPolylineDrawer(viewer);
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
}
