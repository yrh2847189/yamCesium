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
        define(["require", "exports", "cesium", "./AmapMercatorTilingScheme"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Cesium = __importStar(require("cesium"));
    var AmapMercatorTilingScheme_1 = __importDefault(require("./AmapMercatorTilingScheme"));
    var IMG_URL = "https://webst{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}";
    var ELEC_URL = "https://webrd{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}";
    var CVA_URL = "https://webst{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}";
    /**
     * @class
     * @desc 高德地图图层
     * @extends Cesium.UrlTemplateImageryProvider
     */
    var AmapImageryProvider = /** @class */ (function (_super) {
        __extends(AmapImageryProvider, _super);
        function AmapImageryProvider(options) {
            options["url"] =
                options["url"]
                    ? options["url"]
                    : options.style === "img"
                        ? IMG_URL
                        : options.style === "cva"
                            ? CVA_URL
                            : ELEC_URL;
            if (!options.subdomains || !options.subdomains.length) {
                options["subdomains"] = ["01", "02", "03", "04"];
            }
            if (options.crs === "WGS84") {
                options["tilingScheme"] = new AmapMercatorTilingScheme_1.default();
            }
            return _super.call(this, options) || this;
        }
        return AmapImageryProvider;
    }(Cesium.UrlTemplateImageryProvider));
    exports.default = AmapImageryProvider;
});
