declare global {
  interface Document {
    startViewTransition?: (callback?: () => void) => ViewTransition
  }

  interface ViewTransition {
    finished: Promise<void>
    ready: Promise<void>
    updateCallbackDone: Promise<void>
    skipTransition(): void
  }

  type JSONValue =
    | string
    | number
    | boolean
    | null
    | { [k: string]: JSONValue }
    | JSONValue[]

  interface RequestQueryType {
    query: Record<string, string>
  }

  interface ItemType {
    id?: string | number
  }

  interface ResponseDataListType {
    list: ItemType[]
    query: E
    pages: {
      page: number
      per: number
      total_page: number
    }
  }

  interface DataType<R> {
    code: number
    data: E
  }
}

export {}
