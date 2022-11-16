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
        define(["require", "exports", "cesium", "./CesiumNavigation", "./styles/cesium-navigation.css"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Cesium = __importStar(require("cesium"));
    var CesiumNavigation_1 = __importDefault(require("./CesiumNavigation"));
    require("./styles/cesium-navigation.css");
    var defined = Cesium.defined;
    var defineProperties = Object.defineProperties;
    var DeveloperError = Cesium.DeveloperError;
    /**
     * @class
     * A mixin which adds the Compass/Navigation widget to the Viewer widget.
     * Rather than being called directly, this function is normally passed as
     * a parameter to {@link Viewer#extend}, as shown in the example below.
     * @exports viewerCesiumNavigationMixin
     *
     * @param {Viewer} viewer The viewer instance.
     * @param {{}} options The options.
     *
     * @exception {DeveloperError} viewer is required.
     *
     * @demo {@link http://localhost:8080/index.html|run local server with examples}
     *
     * @example
     * var viewer = new Cesium.Viewer('cesiumContainer');
     * viewer.extend(viewerCesiumNavigationMixin);
     */
    function viewerCesiumNavigationMixin(viewer, options) {
        if (!defined(viewer)) {
            throw new DeveloperError("viewer is required.");
        }
        var cesiumNavigation = init(viewer, options);
        cesiumNavigation.addOnDestroyListener((function (viewer) {
            return function () {
                delete viewer.cesiumNavigation;
            };
        })(viewer));
        defineProperties(viewer, {
            cesiumNavigation: {
                configurable: true,
                get: function () {
                    return viewer.cesiumWidget.cesiumNavigation;
                }
            }
        });
    }
    /**
     *
     * @param {CesiumWidget} cesiumWidget The cesium widget instance.
     * @param {{}} options The options.
     */
    viewerCesiumNavigationMixin.mixinWidget = function (cesiumWidget, options) {
        // @ts-ignore
        return init.apply(undefined, arguments);
    };
    /**
     * @param {Viewer|CesiumWidget} viewerCesiumWidget The Viewer or CesiumWidget instance
     * @param {{}} options the options
     */
    var init = function (viewerCesiumWidget, options) {
        var cesiumNavigation = new CesiumNavigation_1.default(viewerCesiumWidget, options);
        var cesiumWidget = defined(viewerCesiumWidget.cesiumWidget) ? viewerCesiumWidget.cesiumWidget : viewerCesiumWidget;
        defineProperties(cesiumWidget, {
            cesiumNavigation: {
                configurable: true,
                get: function () {
                    return cesiumNavigation;
                }
            }
        });
        cesiumNavigation.addOnDestroyListener((function (cesiumWidget) {
            return function () {
                delete cesiumWidget.cesiumNavigation;
            };
        })(cesiumWidget));
        return cesiumNavigation;
    };
    exports.default = viewerCesiumNavigationMixin;
});
