let id = 0
/**
 * @description: 创建Id
 * @return {type}
 */
export const createId = () => {
  id += 1
  return id
}

/**
 * @description: 创建Item
 * @param {Partial} attrs
 * @return {type}
 */
export const createItem = (attrs?: Partial<ItemType>): ItemType => {
  return {
    id: createId().toString(),
    ...attrs,
  }
}

/**
 * @description: 创建List
 * @param {number} num
 * @param {Partial} attrs
 * @return {type}
 */
export const createList = (num: number, attrs?: Partial<any[] | ItemType>): ItemType[] => {
  if (attrs instanceof Array) return attrs
  else return Array.from({ length: num }).map(() => createItem(attrs))
}

/**
 * @description: 创建回包Obj
 * @param {Partial} attrs
 * @param {array} rest
 * @return {type}
 */
export const createResponseObj = ({ ...rest }, attrs: Partial<ItemType>) => {
  return {
    code: 200,
    data: {
      data: createItem(attrs),
      query: { ...rest },
    },
  }
}

/**
 * @description: 创建回包列表
 * @param {type} query {total_page: 总页数, per: 每页条数, page: 当前页}
 * @param {Partial} attrs 回包
 * @return {type}
 */
export const createResponseList = ({ page = 1, per = 10, total_page = 0, ...rest }, attrs?: Partial<any>): DataType<ResponseDataListType> => {
  const sendTotalPage = (page - 1) * per
  const left = total_page - sendTotalPage

  return {
    code: 200,
    data: {
      list: left > 0 ? createList(Math.min(left, per), attrs) : [],
      query: { ...rest },
      pages: {
        page,
        per,
        total_page,
      },
    },
  }
}
