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
    var Cesium = require("cesium");
    var createFragmentFromTemplate_1 = require("./createFragmentFromTemplate");
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
