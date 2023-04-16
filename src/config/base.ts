interface BaseConfigType {
  API_BASE_URL: string
  API_RESOURCE_URL: string
  APP_NAME?: string
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
BaseConfig.APP_NAME = "APP_NAME"