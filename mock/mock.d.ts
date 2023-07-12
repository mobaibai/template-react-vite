type RequestQueryType = {
  query: Record<string, string>
}

type ItemType = {
  id: string | number
}

type ResponseDataType = {
  list: ItemType[]
  params: T
  pages: {
    page: number
    per: number
    total_page: number
  }
}

type DataType<ResponseDataType> = {
  code: number
  data: ResponseDataType
}
