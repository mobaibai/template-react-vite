import { MockMethod } from "vite-plugin-mock"
import { faker } from "@faker-js/faker/locale/zh_CN"
import { createResponseList } from "../create"

/**
 * @description: 测试列表
 * @return {type}
 */
export const mockTestItems: MockMethod = {
  url: "/api/test/list",
  method: "get",
  statusCode: 200,
  response: ({ query }: RequestQueryType): DataType<ResponseDataListType> =>
    createResponseList(
      { total_page: 30, per: parseInt(query.per) || 10, page: parseInt(query.page) || 1, type: query.type, search: query.search },
      { name: faker.name.jobTitle }
    ),
}
