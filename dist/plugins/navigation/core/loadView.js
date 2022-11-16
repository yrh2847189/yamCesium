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
        define(["require", "exports", "cesium", "./createFragmentFromTemplate"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* eslint-disable no-unused-vars */
    var Cesium = __importStar(require("cesium"));
    var createFragmentFromTemplate_1 = __importDefault(require("./createFragmentFromTemplate"));
    // @ts-ignore
    var getElement = Cesium.getElement;
    // @ts-ignore
    var Knockout = Cesium.knockout;
    var loadView = function (htmlString, container, viewModel) {
        container = getElement(container);
        var fragment = (0, createFragmentFromTemplate_1.default)(htmlString);
        // Sadly, fragment.childNodes doesn't have a slice function.
        // This code could be replaced with Array.prototype.slice.call(fragment.childNodes)
        // but that seems slightly error prone.
        var nodes = [];
        var i;
        for (i = 0; i < fragment.childNodes.length; ++i) {
            nodes.push(fragment.childNodes[i]);
        }
        container.appendChild(fragment);
        for (i = 0; i < nodes.length; ++i) {
            var node = nodes[i];
            if (node.nodeType === 1 || node.nodeType === 8) {
                Knockout.applyBindings(viewModel, node);
            }
        }
        return nodes;
    };
    exports.default = loadView;
});
