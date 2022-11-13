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
