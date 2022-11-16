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
        define(["require", "exports", "./plotUtil", "cesium"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.xp = void 0;
    var plotUtil_1 = require("./plotUtil");
    var Cesium = __importStar(require("cesium"));
    exports.xp = {};
    var doubleArrowDefualParam = {
        type: "doublearrow",
        headHeightFactor: .25,
        headWidthFactor: .3,
        neckHeightFactor: .85,
        fixPointCount: 4,
        neckWidthFactor: .15
    };
    var tailedAttackArrowDefualParam = {
        headHeightFactor: .18,
        headWidthFactor: .3,
        neckHeightFactor: .85,
        neckWidthFactor: .15,
        tailWidthFactor: .1,
        headTailFactor: .8,
        swallowTailFactor: 1
    };
    var fineArrowDefualParam = {
        tailWidthFactor: 0.15,
        neckWidthFactor: 0.20,
        headWidthFactor: 0.25,
        headAngle: Math.PI / 8.5,
        neckAngle: Math.PI / 13
    };
    exports.xp.algorithm = {},
        exports.xp.algorithm.doubleArrow = function (inputPoint) {
            this.connPoint = null;
            this.tempPoint4 = null;
            this.points = inputPoint;
            var result = {
                controlPoint: null,
                polygonalPoint: null
            };
            //获取已经点击的坐标数
            var t = inputPoint.length;
            if (!(2 > t)) {
                if (inputPoint.length === 2) {
                    return inputPoint;
                }
                var o = this.points[0], //第一个点
                e = this.points[1], //第二个点
                r = this.points[2], //第三个点
                t_1 = inputPoint.length; //获取已经点击的坐标数
                //下面的是移动点位后的坐标
                3 == t_1 ? this.tempPoint4 = exports.xp.algorithm.getTempPoint4(o, e, r) : this.tempPoint4 = this.points[3],
                    3 == t_1 || 4 == t_1 ? this.connPoint = plotUtil_1.P.PlotUtils.mid(o, e) : this.connPoint = this.points[4];
                var n = void 0, g = void 0;
                plotUtil_1.P.PlotUtils.isClockWise(o, e, r) ? (n = exports.xp.algorithm.getArrowPoints(o, this.connPoint, this.tempPoint4, !1), g = exports.xp.algorithm.getArrowPoints(this.connPoint, e, r, !0)) : (n = exports.xp.algorithm.getArrowPoints(e, this.connPoint, r, !1), g = exports.xp.algorithm.getArrowPoints(this.connPoint, o, this.tempPoint4, !0));
                var i = n.length, s = (i - 5) / 2, a = n.slice(0, s), l = n.slice(s, s + 5), u = n.slice(s + 5, i), c = g.slice(0, s), p = g.slice(s, s + 5), h = g.slice(s + 5, i);
                c = plotUtil_1.P.PlotUtils.getBezierPoints(c);
                var d = plotUtil_1.P.PlotUtils.getBezierPoints(h.concat(a.slice(1)));
                u = plotUtil_1.P.PlotUtils.getBezierPoints(u);
                var f = c.concat(p, d, l, u);
                var newArray = exports.xp.algorithm.array2Dto1D(f);
                result.controlPoint = [o, e, r, this.tempPoint4, this.connPoint];
                result.polygonalPoint = Cesium.Cartesian3.fromDegreesArray(newArray);
            }
            return result;
        },
        exports.xp.algorithm.threeArrow = function (inputPoint) {
            this.connPoint = null;
            this.tempPoint4 = null;
            this.tempPoint5 = null;
            this.points = inputPoint;
            var result = {
                controlPoint: null,
                polygonalPoint: null
            };
            //获取已经点击的坐标数
            var t = inputPoint.length;
            if (t >= 2) {
                // @ts-ignore
                if (t_2 == 2) {
                    return inputPoint;
                }
                var o = this.points[0], //第一个点
                e = this.points[1], //第二个点
                r = this.points[2], //第三个点
                t_2 = inputPoint.length; //获取已经点击的坐标数
                //下面的是移动点位后的坐标
                if (t_2 == 3) {
                    this.tempPoint4 = exports.xp.algorithm.getTempPoint4(o, e, r);
                    this.tempPoint5 = plotUtil_1.P.PlotUtils.mid(r, this.tempPoint4);
                }
                else {
                    this.tempPoint4 = this.points[3];
                    this.tempPoint5 = this.points[4];
                }
                if (t_2 < 6) {
                    this.connPoint = plotUtil_1.P.PlotUtils.mid(o, e);
                }
                else {
                    this.connPoint = this.points[5];
                }
                var n = void 0, g = void 0;
                if (plotUtil_1.P.PlotUtils.isClockWise(o, e, r)) {
                    n = exports.xp.algorithm.getArrowPoints(o, this.connPoint, this.tempPoint4, !1);
                    g = exports.xp.algorithm.getArrowPoints(this.connPoint, e, r, !0);
                }
                else {
                    n = exports.xp.algorithm.getArrowPoints(e, this.connPoint, r, !1);
                    g = exports.xp.algorithm.getArrowPoints(this.connPoint, o, this.tempPoint4, !0);
                }
                var i = n.length, s = (i - 5) / 2, a = n.slice(0, s), l = n.slice(s, s + 5), u = n.slice(s + 5, i), c = g.slice(0, s), p = g.slice(s, s + 5), h = g.slice(s + 5, i);
                c = plotUtil_1.P.PlotUtils.getBezierPoints(c);
                var d = plotUtil_1.P.PlotUtils.getBezierPoints(h.concat(a.slice(1)));
                u = plotUtil_1.P.PlotUtils.getBezierPoints(u);
                var f = c.concat(p, d, l, u);
                var newArray = exports.xp.algorithm.array2Dto1D(f);
                result.controlPoint = [o, e, r, this.tempPoint4, this.tempPoint5, this.connPoint];
                result.polygonalPoint = Cesium.Cartesian3.fromDegreesArray(newArray);
            }
            return result;
        },
        exports.xp.algorithm.array2Dto1D = function (array) {
            var newArray = [];
            array.forEach(function (elt) {
                newArray.push(elt[0]);
                newArray.push(elt[1]);
            });
            return newArray;
        },
        exports.xp.algorithm.getArrowPoints = function (t, o, e, r) {
            this.type = doubleArrowDefualParam.type,
                this.headHeightFactor = doubleArrowDefualParam.headHeightFactor,
                this.headWidthFactor = doubleArrowDefualParam.headWidthFactor,
                this.neckHeightFactor = doubleArrowDefualParam.neckHeightFactor,
                this.neckWidthFactor = doubleArrowDefualParam.neckWidthFactor;
            var n = plotUtil_1.P.PlotUtils.mid(t, o), g = plotUtil_1.P.PlotUtils.distance(n, e), i = plotUtil_1.P.PlotUtils.getThirdPoint(e, n, 0, .3 * g, !0), s = plotUtil_1.P.PlotUtils.getThirdPoint(e, n, 0, .5 * g, !0);
            i = plotUtil_1.P.PlotUtils.getThirdPoint(n, i, plotUtil_1.P.Constants.HALF_PI, g / 5, r),
                s = plotUtil_1.P.PlotUtils.getThirdPoint(n, s, plotUtil_1.P.Constants.HALF_PI, g / 4, r);
            var a = [n, i, s, e], l = exports.xp.algorithm.getArrowHeadPoints(a, this.headHeightFactor, this.headWidthFactor, this.neckHeightFactor, this.neckWidthFactor), u = l[0], c = l[4], p = plotUtil_1.P.PlotUtils.distance(t, o) / plotUtil_1.P.PlotUtils.getBaseLength(a) / 2, h = exports.xp.algorithm.getArrowBodyPoints(a, u, c, p), d = h.length, f = h.slice(0, d / 2), E = h.slice(d / 2, d);
            return f.push(u),
                E.push(c),
                f = f.reverse(),
                f.push(o),
                E = E.reverse(),
                E.push(t),
                f.reverse().concat(l, E);
        },
        exports.xp.algorithm.getArrowHeadPoints = function (t, o, e) {
            this.type = doubleArrowDefualParam.type,
                this.headHeightFactor = doubleArrowDefualParam.headHeightFactor,
                this.headWidthFactor = doubleArrowDefualParam.headWidthFactor,
                this.neckHeightFactor = doubleArrowDefualParam.neckHeightFactor,
                this.neckWidthFactor = doubleArrowDefualParam.neckWidthFactor;
            var r = plotUtil_1.P.PlotUtils.getBaseLength(t), n = r * this.headHeightFactor, g = t[t.length - 1], i = (plotUtil_1.P.PlotUtils.distance(o, e), n * this.headWidthFactor), s = n * this.neckWidthFactor, a = n * this.neckHeightFactor, l = plotUtil_1.P.PlotUtils.getThirdPoint(t[t.length - 2], g, 0, n, !0), u = plotUtil_1.P.PlotUtils.getThirdPoint(t[t.length - 2], g, 0, a, !0), c = plotUtil_1.P.PlotUtils.getThirdPoint(g, l, plotUtil_1.P.Constants.HALF_PI, i, !1), p = plotUtil_1.P.PlotUtils.getThirdPoint(g, l, plotUtil_1.P.Constants.HALF_PI, i, !0), h = plotUtil_1.P.PlotUtils.getThirdPoint(g, u, plotUtil_1.P.Constants.HALF_PI, s, !1), d = plotUtil_1.P.PlotUtils.getThirdPoint(g, u, plotUtil_1.P.Constants.HALF_PI, s, !0);
            return [h, c, g, p, d];
        },
        exports.xp.algorithm.getArrowBodyPoints = function (t, o, e, r) {
            var u = [], c = [];
            for (var n = plotUtil_1.P.PlotUtils.wholeDistance(t), g = plotUtil_1.P.PlotUtils.getBaseLength(t), i = g * r, s = plotUtil_1.P.PlotUtils.distance(o, e), a = (i - s) / 2, l = 0, p = 1; p < t.length - 1; p++) {
                var h = plotUtil_1.P.PlotUtils.getAngleOfThreePoints(t[p - 1], t[p], t[p + 1]) / 2;
                l += plotUtil_1.P.PlotUtils.distance(t[p - 1], t[p]);
                var d = (i / 2 - l / n * a) / Math.sin(h), f = plotUtil_1.P.PlotUtils.getThirdPoint(t[p - 1], t[p], Math.PI - h, d, !0), E = plotUtil_1.P.PlotUtils.getThirdPoint(t[p - 1], t[p], h, d, !1);
                u.push(f),
                    c.push(E);
            }
            return u.concat(c);
        },
        exports.xp.algorithm.getTempPoint4 = function (t, o, e) {
            var r, n, g, i, s = plotUtil_1.P.PlotUtils.mid(t, o), a = plotUtil_1.P.PlotUtils.distance(s, e), l = plotUtil_1.P.PlotUtils.getAngleOfThreePoints(t, s, e);
            return l < plotUtil_1.P.Constants.HALF_PI ? (n = a * Math.sin(l), g = a * Math.cos(l), i = plotUtil_1.P.PlotUtils.getThirdPoint(t, s, plotUtil_1.P.Constants.HALF_PI, n, !1), r = plotUtil_1.P.PlotUtils.getThirdPoint(s, i, plotUtil_1.P.Constants.HALF_PI, g, !0)) : l >= plotUtil_1.P.Constants.HALF_PI && l < Math.PI ? (n = a * Math.sin(Math.PI - l), g = a * Math.cos(Math.PI - l), i = plotUtil_1.P.PlotUtils.getThirdPoint(t, s, plotUtil_1.P.Constants.HALF_PI, n, !1), r = plotUtil_1.P.PlotUtils.getThirdPoint(s, i, plotUtil_1.P.Constants.HALF_PI, g, !1)) : l >= Math.PI && l < 1.5 * Math.PI ? (n = a * Math.sin(l - Math.PI), g = a * Math.cos(l - Math.PI), i = plotUtil_1.P.PlotUtils.getThirdPoint(t, s, plotUtil_1.P.Constants.HALF_PI, n, !0), r = plotUtil_1.P.PlotUtils.getThirdPoint(s, i, plotUtil_1.P.Constants.HALF_PI, g, !0)) : (n = a * Math.sin(2 * Math.PI - l), g = a * Math.cos(2 * Math.PI - l), i = plotUtil_1.P.PlotUtils.getThirdPoint(t, s, plotUtil_1.P.Constants.HALF_PI, n, !0), r = plotUtil_1.P.PlotUtils.getThirdPoint(s, i, plotUtil_1.P.Constants.HALF_PI, g, !1)),
                r;
        },
        exports.xp.algorithm.tailedAttackArrow = function (inputPoint) {
            inputPoint = exports.xp.algorithm.dereplication(inputPoint);
            this.tailWidthFactor = tailedAttackArrowDefualParam.tailWidthFactor;
            this.swallowTailFactor = tailedAttackArrowDefualParam.swallowTailFactor;
            this.swallowTailPnt = tailedAttackArrowDefualParam.swallowTailPnt;
            //控制点
            var result = {
                controlPoint: null,
                polygonalPoint: null
            };
            result.controlPoint = inputPoint;
            var t = inputPoint.length;
            if (!(2 > t)) {
                if (2 == inputPoint.length) {
                    result.polygonalPoint = inputPoint;
                    return result;
                }
                var o = inputPoint, e = o[0], r = o[1];
                plotUtil_1.P.PlotUtils.isClockWise(o[0], o[1], o[2]) && (e = o[1], r = o[0]);
                var n = plotUtil_1.P.PlotUtils.mid(e, r), g = [n].concat(o.slice(2)), i = exports.xp.algorithm.getAttackArrowHeadPoints(g, e, r, tailedAttackArrowDefualParam), s = i[0], a = i[4], l = plotUtil_1.P.PlotUtils.distance(e, r), u = plotUtil_1.P.PlotUtils.getBaseLength(g), c = u * this.tailWidthFactor * this.swallowTailFactor;
                this.swallowTailPnt = plotUtil_1.P.PlotUtils.getThirdPoint(g[1], g[0], 0, c, !0);
                var p = l / u, h = exports.xp.algorithm.getAttackArrowBodyPoints(g, s, a, p), t_3 = h.length, d = [e].concat(h.slice(0, t_3 / 2));
                d.push(s);
                var f = [r].concat(h.slice(t_3 / 2, t_3));
                var newArray = [];
                f.push(a),
                    d = plotUtil_1.P.PlotUtils.getQBSplinePoints(d),
                    f = plotUtil_1.P.PlotUtils.getQBSplinePoints(f),
                    newArray = exports.xp.algorithm.array2Dto1D(d.concat(i, f.reverse(), [this.swallowTailPnt, d[0]]));
                result.polygonalPoint = Cesium.Cartesian3.fromDegreesArray(newArray);
            }
            return result;
        },
        exports.xp.algorithm.getAttackArrowHeadPoints = function (t, o, e, defaultParam) {
            this.headHeightFactor = defaultParam.headHeightFactor;
            this.headTailFactor = defaultParam.headTailFactor;
            this.headWidthFactor = defaultParam.headWidthFactor;
            this.neckWidthFactor = defaultParam.neckWidthFactor;
            this.neckHeightFactor = defaultParam.neckHeightFactor;
            var r = plotUtil_1.P.PlotUtils.getBaseLength(t), n = r * this.headHeightFactor, g = t[t.length - 1];
            r = plotUtil_1.P.PlotUtils.distance(g, t[t.length - 2]);
            var i = plotUtil_1.P.PlotUtils.distance(o, e);
            n > i * this.headTailFactor && (n = i * this.headTailFactor);
            var s = n * this.headWidthFactor, a = n * this.neckWidthFactor;
            n = n > r ? r : n;
            var l = n * this.neckHeightFactor, u = plotUtil_1.P.PlotUtils.getThirdPoint(t[t.length - 2], g, 0, n, !0), c = plotUtil_1.P.PlotUtils.getThirdPoint(t[t.length - 2], g, 0, l, !0), p = plotUtil_1.P.PlotUtils.getThirdPoint(g, u, plotUtil_1.P.Constants.HALF_PI, s, !1), h = plotUtil_1.P.PlotUtils.getThirdPoint(g, u, plotUtil_1.P.Constants.HALF_PI, s, !0), d = plotUtil_1.P.PlotUtils.getThirdPoint(g, c, plotUtil_1.P.Constants.HALF_PI, a, !1), f = plotUtil_1.P.PlotUtils.getThirdPoint(g, c, plotUtil_1.P.Constants.HALF_PI, a, !0);
            return [d, p, g, h, f];
        },
        exports.xp.algorithm.getAttackArrowBodyPoints = function (t, o, e, r) {
            var u = [], c = [];
            for (var n = plotUtil_1.P.PlotUtils.wholeDistance(t), g = plotUtil_1.P.PlotUtils.getBaseLength(t), i = g * r, s = plotUtil_1.P.PlotUtils.distance(o, e), a = (i - s) / 2, l = 0, p = 1; p < t.length - 1; p++) {
                var h = plotUtil_1.P.PlotUtils.getAngleOfThreePoints(t[p - 1], t[p], t[p + 1]) / 2;
                l += plotUtil_1.P.PlotUtils.distance(t[p - 1], t[p]);
                var d = (i / 2 - l / n * a) / Math.sin(h), f = plotUtil_1.P.PlotUtils.getThirdPoint(t[p - 1], t[p], Math.PI - h, d, !0), E = plotUtil_1.P.PlotUtils.getThirdPoint(t[p - 1], t[p], h, d, !1);
                u.push(f),
                    c.push(E);
            }
            return u.concat(c);
        },
        exports.xp.algorithm.dereplication = function (array) {
            var last = array[array.length - 1];
            var change = false;
            var newArray = [];
            newArray = array.filter(function (i) {
                if (i[0] != last[0] && i[1] != last[1]) {
                    return i;
                }
                change = true;
            });
            if (change)
                newArray.push(last);
            return newArray;
        },
        exports.xp.algorithm.fineArrow = function (tailPoint, headerPoint) {
            if ((tailPoint.length < 2) || (headerPoint.length < 2))
                return;
            //画箭头的函数
            var tailWidthFactor = fineArrowDefualParam.tailWidthFactor;
            var neckWidthFactor = fineArrowDefualParam.neckWidthFactor;
            var headWidthFactor = fineArrowDefualParam.headWidthFactor;
            var headAngle = fineArrowDefualParam.headAngle;
            var neckAngle = fineArrowDefualParam.neckAngle;
            var o = [];
            o[0] = tailPoint;
            o[1] = headerPoint;
            var e = o[0], r = o[1], n = plotUtil_1.P.PlotUtils.getBaseLength(o), g = n * tailWidthFactor, 
            //尾部宽度因子
            i = n * neckWidthFactor, 
            //脖子宽度银子
            s = n * headWidthFactor, 
            //头部宽度因子
            a = plotUtil_1.P.PlotUtils.getThirdPoint(r, e, plotUtil_1.P.Constants.HALF_PI, g, !0), l = plotUtil_1.P.PlotUtils.getThirdPoint(r, e, plotUtil_1.P.Constants.HALF_PI, g, !1), u = plotUtil_1.P.PlotUtils.getThirdPoint(e, r, headAngle, s, !1), c = plotUtil_1.P.PlotUtils.getThirdPoint(e, r, headAngle, s, !0), p = plotUtil_1.P.PlotUtils.getThirdPoint(e, r, neckAngle, i, !1), h = plotUtil_1.P.PlotUtils.getThirdPoint(e, r, neckAngle, i, !0), d = [];
            d.push(a[0], a[1], p[0], p[1], u[0], u[1], r[0], r[1], c[0], c[1], h[0], h[1], l[0], l[1], e[0], e[1]);
            return Cesium.Cartesian3.fromDegreesArray(d);
        };
});
