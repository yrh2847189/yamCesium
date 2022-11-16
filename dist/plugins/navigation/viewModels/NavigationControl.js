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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./UserInterfaceControl"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserInterfaceControl_1 = __importDefault(require("./UserInterfaceControl"));
    /**
     * The view-model for a control in the navigation control tool bar
     *
     * @alias NavigationControl
     * @constructor
     * @abstract
     *
     * @param {Terria} terria The Terria instance.
     */
    var NavigationControl = /** @class */ (function (_super) {
        __extends(NavigationControl, _super);
        function NavigationControl(terria) {
            return _super.call(this, terria) || this;
        }
        return NavigationControl;
    }(UserInterfaceControl_1.default));
    // var NavigationControl = function (terria: any) {
    //   UserInterfaceControl.apply(this, arguments)
    // }
    // NavigationControl.prototype = Object.create(UserInterfaceControl.prototype)
    exports.default = NavigationControl;
});
