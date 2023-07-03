import { BaseConfig } from '@/config/base'

interface getHomeDataParamsType {}
export function apiGetHomeData(params: getHomeDataParamsType = {}) {
  console.log('BaseConfig', BaseConfig)
}
