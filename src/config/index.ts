import ORIGIN from '../../public/origin'
/**
 * @description: 项目名
 * @return {type}
 */
export const APP_NAME: string = 'APP_NAME'

/**
 * @description: 主题色
 */
export const ThemePrimary: string = '#13c2c2'

interface BaseConfigType {
  API_BASE_URL: string
  API_RESOURCE_URL: string
}
/**
 * @description: 测试地址
 * @return {type}
 */
const development: BaseConfigType = {
  API_BASE_URL: `${ORIGIN.dev}`, // 基本地址
  API_RESOURCE_URL: `${ORIGIN.dev}` // 资源地址
}
/**
 * @description: 生产地址
 * @return {type}
 */
const production: BaseConfigType = {
  API_BASE_URL: `${ORIGIN.prod}`,
  API_RESOURCE_URL: `${ORIGIN.prod}`
}
/**
 * @description: 请求地址前缀
 * @return {type}
 */
export const BaseConfig: BaseConfigType = __isDev__ ? development : production
