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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "cesium"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* eslint-disable no-unused-vars */
    var Cesium = __importStar(require("cesium"));
    var defined = Cesium.defined;
    var Ray = Cesium.Ray;
    var Cartesian3 = Cesium.Cartesian3;
    var Cartographic = Cesium.Cartographic;
    var ReferenceFrame = Cesium.ReferenceFrame;
    var SceneMode = Cesium.SceneMode;
    var Utils = {};
    var unprojectedScratch = new Cartographic();
    var rayScratch = new Ray();
    /**
     * gets the focus point of the camera
     * @param {Viewer|Widget} terria The terria
     * @param {boolean} inWorldCoordinates true to get the focus in world coordinates, otherwise get it in projection-specific map coordinates, in meters.
     * @param {Cartesian3} [result] The object in which the result will be stored.
     * @return {Cartesian3} The modified result parameter, a new instance if none was provided or undefined if there is no focus point.
     */
    Utils.getCameraFocus = function (terria, inWorldCoordinates, result) {
        var scene = terria.scene;
        var camera = scene.camera;
        if (scene.mode === SceneMode.MORPHING) {
            return undefined;
        }
        if (!defined(result)) {
            result = new Cartesian3();
        }
        // TODO bug when tracking: if entity moves the current position should be used and not only the one when starting orbiting/rotating
        // TODO bug when tracking: reset should reset to default view of tracked entity
        if (defined(terria.trackedEntity)) {
            result = terria.trackedEntity.position.getValue(terria.clock.currentTime, result);
        }
        else {
            rayScratch.origin = camera.positionWC;
            rayScratch.direction = camera.directionWC;
            result = scene.globe.pick(rayScratch, scene, result);
        }
        if (!defined(result)) {
            return undefined;
        }
        if (scene.mode === SceneMode.SCENE2D || scene.mode === SceneMode.COLUMBUS_VIEW) {
            result = camera.worldToCameraCoordinatesPoint(result, result);
            if (inWorldCoordinates) {
                result = scene.globe.ellipsoid.cartographicToCartesian(scene.mapProjection.unproject(result, unprojectedScratch), result);
            }
        }
        else {
            if (!inWorldCoordinates) {
                result = camera.worldToCameraCoordinatesPoint(result, result);
            }
        }
        return result;
    };
    exports.default = Utils;
});
