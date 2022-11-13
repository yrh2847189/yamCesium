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
