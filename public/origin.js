const dev = window.location.host
const prod = 'xxx.com'
const protocol = window.location.protocol
/**
 * @description: 可更改Host，方便更换服务器
 * @return {type}
 */
const ORIGIN = {
  dev: `${protocol}//${dev}`,
  prod: `${protocol}//${prod}`
}
export default ORIGIN
