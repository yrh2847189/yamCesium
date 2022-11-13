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