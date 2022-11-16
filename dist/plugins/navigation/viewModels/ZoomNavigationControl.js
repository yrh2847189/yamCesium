var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        define(["require", "exports", "cesium", "./NavigationControl", "../core/Utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Cesium = __importStar(require("cesium"));
    var NavigationControl_1 = __importDefault(require("./NavigationControl"));
    var Utils_1 = __importDefault(require("../core/Utils"));
    var defined = Cesium.defined;
    var Ray = Cesium.Ray;
    var IntersectionTests = Cesium.IntersectionTests;
    var Cartesian3 = Cesium.Cartesian3;
    var SceneMode = Cesium.SceneMode;
    var cartesian3Scratch = new Cartesian3();
    /**
     * The model for a zoom in control in the navigation control tool bar
     *
     * @alias ZoomOutNavigationControl
     * @constructor
     * @abstract
     *
     * @param {Terria} terria The Terria instance.
     * @param {boolean} zoomIn is used for zooming in (true) or out (false)
     */
    var ZoomNavigationControl = /** @class */ (function (_super) {
        __extends(ZoomNavigationControl, _super);
        function ZoomNavigationControl(terria, zoomIn) {
            var _this = _super.call(this, terria) || this;
            _this.relativeAmount = 1;
            _this.zoomIn = zoomIn;
            _this.name = zoomIn ? "放大一级" : "缩小一级";
            _this.tooltip = zoomIn ? "放大一级" : "缩小一级";
            _this.cssClass = "navigation-control-icon-zoom-" + (zoomIn ? "in" : "out");
            _this.text = zoomIn ? "+" : "-";
            _this.relativeAmount = 2;
            if (zoomIn) {
                // this ensures that zooming in is the inverse of zooming out and vice versa
                // e.g. the camera position remains when zooming in and out
                _this.relativeAmount = 1 / _this.relativeAmount;
            }
            return _this;
        }
        /**
         * When implemented in a derived class, performs an action when the user clicks
         * on this control
         * @abstract
         * @protected
         */
        ZoomNavigationControl.prototype.activate = function () {
            this.zoom(this.relativeAmount);
        };
        ZoomNavigationControl.prototype.zoom = function (relativeAmount) {
            // this.terria.analytics.logEvent('navigation', 'click', 'zoomIn');
            this.isActive = true;
            if (defined(this.terria)) {
                var scene = this.terria.scene;
                var sscc = scene.screenSpaceCameraController;
                // do not zoom if it is disabled
                if (!sscc.enableInputs || !sscc.enableZoom) {
                    return;
                }
                // TODO
                //     if(scene.mode == SceneMode.COLUMBUS_VIEW && !sscc.enableTranslate) {
                //        return;
                //     }
                var camera = scene.camera;
                var orientation;
                switch (scene.mode) {
                    case SceneMode.MORPHING:
                        break;
                    case SceneMode.SCENE2D:
                        camera.zoomIn(camera.positionCartographic.height * (1 - this.relativeAmount));
                        break;
                    default:
                        var focus;
                        if (defined(this.terria.trackedEntity)) {
                            focus = new Cartesian3();
                        }
                        else {
                            focus = Utils_1.default.getCameraFocus(this.terria, false);
                        }
                        if (!defined(focus)) {
                            // Camera direction is not pointing at the globe, so use the ellipsoid horizon point as
                            // the focal point.
                            var ray = new Ray(camera.worldToCameraCoordinatesPoint(scene.globe.ellipsoid.cartographicToCartesian(camera.positionCartographic)), camera.directionWC);
                            focus = IntersectionTests.grazingAltitudeLocation(ray, scene.globe.ellipsoid);
                            orientation = {
                                heading: camera.heading,
                                pitch: camera.pitch,
                                roll: camera.roll
                            };
                        }
                        else {
                            orientation = {
                                direction: camera.direction,
                                up: camera.up
                            };
                        }
                        var direction = Cartesian3.subtract(camera.position, focus, cartesian3Scratch);
                        var movementVector = Cartesian3.multiplyByScalar(direction, relativeAmount, direction);
                        var endPosition = Cartesian3.add(focus, movementVector, focus);
                        if (defined(this.terria.trackedEntity) || scene.mode === SceneMode.COLUMBUS_VIEW) {
                            // sometimes flyTo does not work (jumps to wrong position) so just set the position without any animation
                            // do not use flyTo when tracking an entity because during animatiuon the position of the entity may change
                            camera.position = endPosition;
                        }
                        else {
                            camera.flyTo({
                                destination: endPosition,
                                orientation: orientation,
                                duration: 0.5,
                                convert: false
                            });
                        }
                }
            }
            // this.terria.notifyRepaintRequired();
            this.isActive = false;
        };
        return ZoomNavigationControl;
    }(NavigationControl_1.default));
    exports.default = ZoomNavigationControl;
});
