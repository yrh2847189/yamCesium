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
    var Cesium = __importStar(require("cesium"));
    var defined = Cesium.defined;
    var defineProperties = Object.defineProperties;
    var DeveloperError = Cesium.DeveloperError;
    // @ts-ignore
    var Knockout = Cesium.knockout;
    /**
     * The view-model for a control in the user interface
     *
     * @alias UserInterfaceControl
     * @constructor
     * @abstract
     *
     * @param {Terria} terria The Terria instance.
     */
    var UserInterfaceControl = /** @class */ (function () {
        function UserInterfaceControl(terria) {
            this.isActive = false;
            var _this = this;
            if (!defined(terria)) {
                throw new DeveloperError("terria is required");
            }
            this._terria = terria;
            /**
             * Gets or sets the name of the control which is set as the controls title.
             * This property is observable.
             * @type {String}
             */
            this.name = "Unnamed Control";
            /**
             * Gets or sets the text to be displayed in the UI control.
             * This property is observable.
             * @type {String}
             */
            this.text = undefined;
            /**
             * Gets or sets the svg icon of the control.  This property is observable.
             * @type {Object}
             */
            this.svgIcon = undefined;
            /**
             * Gets or sets the height of the svg icon.  This property is observable.
             * @type {Integer}
             */
            this.svgHeight = undefined;
            /**
             * Gets or sets the width of the svg icon.  This property is observable.
             * @type {Integer}
             */
            this.svgWidth = undefined;
            /**
             * Gets or sets the CSS class of the control. This property is observable.
             * @type {String}
             */
            this.cssClass = undefined;
            /**
             * Gets or sets the property describing whether or not the control is in the active state.
             * This property is observable.
             * @type {Boolean}
             */
            this.isActive = false;
            Knockout.track(this, ["name", "svgIcon", "svgHeight", "svgWidth", "cssClass", "isActive"]);
            // defineProperties(UserInterfaceControl.prototype, {
            //   /**
            //    * Gets the Terria instance.
            //    * @memberOf UserInterfaceControl.prototype
            //    * @type {Terria}
            //    */
            //   terria: {
            //     get: function () {
            //       return _this._terria
            //     }
            //   },
            //   /**
            //    * Gets a value indicating whether this button has text associated with it.
            //    * @type {Object}
            //    */
            //   hasText: {
            //     get: function () {
            //       return defined(_this.text) && typeof _this.text === 'string'
            //     }
            //   }
            // })
        }
        Object.defineProperty(UserInterfaceControl.prototype, "terria", {
            get: function () {
                return this._terria;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UserInterfaceControl.prototype, "hasText", {
            get: function () {
                return defined(this.text) && typeof this.text === "string";
            },
            enumerable: false,
            configurable: true
        });
        /**
         * When implemented in a derived class, performs an action when the user clicks
         * on this control.
         * @abstract
         * @protected
         */
        UserInterfaceControl.prototype.activate = function () {
            throw new DeveloperError("activate must be implemented in the derived class.");
        };
        return UserInterfaceControl;
    }());
    exports.default = UserInterfaceControl;
});
