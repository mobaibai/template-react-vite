const protocol = window.location.protocol.includes('https:') ? 'https' : 'http'
const host = 'xxx.com'
/**
 * @description: 可更改Host，方便更换服务器
 * @return {type}
 */
const ORIGIN = `${protocol}://${host}`
export default ORIGIN