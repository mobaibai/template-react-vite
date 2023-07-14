import ORIGIN from "../../public/origin"
/**
 * @description: 项目名
 * @return {type}
 */
export const AppName: string = "APP_NAME"

/**
 * @description: 主题色
 * @return {type}
 */
export const ThemePrimary: string = "#13c2c2"

interface BaseConfigType {
  API_BASE_URL: string
  API_RESOURCE_URL: string
}
const development: BaseConfigType = {
  API_BASE_URL: `/`, // 基本地址
  API_RESOURCE_URL: `/`, // 资源地址
}
const production: BaseConfigType = {
  API_BASE_URL: `${ORIGIN}`,
  API_RESOURCE_URL: `${ORIGIN}`,
}
/**
 * @description: 请求地址前缀
 * @return {type}
 */
export const BaseConfig: BaseConfigType = isDev ? development : production
