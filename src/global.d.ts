var isDev: boolean

type JSONValue = string | number | boolean | null | { [k: string]: JSONValue } | JSONValue[]

type RequestQueryType = {
  query: Record<string, string>
}

type ItemType = {
  id: string | number
}

type ResponseDataListType = {
  list: ItemType[]
  query: T
  pages: {
    page: number
    per: number
    total_page: number
  }
}

type DataType<ResponseDataListType> = {
  code: number
  data: ResponseDataListType
}
