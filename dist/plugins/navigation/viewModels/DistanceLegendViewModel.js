var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "cesium", "../core/loadView"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* eslint-disable no-unused-vars */
    var Cesium = __importStar(require("cesium"));
    var loadView_1 = __importDefault(require("../core/loadView"));
    var defined = Cesium.defined;
    var DeveloperError = Cesium.DeveloperError;
    var EllipsoidGeodesic = Cesium.EllipsoidGeodesic;
    var Cartesian2 = Cesium.Cartesian2;
    var getTimestamp = Cesium.getTimestamp;
    var EventHelper = Cesium.EventHelper;
    // @ts-ignore
    var Knockout = Cesium.knockout;
    var geodesic = new EllipsoidGeodesic();
    var distances = [
        1, 2, 3, 5,
        10, 20, 30, 50,
        100, 200, 300, 500,
        1000, 2000, 3000, 5000,
        10000, 20000, 30000, 50000,
        100000, 200000, 300000, 500000,
        1000000, 2000000, 3000000, 5000000,
        10000000, 20000000, 30000000, 50000000
    ];
    var DistanceLegendViewModel = /** @class */ (function () {
        function DistanceLegendViewModel(options) {
            var _this_1 = this;
            var _this = this;
            if (!defined(options) || !defined(options.terria)) {
                throw new DeveloperError("options.terria is required.");
            }
            this.terria = options.terria;
            this._removeSubscription = undefined;
            this._lastLegendUpdate = undefined;
            this.eventHelper = new EventHelper();
            this.distanceLabel = undefined;
            this.barWidth = undefined;
            this.enableDistanceLegend = (defined(options.enableDistanceLegend)) ? options.enableDistanceLegend : true;
            Knockout.track(this, ["distanceLabel", "barWidth"]);
            this.eventHelper.add(this.terria.afterWidgetChanged, function () {
                if (defined(_this_1._removeSubscription)) {
                    _this_1._removeSubscription();
                    _this_1._removeSubscription = undefined;
                }
            }, this);
            //        this.terria.beforeWidgetChanged.addEventListener(function () {
            //            if (defined(this._removeSubscription)) {
            //                this._removeSubscription();
            //                this._removeSubscription = undefined;
            //            }
            //        }, this);
            var that = this;
            var addUpdateSubscription = function () {
                if (defined(that.terria)) {
                    var scene = that.terria.scene;
                    that._removeSubscription = scene.postRender.addEventListener(function () {
                        updateDistanceLegendCesium(_this_1, scene);
                    }, that);
                }
            };
            addUpdateSubscription();
            this.eventHelper.add(this.terria.afterWidgetChanged, function () {
                addUpdateSubscription();
            }, this);
            // this.terria.afterWidgetChanged.addEventListener(function() {
            //    addUpdateSubscription();
            // }, this);
        }
        DistanceLegendViewModel.prototype.destroy = function () {
            this.eventHelper.removeAll();
        };
        DistanceLegendViewModel.prototype.show = function (container) {
            var testing;
            if (this.enableDistanceLegend) {
                testing = "<div class=\"distance-legend\" data-bind=\"visible: distanceLabel && barWidth\">" +
                    "<div class=\"distance-legend-label\" data-bind=\"text: distanceLabel\"></div>" +
                    "<div class=\"distance-legend-scale-bar\" data-bind=\"style: { width: barWidth + 'px', left: (5 + (125 - barWidth) / 2) + 'px' }\"></div>" +
                    "</div>";
            }
            else {
                testing = "<div class=\"distance-legend\"  style=\"display: none;\" data-bind=\"visible: distanceLabel && barWidth\">" +
                    "<div class=\"distance-legend-label\"  data-bind=\"text: distanceLabel\"></div>" +
                    "<div class=\"distance-legend-scale-bar\"  data-bind=\"style: { width: barWidth + 'px', left: (5 + (125 - barWidth) / 2) + 'px' }\"></div>" +
                    "</div>";
            }
            (0, loadView_1.default)(testing, container, this);
            // loadView(distanceLegendTemplate, container, this);
            // loadView(require('fs').readFileSync(__dirname + '/../Views/DistanceLegend.html', 'utf8'), container, this);
        };
        DistanceLegendViewModel.create = function (options) {
            var result = new DistanceLegendViewModel(options);
            result.show(options.container);
            return result;
        };
        return DistanceLegendViewModel;
    }());
    // var DistanceLegendViewModel = function (options: any) {
    //   if (!defined(options) || !defined(options.terria)) {
    //     throw new DeveloperError('options.terria is required.')
    //   }
    //
    //   this.terria = options.terria
    //   this._removeSubscription = undefined
    //   this._lastLegendUpdate = undefined
    //   this.eventHelper = new EventHelper()
    //
    //   this.distanceLabel = undefined
    //   this.barWidth = undefined
    //
    //   this.enableDistanceLegend = (defined(options.enableDistanceLegend)) ? options.enableDistanceLegend : true
    //
    //   Knockout.track(this, ['distanceLabel', 'barWidth'])
    //
    //   this.eventHelper.add(this.terria.afterWidgetChanged, function () {
    //     if (defined(this._removeSubscription)) {
    //       this._removeSubscription()
    //       this._removeSubscription = undefined
    //     }
    //   }, this)
    //   //        this.terria.beforeWidgetChanged.addEventListener(function () {
    //   //            if (defined(this._removeSubscription)) {
    //   //                this._removeSubscription();
    //   //                this._removeSubscription = undefined;
    //   //            }
    //   //        }, this);
    //
    //   var that = this
    //
    //   function addUpdateSubscription () {
    //     if (defined(that.terria)) {
    //       var scene = that.terria.scene
    //       that._removeSubscription = scene.postRender.addEventListener(function () {
    //         updateDistanceLegendCesium(this, scene)
    //       }, that)
    //     }
    //   }
    //
    //   addUpdateSubscription()
    //   this.eventHelper.add(this.terria.afterWidgetChanged, function () {
    //     addUpdateSubscription()
    //   }, this)
    //   // this.terria.afterWidgetChanged.addEventListener(function() {
    //   //    addUpdateSubscription();
    //   // }, this);
    // }
    // DistanceLegendViewModel.prototype.destroy = function () {
    //   this.eventHelper.removeAll()
    // }
    // DistanceLegendViewModel.prototype.show = function (container) {
    //   var testing
    //   if (this.enableDistanceLegend) {
    //     testing = '<div class="distance-legend" data-bind="visible: distanceLabel && barWidth">' +
    //       '<div class="distance-legend-label" data-bind="text: distanceLabel"></div>' +
    //       '<div class="distance-legend-scale-bar" data-bind="style: { width: barWidth + \'px\', left: (5 + (125 - barWidth) / 2) + \'px\' }"></div>' +
    //       '</div>'
    //   } else {
    //     testing = '<div class="distance-legend"  style="display: none;" data-bind="visible: distanceLabel && barWidth">' +
    //       '<div class="distance-legend-label"  data-bind="text: distanceLabel"></div>' +
    //       '<div class="distance-legend-scale-bar"  data-bind="style: { width: barWidth + \'px\', left: (5 + (125 - barWidth) / 2) + \'px\' }"></div>' +
    //       '</div>'
    //   }
    //   loadView(testing, container, this)
    //   // loadView(distanceLegendTemplate, container, this);
    //   // loadView(require('fs').readFileSync(__dirname + '/../Views/DistanceLegend.html', 'utf8'), container, this);
    // }
    // DistanceLegendViewModel.create = function (options) {
    //   var result = new DistanceLegendViewModel(options)
    //   result.show(options.container)
    //   return result
    // }
    // var geodesic = new EllipsoidGeodesic()
    //
    // var distances = [
    //   1, 2, 3, 5,
    //   10, 20, 30, 50,
    //   100, 200, 300, 500,
    //   1000, 2000, 3000, 5000,
    //   10000, 20000, 30000, 50000,
    //   100000, 200000, 300000, 500000,
    //   1000000, 2000000, 3000000, 5000000,
    //   10000000, 20000000, 30000000, 50000000]
    function updateDistanceLegendCesium(viewModel, scene) {
        if (!viewModel.enableDistanceLegend) {
            viewModel.barWidth = undefined;
            viewModel.distanceLabel = undefined;
            return;
        }
        var now = getTimestamp();
        if (now < viewModel._lastLegendUpdate + 250) {
            return;
        }
        viewModel._lastLegendUpdate = now;
        // Find the distance between two pixels at the bottom center of the screen.
        var width = scene.canvas.clientWidth;
        var height = scene.canvas.clientHeight;
        var left = scene.camera.getPickRay(new Cartesian2((width / 2) | 0, height - 1));
        var right = scene.camera.getPickRay(new Cartesian2(1 + (width / 2) | 0, height - 1));
        var globe = scene.globe;
        var leftPosition = globe.pick(left, scene);
        var rightPosition = globe.pick(right, scene);
        if (!defined(leftPosition) || !defined(rightPosition)) {
            viewModel.barWidth = undefined;
            viewModel.distanceLabel = undefined;
            return;
        }
        var leftCartographic = globe.ellipsoid.cartesianToCartographic(leftPosition);
        var rightCartographic = globe.ellipsoid.cartesianToCartographic(rightPosition);
        geodesic.setEndPoints(leftCartographic, rightCartographic);
        var pixelDistance = geodesic.surfaceDistance;
        // Find the first distance that makes the scale bar less than 100 pixels.
        var maxBarWidth = 100;
        var distance = undefined;
        for (var i = distances.length - 1; !defined(distance) && i >= 0; --i) {
            if (distances[i] / pixelDistance < maxBarWidth) {
                distance = distances[i];
            }
        }
        if (defined(distance)) {
            var label;
            // @ts-ignore
            if (distance >= 1000) {
                // @ts-ignore
                label = (distance / 1000).toString() + " km";
            }
            else {
                // @ts-ignore
                label = distance.toString() + " m";
            }
            // @ts-ignore
            viewModel.barWidth = (distance / pixelDistance) | 0;
            viewModel.distanceLabel = label;
        }
        else {
            viewModel.barWidth = undefined;
            viewModel.distanceLabel = undefined;
        }
    }
    exports.default = DistanceLegendViewModel;
});
