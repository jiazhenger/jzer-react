/**
 * 设置背景颜色
 * @param {String} bgcolor # 可以是 calssName, 或是具体颜色值
 */
const Index = bgcolor => /^#/.test(bgcolor) || /^rgb/.test(bgcolor)

export default Index