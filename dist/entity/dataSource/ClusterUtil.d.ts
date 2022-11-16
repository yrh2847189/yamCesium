import * as Cesium from "cesium";
declare class ClusterUtil {
    _viewer: Cesium.Viewer;
    _myPrimitives: Cesium.PrimitiveCollection;
    _myPrimitiveCluster: Cesium.PrimitiveCluster;
    _myBillboardCollection: Cesium.BillboardCollection;
    /**
     * @constant
     * @desc Cesium.Viewer
     */
    get viewer(): Cesium.Viewer;
    /**
     * @constant Cesium.PrimitiveCollection
     * @desc 原语集合，可以包含页面显示的pointPrimitiveCollection、billboardCollection、labelCollection、primitiveCollection、primitiveCluster
     */
    get myPrimitives(): Cesium.PrimitiveCollection;
    /**
     * @constant
     * @desc 自定义原语集群
     */
    get myPrimitiveCluster(): Cesium.PrimitiveCluster;
    /**
     * @constant
     * @desc 广告牌集合(站点显示的内容数据)
     */
    get myBillboardCollection(): Cesium.BillboardCollection;
    /**
     * 聚合
     * @param {Cesium.Viewer} viewer
     */
    constructor(viewer: Cesium.Viewer);
    /**
     * @param {Object} options 具有以下属性的对象
     * @param {Number} options.delay=800 防抖处理定时器的time
     * @param {Boolean} options.enabled=true 是否启用集群
     * @param {Number} options.pixelRange=15 用于扩展屏幕空间包围框的像素范围
     * @param {Number} options.minimumClusterSize=2 可集群的屏幕空间对象的最小数量
     * @param {Function} options.customStyle 自定义样式
     * @desc 处理原语集合，并实现聚合集群功能方法
     */
    load(options?: any): {
        billboard: Cesium.BillboardCollection;
        primitive: Cesium.PrimitiveCollection;
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
    getSiteBillboardById(id: any): Cesium.Billboard | undefined;
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
     * @desc 销毁
     */
    destroy(): void;
}
export default ClusterUtil;
