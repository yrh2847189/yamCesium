var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./PlotPointDrawer", "./css/plot.css", "./PlotPolylineDrawer", "./PlotPolygonDrawer", "./PlotCircleDrawer", "./PlotRectangleDrawer", "./PlotAttackArrowDrawer", "./PlotPincerArrowDrawer", "./PlotStraightArrowDrawer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PlotPointDrawer_1 = __importDefault(require("./PlotPointDrawer"));
    require("./css/plot.css");
    var PlotPolylineDrawer_1 = __importDefault(require("./PlotPolylineDrawer"));
    var PlotPolygonDrawer_1 = __importDefault(require("./PlotPolygonDrawer"));
    var PlotCircleDrawer_1 = __importDefault(require("./PlotCircleDrawer"));
    var PlotRectangleDrawer_1 = __importDefault(require("./PlotRectangleDrawer"));
    var PlotAttackArrowDrawer_1 = __importDefault(require("./PlotAttackArrowDrawer"));
    var PlotPincerArrowDrawer_1 = __importDefault(require("./PlotPincerArrowDrawer"));
    var PlotStraightArrowDrawer_1 = __importDefault(require("./PlotStraightArrowDrawer"));
    var PlotTracker = /** @class */ (function () {
        function PlotTracker(viewer) {
            this.ctrArr = [];
            this.viewer = viewer;
            this.pointDrawer = new PlotPointDrawer_1.default(viewer);
            this.polylineDrawer = new PlotPolylineDrawer_1.default(viewer);
            this.polygonDrawer = new PlotPolygonDrawer_1.default(viewer);
            this.rectangleDrawer = new PlotRectangleDrawer_1.default(viewer);
            this.circleDrawer = new PlotCircleDrawer_1.default(viewer);
            this.attackArrowDrawer = new PlotAttackArrowDrawer_1.default(viewer);
            this.pincerArrowDrawer = new PlotPincerArrowDrawer_1.default(viewer);
            this.straightArrowDrawer = new PlotStraightArrowDrawer_1.default(viewer);
            this.ctrArr.push(this.pointDrawer);
        }
        PlotTracker.prototype.clear = function () {
            for (var i = 0; i < this.ctrArr.length; i++) {
                try {
                    var ctr = this.ctrArr[i];
                    if (ctr.clear) {
                        ctr.clear();
                    }
                }
                catch (err) {
                    console.log("发生未知出错：GlobeTracker.clear");
                }
            }
        };
        PlotTracker.prototype.trackPoint = function (options) {
            this.clear();
            if (this.pointDrawer == null) {
                this.pointDrawer = new PlotPointDrawer_1.default(this.viewer);
                this.ctrArr.push(this.pointDrawer);
            }
            return this.pointDrawer.startDrawPoint(options);
        };
        PlotTracker.prototype.trackPolyline = function (options) {
            this.clear();
            if (this.polylineDrawer == null) {
                this.polylineDrawer = new PlotPolylineDrawer_1.default(this.viewer);
                this.ctrArr.push(this.polylineDrawer);
            }
            return this.polylineDrawer.startDrawPolyline(options);
        };
        PlotTracker.prototype.trackPolygon = function (options) {
            this.clear();
            if (this.polygonDrawer == null) {
                this.polygonDrawer = new PlotPolygonDrawer_1.default(this.viewer);
                this.ctrArr.push(this.polygonDrawer);
            }
            return this.polygonDrawer.startDrawPolygon(options);
        };
        PlotTracker.prototype.trackRectangle = function (options) {
            this.clear();
            if (this.rectangleDrawer == null) {
                this.rectangleDrawer = new PlotRectangleDrawer_1.default(this.viewer);
                this.ctrArr.push(this.rectangleDrawer);
            }
            return this.rectangleDrawer.startDrawRectangle(options);
        };
        PlotTracker.prototype.trackCircle = function (options) {
            this.clear();
            if (this.circleDrawer == null) {
                this.circleDrawer = new PlotCircleDrawer_1.default(this.viewer);
                this.ctrArr.push(this.circleDrawer);
            }
            return this.circleDrawer.startDrawCircle(options);
        };
        PlotTracker.prototype.trackAttackArrow = function (options) {
            this.clear();
            if (this.attackArrowDrawer == null) {
                this.attackArrowDrawer = new PlotAttackArrowDrawer_1.default(this.viewer);
                this.ctrArr.push(this.attackArrowDrawer);
            }
            return this.attackArrowDrawer.startDrawAttackArrow(options);
        };
        PlotTracker.prototype.trackPincerArrow = function (options) {
            this.clear();
            if (this.pincerArrowDrawer == null) {
                this.pincerArrowDrawer = new PlotPincerArrowDrawer_1.default(this.viewer);
                this.ctrArr.push(this.pincerArrowDrawer);
            }
            return this.pincerArrowDrawer.startDrawPincerArrow(options);
        };
        PlotTracker.prototype.trackStraightArrow = function (options) {
            this.clear();
            if (this.straightArrowDrawer == null) {
                this.straightArrowDrawer = new PlotStraightArrowDrawer_1.default(this.viewer);
                this.ctrArr.push(this.straightArrowDrawer);
            }
            return this.straightArrowDrawer.startDrawStraightArrow(options);
        };
        return PlotTracker;
    }());
    exports.default = PlotTracker;
});
