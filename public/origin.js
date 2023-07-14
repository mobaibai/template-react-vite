const protocol = window.location.protocol.includes('https:') ? 'https' : 'http'
const host = 'xxx.com'
/**
 * @description: 可动态更改Host
 * @return {type}
 */
const ORIGIN = `${protocol}://${host}`
export default ORIGIN