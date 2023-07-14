import useSWR from 'swr'
import { useAjax } from '@/lib/ajax'

interface Props {
  method: "get" | "post"
  path: string
  params: JSONValue
}
export const useData = ({ method, path, params }: Props) => {
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