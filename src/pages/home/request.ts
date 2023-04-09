import { BaseConfig } from '@/config/base'

interface getHomeDataParamsType {}
export const apiGetHomeData = (params: getHomeDataParamsType = {}) => {
  console.log('BaseConfig', BaseConfig)
}
