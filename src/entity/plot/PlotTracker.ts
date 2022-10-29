import PlotPointDrawer from "./PlotPointDrawer";

import './css/plot.css'

export default class PlotTracker {
  viewer: any;
  ctrArr: any = [];
  pointDrawer: PlotPointDrawer;

  constructor(viewer: any) {
    this.viewer = viewer;
    this.pointDrawer = new PlotPointDrawer(viewer);
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
}
