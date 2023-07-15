import useSWR from 'swr'
import { useAjax } from '@/lib/ajax'

interface Props {
  method: "get" | "post"
  path: string | undefined
  params: JSONValue
}
/**
 * @description: 设置数据
 * @param {type} method 请求方式
 * @param {type} path 请求地址
 * @param {type} params 请求参数
 * @return {type}
 */
export const useData = ({ method = 'get', path, params = {} }: Props) => {
  const { get, post } = useAjax({ showLoading: true, handleError: true })
  const { data, mutate, isLoading, isValidating, error } = useSWR<DataType<ResponseDataListType | ItemType>>(
    path,
    async (path: string) => {
      const res = method === 'get'
        ?
        await get<DataType<ResponseDataListType | ItemType>>(path, { params })
        :
        await post<DataType<ResponseDataListType | ItemType>>(path, params)

      return res.data
    }
  )

  return {
    data,
    mutate,
    isLoading,
    isValidating,
    error
  }
}