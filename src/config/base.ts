interface BaseConfigType {
  API_BASE_URL: string
  API_RESOURCE_URL: string
}
const development: BaseConfigType = {
  API_BASE_URL: "https://path", // 基本地址
  API_RESOURCE_URL: "https://path", // 资源地址
}
const production: BaseConfigType = {
  API_BASE_URL: "https://path",
  API_RESOURCE_URL: "https://path",
}
export const BaseConfig: BaseConfigType = isDev ? development : production
export const APP_NAME: string = "APP_NAME"
