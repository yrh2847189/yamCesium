declare module 'yam-cesium/cesium/Map' {
  import * as Cesium from "cesium";
  import Camera from "yam-cesium/scene/camera/Camera";
  export default class Map {
      camera: Camera;
      constructor(viewer: Cesium.Viewer);
  }
  //# sourceMappingURL=Map.d.ts.map
}
declare module 'yam-cesium/cesium/Map.d.ts' {
  {"version":3,"file":"Map.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/cesium/Map.ts"],"names":[],"mappings":"AAAA,OAAO,KAAK,MAAM,MAAM,QAAQ,CAAC;AACjC,OAAO,MAAM,MAAM,wBAAwB,CAAC;AAE5C,MAAM,CAAC,OAAO,OAAO,GAAG;IACtB,MAAM,EAAE,MAAM,CAAC;gBAEH,MAAM,EAAE,MAAM,CAAC,MAAM;CASlC"}
}
declare module 'yam-cesium/entity/dataSource/Cluster' {
  /**
   * @_v 引入外部创建的Viewer实例(new Cesium.Viewer(...))
   * @myPrimitives 原语集合，可以包含页面显示的pointPrimitiveCollection、billboardCollection、labelCollection、primitiveCollection、primitiveCluster
   * @myPrimitiveCluster 自定义原语集群
   * @myBillboardCollection 广告牌集合(站点显示的内容数据)
   *
   * @desc 使用primitiveCollection原语集合与primitiveCluster原语集群，处理地图界面显示广告牌billboard数量 > 10w 级时，界面卡顿，浏览器崩溃等问题
   */
  import * as Cesium from "cesium";
  export default class Cluster {
      _v: any;
      myPrimitives: any;
      myPrimitiveCluster: any;
      myBillboardCollection: any;
      constructor(viewer: any);
      /**
       * @param {Object} options 具有以下属性的对象
       * @param {Number} options.delay=800 防抖处理定时器的time
       * @param {Boolean} options.enabled=true 是否启用集群
       * @param {Number} options.pixelRange=15 用于扩展屏幕空间包围框的像素范围
       * @param {Number} options.minimumClusterSize=2 可集群的屏幕空间对象的最小数量
       * @param {Function} options.customStyle 自定义样式
       * @desc 处理原语集合，并实现聚合集群功能方法
       * @return {billboardCollection} 集合，可直接往集合里添加广告牌billboard，呈现在页面上
       */
      load(options?: any): {
          billboard: Cesium.BillboardCollection;
          primitive: any;
      };
      /**
       * @params enable bool值控制开启或关闭集群
       * @desc 控制集群生效与否
       */
      enableCluster(enable: boolean): void;
      /**
       * @params id 站点ID
       * @return 返回可操作的广告牌[siteBillboard.image = 'xxxx']
       * @desc 根据id在集合中获取指定站点广告牌
       */
      getSiteBillboardById(id: any): any;
      /**
       * @desc 删除所有站点广告牌
       */
      removeAll(): void;
      /**
       * @params show bool值 控制显示或隐藏
       * @desc 隐藏或显示所有站点广告牌
       */
      showStatus(show?: boolean): void;
      /**
       * @desc 根据id删除指定站点广告牌
       */
      remove(id: any): void;
      /**
       * @desc 销毁(目前退出页面时直接viewer销毁)
       */
      destroy(): void;
  }
  //# sourceMappingURL=Cluster.d.ts.map
}
declare module 'yam-cesium/entity/dataSource/Cluster.d.ts' {
  {"version":3,"file":"Cluster.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/dataSource/Cluster.ts"],"names":[],"mappings":"AAAA;;;;;;;GAOG;AACH,OAAO,KAAK,MAAM,MAAM,QAAQ,CAAC;AAEjC,MAAM,CAAC,OAAO,OAAO,OAAO;IACxB,EAAE,EAAE,GAAG,CAAQ;IACf,YAAY,EAAE,GAAG,CAAQ;IACzB,kBAAkB,EAAE,GAAG,CAAQ;IAC/B,qBAAqB,EAAE,GAAG,CAAQ;gBAEtB,MAAM,EAAE,GAAG;IAIvB;;;;;;;;;OASG;IACH,IAAI,CAAC,OAAO,GAAE,GAAQ;;;;IAwFtB;;;OAGG;IACH,aAAa,CAAC,MAAM,EAAE,OAAO;IAM7B;;;;OAIG;IACH,oBAAoB,CAAC,EAAE,EAAE,GAAG;IAc5B;;OAEG;IACH,SAAS;IAMT;;;OAGG;IACH,UAAU,CAAC,IAAI,UAAO;IAItB;;OAEG;IACH,MAAM,CAAC,EAAE,EAAE,GAAG;IAKd;;OAEG;IACH,OAAO;CAMV"}
}
declare module 'yam-cesium/entity/dataSource/PrimitiveCluster' {
  /**
   * Defines how screen space objects (billboards, points, labels) are clustered.
   *
   * @param {Object} [options] An object with the following properties:
   * @param {Boolean} [options.enabled=false] Whether or not to enable clustering.
   * @param {Number} [options.pixelRange=80] The pixel range to extend the screen space bounding box.
   * @param {Number} [options.minimumClusterSize=2] The minimum number of screen space objects that can be clustered.
   * @param {Boolean} [options.clusterBillboards=true] Whether or not to cluster the billboards of an entity.
   * @param {Boolean} [options.clusterLabels=true] Whether or not to cluster the labels of an entity.
   * @param {Boolean} [options.clusterPoints=true] Whether or not to cluster the points of an entity.
   * @param {Boolean} [options.show=true] Determines if the entities in the cluster will be shown.
   *
   * @alias PrimitiveCluster
   * @constructor
   *
   * @demo {@link https://sandcastle.cesium.com/index.html?src=Clustering.html|Cesium Sandcastle Clustering Demo}
   */
  interface primitiveCluster {
      enabled: boolean;
      pixelRange: number;
      minimumClusterSize: number;
      clusterBillboards: boolean;
      clusterLabels: boolean;
      clusterPoints: boolean;
      show: boolean;
      delay: number;
  }
  export default class PrimitiveCluster {
      _enabled: boolean;
      _pixelRange: number;
      _minimumClusterSize: number;
      _clusterBillboards: boolean;
      _clusterLabels: true;
      _clusterPoints: true;
      _labelCollection: any;
      _billboardCollection: any;
      _pointCollection: any;
      _clusterBillboardCollection: any;
      _clusterLabelCollection: any;
      _clusterPointCollection: any;
      _collectionIndicesByEntity: any;
      _unusedLabelIndices: any;
      _unusedBillboardIndices: any;
      _unusedPointIndices: any;
      _previousClusters: any;
      _previousHeight: any;
      _enabledDirty: any;
      _clusterDirty: any;
      _cluster: any;
      _removeEventListener: any;
      _clusterEvent: any;
      show: boolean;
      _delay: number;
      _scene: any;
      _pixelRangeDirty: boolean | undefined;
      _minimumClusterSizeDirty: boolean | undefined;
      constructor(options: primitiveCluster);
      /**
       * Gets or sets whether clustering is enabled.
       * @memberof PrimitiveCluster.prototype
       * @type {Boolean}
       */
      get enabled(): boolean;
      set enabled(value: boolean);
      /**
       * Gets or sets the pixel range to extend the screen space bounding box.
       * @memberof PrimitiveCluster.prototype
       * @type {Number}
       */
      get pixelRange(): number;
      set pixelRange(value: number);
      /**
       * Gets or sets the minimum number of screen space objects that can be clustered.
       * @memberof PrimitiveCluster.prototype
       * @type {Number}
       */
      get minimumClusterSize(): number;
      set minimumClusterSize(value: number);
      /**
       * Gets the event that will be raised when a new cluster will be displayed. The signature of the event listener is {@link PrimitiveCluster.newClusterCallback}.
       * @memberof PrimitiveCluster.prototype
       * @type {Cesium.Event<PrimitiveCluster.newClusterCallback>}
       */
      get clusterEvent(): any;
      /**
       * Gets or sets whether clustering billboard entities is enabled.
       * @memberof PrimitiveCluster.prototype
       * @type {Boolean}
       */
      get clusterBillboards(): any;
      set clusterBillboards(value: any);
      /**
       * Gets or sets whether clustering labels entities is enabled.
       * @memberof PrimitiveCluster.prototype
       * @type {Boolean}
       */
      get clusterLabels(): any;
      set clusterLabels(value: any);
      /**
       * Gets or sets whether clustering point entities is enabled.
       * @memberof PrimitiveCluster.prototype
       * @type {Boolean}
       */
      get clusterPoints(): any;
      set clusterPoints(value: any);
      get delay(): number;
      set delay(value: number);
      _initialize(scene: any): void;
      /**
       * Removes the {@link Cesium.Label} associated with an entity so it can be reused by another entity.
       * @param {Entity} entity The entity that will uses the returned {@link Cesium.Label} for visualization.
       *
       * @private
       */
      removeLabel(entity: any): void;
      /**
       * Removes the {@link Cesium.Billboard} associated with an entity so it can be reused by another entity.
       * @param {Entity} entity The entity that will uses the returned {@link Cesium.Billboard} for visualization.
       *
       * @private
       */
      removeBillboard(entity: any): void;
      /**
       * Removes the {@link Point} associated with an entity so it can be reused by another entity.
       * @param {Entity} entity The entity that will uses the returned {@link Point} for visualization.
       *
       * @private
       */
      removePoint(entity: any): void;
      /**
       * Gets the draw commands for the clustered billboards/points/labels if enabled, otherwise,
       * queues the draw commands for billboards/points/labels created for entities.
       * @private
       */
      update(frameState: any): void;
      /**
       * Returns a new {@link Cesium.Label}.
       * @returns {Cesium.Label} The label that will be used to visualize an entity.
       *
       * @private
       * @param collectionProperty
       * @param CollectionConstructor
       * @param unusedIndicesProperty
       * @param entityIndexProperty
       */
      getLabel(collectionProperty?: any, CollectionConstructor?: any, unusedIndicesProperty?: any, entityIndexProperty?: any): (entity: any) => any;
      /**
       * Returns a new {@link Cesium.Billboard}.
       * @returns {Cesium.Billboard} The label that will be used to visualize an entity.
       *
       * @private
       * @param collectionProperty
       * @param CollectionConstructor
       * @param unusedIndicesProperty
       * @param entityIndexProperty
       */
      getBillboard(collectionProperty?: any, CollectionConstructor?: any, unusedIndicesProperty?: any, entityIndexProperty?: any): (entity: any) => any;
      /**
       * Returns a new {@link Point}.
       * @returns {Point} The label that will be used to visualize an entity.
       *
       * @private
       * @param collectionProperty
       * @param CollectionConstructor
       * @param unusedIndicesProperty
       * @param entityIndexProperty
       */
      getPoint(collectionProperty?: any, CollectionConstructor?: any, unusedIndicesProperty?: any, entityIndexProperty?: any): (entity: any) => any;
      /**
       * Destroys the WebGL resources held by this object.  Destroying an object allows for deterministic
       * release of WebGL resources, instead of relying on the garbage collector to destroy this object.
       * <p>
       * Unlike other objects that use WebGL resources, this object can be reused. For example, if a data source is removed
       * from a data source collection and added to another.
       * </p>
       */
      destroy(): undefined;
  }
  export {};
  /**
   * A event listener function used to style clusters.
   * @callback PrimitiveCluster.newClusterCallback
   *
   * @param {Entity[]} clusteredEntities An array of the entities contained in the cluster.
   * @param {Object} cluster An object containing the Cesium.Billboard, Cesium.Label, and Point
   * primitives that represent this cluster of entities.
   * @param {Cesium.Billboard} cluster.billboard
   * @param {Cesium.Label} cluster.label
   * @param {Cesium.PointPrimitive} cluster.point
   *
   * @example
   * // The default cluster values.
   * dataSource.clustering.clusterEvent.addEventListener(function(entities, cluster) {
   *     cluster.label.show = true;
   *     cluster.label.text = entities.length.toLocaleString();
   * });
   */
  //# sourceMappingURL=PrimitiveCluster.d.ts.map
}
declare module 'yam-cesium/entity/dataSource/PrimitiveCluster.d.ts' {
  {"version":3,"file":"PrimitiveCluster.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/dataSource/PrimitiveCluster.ts"],"names":[],"mappings":"AAEA;;;;;;;;;;;;;;;;GAgBG;AACH,UAAU,gBAAgB;IACxB,OAAO,EAAE,OAAO,CAAC;IACjB,UAAU,EAAE,MAAM,CAAC;IACnB,kBAAkB,EAAE,MAAM,CAAC;IAC3B,iBAAiB,EAAE,OAAO,CAAC;IAC3B,aAAa,EAAE,OAAO,CAAC;IACvB,aAAa,EAAE,OAAO,CAAC;IACvB,IAAI,EAAE,OAAO,CAAC;IACd,KAAK,EAAE,MAAM,CAAC;CACf;AAED,MAAM,CAAC,OAAO,OAAO,gBAAgB;IAEnC,QAAQ,UAAS;IACjB,WAAW,SAAM;IACjB,mBAAmB,SAAK;IACxB,kBAAkB,UAAQ;IAC1B,cAAc,EAAE,IAAI,CAAC;IACrB,cAAc,EAAE,IAAI,CAAC;IACrB,gBAAgB,EAAE,GAAG,CAAC;IACtB,oBAAoB,EAAE,GAAG,CAAC;IAC1B,gBAAgB,EAAE,GAAG,CAAC;IACtB,2BAA2B,EAAE,GAAG,CAAC;IACjC,uBAAuB,EAAE,GAAG,CAAC;IAC7B,uBAAuB,EAAE,GAAG,CAAC;IAC7B,0BAA0B,EAAE,GAAG,CAAC;IAChC,mBAAmB,EAAE,GAAG,CAAC;IACzB,uBAAuB,EAAE,GAAG,CAAC;IAC7B,mBAAmB,EAAE,GAAG,CAAC;IACzB,iBAAiB,EAAE,GAAG,CAAC;IACvB,eAAe,EAAE,GAAG,CAAC;IACrB,aAAa,EAAE,GAAG,CAAC;IACnB,aAAa,EAAE,GAAG,CAAC;IACnB,QAAQ,EAAE,GAAG,CAAC;IACd,oBAAoB,EAAE,GAAG,CAAC;IAC1B,aAAa,EAAE,GAAG,CAAC;IACnB,IAAI,EAAE,OAAO,CAAC;IACd,MAAM,EAAE,MAAM,CAAC;IACf,MAAM,EAAE,GAAG,CAAC;IACZ,gBAAgB,EAAE,OAAO,GAAG,SAAS,CAAC;IACtC,wBAAwB,EAAE,OAAO,GAAG,SAAS,CAAC;gBAElC,OAAO,EAAE,gBAAgB;IAgDrC;;;;OAIG;IACH,IAAI,OAAO,IAAI,OAAO,CAErB;IAED,IAAI,OAAO,CAAC,KAAK,EAJF,OAIE,EAGhB;IAED;;;;OAIG;IACH,IAAI,UAAU,IAAI,MAAM,CAEvB;IAED,IAAI,UAAU,CAAC,KAAK,EAJF,MAIE,EAGnB;IAED;;;;OAIG;IACH,IAAI,kBAAkB,IAAI,MAAM,CAE/B;IAED,IAAI,kBAAkB,CAAC,KAAK,EAJF,MAIE,EAI3B;IAED;;;;OAIG;IACH,IAAI,YAAY,IAAI,GAAG,CAEtB;IAED;;;;OAIG;IACH,IAAI,iBAAiB,IAAI,GAAG,CAE3B;IAED,IAAI,iBAAiB,CAAC,KAAK,EAJF,GAIE,EAI1B;IAED;;;;OAIG;IACH,IAAI,aAAa,IAAI,GAAG,CAEvB;IAED,IAAI,aAAa,CAAC,KAAK,EAJF,GAIE,EAGtB;IAED;;;;OAIG;IACH,IAAI,aAAa,IAAI,GAAG,CAEvB;IAED,IAAI,aAAa,CAAC,KAAK,EAJF,GAIE,EAGtB;IAGD,IAAI,KAAK,IAAI,MAAM,CAElB;IAED,IAAI,KAAK,CAAC,KAAK,EAJF,MAIE,EAGd;IAED,WAAW,CAAC,KAAK,EAAE,GAAG;IAoBtB;;;;;OAKG;IACH,WAAW,CAAC,MAAM,EAAE,GAAG;IAuBvB;;;;;OAKG;IACH,eAAe,CAAC,MAAM,EAAE,GAAG;IAuB3B;;;;;OAKG;IACH,WAAW,CAAC,MAAM,EAAE,GAAG;IAsBvB;;;;OAIG;IACH,MAAM,CAAC,UAAU,EAAE,GAAG;IA+DtB;;;;;;;;;OASG;IACH,QAAQ,CACN,kBAAkB,GAAE,GAAwB,EAC5C,qBAAqB,GAAE,GAA4B,EACnD,qBAAqB,GAAE,GAA2B,EAClD,mBAAmB,GAAE,GAAkB,YAEvB,GAAG;IAmDrB;;;;;;;;;OASG;IACH,YAAY,CACV,kBAAkB,GAAE,GAA4B,EAChD,qBAAqB,GAAE,GAAgC,EACvD,qBAAqB,GAAE,GAA+B,EACtD,mBAAmB,GAAE,GAAsB,YAE3B,GAAG;IAkDrB;;;;;;;;;OASG;IACH,QAAQ,CACN,kBAAkB,GAAE,GAAwB,EAC5C,qBAAqB,GAAE,GAAqC,EAC5D,qBAAqB,GAAE,GAA2B,EAClD,mBAAmB,GAAE,GAAkB,YAEvB,GAAG;IAkDrB;;;;;;;OAOG;IACH,OAAO;CA4CR;;AA+kBD;;;;;;;;;;;;;;;;;GAiBG"}
}
declare module 'yam-cesium/entity/plot/algorithm' {
  export const xp: any;
  //# sourceMappingURL=algorithm.d.ts.map
}
declare module 'yam-cesium/entity/plot/algorithm.d.ts' {
  {"version":3,"file":"algorithm.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/algorithm.ts"],"names":[],"mappings":"AAGA,eAAO,MAAM,EAAE,EAAE,GAAQ,CAAA"}
}
declare module 'yam-cesium/entity/plot/measure/MeasureTools' {
  import * as Cesium from "cesium";
  export default class MeasureTools {
      viewer: Cesium.Viewer;
      entityCollection: Cesium.Entity[];
      dis: string;
      distance: number;
      pointEntity: Cesium.Entity | undefined;
      tempEntityCollection: Cesium.Entity[];
      turf: any;
      viewModel: any;
      constructor(viewer: Cesium.Viewer, turf: any);
      /**
       * 属性绑定
       */
      bindModel(): void;
      clear(): void;
      clearTempEntity(): void;
      closeOtherFunc(nowFunc: any): void;
      getCollection(): Cesium.Entity[];
      destroy(): void;
      measurePoint(): void;
      measureDis(): void;
      measureHeight(): void;
      measureArea(): void;
      addPoint(position: Cesium.Cartesian3): Cesium.Entity;
      addLine(positions: Cesium.Cartesian3[]): void;
      addPolyGon(positions: Cesium.Cartesian3[]): void;
      addLabel(centerPoint: Cesium.Cartesian3, text: string): Cesium.Entity;
      addLabelWithPoint(centerPoint: Cesium.Cartesian3, text: string): Cesium.Entity;
      getLengthText(firstPoint: Cesium.Cartesian3, secondPoint: Cesium.Cartesian3): number;
      getArea(points: Cesium.Cartesian3[]): string;
      getCenterOfGravityPoint(mPoints: Cesium.Cartesian3[]): Cesium.Cartesian3;
  }
  //# sourceMappingURL=MeasureTools.d.ts.map
}
declare module 'yam-cesium/entity/plot/measure/MeasureTools.d.ts' {
  {"version":3,"file":"MeasureTools.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/measure/MeasureTools.ts"],"names":[],"mappings":"AAAA,OAAO,KAAK,MAAM,MAAM,QAAQ,CAAC;AAGjC,MAAM,CAAC,OAAO,OAAO,YAAY;IAC/B,MAAM,EAAE,MAAM,CAAC,MAAM,CAAC;IACtB,gBAAgB,EAAE,MAAM,CAAC,MAAM,EAAE,CAAM;IACvC,GAAG,EAAE,MAAM,CAAO;IAClB,QAAQ,EAAE,MAAM,CAAK;IACrB,WAAW,EAAE,MAAM,CAAC,MAAM,GAAG,SAAS,CAAC;IACvC,oBAAoB,EAAE,MAAM,CAAC,MAAM,EAAE,CAAM;IAC3C,IAAI,EAAE,GAAG,CAAC;IACV,SAAS,EAAE,GAAG,CAKZ;gBAEU,MAAM,EAAE,MAAM,CAAC,MAAM,EAAE,IAAI,EAAE,GAAG;IAW5C;;OAEG;IACH,SAAS;IAqDT,KAAK;IAcL,eAAe;IASf,cAAc,CAAC,OAAO,EAAE,GAAG;IAU3B,aAAa;IAKb,OAAO;IAYP,YAAY;IA+DZ,UAAU;IAkKV,aAAa;IAiHb,WAAW;IAwLX,QAAQ,CAAC,QAAQ,EAAE,MAAM,CAAC,UAAU;IA0BpC,OAAO,CAAC,SAAS,EAAE,MAAM,CAAC,UAAU,EAAE;IAiBtC,UAAU,CAAC,SAAS,EAAE,MAAM,CAAC,UAAU,EAAE;IAgBzC,QAAQ,CAAC,WAAW,EAAE,MAAM,CAAC,UAAU,EAAE,IAAI,EAAE,MAAM;IAkBrD,iBAAiB,CAAC,WAAW,EAAE,MAAM,CAAC,UAAU,EAAE,IAAI,EAAE,MAAM;IAkC9D,aAAa,CAAC,UAAU,EAAE,MAAM,CAAC,UAAU,EAAE,WAAW,EAAE,MAAM,CAAC,UAAU;IAS3E,OAAO,CAAC,MAAM,EAAE,MAAM,CAAC,UAAU,EAAE;IAsEnC,uBAAuB,CAAC,OAAO,EAAE,MAAM,CAAC,UAAU,EAAE;CAQrD"}
}
declare module 'yam-cesium/entity/plot/Plot' {
  import PlotTracker from "yam-cesium/entity/plot/PlotTracker";
  import PlotMoveDrawer from "yam-cesium/entity/plot/PlotMoveDrawer";
  interface Draw {
      flag: number;
      layerId: string;
      shape: Array<any>;
      shapeDic: any;
  }
  interface _editParams {
      objId: string;
      isEdit: boolean;
      shapeType: string;
  }
  export default class Plot {
      viewer: any;
      draw: Draw;
      plotTracker: PlotTracker;
      moveDrawer: PlotMoveDrawer;
      editHandler: any;
      _editParams: _editParams;
      _shapeTypes: Array<string>;
      constructor(viewer: any);
      bindGloveEvent(): void;
      moveShape(): Promise<unknown>;
      editShape(): Promise<unknown>;
      drawPoint(options?: any): Promise<unknown>;
      showPoint(options?: any): {
          position: any;
          entity: any;
      };
      createPoint(position: any, objId: string): any;
      editPoint(objId: string): Promise<unknown>;
      drawPolyline(options?: any): Promise<unknown>;
      showPolyline(options: any): {
          positions: any;
          entity: any;
      };
      createPolyline(positions: any, objId: string): any;
      editPolyline(objId: string): Promise<unknown>;
      drawPolygon(options?: any): Promise<unknown>;
      showPolygon(options: any): {
          positions: any;
          entity: any;
      };
      createPolygon(positions: Array<any>, objId: string): any;
      editPolygon(objId: string): Promise<unknown>;
      drawRectangle(options?: any): Promise<unknown>;
      showRectangle(options: any): {
          positions: any;
          entity: any;
      };
      createRectangle(positions: Array<any>, objId: string): any;
      editRectangle(objId: string): Promise<unknown>;
      drawCircle(options?: any): Promise<unknown>;
      showCircle(options: any): {
          positions: any;
          entity: any;
      };
      createCircle(positions: any, objId: string): any;
      editCircle(objId: string): Promise<unknown>;
      drawAttackArrow(options?: any): Promise<unknown>;
      showAttackArrow(options: any): {
          positions: any;
          entity: any;
      };
      createAttackArrow(positions: any, objId: string): any;
      editAttackArrow(objId: string): Promise<unknown>;
      drawPincerArrow(options?: any): Promise<unknown>;
      showPincerArrow(options: any): {
          positions: any;
          entity: any;
      };
      createPincerArrow(positions: any, objId: string): any;
      editPincerArrow(objId: string): Promise<unknown>;
      drawStraightArrow(options?: any): Promise<unknown>;
      showStraightArrow(options: any): {
          positions: any;
          entity: any;
      };
      createStraightArrow(positions: any, objId: string): any;
      editStraightArrow(objId: string): Promise<unknown>;
      clearEntityById(objId: string): void;
      getEntity(objId: string): any;
  }
  export {};
  //# sourceMappingURL=Plot.d.ts.map
}
declare module 'yam-cesium/entity/plot/Plot.d.ts' {
  {"version":3,"file":"Plot.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/Plot.ts"],"names":[],"mappings":"AACA,OAAO,WAAW,MAAM,eAAe,CAAC;AACxC,OAAO,cAAc,MAAM,kBAAkB,CAAC;AAE9C,UAAU,IAAI;IACZ,IAAI,EAAE,MAAM,CAAC;IACb,OAAO,EAAE,MAAM,CAAC;IAChB,KAAK,EAAE,KAAK,CAAC,GAAG,CAAC,CAAC;IAClB,QAAQ,EAAE,GAAG,CAAC;CACf;AAED,UAAU,WAAW;IACnB,KAAK,EAAE,MAAM,CAAC;IACd,MAAM,EAAE,OAAO,CAAC;IAChB,SAAS,EAAE,MAAM,CAAC;CACnB;AAED,MAAM,CAAC,OAAO,OAAO,IAAI;IACvB,MAAM,EAAE,GAAG,CAAC;IACZ,IAAI,EAAE,IAAI,CAKR;IACF,WAAW,EAAE,WAAW,CAAC;IACzB,UAAU,EAAE,cAAc,CAAC;IAC3B,WAAW,EAAE,GAAG,CAAC;IACjB,WAAW,EAAE,WAAW,CAItB;IACF,WAAW,EAAE,KAAK,CAAC,MAAM,CAAC,CAAwH;gBAEtI,MAAM,EAAE,GAAG;IAOvB,cAAc;IA0Bd,SAAS;IAKT,SAAS;IAsBT,SAAS,CAAC,OAAO,CAAC,EAAE,GAAG;IAcvB,SAAS,CAAC,OAAO,CAAC,EAAE,GAAG;;;;IAMvB,WAAW,CAAC,QAAQ,EAAE,GAAG,EAAE,KAAK,EAAE,MAAM;IAmBxC,SAAS,CAAC,KAAK,EAAE,MAAM;IAmBvB,YAAY,CAAC,OAAO,CAAC,EAAE,GAAG;IAc1B,YAAY,CAAC,OAAO,EAAE,GAAG;;;;IAMzB,cAAc,CAAC,SAAS,EAAE,GAAG,EAAE,KAAK,EAAE,MAAM;IAuB5C,YAAY,CAAC,KAAK,EAAE,MAAM;IAkB1B,WAAW,CAAC,OAAO,CAAC,EAAE,GAAG;IAezB,WAAW,CAAC,OAAO,EAAE,GAAG;;;;IAMxB,aAAa,CAAC,SAAS,EAAE,KAAK,CAAC,GAAG,CAAC,EAAE,KAAK,EAAE,MAAM;IAiClD,WAAW,CAAC,KAAK,EAAE,MAAM;IAmBzB,aAAa,CAAC,OAAO,CAAC,EAAE,GAAG;IAe3B,aAAa,CAAC,OAAO,EAAE,GAAG;;;;IAM1B,eAAe,CAAC,SAAS,EAAE,KAAK,CAAC,GAAG,CAAC,EAAE,KAAK,EAAE,MAAM;IAiCpD,aAAa,CAAC,KAAK,EAAE,MAAM;IAmB3B,UAAU,CAAC,OAAO,CAAC,EAAE,GAAG;IAexB,UAAU,CAAC,OAAO,EAAE,GAAG;;;;IAMvB,YAAY,CAAC,SAAS,EAAE,GAAG,EAAE,KAAK,EAAE,MAAM;IAyD1C,UAAU,CAAC,KAAK,EAAE,MAAM;IAmBxB,eAAe,CAAC,OAAO,CAAC,EAAE,GAAG;IAiB7B,eAAe,CAAC,OAAO,EAAE,GAAG;;;;IAM5B,iBAAiB,CAAC,SAAS,EAAE,GAAG,EAAE,KAAK,EAAE,MAAM;IA+B/C,eAAe,CAAC,KAAK,EAAE,MAAM;IA0B7B,eAAe,CAAC,OAAO,CAAC,EAAE,GAAG;IAiB7B,eAAe,CAAC,OAAO,EAAE,GAAG;;;;IAM5B,iBAAiB,CAAC,SAAS,EAAE,GAAG,EAAE,KAAK,EAAE,MAAM;IA+B/C,eAAe,CAAC,KAAK,EAAE,MAAM;IA2B7B,iBAAiB,CAAC,OAAO,CAAC,EAAE,GAAG;IAgB/B,iBAAiB,CAAC,OAAO,EAAE,GAAG;;;;IAM9B,mBAAmB,CAAC,SAAS,EAAE,GAAG,EAAE,KAAK,EAAE,MAAM;IA+BjD,iBAAiB,CAAC,KAAK,EAAE,MAAM;IAyB/B,eAAe,CAAC,KAAK,EAAE,MAAM;IAe7B,SAAS,CAAC,KAAK,EAAE,MAAM;CAcxB"}
}
declare module 'yam-cesium/entity/plot/PlotAttackArrowDrawer' {
  export default class PlotAttackArrowDrawer {
      viewer: any;
      scene: any;
      clock: any;
      canvas: any;
      camera: any;
      ellipsoid: any;
      tooltip: any;
      entity: any;
      positions: any;
      tempPositions: any;
      drawHandler: any;
      modifyHandler: any;
      okHandler: any;
      cancelHandler: any;
      dragIcon: string;
      dragIconLight: string;
      material: any;
      outlineMaterial: any;
      fill: boolean;
      outline: boolean;
      outlineWidth: number;
      extrudedHeight: number;
      toolBarIndex: any;
      markers: any;
      layerId: string;
      shapeColor: any;
      outlineColor: any;
      shapeName: any;
      terrainHeight: any;
      isClickConfirm: boolean;
      constructor(viewer: any);
      clear(): void;
      showModifyAttackArrow(options: any): Promise<unknown>;
      startDrawAttackArrow(options: any): Promise<unknown>;
      _startModify(): void;
      _showRegion2Map(): void;
      _showModifyRegion2Map(): void;
      _createPoint(cartesian: any, oid: any): any;
      _computeTempPositions(): void;
      _computeCenterPotition(p1: any, p2: any): any;
      createToolBar(): Promise<void>;
      _getLonLat(cartesian: any): {
          lon: any;
          lat: any;
          alt: any;
      };
      _getLonLatArr(positions: any): any[][];
      _isSimpleXYZ(p1: any, p2: any): boolean;
      _clearMarkers(layerName: string): void;
      _clearAnchors(): void;
  }
  //# sourceMappingURL=PlotAttackArrowDrawer.d.ts.map
}
declare module 'yam-cesium/entity/plot/PlotAttackArrowDrawer.d.ts' {
  {"version":3,"file":"PlotAttackArrowDrawer.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/PlotAttackArrowDrawer.ts"],"names":[],"mappings":"AAKA,MAAM,CAAC,OAAO,OAAO,qBAAqB;IACxC,MAAM,EAAE,GAAG,CAAC;IACZ,KAAK,EAAE,GAAG,CAAC;IACX,KAAK,EAAE,GAAG,CAAC;IACX,MAAM,EAAE,GAAG,CAAC;IACZ,MAAM,EAAE,GAAG,CAAC;IACZ,SAAS,EAAE,GAAG,CAAC;IACf,OAAO,EAAE,GAAG,CAAC;IACb,MAAM,EAAE,GAAG,CAAC;IACZ,SAAS,EAAE,GAAG,CAAM;IACpB,aAAa,EAAE,GAAG,CAAM;IACxB,WAAW,EAAE,GAAG,CAAC;IACjB,aAAa,EAAE,GAAG,CAAC;IACnB,SAAS,EAAE,GAAG,CAAC;IACf,aAAa,EAAE,GAAG,CAAC;IACnB,QAAQ,EAAE,MAAM,CAAwb;IACxc,aAAa,EAAE,MAAM,CAA4nB;IACjpB,QAAQ,EAAE,GAAG,CAAC;IACd,eAAe,EAAE,GAAG,CAAC;IACrB,IAAI,UAAQ;IACZ,OAAO,UAAQ;IACf,YAAY,SAAK;IACjB,cAAc,SAAK;IACnB,YAAY,EAAE,GAAG,CAAC;IAClB,OAAO,EAAE,GAAG,CAAM;IAClB,OAAO,SAAsB;IAC7B,UAAU,EAAE,GAAG,CAAC;IAChB,YAAY,EAAE,GAAG,CAAC;IAClB,SAAS,EAAE,GAAG,CAAC;IACf,aAAa,EAAE,GAAG,CAAC;IACnB,cAAc,UAAS;gBAEX,MAAM,EAAE,GAAG;IAWvB,KAAK;IAqBL,qBAAqB,CAAC,OAAO,EAAE,GAAG;IA2ClC,oBAAoB,CAAC,OAAO,EAAE,GAAG;IA2HjC,YAAY;IAwEZ,eAAe;IA2Df,qBAAqB;IAkErB,YAAY,CAAC,SAAS,EAAE,GAAG,EAAE,GAAG,EAAE,GAAG;IAiBrC,qBAAqB;IAqBrB,sBAAsB,CAAC,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE,GAAG;IASvC,aAAa;IAwBb,UAAU,CAAC,SAAS,EAAE,GAAG;;;;;IAczB,aAAa,CAAC,SAAS,EAAE,GAAG;IAY5B,YAAY,CAAC,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE,GAAG;IAO7B,aAAa,CAAC,SAAS,EAAE,MAAM;IAe/B,aAAa;CASd"}
}
declare module 'yam-cesium/entity/plot/PlotCircleDrawer' {
  import * as Cesium from "cesium";
  export default class PlotCircleDrawer {
      viewer: any;
      scene: any;
      clock: any;
      canvas: any;
      camera: any;
      ellipsoid: any;
      tooltip: any;
      entity: any;
      outlineEntity: any;
      positions: any;
      drawHandler: any;
      modifyHandler: any;
      okHandler: any;
      cancelHandler: any;
      dragIcon: string;
      dragIconLight: string;
      material: any;
      radiusLineMaterial: any;
      outlineMaterial: any;
      fill: boolean;
      outline: boolean;
      outlineWidth: number;
      extrudedHeight: number;
      toolBarIndex: any;
      layerId: string;
      params: any;
      ground: boolean;
      shapeColor: any;
      outlineColor: any;
      shapeName: any;
      isClickConfirm: boolean;
      constructor(viewer: any);
      clear(): void;
      clear2(): void;
      showModifyCircle(options: any): Promise<unknown>;
      startDrawCircle(options: any): Promise<unknown>;
      _startModify(): void;
      _createCenter(cartesian: any, oid: any): any;
      _createPoint(cartesian: any, oid: any): any;
      _showRegion2Map(): void;
      _showModifyRegion2Map(): void;
      _showCircleOutline2Map(): void;
      _computeCenterPotition(p1: any, p2: any): any;
      _computeCirclePolygon(positions: any): Cesium.Cartesian3[] | null;
      _computeCirclePolygon2(center: any, radius: any): Cesium.Cartesian3[] | null;
      _computeCirclePolygon3(center: any, semiMajorAxis: any, semiMinorAxis: any, rotation: any): Cesium.Cartesian3[] | null;
      _computeCirclePolygonForDegree(positions: any): Cesium.Cartesian3[];
      _computeCircleRadius3D(positions: any): number;
      createToolBar(): Promise<void>;
      _clearMarkers(layerName: string): void;
  }
  //# sourceMappingURL=PlotCircleDrawer.d.ts.map
}
declare module 'yam-cesium/entity/plot/PlotCircleDrawer.d.ts' {
  {"version":3,"file":"PlotCircleDrawer.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/PlotCircleDrawer.ts"],"names":[],"mappings":"AACA,OAAO,KAAK,MAAM,MAAM,QAAQ,CAAC;AAGjC,MAAM,CAAC,OAAO,OAAO,gBAAgB;IACnC,MAAM,EAAE,GAAG,CAAC;IACZ,KAAK,EAAE,GAAG,CAAC;IACX,KAAK,EAAE,GAAG,CAAC;IACX,MAAM,EAAE,GAAG,CAAC;IACZ,MAAM,EAAE,GAAG,CAAC;IACZ,SAAS,EAAE,GAAG,CAAC;IACf,OAAO,EAAE,GAAG,CAAC;IACb,MAAM,EAAE,GAAG,CAAC;IACZ,aAAa,EAAE,GAAG,CAAC;IACnB,SAAS,EAAE,GAAG,CAAM;IACpB,WAAW,EAAE,GAAG,CAAC;IACjB,aAAa,EAAE,GAAG,CAAC;IACnB,SAAS,EAAE,GAAG,CAAC;IACf,aAAa,EAAE,GAAG,CAAC;IACnB,QAAQ,EAAE,MAAM,CAAwb;IACxc,aAAa,EAAE,MAAM,CAA4nB;IACjpB,QAAQ,EAAE,GAAG,CAAC;IACd,kBAAkB,EAAE,GAAG,CAAC;IACxB,eAAe,EAAE,GAAG,CAAC;IACrB,IAAI,UAAQ;IACZ,OAAO,UAAQ;IACf,YAAY,EAAE,MAAM,CAAK;IACzB,cAAc,EAAE,MAAM,CAAK;IAC3B,YAAY,EAAE,GAAG,CAAC;IAClB,OAAO,EAAE,MAAM,CAA4B;IAC3C,MAAM,EAAE,GAAG,CAAM;IACjB,MAAM,UAAQ;IACd,UAAU,EAAE,GAAG,CAAC;IAChB,YAAY,EAAE,GAAG,CAAC;IAClB,SAAS,EAAE,GAAG,CAAC;IACf,cAAc,EAAE,OAAO,CAAS;gBAEpB,MAAM,EAAE,GAAG;IAWvB,KAAK;IAgBL,MAAM;IAgBN,gBAAgB,CAAC,OAAO,EAAE,GAAG;IA+B7B,eAAe,CAAC,OAAO,EAAE,GAAG;IAuG5B,YAAY;IAyEZ,aAAa,CAAC,SAAS,EAAE,GAAG,EAAE,GAAG,EAAE,GAAG;IAgBtC,YAAY,CAAC,SAAS,EAAE,GAAG,EAAE,GAAG,EAAE,GAAG;IAgBrC,eAAe;IA8Df,qBAAqB;IA8DrB,sBAAsB;IAuBtB,sBAAsB,CAAC,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE,GAAG;IASvC,qBAAqB,CAAC,SAAS,EAAE,GAAG;IAepC,sBAAsB,CAAC,MAAM,EAAE,GAAG,EAAE,MAAM,EAAE,GAAG;IA2B/C,sBAAsB,CAAC,MAAM,EAAE,GAAG,EAAE,aAAa,EAAE,GAAG,EAAE,aAAa,EAAE,GAAG,EAAE,QAAQ,EAAE,GAAG;IA2BzF,8BAA8B,CAAC,SAAS,EAAE,GAAG;IAoB7C,sBAAsB,CAAC,SAAS,EAAE,GAAG;IAWrC,aAAa;IAwBb,aAAa,CAAC,SAAS,EAAE,MAAM;CAchC"}
}
declare module 'yam-cesium/entity/plot/PlotMoveDrawer' {
  export default class PlotMoveDrawer {
      viewer: any;
      scene: any;
      clock: any;
      canvas: any;
      camera: any;
      ellipsoid: any;
      objId: any;
      leftDownFlag: boolean;
      pointDragged: any;
      startPoint: any;
      polylinePreviousCoordinates: any;
      polygonPreviousCoordinates: any;
      rectanglePreviousCoordinates: any;
      ellipsePreviousCoordinates: any;
      pointPreviousCoordinates: any;
      rectanglePosition: any;
      bufferLinePreviousCoordinates: any;
      straightArrowCoordinates: any;
      attackArrowCoordinates: any;
      pincerArrowCoordinates: any;
      rectanglePoint: any;
      currentsPoint: any;
      savePointCurrentsPoint: any;
      savePolylineCurrentsPoint: any;
      savePolygonCurrentsPoint: any;
      saveRectangleCurrentsPoint: any;
      saveCircleCurrentsPoint: any;
      saveBufferLineCurrentsPoint: any;
      saveAttackArrowCurrentsPoint: any;
      savePincerArrowCurrentsPoint: any;
      saveStraightArrowCurrentsPoint: any;
      saveRectangle: any;
      saveAttackArrow: any;
      savePincerArrow: any;
      pincerPoints: any;
      pincerPointsCart: any;
      attackPoints: any;
      attackPointsCart: any;
      startTime: any;
      obj: any;
      moveHandler: any;
      circleOutlineEntity: any;
      plot: any;
      constructor(viewer: any, plot: any);
      clear(): void;
      moveShape(): Promise<unknown>;
      clickPolygon(pointDragged: any): void;
      clickPolyline(pointDragged: any): void;
      clickRectangle(pointDragged: any): void;
      clickCircle(pointDragged: any): void;
      clickPoint(pointDragged: any): void;
      clickBufferLine(pointDragged: any): void;
      clickStraightArrow(pointDragged: any): void;
      clickAttackArrow(pointDragged: any): void;
      clickPincerArrow(pointDragged: any): void;
      confirmClick(): void;
      getEntityByObjId(objId: any): any;
  }
  //# sourceMappingURL=PlotMoveDrawer.d.ts.map
}
declare module 'yam-cesium/entity/plot/PlotMoveDrawer.d.ts' {
  {"version":3,"file":"PlotMoveDrawer.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/PlotMoveDrawer.ts"],"names":[],"mappings":"AAEA,MAAM,CAAC,OAAO,OAAO,cAAc;IACjC,MAAM,EAAE,GAAG,CAAC;IACZ,KAAK,EAAE,GAAG,CAAC;IACX,KAAK,EAAE,GAAG,CAAC;IACX,MAAM,EAAE,GAAG,CAAC;IACZ,MAAM,EAAE,GAAG,CAAC;IACZ,SAAS,EAAE,GAAG,CAAC;IACf,KAAK,EAAE,GAAG,CAA0B;IACpC,YAAY,EAAE,OAAO,CAAS;IAC9B,YAAY,EAAE,GAAG,CAAC;IAClB,UAAU,EAAE,GAAG,CAAC;IAEhB,2BAA2B,EAAE,GAAG,CAAM;IACtC,0BAA0B,EAAE,GAAG,CAAM;IACrC,4BAA4B,EAAE,GAAG,CAAM;IACvC,0BAA0B,EAAE,GAAG,CAAM;IACrC,wBAAwB,EAAE,GAAG,CAAM;IACnC,iBAAiB,EAAE,GAAG,CAAM;IAC5B,6BAA6B,EAAE,GAAG,CAAM;IACxC,wBAAwB,EAAE,GAAG,CAAM;IACnC,sBAAsB,EAAE,GAAG,CAAM;IACjC,sBAAsB,EAAE,GAAG,CAAM;IAEjC,cAAc,EAAE,GAAG,CAAM;IACzB,aAAa,EAAE,GAAG,CAAM;IACxB,sBAAsB,EAAE,GAAG,CAAM;IACjC,yBAAyB,EAAE,GAAG,CAAM;IACpC,wBAAwB,EAAE,GAAG,CAAM;IACnC,0BAA0B,EAAE,GAAG,CAAM;IACrC,uBAAuB,EAAE,GAAG,CAAM;IAClC,2BAA2B,EAAE,GAAG,CAAM;IACtC,4BAA4B,EAAE,GAAG,CAAM;IACvC,4BAA4B,EAAE,GAAG,CAAM;IACvC,8BAA8B,EAAE,GAAG,CAAM;IACzC,aAAa,EAAE,GAAG,CAAM;IACxB,eAAe,EAAE,GAAG,CAAM;IAC1B,eAAe,EAAE,GAAG,CAAM;IAC1B,YAAY,EAAE,GAAG,CAAM;IACvB,gBAAgB,EAAE,GAAG,CAAM;IAC3B,YAAY,EAAE,GAAG,CAAM;IACvB,gBAAgB,EAAE,GAAG,CAAM;IAC3B,SAAS,EAAE,GAAG,CAAC;IACf,GAAG,EAAE,GAAG,CAAC;IACT,WAAW,EAAE,GAAG,CAAC;IACjB,mBAAmB,EAAE,GAAG,CAAC;IACzB,IAAI,EAAE,GAAG,CAAM;gBAEH,MAAM,EAAE,GAAG,EAAE,IAAI,EAAE,GAAG;IAUlC,KAAK;IAQL,SAAS;IA+RT,YAAY,CAAC,YAAY,EAAE,GAAG;IAgB9B,aAAa,CAAC,YAAY,EAAE,GAAG;IAS/B,cAAc,CAAC,YAAY,EAAE,GAAG;IAgBhC,WAAW,CAAC,YAAY,EAAE,GAAG;IAgB7B,UAAU,CAAC,YAAY,EAAE,GAAG;IAQ5B,eAAe,CAAC,YAAY,EAAE,GAAG;IAUjC,kBAAkB,CAAC,YAAY,EAAE,GAAG;IAYpC,gBAAgB,CAAC,YAAY,EAAE,GAAG;IAgBlC,gBAAgB,CAAC,YAAY,EAAE,GAAG;IAgBlC,YAAY;IAiEZ,gBAAgB,CAAC,KAAK,EAAE,GAAG;CAY5B"}
}
declare module 'yam-cesium/entity/plot/PlotPincerArrowDrawer' {
  export default class PlotPincerArrowDrawer {
      viewer: any;
      scene: any;
      clock: any;
      canvas: any;
      camera: any;
      ellipsoid: any;
      tooltip: any;
      entity: any;
      positions: any;
      tempPositions: any;
      drawHandler: any;
      modifyHandler: any;
      okHandler: any;
      cancelHandler: any;
      dragIcon: string;
      dragIconLight: string;
      material: any;
      outlineMaterial: any;
      fill: boolean;
      outline: boolean;
      outlineWidth: number;
      extrudedHeight: number;
      toolBarIndex: any;
      markers: any;
      layerId: string;
      shapeColor: any;
      outlineColor: any;
      shapeName: any;
      terrainHeight: any;
      isClickConfirm: boolean;
      constructor(viewer: any);
      clear(): void;
      showModifyPincerArrow(options: any): Promise<unknown>;
      startDrawPincerArrow(options: any): Promise<unknown>;
      _startModify(): void;
      _showRegion2Map(): void;
      _showModifyRegion2Map(): void;
      _removeDuplicate(lonLats: any): void;
      _createPoint(cartesian: any, oid: any): any;
      _computeTempPositions(): void;
      _computeCenterPotition(p1: any, p2: any): any;
      createToolBar(): Promise<void>;
      _getLonLat(cartesian: any): {
          lon: any;
          lat: any;
          alt: any;
      };
      _getLonLatArr(positions: any): any[][];
      _isSimpleXYZ(p1: any, p2: any): boolean;
      _clearMarkers(layerName: string): void;
      _clearAnchors(): void;
  }
  //# sourceMappingURL=PlotPincerArrowDrawer.d.ts.map
}
declare module 'yam-cesium/entity/plot/PlotPincerArrowDrawer.d.ts' {
  {"version":3,"file":"PlotPincerArrowDrawer.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/PlotPincerArrowDrawer.ts"],"names":[],"mappings":"AAKA,MAAM,CAAC,OAAO,OAAO,qBAAqB;IACxC,MAAM,EAAE,GAAG,CAAC;IACZ,KAAK,EAAE,GAAG,CAAC;IACX,KAAK,EAAE,GAAG,CAAC;IACX,MAAM,EAAE,GAAG,CAAC;IACZ,MAAM,EAAE,GAAG,CAAC;IACZ,SAAS,EAAE,GAAG,CAAC;IACf,OAAO,EAAE,GAAG,CAAC;IACb,MAAM,EAAE,GAAG,CAAC;IACZ,SAAS,EAAE,GAAG,CAAM;IACpB,aAAa,EAAE,GAAG,CAAM;IACxB,WAAW,EAAE,GAAG,CAAC;IACjB,aAAa,EAAE,GAAG,CAAC;IACnB,SAAS,EAAE,GAAG,CAAC;IACf,aAAa,EAAE,GAAG,CAAC;IACnB,QAAQ,EAAE,MAAM,CAAwb;IACxc,aAAa,EAAE,MAAM,CAA4nB;IACjpB,QAAQ,EAAE,GAAG,CAAC;IACd,eAAe,EAAE,GAAG,CAAC;IACrB,IAAI,UAAQ;IACZ,OAAO,UAAQ;IACf,YAAY,SAAK;IACjB,cAAc,SAAK;IACnB,YAAY,EAAE,GAAG,CAAC;IAClB,OAAO,EAAE,GAAG,CAAM;IAClB,OAAO,SAAsB;IAC7B,UAAU,EAAE,GAAG,CAAC;IAChB,YAAY,EAAE,GAAG,CAAC;IAClB,SAAS,EAAE,GAAG,CAAC;IACf,aAAa,EAAE,GAAG,CAAC;IACnB,cAAc,EAAE,OAAO,CAAS;gBAEpB,MAAM,EAAE,GAAG;IAWvB,KAAK;IAqBL,qBAAqB,CAAC,OAAO,EAAE,GAAG;IA2ClC,oBAAoB,CAAC,OAAO,EAAE,GAAG;IA8GjC,YAAY;IAwEZ,eAAe;IAmFf,qBAAqB;IAuFrB,gBAAgB,CAAC,OAAO,EAAE,GAAG;IAc7B,YAAY,CAAC,SAAS,EAAE,GAAG,EAAE,GAAG,EAAE,GAAG;IAiBrC,qBAAqB;IAqBrB,sBAAsB,CAAC,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE,GAAG;IASvC,aAAa;IAwBb,UAAU,CAAC,SAAS,EAAE,GAAG;;;;;IAczB,aAAa,CAAC,SAAS,EAAE,GAAG;IAY5B,YAAY,CAAC,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE,GAAG;IAK7B,aAAa,CAAC,SAAS,EAAE,MAAM;IAe/B,aAAa;CAQd"}
}
declare module 'yam-cesium/entity/plot/PlotPointDrawer' {
  interface drawOptions {
      confirmHandler?: Function;
      position?: any;
  }
  export default class PlotPointDrawer {
      viewer: any;
      scene: any;
      clock: any;
      canvas: any;
      camera: any;
      ellipsoid: any;
      tooltip: any;
      entity: any;
      position: any;
      drawHandler: any;
      modifyHandler: any;
      okHandler: any;
      cancelHandler: any;
      image: string;
      toolBarIndex: any;
      layerId: string;
      isClickConfirm: boolean;
      constructor(viewer: any);
      clear(): void;
      showModifyPoint(options: drawOptions): Promise<unknown>;
      startDrawPoint(options: drawOptions): Promise<unknown>;
      _startModify(): void;
      _createPoint(): any;
      _showToolBar(): Promise<void>;
      _getLonLat(cartesian: any): {
          lon: any;
          lat: any;
          alt: any;
          height: any;
      };
      _clearMarkers(layerName: string): void;
  }
  export {};
  //# sourceMappingURL=PlotPointDrawer.d.ts.map
}
declare module 'yam-cesium/entity/plot/PlotPointDrawer.d.ts' {
  {"version":3,"file":"PlotPointDrawer.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/PlotPointDrawer.ts"],"names":[],"mappings":"AAKA,UAAU,WAAW;IACnB,cAAc,CAAC,EAAE,QAAQ,CAAC;IAC1B,QAAQ,CAAC,EAAE,GAAG,CAAC;CAChB;AAED,MAAM,CAAC,OAAO,OAAO,eAAe;IAClC,MAAM,EAAE,GAAG,CAAC;IACZ,KAAK,EAAE,GAAG,CAAC;IACX,KAAK,EAAE,GAAG,CAAC;IACX,MAAM,EAAE,GAAG,CAAC;IACZ,MAAM,EAAE,GAAG,CAAC;IACZ,SAAS,EAAE,GAAG,CAAC;IACf,OAAO,EAAE,GAAG,CAAC;IACb,MAAM,EAAE,GAAG,CAAC;IACZ,QAAQ,EAAE,GAAG,CAAC;IACd,WAAW,EAAE,GAAG,CAAC;IACjB,aAAa,EAAE,GAAG,CAAC;IACnB,SAAS,EAAE,GAAG,CAAC;IACf,aAAa,EAAE,GAAG,CAAC;IACnB,KAAK,EAAE,MAAM,CAA4nB;IACzoB,YAAY,EAAE,GAAG,CAAC;IAClB,OAAO,EAAE,MAAM,CAA4B;IAC3C,cAAc,EAAE,OAAO,CAAS;gBAEpB,MAAM,EAAE,GAAG;IAUvB,KAAK;IAiBL,eAAe,CAAC,OAAO,EAAE,WAAW;IAYpC,cAAc,CAAC,OAAO,EAAE,WAAW;IAiFnC,YAAY;IAwEZ,YAAY;IAkBZ,YAAY;IAwBZ,UAAU,CAAC,SAAS,EAAE,GAAG;;;;;;IAczB,aAAa,CAAC,SAAS,EAAE,MAAM;CAYhC"}
}
declare module 'yam-cesium/entity/plot/PlotPolygonDrawer' {
  export default class PlotPolygonDrawer {
      viewer: any;
      scene: any;
      clock: any;
      canvas: any;
      camera: any;
      ellipsoid: any;
      tooltip: any;
      entity: any;
      positions: any;
      tempPositions: any;
      drawHandler: any;
      modifyHandler: any;
      okHandler: any;
      cancelHandler: any;
      isEdit: boolean;
      dragIcon: string;
      dragIconLight: string;
      material: any;
      outlineMaterial: any;
      fill: boolean;
      outline: boolean;
      outlineWidth: number;
      extrudedHeight: number;
      toolBarIndex: any;
      markers: any;
      layerId: string;
      params: any;
      ground: boolean;
      shapeColor: any;
      outlineColor: any;
      shapeName: any;
      terrainHeight: any;
      isClickConfirm: boolean;
      constructor(viewer: any);
      clear(): void;
      showModifyPolygon(options: any): Promise<unknown>;
      startDrawPolygon(options: any): Promise<unknown>;
      _startModify(): void;
      _showRegion2Map(): void;
      _showModifyRegion2Map(): void;
      _updateModifyAnchors(oid: any): void;
      _updateNewMidAnchors(oid: any): void;
      _createPoint(cartesian: any, oid: any): any;
      _createMidPoint(cartesian: any, oid: any): any;
      _computeTempPositions(): void;
      _computeCenterPotition(p1: any, p2: any): any;
      createToolBar(): Promise<void>;
      _isSimpleXYZ(p1: any, p2: any): boolean;
      _clearMarkers(layerName: string): void;
      _clearAnchors(): void;
  }
  //# sourceMappingURL=PlotPolygonDrawer.d.ts.map
}
declare module 'yam-cesium/entity/plot/PlotPolygonDrawer.d.ts' {
  {"version":3,"file":"PlotPolygonDrawer.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/PlotPolygonDrawer.ts"],"names":[],"mappings":"AAIA,MAAM,CAAC,OAAO,OAAO,iBAAiB;IACpC,MAAM,EAAE,GAAG,CAAC;IACZ,KAAK,EAAE,GAAG,CAAC;IACX,KAAK,EAAE,GAAG,CAAC;IACX,MAAM,EAAE,GAAG,CAAC;IACZ,MAAM,EAAE,GAAG,CAAC;IACZ,SAAS,EAAE,GAAG,CAAC;IACf,OAAO,EAAE,GAAG,CAAC;IACb,MAAM,EAAE,GAAG,CAAC;IACZ,SAAS,EAAE,GAAG,CAAM;IACpB,aAAa,EAAE,GAAG,CAAM;IACxB,WAAW,EAAE,GAAG,CAAC;IACjB,aAAa,EAAE,GAAG,CAAC;IACnB,SAAS,EAAE,GAAG,CAAC;IACf,aAAa,EAAE,GAAG,CAAC;IACnB,MAAM,UAAQ;IACd,QAAQ,EAAE,MAAM,CAAwb;IACxc,aAAa,EAAE,MAAM,CAA4nB;IACjpB,QAAQ,EAAE,GAAG,CAAC;IACd,eAAe,EAAE,GAAG,CAAC;IACrB,IAAI,UAAQ;IACZ,OAAO,UAAQ;IACf,YAAY,SAAK;IACjB,cAAc,SAAK;IACnB,YAAY,EAAE,GAAG,CAAC;IAClB,OAAO,EAAE,GAAG,CAAM;IAClB,OAAO,SAAsB;IAC7B,MAAM,EAAE,GAAG,CAAM;IACjB,MAAM,UAAQ;IACd,UAAU,EAAE,GAAG,CAAC;IAChB,YAAY,EAAE,GAAG,CAAC;IAClB,SAAS,EAAE,GAAG,CAAC;IACf,aAAa,EAAE,GAAG,CAAC;IACnB,cAAc,EAAE,OAAO,CAAS;gBAEpB,MAAM,EAAE,GAAG;IAWvB,KAAK;IAyBL,iBAAiB,CAAC,OAAO,EAAE,GAAG;IAyC9B,gBAAgB,CAAC,OAAO,EAAE,GAAG;IAgI7B,YAAY;IA4FZ,eAAe;IAuDf,qBAAqB;IAiErB,oBAAoB,CAAC,GAAG,EAAE,GAAG;IAuC7B,oBAAoB,CAAC,GAAG,EAAE,GAAG;IA4C7B,YAAY,CAAC,SAAS,EAAE,GAAG,EAAE,GAAG,EAAE,GAAG;IAkBrC,eAAe,CAAC,SAAS,EAAE,GAAG,EAAE,GAAG,EAAE,GAAG;IAkBxC,qBAAqB;IAoBrB,sBAAsB,CAAC,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE,GAAG;IASvC,aAAa;IAwBb,YAAY,CAAC,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE,GAAG;IAK7B,aAAa,CAAC,SAAS,EAAE,MAAM;IAe/B,aAAa;CAQd"}
}
declare module 'yam-cesium/entity/plot/PlotPolylineDrawer' {
  export default class PlotPolylineDrawer {
      viewer: any;
      scene: any;
      clock: any;
      canvas: any;
      camera: any;
      ellipsoid: any;
      tooltip: any;
      entity: any;
      positions: any;
      tempPositions: any;
      drawHandler: any;
      modifyHandler: any;
      okHandler: any;
      cancelHandler: any;
      dragIcon: string;
      dragIconLight: string;
      material: any;
      toolBarIndex: any;
      markers: any;
      layerId: string;
      width: number;
      shapeColor: any;
      params: any;
      shapeName: string;
      floatingPoint: any;
      private isClickConfirm;
      constructor(viewer: any);
      clear(): void;
      showModifyPolyline(options: any): Promise<unknown>;
      startDrawPolyline(options: any): Promise<unknown>;
      _startModify(): void;
      _showPolyline2Map(): void;
      _showModifyPolyline2Map(): void;
      _updateModifyAnchors(oid: any): void;
      _updateNewMidAnchors(oid: any): void;
      _createPoint(cartesian: any, oid: any): any;
      _createMidPoint(cartesian: any, oid: any): any;
      _computeTempPositions(): void;
      _computeCenterPotition(p1: any, p2: any): any;
      _showToolBar(): Promise<void>;
      _createToolBar(): void;
      _getPositionsWithSid(): any;
      _getLonLat(cartesian: any): {
          lon: any;
          lat: any;
          alt: any;
          height: any;
      };
      _getLonLats(positions: any): any[];
      _isSimpleXYZ(p1: any, p2: any): boolean;
      _clearAnchors(): void;
      _clearMarkers(layerName: string): void;
  }
  //# sourceMappingURL=PlotPolylineDrawer.d.ts.map
}
declare module 'yam-cesium/entity/plot/PlotPolylineDrawer.d.ts' {
  {"version":3,"file":"PlotPolylineDrawer.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/PlotPolylineDrawer.ts"],"names":[],"mappings":"AAIA,MAAM,CAAC,OAAO,OAAO,kBAAkB;IACrC,MAAM,EAAE,GAAG,CAAQ;IACnB,KAAK,EAAE,GAAG,CAAQ;IAClB,KAAK,EAAE,GAAG,CAAQ;IAClB,MAAM,EAAE,GAAG,CAAQ;IACnB,MAAM,EAAE,GAAG,CAAQ;IACnB,SAAS,EAAE,GAAG,CAAQ;IACtB,OAAO,EAAE,GAAG,CAAQ;IACpB,MAAM,EAAE,GAAG,CAAQ;IACnB,SAAS,EAAE,GAAG,CAAM;IACpB,aAAa,EAAE,GAAG,CAAM;IACxB,WAAW,EAAE,GAAG,CAAQ;IACxB,aAAa,EAAE,GAAG,CAAQ;IAC1B,SAAS,EAAE,GAAG,CAAQ;IACtB,aAAa,EAAE,GAAG,CAAQ;IAC1B,QAAQ,EAAE,MAAM,CAAwb;IACxc,aAAa,EAAE,MAAM,CAA4nB;IACjpB,QAAQ,EAAE,GAAG,CAAQ;IACrB,YAAY,EAAE,GAAG,CAAQ;IACzB,OAAO,EAAE,GAAG,CAAM;IAClB,OAAO,EAAE,MAAM,CAAsB;IACrC,KAAK,EAAE,MAAM,CAAK;IAClB,UAAU,EAAE,GAAG,CAAQ;IACvB,MAAM,EAAE,GAAG,CAAM;IACjB,SAAS,EAAE,MAAM,CAAQ;IACzB,aAAa,EAAE,GAAG,CAAQ;IAC1B,OAAO,CAAC,cAAc,CAAkB;gBAE5B,MAAM,EAAE,GAAG;IAUvB,KAAK;IAgBL,kBAAkB,CAAC,OAAO,EAAE,GAAG;IAoC/B,iBAAiB,CAAC,OAAO,EAAE,GAAG;IAqH9B,YAAY;IA2FZ,iBAAiB;IAuBjB,uBAAuB;IAoCvB,oBAAoB,CAAC,GAAG,EAAE,GAAG;IAgC7B,oBAAoB,CAAC,GAAG,EAAE,GAAG;IAoD7B,YAAY,CAAC,SAAS,EAAE,GAAG,EAAE,GAAG,EAAE,GAAG;IAkBrC,eAAe,CAAC,SAAS,EAAE,GAAG,EAAE,GAAG,EAAE,GAAG;IAiBxC,qBAAqB;IAmBrB,sBAAsB,CAAC,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE,GAAG;IASvC,YAAY;IA+CZ,cAAc;IA6Fd,oBAAoB;IAkCpB,UAAU,CAAC,SAAS,EAAE,GAAG;;;;;;IAezB,WAAW,CAAC,SAAS,EAAE,GAAG;IAa1B,YAAY,CAAC,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE,GAAG;IAK7B,aAAa;IASb,aAAa,CAAC,SAAS,EAAE,MAAM;CAehC"}
}
declare module 'yam-cesium/entity/plot/PlotRectangleDrawer' {
  import * as Cesium from "cesium";
  export default class PlotRectangleDrawer {
      viewer: any;
      scene: any;
      clock: any;
      canvas: any;
      camera: any;
      ellipsoid: any;
      tooltip: any;
      entity: any;
      positions: any;
      drawHandler: any;
      modifyHandler: any;
      okHandler: any;
      cancelHandler: any;
      dragIconLight: string;
      material: any;
      outlineMaterial: any;
      fill: boolean;
      outline: boolean;
      outlineWidth: number;
      extrudedHeight: number;
      toolBarIndex: any;
      layerId: string;
      params: any;
      ground: boolean;
      shapeColor: any;
      outlineColor: any;
      shapeName: any;
      isClickConfirm: boolean;
      constructor(viewer: any);
      clear(): void;
      clear2(): void;
      showModifyRectangle(options: any): Promise<unknown>;
      startDrawRectangle(options: any): Promise<unknown>;
      _startModify(): void;
      _createPoint(cartesian: any, oid: any): any;
      _showRegion2Map(): void;
      _showModifyRegion2Map(): void;
      _computeRectangle(p1: any, p2: any): Cesium.Rectangle;
      createToolBar(): Promise<void>;
      _isSimpleXYZ(p1: any, p2: any): boolean;
      _clearMarkers(layerName: string): void;
  }
  //# sourceMappingURL=PlotRectangleDrawer.d.ts.map
}
declare module 'yam-cesium/entity/plot/PlotRectangleDrawer.d.ts' {
  {"version":3,"file":"PlotRectangleDrawer.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/PlotRectangleDrawer.ts"],"names":[],"mappings":"AACA,OAAO,KAAK,MAAM,MAAM,QAAQ,CAAC;AAGjC,MAAM,CAAC,OAAO,OAAO,mBAAmB;IACtC,MAAM,EAAE,GAAG,CAAC;IACZ,KAAK,EAAE,GAAG,CAAC;IACX,KAAK,EAAE,GAAG,CAAC;IACX,MAAM,EAAE,GAAG,CAAC;IACZ,MAAM,EAAE,GAAG,CAAC;IACZ,SAAS,EAAE,GAAG,CAAC;IACf,OAAO,EAAE,GAAG,CAAC;IACb,MAAM,EAAE,GAAG,CAAC;IACZ,SAAS,EAAE,GAAG,CAAM;IACpB,WAAW,EAAE,GAAG,CAAC;IACjB,aAAa,EAAE,GAAG,CAAC;IACnB,SAAS,EAAE,GAAG,CAAC;IACf,aAAa,EAAE,GAAG,CAAC;IACnB,aAAa,EAAE,MAAM,CAA4nB;IACjpB,QAAQ,EAAE,GAAG,CAAC;IACd,eAAe,EAAE,GAAG,CAAC;IACrB,IAAI,UAAQ;IACZ,OAAO,UAAQ;IACf,YAAY,SAAK;IACjB,cAAc,SAAK;IACnB,YAAY,EAAE,GAAG,CAAC;IAClB,OAAO,SAA4B;IACnC,MAAM,EAAE,GAAG,CAAM;IACjB,MAAM,UAAQ;IACd,UAAU,EAAE,GAAG,CAAC;IAChB,YAAY,EAAE,GAAG,CAAC;IAClB,SAAS,EAAE,GAAG,CAAC;IACf,cAAc,EAAE,OAAO,CAAS;gBAEpB,MAAM,EAAE,GAAG;IAWvB,KAAK;IAqBL,MAAM;IAgBN,mBAAmB,CAAC,OAAO,EAAE,GAAG;IAgChC,kBAAkB,CAAC,OAAO,EAAE,GAAG;IAuG/B,YAAY;IAyEZ,YAAY,CAAC,SAAS,EAAE,GAAG,EAAE,GAAG,EAAE,GAAG;IAgBrC,eAAe;IA+Cf,qBAAqB;IAyDrB,iBAAiB,CAAC,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE,GAAG;IAQlC,aAAa;IAwBb,YAAY,CAAC,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE,GAAG;IAK7B,aAAa,CAAC,SAAS,EAAE,MAAM;CAchC"}
}
declare module 'yam-cesium/entity/plot/PlotStraightArrowDrawer' {
  export default class PlotStraightArrowDrawer {
      viewer: any;
      scene: any;
      clock: any;
      canvas: any;
      camera: any;
      ellipsoid: any;
      tooltip: any;
      entity: any;
      positions: any;
      tempPositions: any;
      drawHandler: any;
      modifyHandler: any;
      okHandler: any;
      cancelHandler: any;
      dragIcon: string;
      dragIconLight: string;
      material: any;
      outlineMaterial: any;
      fill: boolean;
      outline: boolean;
      outlineWidth: number;
      extrudedHeight: number;
      toolBarIndex: any;
      markers: any;
      layerId: string;
      shapeColor: any;
      outlineColor: any;
      shapeName: any;
      terrainHeight: any;
      isClickConfirm: boolean;
      constructor(viewer: any);
      clear(): void;
      showModifyStraightArrow(options: any): Promise<unknown>;
      startDrawStraightArrow(options: any): Promise<unknown>;
      _startModify(): void;
      _showRegion2Map(): void;
      _showModifyRegion2Map(): void;
      _createPoint(cartesian: any, oid: any): any;
      _computeTempPositions(): void;
      _computeCenterPotition(p1: any, p2: any): any;
      createToolBar(): Promise<void>;
      _getLonLat(cartesian: any): {
          lon: any;
          lat: any;
          alt: any;
      };
      _isSimpleXYZ(p1: any, p2: any): boolean;
      _clearMarkers(layerName: string): void;
      _clearAnchors(): void;
  }
  //# sourceMappingURL=PlotStraightArrowDrawer.d.ts.map
}
declare module 'yam-cesium/entity/plot/PlotStraightArrowDrawer.d.ts' {
  {"version":3,"file":"PlotStraightArrowDrawer.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/PlotStraightArrowDrawer.ts"],"names":[],"mappings":"AAKA,MAAM,CAAC,OAAO,OAAO,uBAAuB;IAC1C,MAAM,EAAE,GAAG,CAAC;IACZ,KAAK,EAAE,GAAG,CAAC;IACX,KAAK,EAAE,GAAG,CAAC;IACX,MAAM,EAAE,GAAG,CAAC;IACZ,MAAM,EAAE,GAAG,CAAC;IACZ,SAAS,EAAE,GAAG,CAAC;IACf,OAAO,EAAE,GAAG,CAAC;IACb,MAAM,EAAE,GAAG,CAAC;IACZ,SAAS,EAAE,GAAG,CAAM;IACpB,aAAa,EAAE,GAAG,CAAM;IACxB,WAAW,EAAE,GAAG,CAAC;IACjB,aAAa,EAAE,GAAG,CAAC;IACnB,SAAS,EAAE,GAAG,CAAC;IACf,aAAa,EAAE,GAAG,CAAC;IACnB,QAAQ,EAAE,MAAM,CAAwb;IACxc,aAAa,EAAE,MAAM,CAA4nB;IACjpB,QAAQ,EAAE,GAAG,CAAC;IACd,eAAe,EAAE,GAAG,CAAC;IACrB,IAAI,UAAQ;IACZ,OAAO,UAAQ;IACf,YAAY,SAAK;IACjB,cAAc,SAAK;IACnB,YAAY,EAAE,GAAG,CAAC;IAClB,OAAO,EAAE,GAAG,CAAM;IAClB,OAAO,SAAsB;IAC7B,UAAU,EAAE,GAAG,CAAC;IAChB,YAAY,EAAE,GAAG,CAAC;IAClB,SAAS,EAAE,GAAG,CAAC;IACf,aAAa,EAAE,GAAG,CAAC;IACnB,cAAc,EAAE,OAAO,CAAS;gBAEpB,MAAM,EAAE,GAAG;IAWvB,KAAK;IAqBL,uBAAuB,CAAC,OAAO,EAAE,GAAG;IA0CpC,sBAAsB,CAAC,OAAO,EAAE,GAAG;IA6GnC,YAAY;IAwEZ,eAAe;IA6Df,qBAAqB;IAqErB,YAAY,CAAC,SAAS,EAAE,GAAG,EAAE,GAAG,EAAE,GAAG;IAiBrC,qBAAqB;IAqBrB,sBAAsB,CAAC,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE,GAAG;IASvC,aAAa;IAwBb,UAAU,CAAC,SAAS,EAAE,GAAG;;;;;IAczB,YAAY,CAAC,EAAE,EAAE,GAAG,EAAE,EAAE,EAAE,GAAG;IAK7B,aAAa,CAAC,SAAS,EAAE,MAAM;IAe/B,aAAa;CAQd"}
}
declare module 'yam-cesium/entity/plot/PlotToolTip' {
  export default class PlotToolTip {
      _frameDiv: HTMLElement;
      _div: HTMLElement;
      _title: HTMLElement;
      constructor(frameDiv: HTMLElement);
      setVisible(visible: boolean): void;
      showAt(position: any, message: string): void;
  }
  //# sourceMappingURL=PlotToolTip.d.ts.map
}
declare module 'yam-cesium/entity/plot/PlotToolTip.d.ts' {
  {"version":3,"file":"PlotToolTip.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/PlotToolTip.ts"],"names":[],"mappings":"AAAA,MAAM,CAAC,OAAO,OAAO,WAAW;IAC9B,SAAS,EAAE,WAAW,CAAC;IACvB,IAAI,EAAE,WAAW,CAAC;IAClB,MAAM,EAAE,WAAW,CAAC;gBAER,QAAQ,EAAE,WAAW;IAmBjC,UAAU,CAAC,OAAO,EAAE,OAAO;IAI3B,MAAM,CAAC,QAAQ,EAAE,GAAG,EAAE,OAAO,EAAE,MAAM;CAQtC"}
}
declare module 'yam-cesium/entity/plot/PlotTracker' {
  import PlotPointDrawer from "yam-cesium/entity/plot/PlotPointDrawer";
  import "./css/plot.css";
  import PlotPolylineDrawer from "yam-cesium/entity/plot/PlotPolylineDrawer";
  import PlotPolygonDrawer from "yam-cesium/entity/plot/PlotPolygonDrawer";
  import PlotCircleDrawer from "yam-cesium/entity/plot/PlotCircleDrawer";
  import PlotRectangleDrawer from "yam-cesium/entity/plot/PlotRectangleDrawer";
  import PlotAttackArrowDrawer from "yam-cesium/entity/plot/PlotAttackArrowDrawer";
  import PlotPincerArrowDrawer from "yam-cesium/entity/plot/PlotPincerArrowDrawer";
  import PlotStraightArrowDrawer from "yam-cesium/entity/plot/PlotStraightArrowDrawer";
  export default class PlotTracker {
      viewer: any;
      ctrArr: any;
      pointDrawer: PlotPointDrawer;
      polylineDrawer: PlotPolylineDrawer;
      polygonDrawer: PlotPolygonDrawer;
      rectangleDrawer: PlotRectangleDrawer;
      circleDrawer: PlotCircleDrawer;
      attackArrowDrawer: PlotAttackArrowDrawer;
      pincerArrowDrawer: PlotPincerArrowDrawer;
      straightArrowDrawer: PlotStraightArrowDrawer;
      constructor(viewer: any);
      clear(): void;
      trackPoint(options: any): Promise<unknown>;
      trackPolyline(options: any): Promise<unknown>;
      trackPolygon(options: any): Promise<unknown>;
      trackRectangle(options: any): Promise<unknown>;
      trackCircle(options: any): Promise<unknown>;
      trackAttackArrow(options: any): Promise<unknown>;
      trackPincerArrow(options: any): Promise<unknown>;
      trackStraightArrow(options: any): Promise<unknown>;
  }
  //# sourceMappingURL=PlotTracker.d.ts.map
}
declare module 'yam-cesium/entity/plot/PlotTracker.d.ts' {
  {"version":3,"file":"PlotTracker.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/PlotTracker.ts"],"names":[],"mappings":"AAAA,OAAO,eAAe,MAAM,mBAAmB,CAAC;AAEhD,OAAO,gBAAgB,CAAC;AACxB,OAAO,kBAAkB,MAAM,sBAAsB,CAAC;AACtD,OAAO,iBAAiB,MAAM,qBAAqB,CAAC;AACpD,OAAO,gBAAgB,MAAM,oBAAoB,CAAC;AAClD,OAAO,mBAAmB,MAAM,uBAAuB,CAAC;AACxD,OAAO,qBAAqB,MAAM,yBAAyB,CAAC;AAC5D,OAAO,qBAAqB,MAAM,yBAAyB,CAAC;AAC5D,OAAO,uBAAuB,MAAM,2BAA2B,CAAC;AAEhE,MAAM,CAAC,OAAO,OAAO,WAAW;IAC9B,MAAM,EAAE,GAAG,CAAC;IACZ,MAAM,EAAE,GAAG,CAAM;IACjB,WAAW,EAAE,eAAe,CAAC;IAC7B,cAAc,EAAE,kBAAkB,CAAC;IACnC,aAAa,EAAE,iBAAiB,CAAC;IACjC,eAAe,EAAE,mBAAmB,CAAC;IACrC,YAAY,EAAE,gBAAgB,CAAC;IAC/B,iBAAiB,EAAE,qBAAqB,CAAC;IACzC,iBAAiB,EAAE,qBAAqB,CAAC;IACzC,mBAAmB,EAAE,uBAAuB,CAAC;gBAEjC,MAAM,EAAE,GAAG;IAavB,KAAK;IAaL,UAAU,CAAC,OAAO,EAAE,GAAG;IASvB,aAAa,CAAC,OAAO,EAAE,GAAG;IAS1B,YAAY,CAAC,OAAO,EAAE,GAAG;IASzB,cAAc,CAAC,OAAO,EAAE,GAAG;IAS3B,WAAW,CAAC,OAAO,EAAE,GAAG;IASxB,gBAAgB,CAAC,OAAO,EAAE,GAAG;IAS7B,gBAAgB,CAAC,OAAO,EAAE,GAAG;IAS7B,kBAAkB,CAAC,OAAO,EAAE,GAAG;CAQhC"}
}
declare module 'yam-cesium/entity/plot/plotUtil' {
  interface PType {
      version: string;
      PlotUtils?: any;
      Constants?: any;
  }
  export const P: PType;
  export {};
  //# sourceMappingURL=plotUtil.d.ts.map
}
declare module 'yam-cesium/entity/plot/plotUtil.d.ts' {
  {"version":3,"file":"plotUtil.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/entity/plot/plotUtil.ts"],"names":[],"mappings":"AAAA,UAAU,KAAK;IACb,OAAO,EAAE,MAAM,CAAC;IAChB,SAAS,CAAC,EAAE,GAAG,CAAC;IAChB,SAAS,CAAC,EAAE,GAAG,CAAC;CACjB;AAED,eAAO,MAAM,CAAC,EAAE,KAA4B,CAAC"}
}
declare module 'yam-cesium/imagery/amap/AmapImageryProvider' {
  import * as Cesium from "cesium";
  class AmapImageryProvider extends Cesium.UrlTemplateImageryProvider {
      constructor(options?: any);
  }
  export default AmapImageryProvider;
  //# sourceMappingURL=AmapImageryProvider.d.ts.map
}
declare module 'yam-cesium/imagery/amap/AmapImageryProvider.d.ts' {
  {"version":3,"file":"AmapImageryProvider.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/imagery/amap/AmapImageryProvider.ts"],"names":[],"mappings":"AAAA,OAAO,KAAK,MAAM,MAAM,QAAQ,CAAC;AAajC,cAAM,mBAAoB,SAAQ,MAAM,CAAC,0BAA0B;gBACrD,OAAO,GAAE,GAAQ;CAiB9B;AAED,eAAe,mBAAmB,CAAC"}
}
declare module 'yam-cesium/imagery/amap/AmapMercatorTilingScheme' {
  import * as Cesium from "cesium";
  class AmapMercatorTilingScheme extends Cesium.WebMercatorTilingScheme {
      _projection: any;
      constructor(options?: any);
  }
  export default AmapMercatorTilingScheme;
  //# sourceMappingURL=AmapMercatorTilingScheme.d.ts.map
}
declare module 'yam-cesium/imagery/amap/AmapMercatorTilingScheme.d.ts' {
  {"version":3,"file":"AmapMercatorTilingScheme.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/imagery/amap/AmapMercatorTilingScheme.ts"],"names":[],"mappings":"AAAA,OAAO,KAAK,MAAM,MAAM,QAAQ,CAAC;AAIjC,cAAM,wBAAyB,SAAQ,MAAM,CAAC,uBAAuB;IACnE,WAAW,EAAE,GAAG,CAAM;gBACV,OAAO,GAAE,GAAQ;CA4B9B;AAED,eAAe,wBAAwB,CAAA"}
}
declare module 'yam-cesium/imagery/baidu/BaiduImageryProvider' {
  import * as Cesium from "cesium";
  class BaiduImageryProvider {
      _url: string;
      _tileWidth: number;
      _tileHeight: number;
      _maximumLevel: number;
      _crs: string;
      _tilingScheme: any;
      _rectangle: any;
      _credit: any;
      _style: any;
      _token: string | undefined;
      constructor(options?: any);
      get url(): string;
      get token(): string | undefined;
      get tileWidth(): number;
      get tileHeight(): number;
      get maximumLevel(): number;
      get minimumLevel(): number;
      get tilingScheme(): any;
      get rectangle(): any;
      get ready(): boolean;
      get credit(): any;
      get hasAlphaChannel(): boolean;
      getTileCredits(x: number, y: number, level: string): void;
      requestImage(x: number, y: number, level: string): Promise<Cesium.CompressedTextureBuffer | Cesium.ImageryTypes> | undefined;
  }
  export default BaiduImageryProvider;
  //# sourceMappingURL=BaiduImageryProvider.d.ts.map
}
declare module 'yam-cesium/imagery/baidu/BaiduImageryProvider.d.ts' {
  {"version":3,"file":"BaiduImageryProvider.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/imagery/baidu/BaiduImageryProvider.ts"],"names":[],"mappings":"AAAA,OAAO,KAAK,MAAM,MAAM,QAAQ,CAAC;AAYjC,cAAM,oBAAoB;IACxB,IAAI,EAAE,MAAM,CAAA;IACZ,UAAU,EAAE,MAAM,CAAA;IAClB,WAAW,EAAE,MAAM,CAAA;IACnB,aAAa,EAAE,MAAM,CAAA;IACrB,IAAI,EAAE,MAAM,CAAA;IACZ,aAAa,EAAE,GAAG,CAAA;IAClB,UAAU,EAAE,GAAG,CAAA;IACf,OAAO,EAAE,GAAG,CAAA;IACZ,MAAM,EAAE,GAAG,CAAA;IACX,MAAM,EAAE,MAAM,GAAG,SAAS,CAAA;gBACd,OAAO,GAAE,GAAQ;IAsC7B,IAAI,GAAG,WAEN;IAED,IAAI,KAAK,uBAER;IAED,IAAI,SAAS,WAOZ;IAED,IAAI,UAAU,WAOb;IAED,IAAI,YAAY,WAOf;IAED,IAAI,YAAY,WAOf;IAED,IAAI,YAAY,QAOf;IAED,IAAI,SAAS,QAOZ;IAED,IAAI,KAAK,YAER;IAED,IAAI,MAAM,QAET;IAED,IAAI,eAAe,YAElB;IAED,cAAc,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,EAAE,KAAK,EAAE,MAAM;IAElD,YAAY,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,EAAE,KAAK,EAAE,MAAM;CAsBjD;AAED,eAAe,oBAAoB,CAAA"}
}
declare module 'yam-cesium/imagery/baidu/BaiduMercatorProjection' {
  /**
   * @Author: Caven
   * @Date: 2021-01-30 22:41:41
   */
  class BaiduMercatorProjection {
      isWgs84: boolean;
      constructor();
      getDistanceByMC(point1?: any, point2?: any): number;
      /**
       * 根据经纬度坐标计算两点间距离;
       * @param point1
       * @param point2
       * @returns {number|*} 返回两点间的距离
       */
      getDistanceByLL(point1?: any, point2?: any): number;
      /**
       * 平面直角坐标转换成经纬度坐标;
       * @param point
       * @returns {Point|{lng: number, lat: number}}
       */
      convertMC2LL(point?: any): {
          lng: any;
          lat: any;
      };
      /**
       * 经纬度坐标转换成平面直角坐标;
       * @param point 经纬度坐标
       * @returns {{lng: number, lat: number}|*}
       */
      convertLL2MC(point?: any): any;
      /**
       *
       * @param fromPoint
       * @param factor
       * @returns {{lng: *, lat: *}}
       */
      convertor(fromPoint?: any, factor?: any): {
          lng: any;
          lat: any;
      };
      /**
       *
       * @param x1
       * @param x2
       * @param y1
       * @param y2
       * @returns {number}
       */
      getDistance(x1: number, x2: number, y1: number, y2: number): number;
      /**
       *
       * @param deg
       * @returns {number}
       */
      toRadians(deg: number): number;
      /**
       *
       * @param rad
       * @returns {number}
       */
      toDegrees(rad: number): number;
      /**
       *
       * @param v
       * @param a
       * @param b
       * @returns {number}
       */
      getRange(v: number, a: number, b: number): number;
      /**
       *
       * @param v
       * @param a
       * @param b
       * @returns {*}
       */
      getLoop(v: number, a: number, b: number): number;
      /**
       *
       * @param point
       * @returns {{lng: number, lat: number}|*}
       */
      lngLatToMercator(point?: any): any;
      /**
       *
       * @param point
       * @returns {{x: (number|*), y: (number|*)}}
       */
      lngLatToPoint(point?: any): {
          x: any;
          y: any;
      };
      /**
       * 墨卡托变换至经纬度
       * @param point 墨卡托
       * @returns Point 经纬度
       */
      mercatorToLngLat(point?: any): {
          lng: any;
          lat: any;
      };
      /**
       * 平面到球面坐标
       * @param point 平面坐标
       * @returns Point 球面坐标
       */
      pointToLngLat(point?: any): {
          lng: any;
          lat: any;
      };
      /**
       * 地理坐标转换至像素坐标
       * @param point 地理坐标
       * @param zoom 级别
       * @param mapCenter 地图中心点，注意为了保证没有误差，这里需要传递墨卡托坐标
       * @param mapSize 地图容器大小
       */
      pointToPixel(point: any, zoom: number, mapCenter?: any, mapSize?: any): {
          x: number;
          y: number;
      } | undefined;
      /**
       * 像素坐标转换至地理坐标
       * @param pixel 像素坐标
       * @param zoom 级别
       * @param mapCenter 地图中心点，注意为了保证没有误差，这里需要传递墨卡托坐标
       * @param mapSize 地图容器大小
       */
      pixelToPoint(pixel: any, zoom: number, mapCenter?: any, mapSize?: any): {
          lng: any;
          lat: any;
      } | undefined;
      /**
       *
       * @param zoom
       * @returns {number}
       */
      getZoomUnits(zoom: number): number;
  }
  export default BaiduMercatorProjection;
  //# sourceMappingURL=BaiduMercatorProjection.d.ts.map
}
declare module 'yam-cesium/imagery/baidu/BaiduMercatorProjection.d.ts' {
  {"version":3,"file":"BaiduMercatorProjection.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/imagery/baidu/BaiduMercatorProjection.ts"],"names":[],"mappings":"AAAA;;;GAGG;AA0JH,cAAM,uBAAuB;IAC3B,OAAO,EAAE,OAAO,CAAS;;IAMzB,eAAe,CAAC,MAAM,GAAE,GAAQ,EAAE,MAAM,GAAE,GAAQ;IAmBlD;;;;;OAKG;IACH,eAAe,CAAC,MAAM,GAAE,GAAQ,EAAE,MAAM,GAAE,GAAQ;IAelD;;;;OAIG;IACH,YAAY,CAAC,KAAK,GAAE,GAAQ;;;;IAoC5B;;;;OAIG;IACH,YAAY,CAAC,KAAK,GAAE,GAAQ;IAoD5B;;;;;OAKG;IACH,SAAS,CAAC,SAAS,GAAE,GAAQ,EAAE,MAAM,GAAE,GAAQ;;;;IAsB/C;;;;;;;OAOG;IACH,WAAW,CAAC,EAAE,EAAE,MAAM,EAAE,EAAE,EAAE,MAAM,EAAE,EAAE,EAAE,MAAM,EAAE,EAAE,EAAE,MAAM;IAU1D;;;;OAIG;IACH,SAAS,CAAC,GAAG,EAAE,MAAM;IAIrB;;;;OAIG;IACH,SAAS,CAAC,GAAG,EAAE,MAAM;IAIrB;;;;;;OAMG;IACH,QAAQ,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM;IAUxC;;;;;;OAMG;IACH,OAAO,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM;IAUvC;;;;OAIG;IACH,gBAAgB,CAAC,KAAK,GAAE,GAAQ;IAIhC;;;;OAIG;IACH,aAAa,CAAC,KAAK,GAAE,GAAQ;;;;IAQ7B;;;;OAIG;IACH,gBAAgB,CAAC,KAAK,GAAE,GAAQ;;;;IAIhC;;;;OAIG;IACH,aAAa,CAAC,KAAK,GAAE,GAAQ;;;;IAK7B;;;;;;OAMG;IACH,YAAY,CAAC,KAAK,KAAU,EAAE,IAAI,EAAE,MAAM,EAAE,SAAS,GAAE,GAAQ,EAAE,OAAO,GAAE,GAAQ;;;;IAelF;;;;;;OAMG;IACH,YAAY,CAAC,KAAK,KAAU,EAAE,IAAI,EAAE,MAAM,EAAE,SAAS,GAAE,GAAQ,EAAE,OAAO,GAAE,GAAQ;;;;IAWlF;;;;OAIG;IACH,YAAY,CAAC,IAAI,EAAE,MAAM;CAG1B;AAED,eAAe,uBAAuB,CAAC"}
}
declare module 'yam-cesium/imagery/baidu/BaiduMercatorTilingScheme' {
  import * as Cesium from "cesium";
  class BaiduMercatorTilingScheme extends Cesium.WebMercatorTilingScheme {
      _projection: any;
      resolutions: any;
      _rectangle: any;
      constructor(options?: any);
      /**
       *
       * @param x
       * @param y
       * @param level
       * @param result
       * @returns {module:cesium.Rectangle|*}
       */
      tileXYToNativeRectangle(x: number, y: number, level: string, result: any): any;
      /**
       *
       * @param position
       * @param level
       * @param result
       * @returns {undefined|*}
       */
      positionToTileXY(position: any, level: string, result: any): any;
  }
  export default BaiduMercatorTilingScheme;
  //# sourceMappingURL=BaiduMercatorTilingScheme.d.ts.map
}
declare module 'yam-cesium/imagery/baidu/BaiduMercatorTilingScheme.d.ts' {
  {"version":3,"file":"BaiduMercatorTilingScheme.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/imagery/baidu/BaiduMercatorTilingScheme.ts"],"names":[],"mappings":"AAAA,OAAO,KAAK,MAAM,MAAM,QAAQ,CAAC;AAKjC,cAAM,yBAA0B,SAAQ,MAAM,CAAC,uBAAuB;IACpE,WAAW,EAAE,GAAG,CAAM;IACtB,WAAW,EAAE,GAAG,CAAM;IACtB,UAAU,EAAE,GAAG,CAAM;gBACT,OAAO,GAAE,GAAQ;IAoC7B;;;;;;;OAOG;IAEH,uBAAuB,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,EAAE,KAAK,EAAE,MAAM,EAAE,MAAM,EAAE,GAAG;IAkBxE;;;;;;OAMG;IAEH,gBAAgB,CAAC,QAAQ,EAAE,GAAG,EAAE,KAAK,EAAE,MAAM,EAAE,MAAM,EAAE,GAAG;CAoB3D;AAED,eAAe,yBAAyB,CAAA"}
}
declare module 'yam-cesium/imagery/google/GoogleImageryProvider' {
  import * as Cesium from "cesium";
  class GoogleImageryProvider extends Cesium.UrlTemplateImageryProvider {
      constructor(options?: any);
  }
  export default GoogleImageryProvider;
  //# sourceMappingURL=GoogleImageryProvider.d.ts.map
}
declare module 'yam-cesium/imagery/google/GoogleImageryProvider.d.ts' {
  {"version":3,"file":"GoogleImageryProvider.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/imagery/google/GoogleImageryProvider.ts"],"names":[],"mappings":"AAAA,OAAO,KAAK,MAAM,MAAM,QAAQ,CAAC;AAUjC,cAAM,qBAAsB,SAAQ,MAAM,CAAC,0BAA0B;gBACvD,OAAO,GAAE,GAAQ;CAY9B;AAED,eAAe,qBAAqB,CAAA"}
}
declare module 'yam-cesium/imagery/tdt/TdtImageryProvider' {
  import * as Cesium from "cesium";
  class TdtImageryProvider extends Cesium.UrlTemplateImageryProvider {
      constructor(options?: any);
  }
  export default TdtImageryProvider;
  //# sourceMappingURL=TdtImageryProvider.d.ts.map
}
declare module 'yam-cesium/imagery/tdt/TdtImageryProvider.d.ts' {
  {"version":3,"file":"TdtImageryProvider.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/imagery/tdt/TdtImageryProvider.ts"],"names":[],"mappings":"AAAA,OAAO,KAAK,MAAM,MAAM,QAAQ,CAAC;AAIjC,cAAM,kBAAmB,SAAQ,MAAM,CAAC,0BAA0B;gBACpD,OAAO,GAAE,GAAQ;CAW9B;AAED,eAAe,kBAAkB,CAAA"}
}
declare module 'yam-cesium/imagery/tencent/TencentImageryProvider' {
  import * as Cesium from "cesium";
  class TencentImageryProvider extends Cesium.UrlTemplateImageryProvider {
      constructor(options?: any);
  }
  export default TencentImageryProvider;
  //# sourceMappingURL=TencentImageryProvider.d.ts.map
}
declare module 'yam-cesium/imagery/tencent/TencentImageryProvider.d.ts' {
  {"version":3,"file":"TencentImageryProvider.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/imagery/tencent/TencentImageryProvider.ts"],"names":[],"mappings":"AAAA,OAAO,KAAK,MAAM,MAAM,QAAQ,CAAC;AAOjC,cAAM,sBAAuB,SAAQ,MAAM,CAAC,0BAA0B;gBACxD,OAAO,GAAE,GAAQ;CAkB9B;AAED,eAAe,sBAAsB,CAAA"}
}
declare module 'yam-cesium/index' {
  export const version: any;
  import Map from "yam-cesium/cesium/Map";
  export { Map };
  import BaiduImageryProvider from "yam-cesium/imagery/baidu/BaiduImageryProvider";
  import AmapImageryProvider from "yam-cesium/imagery/amap/AmapImageryProvider";
  import TencentImageryProvider from "yam-cesium/imagery/tencent/TencentImageryProvider";
  import TdtImageryProvider from "yam-cesium/imagery/tdt/TdtImageryProvider";
  import GoogleImageryProvider from "yam-cesium/imagery/google/GoogleImageryProvider";
  export { AmapImageryProvider };
  export { BaiduImageryProvider };
  export { TencentImageryProvider };
  export { TdtImageryProvider };
  export { GoogleImageryProvider };
  import coordTransform from "yam-cesium/transform/CoordTransform";
  export { coordTransform };
  import viewerCesiumNavigationMixin from "yam-cesium/plugins/navigation/viewerCesiumNavigationMixin";
  export { viewerCesiumNavigationMixin };
  export { Canvas2Image } from "yam-cesium/scene/shortcut/Canvas2Image";
  export { CesiumZh } from "yam-cesium/plugins/cesiumZh/CesiumZh";
  import CesiumMethod from "yam-cesium/plugins/lib/CesiumMethod";
  export { CesiumMethod };
  import PublicMethod from "yam-cesium/plugins/lib/PublicMethod";
  export { PublicMethod };
  import PrimitiveCluster from "yam-cesium/entity/dataSource/PrimitiveCluster";
  export { PrimitiveCluster };
  import Cluster from "yam-cesium/entity/dataSource/Cluster";
  export { Cluster };
  import PlotTracker from "yam-cesium/entity/plot/PlotTracker";
  export { PlotTracker };
  import Plot from "yam-cesium/entity/plot/Plot";
  export { Plot };
  import MeasureTools from "yam-cesium/entity/plot/measure/MeasureTools";
  export { MeasureTools };
  //# sourceMappingURL=index.d.ts.map
}
declare module 'yam-cesium/index.d.ts' {
  {"version":3,"file":"index.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/index.ts"],"names":[],"mappings":"AAIA,eAAO,MAAM,OAAO,KAAc,CAAC;AAKnC,OAAO,GAAG,MAAM,cAAc,CAAC;AAE/B,OAAO,EAAE,GAAG,EAAE,CAAC;AAGf,OAAO,oBAAoB,MAAM,sCAAsC,CAAC;AACxE,OAAO,mBAAmB,MAAM,oCAAoC,CAAC;AACrE,OAAO,sBAAsB,MAAM,0CAA0C,CAAC;AAC9E,OAAO,kBAAkB,MAAM,kCAAkC,CAAC;AAClE,OAAO,qBAAqB,MAAM,wCAAwC,CAAC;AAE3E,OAAO,EAAE,mBAAmB,EAAE,CAAC;AAC/B,OAAO,EAAE,oBAAoB,EAAE,CAAC;AAChC,OAAO,EAAE,sBAAsB,EAAE,CAAC;AAClC,OAAO,EAAE,kBAAkB,EAAE,CAAC;AAC9B,OAAO,EAAE,qBAAqB,EAAE,CAAC;AAGjC,OAAO,cAAc,MAAM,4BAA4B,CAAC;AAExD,OAAO,EAAE,cAAc,EAAE,CAAC;AAG1B,OAAO,2BAA2B,MAAM,kDAAkD,CAAC;AAM3F,OAAO,EAAE,2BAA2B,EAAE,CAAC;AAGvC,OAAO,EAAE,YAAY,EAAE,MAAM,+BAA+B,CAAC;AAG7D,OAAO,EAAE,QAAQ,EAAE,MAAM,6BAA6B,CAAC;AAQvD,OAAO,YAAY,MAAM,4BAA4B,CAAC;AAEtD,OAAO,EAAE,YAAY,EAAE,CAAC;AAGxB,OAAO,YAAY,MAAM,4BAA4B,CAAC;AAEtD,OAAO,EAAE,YAAY,EAAE,CAAC;AAGxB,OAAO,gBAAgB,MAAM,sCAAsC,CAAC;AAEpE,OAAO,EAAE,gBAAgB,EAAE,CAAC;AAG5B,OAAO,OAAO,MAAM,6BAA6B,CAAC;AAElD,OAAO,EAAE,OAAO,EAAE,CAAC;AAGnB,OAAO,WAAW,MAAM,2BAA2B,CAAC;AAEpD,OAAO,EAAE,WAAW,EAAE,CAAC;AAEvB,OAAO,IAAI,MAAM,oBAAoB,CAAC;AAEtC,OAAO,EAAE,IAAI,EAAE,CAAC;AAEhB,OAAO,YAAY,MAAM,oCAAoC,CAAC;AAE9D,OAAO,EAAE,YAAY,EAAE,CAAC"}
}
declare module 'yam-cesium/plugins/cesiumZh/CesiumZh' {
  /**
   * cesium 可视化部分的中文汉化，包含内容如下：
   * 1、汉化方式非从源码层面进行，而是外挂了一个插件执行，使用方便，但是汉化程度不深，只汉化了cesium可见的控件部分
   * 2、汉化内容包括：
   *  1）、右上角所有工具，包括影像选择的显示标题，鼠标滑过title，帮助面板描述等
   *  2）、左下角动画面板
   *  3）、状态栏时间刻度线、全屏按钮
   *  4）、cesium 描述字符
   * 3、中文通过百度、谷歌翻译实现
   * 4、针对cesium 1.58版本汉化
   */
  export const CesiumZh: {
      load: () => void;
  };
  export default CesiumZh;
  //# sourceMappingURL=CesiumZh.d.ts.map
}
declare module 'yam-cesium/plugins/cesiumZh/CesiumZh.d.ts' {
  {"version":3,"file":"CesiumZh.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/cesiumZh/CesiumZh.ts"],"names":[],"mappings":"AAAA;;;;;;;;;;GAUG;AACH,eAAO,MAAM,QAAQ;;CA+XjB,CAAC;AAEL,eAAe,QAAQ,CAAC"}
}
declare module 'yam-cesium/plugins/lib/CesiumMethod' {
  import * as Cesium from "cesium";
  export default class CesiumMethod {
      viewer: Cesium.Viewer;
      constructor(viewer: Cesium.Viewer);
      /**
       * 笛卡尔转经纬度
       * @param {Cartesian3} cartesian
       * @param withHeight
       * @return {Array<Number>}
       */
      static cartesian3ToLngLat(cartesian: Cesium.Cartesian3, withHeight?: boolean): number[];
      /**
       * 笛卡尔转经纬度
       * @param {Cartesian3} cartesian
       * @param withHeight
       * @return {Array<Number>}
       */
      static cartesian2ToLngLat(cartesian: Cesium.Cartesian3, withHeight?: boolean): number[];
      /**
       * 笛卡尔转经纬度
       * @param cartesian3s
       * @param withHeight
       * @return {Array<Array<number>>}
       */
      static cartesian3sToLngLats(cartesian3s: Array<Cesium.Cartesian3>, withHeight?: boolean): number[][];
      /**
       * 根据笛卡尔解析绝对中心坐标点
       * @param {Array<Cartesian3>} cartesian3s
       * @return {Feature<Point, Properties>}
       */
      static calcAbsoluteCenterByCartesian3s(cartesian3s: Array<Cesium.Cartesian3>): any;
      /**
       * 根据笛卡尔解析绝对中心坐标点
       * @param {Array<Cartesian3>} cartesian3s
       * @return {{coord: coord, cart: Cartesian3}}
       */
      static countPolygonCenter(cartesian3s: Array<Cesium.Cartesian3>): {
          coord: any;
          cart: Cesium.Cartesian3;
      };
      /**
       * 计算多边形面积
       * @param {Array<Array>} coords 一个包含经纬度坐标的二维数组
       * @return {number}
       */
      static calcPolygonArea(coords: Array<Array<number>>): any;
      /**
       * 获取地形高度
       * @param positions
       * @param callback
       */
      getTerrainHeight(positions: Cesium.Cartographic[], callback: Function): void;
      /**
       * 获取camera高度
       */
      getCameraHeight(): number | null;
      /**
       * 获取camera中心点坐标
       * @returns {{lon: number, lat: number, height: number}}
       */
      getCenterPosition(): {
          lon?: undefined;
          lat?: undefined;
          height?: undefined;
      } | {
          lon: number;
          lat: number;
          height: number;
      };
      /**
       * 笛卡尔添加高度
       */
      static addHeightWithCartesian3(cartesian: Cesium.Cartesian3, height: number): Cesium.Cartesian3;
      /**
       * 根据两个笛卡尔坐标获取之间的距离
       * @param cartesian1
       * @param cartesian2
       */
      static measureDistanceWithCartesian3(cartesian1: Cesium.Cartesian3, cartesian2: Cesium.Cartesian3): number;
  }
  //# sourceMappingURL=CesiumMethod.d.ts.map
}
declare module 'yam-cesium/plugins/lib/CesiumMethod.d.ts' {
  {"version":3,"file":"CesiumMethod.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/lib/CesiumMethod.ts"],"names":[],"mappings":"AAEA,OAAO,KAAK,MAAM,MAAM,QAAQ,CAAC;AAEjC,MAAM,CAAC,OAAO,OAAO,YAAY;IAC/B,MAAM,EAAE,MAAM,CAAC,MAAM,CAAC;gBAEV,MAAM,EAAE,MAAM,CAAC,MAAM;IAIjC;;;;;OAKG;IACH,MAAM,CAAC,kBAAkB,CAAC,SAAS,EAAE,MAAM,CAAC,UAAU,EAAE,UAAU,GAAE,OAAe;IAYnF;;;;;OAKG;IACH,MAAM,CAAC,kBAAkB,CAAC,SAAS,EAAE,MAAM,CAAC,UAAU,EAAE,UAAU,GAAE,OAAe;IAYnF;;;;;OAKG;IACH,MAAM,CAAC,oBAAoB,CAAC,WAAW,EAAE,KAAK,CAAC,MAAM,CAAC,UAAU,CAAC,EAAE,UAAU,GAAE,OAAe;IAQ9F;;;;OAIG;IACH,MAAM,CAAC,+BAA+B,CAAC,WAAW,EAAE,KAAK,CAAC,MAAM,CAAC,UAAU,CAAC;IAQ5E;;;;OAIG;IACH,MAAM,CAAC,kBAAkB,CAAC,WAAW,EAAE,KAAK,CAAC,MAAM,CAAC,UAAU,CAAC;;;;IAc/D;;;;OAIG;IACH,MAAM,CAAC,eAAe,CAAC,MAAM,EAAE,KAAK,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC;IAKnD;;;;OAIG;IACH,gBAAgB,CAAC,SAAS,EAAE,MAAM,CAAC,YAAY,EAAE,EAAE,QAAQ,EAAE,QAAQ;IAWrE;;OAEG;IACH,eAAe;IASf;;;OAGG;IACH,iBAAiB;;;;;;;;;IAkBjB;;OAEG;IACH,MAAM,CAAC,uBAAuB,CAAC,SAAS,EAAE,MAAM,CAAC,UAAU,EAAE,MAAM,EAAE,MAAM;IAK3E;;;;OAIG;IACH,MAAM,CAAC,6BAA6B,CAAC,UAAU,EAAE,MAAM,CAAC,UAAU,EAAE,UAAU,EAAE,MAAM,CAAC,UAAU;CAGlG"}
}
declare module 'yam-cesium/plugins/lib/layer/Layer' {
  import "./layer.css";
  interface LayerOptions {
      title?: boolean | string;
      type?: number;
      content?: string | HTMLElement;
      skin?: string;
      offset?: string | Array<string>;
      area?: string | Array<string>;
      closeBtn?: number | boolean;
      shade?: number | Array<any> | boolean;
      shadeClose?: boolean;
      time?: number;
      zIndex?: number;
      fixed?: boolean;
      resize?: boolean;
      move?: string | boolean;
      yes?: Function;
      cancel?: Function;
  }
  export default class layer {
      static layers: Array<any>;
      static zIndex: number;
      static layerId: number;
      static close(index: number): void;
      static alert(content: string, options?: LayerOptions, yes?: Function): void;
      static confirm(content: string | LayerOptions, options?: LayerOptions): Promise<unknown>;
      static open(options: LayerOptions): Promise<unknown>;
  }
  export {};
  //# sourceMappingURL=Layer.d.ts.map
}
declare module 'yam-cesium/plugins/lib/layer/Layer.d.ts' {
  {"version":3,"file":"Layer.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/lib/layer/Layer.ts"],"names":[],"mappings":"AAAA,OAAO,aAAa,CAAC;AAErB,UAAU,YAAY;IACpB,KAAK,CAAC,EAAE,OAAO,GAAG,MAAM,CAAC;IACzB,IAAI,CAAC,EAAE,MAAM,CAAC;IACd,OAAO,CAAC,EAAE,MAAM,GAAG,WAAW,CAAC;IAC/B,IAAI,CAAC,EAAE,MAAM,CAAC;IACd,MAAM,CAAC,EAAE,MAAM,GAAG,KAAK,CAAC,MAAM,CAAC,CAAC;IAChC,IAAI,CAAC,EAAE,MAAM,GAAG,KAAK,CAAC,MAAM,CAAC,CAAC;IAC9B,QAAQ,CAAC,EAAE,MAAM,GAAG,OAAO,CAAC;IAC5B,KAAK,CAAC,EAAE,MAAM,GAAG,KAAK,CAAC,GAAG,CAAC,GAAG,OAAO,CAAC;IACtC,UAAU,CAAC,EAAE,OAAO,CAAC;IACrB,IAAI,CAAC,EAAE,MAAM,CAAC;IACd,MAAM,CAAC,EAAE,MAAM,CAAC;IAChB,KAAK,CAAC,EAAE,OAAO,CAAC;IAChB,MAAM,CAAC,EAAE,OAAO,CAAC;IACjB,IAAI,CAAC,EAAE,MAAM,GAAG,OAAO,CAAC;IACxB,GAAG,CAAC,EAAE,QAAQ,CAAC;IACf,MAAM,CAAC,EAAE,QAAQ,CAAC;CACnB;AAED,MAAM,CAAC,OAAO,OAAO,KAAK;IAExB,MAAM,CAAC,MAAM,EAAE,KAAK,CAAC,GAAG,CAAC,CAAM;IAC/B,MAAM,CAAC,MAAM,EAAE,MAAM,CAAY;IACjC,MAAM,CAAC,OAAO,EAAE,MAAM,CAAS;IAE/B,MAAM,CAAC,KAAK,CAAC,KAAK,EAAE,MAAM;IAO1B,MAAM,CAAC,KAAK,CAAC,OAAO,EAAE,MAAM,EAAE,OAAO,CAAC,EAAE,YAAY,EAAE,GAAG,CAAC,EAAE,QAAQ;IAmBpE,MAAM,CAAC,OAAO,CAAC,OAAO,EAAE,MAAM,GAAG,YAAY,EAAE,OAAO,CAAC,EAAE,YAAY;IAyCrE,MAAM,CAAC,IAAI,CAAC,OAAO,EAAE,YAAY;CAgOlC"}
}
declare module 'yam-cesium/plugins/lib/PublicMethod' {
  /**
   * 公共函数
   */
  export default class PublicMethod {
      /**
       * 将json格式的参数遍历放入obj对象中
       * @param {object} obj json对象
       * @param {object} options json格式的参数
       */
      static setOptions(obj: any, options: any): void;
      /**
       * 字典比对
       * @param {string} type 类型
       * @param {object} dict 字典对象
       * @returns 字典的中与type对应key的值
       */
      static compareDict(type: any, dict: any): any;
      /**
       *  filename 保存的文件名
       *  txt 保存的文本
       */
      static downloadTxt(filename: string, content: any, contentType: string): void;
      static getQueryVariable(variable: string | number): string | false;
  }
  //# sourceMappingURL=PublicMethod.d.ts.map
}
declare module 'yam-cesium/plugins/lib/PublicMethod.d.ts' {
  {"version":3,"file":"PublicMethod.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/lib/PublicMethod.ts"],"names":[],"mappings":"AAAA;;GAEG;AAEH,MAAM,CAAC,OAAO,OAAO,YAAY;IAE/B;;;;OAIG;IACH,MAAM,CAAC,UAAU,CAAC,GAAG,EAAE,GAAG,EAAE,OAAO,EAAE,GAAG;IASxC;;;;;OAKG;IACH,MAAM,CAAC,WAAW,CAAE,IAAI,EAAE,GAAG,EAAE,IAAI,EAAE,GAAG;IAUxC;;;OAGG;IACH,MAAM,CAAC,WAAW,CAAE,QAAQ,EAAE,MAAM,EAAE,OAAO,EAAE,GAAG,EAAE,WAAW,EAAE,MAAM;IASvE,MAAM,CAAC,gBAAgB,CAAC,QAAQ,EAAE,MAAM,GAAG,MAAM;CAWlD"}
}
declare module 'yam-cesium/plugins/navigation/CesiumNavigation' {
  /**
   * @alias CesiumNavigation
   * @constructor
   *
   * @param {Viewer|CesiumWidget} viewerCesiumWidget The Viewer or CesiumWidget instance
   */
  class CesiumNavigation {
      _onDestroyListeners: any[];
      distanceLegendViewModel: any;
      navigationViewModel: any;
      navigationDiv: any;
      distanceLegendDiv: any;
      terria: any;
      container: any;
      _navigationLocked: boolean;
      constructor(viewerCesiumWidget: any, options: any);
      /**
       * @param {Viewer|CesiumWidget} viewerCesiumWidget The Viewer or CesiumWidget instance
       * @param options
       */
      initialize(viewerCesiumWidget: any, options: any): void;
      setNavigationLocked(locked: any): void;
      getNavigationLocked(): boolean;
      destroy(): void;
      addOnDestroyListener(callback: any): void;
  }
  export default CesiumNavigation;
  //# sourceMappingURL=CesiumNavigation.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/CesiumNavigation.d.ts' {
  {"version":3,"file":"CesiumNavigation.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/CesiumNavigation.ts"],"names":[],"mappings":"AAaA;;;;;GAKG;AACH,cAAM,gBAAgB;IACpB,mBAAmB,EAAE,GAAG,EAAE,CAAC;IAC3B,uBAAuB,EAAE,GAAG,CAAC;IAC7B,mBAAmB,EAAE,GAAG,CAAC;IACzB,aAAa,EAAE,GAAG,CAAC;IACnB,iBAAiB,EAAE,GAAG,CAAC;IACvB,MAAM,EAAE,GAAG,CAAC;IACZ,SAAS,EAAE,GAAG,CAAC;IACf,iBAAiB,EAAE,OAAO,CAAS;gBAEvB,kBAAkB,EAAE,GAAG,EAAE,OAAO,EAAE,GAAG;IAKjD;;;OAGG;IACH,UAAU,CAAC,kBAAkB,EAAE,GAAG,EAAE,OAAO,EAAE,GAAG;IAkFhD,mBAAmB,CAAC,MAAM,EAAE,GAAG;IAK/B,mBAAmB;IAInB,OAAO;IA4BP,oBAAoB,CAAC,QAAQ,EAAE,GAAG;CAKnC;AAED,eAAe,gBAAgB,CAAC"}
}
declare module 'yam-cesium/plugins/navigation/core/createFragmentFromTemplate' {
  const createFragmentFromTemplate: (htmlString: string) => DocumentFragment;
  export default createFragmentFromTemplate;
  //# sourceMappingURL=createFragmentFromTemplate.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/core/createFragmentFromTemplate.d.ts' {
  {"version":3,"file":"createFragmentFromTemplate.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/core/createFragmentFromTemplate.ts"],"names":[],"mappings":"AACA,QAAA,MAAM,0BAA0B,eAAyB,MAAM,qBAS9D,CAAA;AAED,eAAe,0BAA0B,CAAA"}
}
declare module 'yam-cesium/plugins/navigation/core/loadView' {
  var loadView: (htmlString: string, container: any, viewModel: any) => ChildNode[];
  export default loadView;
  //# sourceMappingURL=loadView.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/core/loadView.d.ts' {
  {"version":3,"file":"loadView.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/core/loadView.ts"],"names":[],"mappings":"AAQA,QAAA,IAAI,QAAQ,eAAyB,MAAM,aAAa,GAAG,aAAa,GAAG,gBAyB1E,CAAA;AAED,eAAe,QAAQ,CAAA"}
}
declare module 'yam-cesium/plugins/navigation/core/Utils' {
  var Utils: any;
  export default Utils;
  //# sourceMappingURL=Utils.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/core/Utils.d.ts' {
  {"version":3,"file":"Utils.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/core/Utils.ts"],"names":[],"mappings":"AAUA,QAAA,IAAI,KAAK,EAAE,GAAQ,CAAC;AAqDpB,eAAe,KAAK,CAAC"}
}
declare module 'yam-cesium/plugins/navigation/svgPaths/svgCompassGyro' {
  var svgCompassGyro: string;
  export default svgCompassGyro;
  //# sourceMappingURL=svgCompassGyro.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/svgPaths/svgCompassGyro.d.ts' {
  {"version":3,"file":"svgCompassGyro.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/svgPaths/svgCompassGyro.ts"],"names":[],"mappings":"AACA,QAAA,IAAI,cAAc,QAA0pM,CAAA;AAE5qM,eAAe,cAAc,CAAA"}
}
declare module 'yam-cesium/plugins/navigation/svgPaths/svgCompassOuterRing' {
  var svgCompassOuterRing: string;
  export default svgCompassOuterRing;
  //# sourceMappingURL=svgCompassOuterRing.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/svgPaths/svgCompassOuterRing.d.ts' {
  {"version":3,"file":"svgCompassOuterRing.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/svgPaths/svgCompassOuterRing.ts"],"names":[],"mappings":"AACA,QAAA,IAAI,mBAAmB,QAAkoD,CAAA;AAEzpD,eAAe,mBAAmB,CAAA"}
}
declare module 'yam-cesium/plugins/navigation/svgPaths/svgCompassRotationMarker' {
  var svgCompassRotationMarker: string;
  export default svgCompassRotationMarker;
  //# sourceMappingURL=svgCompassRotationMarker.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/svgPaths/svgCompassRotationMarker.d.ts' {
  {"version":3,"file":"svgCompassRotationMarker.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/svgPaths/svgCompassRotationMarker.ts"],"names":[],"mappings":"AAAA,QAAA,IAAI,wBAAwB,QAA8O,CAAA;AAC1Q,eAAe,wBAAwB,CAAA"}
}
declare module 'yam-cesium/plugins/navigation/svgPaths/svgReset' {
  var svgReset: string;
  export default svgReset;
  //# sourceMappingURL=svgReset.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/svgPaths/svgReset.d.ts' {
  {"version":3,"file":"svgReset.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/svgPaths/svgReset.ts"],"names":[],"mappings":"AAAA,QAAA,IAAI,QAAQ,QAAuV,CAAA;AAEnW,eAAe,QAAQ,CAAA"}
}
declare module 'yam-cesium/plugins/navigation/viewerCesiumNavigationMixin' {
  import CesiumNavigation from 'yam-cesium/plugins/navigation/CesiumNavigation';
  import './styles/cesium-navigation.css';
  /**
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
  function viewerCesiumNavigationMixin(viewer: any, options: any): void;
  namespace viewerCesiumNavigationMixin {
      var mixinWidget: (cesiumWidget: any, options: any) => CesiumNavigation;
  }
  export default viewerCesiumNavigationMixin;
  //# sourceMappingURL=viewerCesiumNavigationMixin.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/viewerCesiumNavigationMixin.d.ts' {
  {"version":3,"file":"viewerCesiumNavigationMixin.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/viewerCesiumNavigationMixin.ts"],"names":[],"mappings":"AACA,OAAO,gBAAgB,MAAM,oBAAoB,CAAA;AACjD,OAAO,gCAAgC,CAAA;AAMvC;;;;;;;;;;;;;;;;GAgBG;AACH,iBAAS,2BAA2B,CAAE,MAAM,EAAE,GAAG,EAAE,OAAO,EAAE,GAAG,QAqB9D;kBArBQ,2BAA2B;;;AA4DpC,eAAe,2BAA2B,CAAA"}
}
declare module 'yam-cesium/plugins/navigation/viewModels/DistanceLegendViewModel' {
  class DistanceLegendViewModel {
      terria: any;
      _removeSubscription: any;
      _lastLegendUpdate: any;
      eventHelper: any;
      enableDistanceLegend: any;
      distanceLabel: any;
      barWidth: any;
      constructor(options: any);
      destroy(): void;
      show(container: any): void;
      static create(options: any): DistanceLegendViewModel;
  }
  export default DistanceLegendViewModel;
  //# sourceMappingURL=DistanceLegendViewModel.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/viewModels/DistanceLegendViewModel.d.ts' {
  {"version":3,"file":"DistanceLegendViewModel.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/viewModels/DistanceLegendViewModel.ts"],"names":[],"mappings":"AAyBA,cAAM,uBAAuB;IAC3B,MAAM,EAAE,GAAG,CAAC;IACZ,mBAAmB,EAAE,GAAG,CAAC;IACzB,iBAAiB,EAAE,GAAG,CAAC;IACvB,WAAW,EAAE,GAAG,CAAC;IACjB,oBAAoB,EAAE,GAAG,CAAC;IAC1B,aAAa,EAAE,GAAG,CAAC;IACnB,QAAQ,EAAE,GAAG,CAAC;gBAEF,OAAO,EAAE,GAAG;IAmDxB,OAAO;IAIP,IAAI,CAAC,SAAS,EAAE,GAAG;IAkBnB,MAAM,CAAC,MAAM,CAAC,OAAO,EAAE,GAAG;CAK3B;AA6JD,eAAe,uBAAuB,CAAC"}
}
declare module 'yam-cesium/plugins/navigation/viewModels/NavigationControl' {
  import UserInterfaceControl from 'yam-cesium/plugins/navigation/viewModels/UserInterfaceControl';
  /**
   * The view-model for a control in the navigation control tool bar
   *
   * @alias NavigationControl
   * @constructor
   * @abstract
   *
   * @param {Terria} terria The Terria instance.
   */
  class NavigationControl extends UserInterfaceControl {
      constructor(terria: any);
  }
  export default NavigationControl;
  //# sourceMappingURL=NavigationControl.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/viewModels/NavigationControl.d.ts' {
  {"version":3,"file":"NavigationControl.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/viewModels/NavigationControl.ts"],"names":[],"mappings":"AAAA,OAAO,oBAAoB,MAAM,wBAAwB,CAAA;AACzD;;;;;;;;GAQG;AAEH,cAAM,iBAAkB,SAAQ,oBAAoB;gBACtC,MAAM,EAAE,GAAG;CAGxB;AAOD,eAAe,iBAAiB,CAAA"}
}
declare module 'yam-cesium/plugins/navigation/viewModels/NavigationViewModel' {
  class NavigationViewModel {
      terria: any;
      eventHelper: any;
      enableZoomControls: any;
      enableCompass: any;
      navigationLocked: any;
      controls: any;
      svgCompassOuterRing: any;
      svgCompassGyro: any;
      svgCompassRotationMarker: any;
      showCompass: any;
      heading: any;
      isOrbiting: any;
      orbitCursorAngle: any;
      orbitCursorOpacity: any;
      orbitLastTimestamp: any;
      orbitFrame: any;
      orbitIsLook: any;
      orbitMouseMoveFunction: any;
      orbitMouseUpFunction: any;
      rotateMouseUpFunction: any;
      rotateMouseMoveFunction: any;
      isRotating: any;
      rotateInitialCursorAngle: any;
      rotateFrame: any;
      rotateIsLook: any;
      _unsubcribeFromPostRender: any;
      constructor(options: any);
      setNavigationLocked(locked: any): void;
      destroy(): void;
      show(container: any): void;
      /**
       * Adds a control to this toolbar.
       * @param {NavControl} control The control to add.
       */
      add(control: any): void;
      /**
       * Removes a control from this toolbar.
       * @param {NavControl} control The control to remove.
       */
      remove(control: any): void;
      /**
       * Checks if the control given is the last control in the control array.
       * @param {NavControl} control The control to remove.
       */
      isLastControl(control: any): boolean;
      handleMouseDown(viewModel: any, e: any): true | undefined;
      handleDoubleClick(viewModel: any, e: any): true | undefined;
      static create(options: any): NavigationViewModel;
      orbit(viewModel: any, compassElement: any, cursorVector: any): true | undefined;
      rotate(viewModel: any, compassElement: any, cursorVector: any): true | undefined;
  }
  export default NavigationViewModel;
  //# sourceMappingURL=NavigationViewModel.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/viewModels/NavigationViewModel.d.ts' {
  {"version":3,"file":"NavigationViewModel.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/viewModels/NavigationViewModel.ts"],"names":[],"mappings":"AA4BA,cAAM,mBAAmB;IACvB,MAAM,EAAE,GAAG,CAAC;IACZ,WAAW,EAAE,GAAG,CAAC;IACjB,kBAAkB,EAAE,GAAG,CAAC;IACxB,aAAa,EAAE,GAAG,CAAC;IACnB,gBAAgB,EAAE,GAAG,CAAC;IACtB,QAAQ,EAAE,GAAG,CAAC;IACd,mBAAmB,EAAE,GAAG,CAAC;IACzB,cAAc,EAAE,GAAG,CAAC;IACpB,wBAAwB,EAAE,GAAG,CAAC;IAC9B,WAAW,EAAE,GAAG,CAAC;IACjB,OAAO,EAAE,GAAG,CAAC;IACb,UAAU,EAAE,GAAG,CAAC;IAChB,gBAAgB,EAAE,GAAG,CAAC;IACtB,kBAAkB,EAAE,GAAG,CAAC;IACxB,kBAAkB,EAAE,GAAG,CAAC;IACxB,UAAU,EAAE,GAAG,CAAC;IAChB,WAAW,EAAE,GAAG,CAAC;IACjB,sBAAsB,EAAE,GAAG,CAAC;IAC5B,oBAAoB,EAAE,GAAG,CAAC;IAC1B,qBAAqB,EAAE,GAAG,CAAC;IAC3B,uBAAuB,EAAE,GAAG,CAAC;IAC7B,UAAU,EAAE,GAAG,CAAC;IAChB,wBAAwB,EAAE,GAAG,CAAC;IAC9B,WAAW,EAAE,GAAG,CAAC;IACjB,YAAY,EAAE,GAAG,CAAC;IAClB,yBAAyB,EAAE,GAAG,CAAC;gBAEnB,OAAO,EAAE,GAAG;IA2ExB,mBAAmB,CAAC,MAAM,EAAE,GAAG;IAO/B,OAAO;IAKP,IAAI,CAAC,SAAS,EAAE,GAAG;IAwFnB;;;OAGG;IACH,GAAG,CAAC,OAAO,EAAE,GAAG;IAIhB;;;OAGG;IACH,MAAM,CAAC,OAAO,EAAE,GAAG;IAInB;;;OAGG;IACH,aAAa,CAAC,OAAO,EAAE,GAAG;IAI1B,eAAe,CAAC,SAAS,EAAE,GAAG,EAAE,CAAC,EAAE,GAAG;IAiCtC,iBAAiB,CAAC,SAAS,EAAE,GAAG,EAAE,CAAC,EAAE,GAAG;IA0DxC,MAAM,CAAC,MAAM,CAAC,OAAO,EAAE,GAAG;IAQ1B,KAAK,CAAC,SAAS,EAAE,GAAG,EAAE,cAAc,EAAE,GAAG,EAAE,YAAY,EAAE,GAAG;IAgK5D,MAAM,CAAC,SAAS,EAAE,GAAG,EAAE,cAAc,EAAE,GAAG,EAAE,YAAY,EAAE,GAAG;CA+F9D;AAmjBD,eAAe,mBAAmB,CAAC"}
}
declare module 'yam-cesium/plugins/navigation/viewModels/ResetViewNavigationControl' {
  import NavigationControl from "yam-cesium/plugins/navigation/viewModels/NavigationControl";
  /**
   * The model for a zoom in control in the navigation control tool bar
   *
   * @alias ResetViewNavigationControl
   * @constructor
   * @abstract
   *
   * @param {Terria} terria The Terria instance.
   */
  class ResetViewNavigationControl extends NavigationControl {
      name: string;
      tooltip: string;
      navigationLocked: boolean;
      svgIcon: any;
      svgHeight: number | undefined;
      svgWidth: number | undefined;
      cssClass: string | undefined;
      isActive: boolean;
      constructor(terria: any);
      setNavigationLocked(locked: any): void;
      resetView(): void;
      /**
       * When implemented in a derived class, performs an action when the user clicks
       * on this control
       * @abstract
       * @protected
       */
      activate(): void;
  }
  export default ResetViewNavigationControl;
  //# sourceMappingURL=ResetViewNavigationControl.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/viewModels/ResetViewNavigationControl.d.ts' {
  {"version":3,"file":"ResetViewNavigationControl.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/viewModels/ResetViewNavigationControl.ts"],"names":[],"mappings":"AAEA,OAAO,iBAAiB,MAAM,qBAAqB,CAAC;AAOpD;;;;;;;;GAQG;AACH,cAAM,0BAA2B,SAAQ,iBAAiB;IAExD,IAAI,EAAE,MAAM,CAAC;IACb,OAAO,EAAE,MAAM,CAAC;IAChB,gBAAgB,EAAE,OAAO,CAAC;IAC1B,OAAO,EAAE,GAAG,CAAC;IACb,SAAS,EAAE,MAAM,GAAG,SAAS,CAAC;IAC9B,QAAQ,EAAE,MAAM,GAAG,SAAS,CAAC;IAC7B,QAAQ,EAAE,MAAM,GAAG,SAAS,CAAC;IAC7B,QAAQ,EAAE,OAAO,CAAS;gBAEd,MAAM,EAAE,GAAG;IAiCvB,mBAAmB,CAAC,MAAM,EAAE,GAAG;IAI/B,SAAS;IAkDT;;;;;OAKG;IACH,QAAQ;CAGT;AAMD,eAAe,0BAA0B,CAAC"}
}
declare module 'yam-cesium/plugins/navigation/viewModels/UserInterfaceControl' {
  /**
   * The view-model for a control in the user interface
   *
   * @alias UserInterfaceControl
   * @constructor
   * @abstract
   *
   * @param {Terria} terria The Terria instance.
   */
  class UserInterfaceControl {
      _terria: any;
      name: string;
      text: string | undefined;
      svgIcon: any;
      svgHeight: number | undefined;
      svgWidth: number | undefined;
      cssClass: string | undefined;
      isActive: boolean;
      get terria(): any;
      get hasText(): any;
      constructor(terria: any);
      /**
       * When implemented in a derived class, performs an action when the user clicks
       * on this control.
       * @abstract
       * @protected
       */
      activate(): void;
  }
  export default UserInterfaceControl;
  //# sourceMappingURL=UserInterfaceControl.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/viewModels/UserInterfaceControl.d.ts' {
  {"version":3,"file":"UserInterfaceControl.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/viewModels/UserInterfaceControl.ts"],"names":[],"mappings":"AAQA;;;;;;;;GAQG;AACH,cAAM,oBAAoB;IACxB,OAAO,EAAE,GAAG,CAAC;IACb,IAAI,EAAE,MAAM,CAAC;IACb,IAAI,EAAE,MAAM,GAAG,SAAS,CAAC;IACzB,OAAO,EAAE,GAAG,CAAC;IACb,SAAS,EAAE,MAAM,GAAG,SAAS,CAAC;IAC9B,QAAQ,EAAE,MAAM,GAAG,SAAS,CAAC;IAC7B,QAAQ,EAAE,MAAM,GAAG,SAAS,CAAC;IAC7B,QAAQ,EAAE,OAAO,CAAS;IAE1B,IAAI,MAAM,IAAI,GAAG,CAEhB;IAED,IAAI,OAAO,IAAI,GAAG,CAEjB;gBAEW,MAAM,EAAE,GAAG;IA8EvB;;;;;OAKG;IACH,QAAQ;CAGT;AAED,eAAe,oBAAoB,CAAC"}
}
declare module 'yam-cesium/plugins/navigation/viewModels/ZoomNavigationControl' {
  import NavigationControl from "yam-cesium/plugins/navigation/viewModels/NavigationControl";
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
  class ZoomNavigationControl extends NavigationControl {
      zoomIn: string;
      /**
       * Gets or sets the name of the control which is set as the control's title.
       * This property is observable.
       * @type {String}
       */
      name: string;
      /**
       * Gets or sets the text to be displayed in the nav control. Controls that
       * have text do not display the svgIcon.
       * This property is observable.
       * @type {String}
       */
      text: string;
      tooltip: string;
      /**
       * Gets or sets the CSS class of the control. This property is observable.
       * @type {String}
       */
      cssClass: string;
      relativeAmount: number;
      constructor(terria: any, zoomIn: any);
      /**
       * When implemented in a derived class, performs an action when the user clicks
       * on this control
       * @abstract
       * @protected
       */
      activate(): void;
      zoom(relativeAmount: number): void;
  }
  export default ZoomNavigationControl;
  //# sourceMappingURL=ZoomNavigationControl.d.ts.map
}
declare module 'yam-cesium/plugins/navigation/viewModels/ZoomNavigationControl.d.ts' {
  {"version":3,"file":"ZoomNavigationControl.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/navigation/viewModels/ZoomNavigationControl.ts"],"names":[],"mappings":"AACA,OAAO,iBAAiB,MAAM,qBAAqB,CAAC;AAUpD;;;;;;;;;GASG;AACH,cAAM,qBAAsB,SAAQ,iBAAiB;IAEnD,MAAM,EAAE,MAAM,CAAC;IACf;;;;OAIG;IACH,IAAI,EAAE,MAAM,CAAC;IACb;;;;;OAKG;IACH,IAAI,EAAE,MAAM,CAAC;IACb,OAAO,EAAE,MAAM,CAAC;IAChB;;;OAGG;IACH,QAAQ,EAAE,MAAM,CAAC;IACjB,cAAc,EAAE,MAAM,CAAK;gBAEf,MAAM,EAAE,GAAG,EAAE,MAAM,EAAE,GAAG;IAepC;;;;;OAKG;IACH,QAAQ;IAIR,IAAI,CAAC,cAAc,EAAE,MAAM;CA4E5B;AAED,eAAe,qBAAqB,CAAC"}
}
declare module 'yam-cesium/plugins/tool/MeasureTools' {
  //# sourceMappingURL=MeasureTools.d.ts.map
}
declare module 'yam-cesium/plugins/tool/MeasureTools.d.ts' {
  {"version":3,"file":"MeasureTools.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/plugins/tool/MeasureTools.ts"],"names":[],"mappings":""}
}
declare module 'yam-cesium/scene/camera/Camera' {
  import * as Cesium from "cesium";
  import Immersion from "yam-cesium/scene/camera/Immersion";
  import HawkEyeMap from "yam-cesium/scene/camera/hawkEyeMap/HawkEyeMap";
  export default class Camera {
      viewer: Cesium.Viewer;
      /**
       * 第一人称视角
       */
      immersion: Immersion | null;
      /**
       * 鹰眼图
       * @param viewer
       */
      hawkEye: HawkEyeMap | null;
      /**
       * 绕点旋转事件
       * @private
       */
      private aroundClockEvent;
      constructor(viewer: any);
      /**
       * 绕点旋转
       * @param position 绕点旋转的点
       * @param radius 旋转半径
       * @param duration 旋转时间
       * @param angle 旋转角度（速度）
       */
      flyAround(position: Cesium.Cartesian3, radius?: number, duration?: number, angle?: number): any;
      /**
       * 停止绕点旋转
       */
      stopAround(): void;
      look(lon: number, lat: number, offset: number): void;
      /**
       * 相机原地旋转
       */
      _cameraRotate(): void;
      private _rotateHeading;
  }
  //# sourceMappingURL=Camera.d.ts.map
}
declare module 'yam-cesium/scene/camera/Camera.d.ts' {
  {"version":3,"file":"Camera.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/scene/camera/Camera.ts"],"names":[],"mappings":"AAAA,OAAO,KAAK,MAAM,MAAM,QAAQ,CAAC;AACjC,OAAO,SAAS,MAAM,aAAa,CAAC;AACpC,OAAO,UAAU,MAAM,yBAAyB,CAAC;AAGjD,MAAM,CAAC,OAAO,OAAO,MAAM;IACzB,MAAM,EAAE,MAAM,CAAC,MAAM,CAAC;IACtB;;OAEG;IACH,SAAS,EAAE,SAAS,GAAG,IAAI,CAAQ;IAEnC;;;OAGG;IACH,OAAO,EAAE,UAAU,GAAG,IAAI,CAAQ;IAElC;;;OAGG;IACH,OAAO,CAAC,gBAAgB,CAAa;gBAEzB,MAAM,EAAE,GAAG;IAUvB;;;;;;OAMG;IACH,SAAS,CAAC,QAAQ,EAAE,MAAM,CAAC,UAAU,EAAE,MAAM,GAAE,MAAa,EAAE,QAAQ,GAAE,MAAU,EAAE,KAAK,GAAE,MAAc;IAyBzG;;OAEG;IACH,UAAU;IAMV,IAAI,CAAC,GAAG,EAAE,MAAM,EAAE,GAAG,EAAE,MAAM,EAAE,MAAM,EAAE,MAAM;IAc7C;;OAEG;IACH,aAAa;IAoBb,OAAO,CAAC,cAAc;CAqBvB"}
}
declare module 'yam-cesium/scene/camera/hawkEyeMap/HawkEyeMap' {
  import "./hawkEyeMap.css";
  export default class HawkEyeMap {
      viewer: any;
      hawkEyeMap: any;
      viewModel: {
          enabled: boolean;
      };
      eye: HTMLDivElement | undefined;
      constructor(viewer: any);
      init(): void;
      bindEvent(): void;
      destroy(): void;
      syncMap(): void;
      /**
       * 属性绑定
       */
      bindModel(): void;
  }
  //# sourceMappingURL=HawkEyeMap.d.ts.map
}
declare module 'yam-cesium/scene/camera/hawkEyeMap/HawkEyeMap.d.ts' {
  {"version":3,"file":"HawkEyeMap.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/scene/camera/hawkEyeMap/HawkEyeMap.ts"],"names":[],"mappings":"AACA,OAAO,kBAAkB,CAAC;AAK1B,MAAM,CAAC,OAAO,OAAO,UAAU;IAC7B,MAAM,EAAE,GAAG,CAAC;IACZ,UAAU,EAAE,GAAG,CAAC;IAChB,SAAS;;MAEP;IACF,GAAG,EAAE,cAAc,GAAG,SAAS,CAAC;gBAEpB,MAAM,EAAE,GAAG;IAQvB,IAAI;IAmCJ,SAAS;IAOT,OAAO;IAaP,OAAO;IAaP;;OAEG;IACH,SAAS;CAWV"}
}
declare module 'yam-cesium/scene/camera/Immersion' {
  export default class Immersion {
      /**
       * viewer
       * @type {null}
       */
      viewer: any;
      scene: any;
      canvas: HTMLCanvasElement;
      viewModel: {
          enabled: boolean;
          firstPersonPerspective: boolean;
      };
      handler: any;
      clockEvent: Function | undefined;
      constructor(viewer: any);
      disEnable(): void;
      enable(): void;
      /**
       * 属性绑定
       */
      bindModel(): void;
  }
  //# sourceMappingURL=Immersion.d.ts.map
}
declare module 'yam-cesium/scene/camera/Immersion.d.ts' {
  {"version":3,"file":"Immersion.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/scene/camera/Immersion.ts"],"names":[],"mappings":"AAKA,MAAM,CAAC,OAAO,OAAO,SAAS;IAE5B;;;OAGG;IACH,MAAM,EAAE,GAAG,CAAQ;IACnB,KAAK,EAAE,GAAG,CAAQ;IAClB,MAAM,EAAE,iBAAiB,CAAC;IAC1B,SAAS;;;MAGP;IACF,OAAO,EAAE,GAAG,CAAC;IACb,UAAU,EAAE,QAAQ,GAAG,SAAS,CAAC;gBAErB,MAAM,EAAE,GAAG;IAavB,SAAS;IAgBT,MAAM;IA4HN;;OAEG;IACH,SAAS;CAmCV"}
}
declare module 'yam-cesium/scene/shortcut/Canvas2Image' {
  /**
   * covert canvas to image
   * and save the image file
   */
  export const Canvas2Image: {
      saveAsImage: (canvas: HTMLCanvasElement | string, width: number, height: number, type: string, fileName: string) => void;
      saveAsPNG: (canvas: HTMLCanvasElement, width: number, height: number, fileName: string) => void;
      saveAsJPEG: (canvas: HTMLCanvasElement, width: number, height: number, fileName: string) => void;
      saveAsGIF: (canvas: HTMLCanvasElement, width: number, height: number, fileName: string) => void;
      saveAsBMP: (canvas: HTMLCanvasElement, width: number, height: number, fileName: string) => void;
      convertToImage: (canvas: HTMLCanvasElement | string, width: number, height: number, type: string) => HTMLImageElement | undefined;
      convertToPNG: (canvas: HTMLCanvasElement, width: number, height: number) => HTMLImageElement | undefined;
      convertToJPEG: (canvas: HTMLCanvasElement, width: number, height: number) => HTMLImageElement | undefined;
      convertToGIF: (canvas: HTMLCanvasElement, width: number, height: number) => HTMLImageElement | undefined;
      convertToBMP: (canvas: HTMLCanvasElement, width: number, height: number) => HTMLImageElement | undefined;
  };
  //# sourceMappingURL=Canvas2Image.d.ts.map
}
declare module 'yam-cesium/scene/shortcut/Canvas2Image.d.ts' {
  {"version":3,"file":"Canvas2Image.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/scene/shortcut/Canvas2Image.ts"],"names":[],"mappings":"AAAA;;;GAGG;AACH,eAAO,MAAM,YAAY;0BA0Pc,iBAAiB,GAAG,MAAM,SAAS,MAAM,UAAU,MAAM,QAAQ,MAAM,YAAY,MAAM;wBA+ChG,iBAAiB,SAAS,MAAM,UAAU,MAAM,YAAY,MAAM;yBAGjE,iBAAiB,SAAS,MAAM,UAAU,MAAM,YAAY,MAAM;wBAGnE,iBAAiB,SAAS,MAAM,UAAU,MAAM,YAAY,MAAM;wBAGlE,iBAAiB,SAAS,MAAM,UAAU,MAAM,YAAY,MAAM;6BAhCxD,iBAAiB,GAAG,MAAM,SAAS,MAAM,UAAU,MAAM,QAAQ,MAAM;2BAqC9E,iBAAiB,SAAS,MAAM,UAAU,MAAM;4BAG/C,iBAAiB,SAAS,MAAM,UAAU,MAAM;2BAGjD,iBAAiB,SAAS,MAAM,UAAU,MAAM;2BAGhD,iBAAiB,SAAS,MAAM,UAAU,MAAM;CAI/E,CAAC"}
}
declare module 'yam-cesium/transform/CoordTransform' {
  /**
   * @Author: Caven
   * @Date: 2021-01-31 20:40:25
   */
  class CoordTransform {
      /**
       * BD-09 To GCJ-02
       * @param lng
       * @param lat
       * @returns {number[]}
       */
      static BD09ToGCJ02(lng: number, lat: number): number[];
      /**
       * GCJ-02 To BD-09
       * @param lng
       * @param lat
       * @returns {number[]}
       * @constructor
       */
      static GCJ02ToBD09(lng: number, lat: number): number[];
      /**
       * WGS-84 To GCJ-02
       * @param lng
       * @param lat
       * @returns {number[]}
       */
      static WGS84ToGCJ02(lng: number, lat: number): number[];
      /**
       * GCJ-02 To WGS-84
       * @param lng
       * @param lat
       * @returns {number[]}
       * @constructor
       */
      static GCJ02ToWGS84(lng: number, lat: number): number[];
      /**
       *
       * @param lng
       * @param lat
       * @returns {number[]}
       */
      static delta(lng: number, lat: number): number[];
      /**
       *
       * @param lng
       * @param lat
       * @returns {number}
       */
      static transformLng(lng: number, lat: number): number;
      /**
       *
       * @param lng
       * @param lat
       * @returns {number}
       */
      static transformLat(lng: number, lat: number): number;
      /**
       *
       * @param lng
       * @param lat
       * @returns {boolean}
       */
      static out_of_china(lng: number, lat: number): boolean;
  }
  export default CoordTransform;
  //# sourceMappingURL=CoordTransform.d.ts.map
}
declare module 'yam-cesium/transform/CoordTransform.d.ts' {
  {"version":3,"file":"CoordTransform.d.ts","sourceRoot":"","sources":["file:///D:/fupeijun/WebstormProjects/yamCesium/src/transform/CoordTransform.ts"],"names":[],"mappings":"AAAA;;;GAGG;AAOH,cAAM,cAAc;IAClB;;;;;OAKG;IACH,MAAM,CAAC,WAAW,CAAC,GAAG,EAAE,MAAM,EAAE,GAAG,EAAE,MAAM;IAU3C;;;;;;OAMG;IACH,MAAM,CAAC,WAAW,CAAC,GAAG,EAAE,MAAM,EAAE,GAAG,EAAE,MAAM;IAW3C;;;;;OAKG;IACH,MAAM,CAAC,YAAY,CAAC,GAAG,EAAE,MAAM,EAAE,GAAG,EAAE,MAAM;IAW5C;;;;;;OAMG;IACH,MAAM,CAAC,YAAY,CAAC,GAAG,EAAE,MAAM,EAAE,GAAG,EAAE,MAAM;IAa5C;;;;;OAKG;IACH,MAAM,CAAC,KAAK,CAAC,GAAG,EAAE,MAAM,EAAE,GAAG,EAAE,MAAM;IAYrC;;;;;OAKG;IACH,MAAM,CAAC,YAAY,CAAC,GAAG,EAAE,MAAM,EAAE,GAAG,EAAE,MAAM;IAyB5C;;;;;OAKG;IACH,MAAM,CAAC,YAAY,CAAC,GAAG,EAAE,MAAM,EAAE,GAAG,EAAE,MAAM;IAyB5C;;;;;OAKG;IACH,MAAM,CAAC,YAAY,CAAC,GAAG,EAAE,MAAM,EAAE,GAAG,EAAE,MAAM;CAK7C;AAED,eAAe,cAAc,CAAA"}
}
declare module 'yam-cesium' {
  import main = require('yam-cesium/index');
  export = main;
}