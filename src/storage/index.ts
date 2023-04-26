import CryptoJS from "crypto-js"
import { BaseConfig } from "@/config/base"

// 十六位十六进制数作为密钥
const SECRET_KEY = CryptoJS.enc.Utf8.parse("3333e6e143439161")
// 十六位十六进制数作为密钥偏移量
const SECRET_IV = CryptoJS.enc.Utf8.parse("e3bbe7e3ba84431a")

// 类型 window.localStorage, window.sessionStorage,
interface ConfigType {
  type: string
  prefix: string | undefined
  expire: number
  isEncrypt: boolean
}
const config: ConfigType = {
  type: "localStorage", // 本地默认存储类型 localStorage
  prefix: BaseConfig.APP_NAME, // 名称前缀: 项目名 + 版本
  expire: 0, // 过期时间 单位：秒
  isEncrypt: isDev ? false : true, // 默认加密 可设置开发环境与生产环境
}

/**
 * @description: 判断是否支持 Storage
 * @return {type}
 */
export const isSupportStorage = () => {
  return typeof Storage !== "undefined" ? true : false
}

/**
 * @description: 设置 setStorage
 * @param {string} key
 * @param {T} value
 * @param {type} expire
 * @return {type}
 */
export const setStorage = <T>(key: string, value: T | null, expire = 0) => {
  if (value === "" || value === null || value === undefined) {
    value = null
  }

  if (isNaN(expire) || expire < 0) throw new Error("Expire must be a number")

  expire = expire ? expire : config.expire
  const data = {
    value: value, // 存储值
    time: Date.now() / 1000, // 存值时间戳
    expire: expire, // 过期时间
  }

  const encryptString = config.isEncrypt ? encrypt(JSON.stringify(data)) : JSON.stringify(data)

  window.localStorage.setItem(autoAddPrefix(key), encryptString)
}

/**
 * @description: 获取 getStorage
 * @param {string} key
 * @return {type}
 */
export const getStorage = (key: string) => {
  key = autoAddPrefix(key)
  // key 不存在判断
  if (!window.localStorage.getItem(key) || JSON.stringify(window.localStorage.getItem(key)) === "null") {
    return null
  }

  // 优化 持续使用中续期
  const item = window.localStorage.getItem(key)
  const storage: Storage = config.isEncrypt ? JSON.parse(decrypt(item ?? "")) : JSON.parse(item ?? "")

  const nowTime = Date.now() / 1000

  // 过期删除
  if (storage.expire && storage.expire < nowTime) {
    removeStorage(key)
    return null
  } else {
    // 未过期期间被调用 则自动续期 进行保活
    setStorage(autoRemovePrefix(key), storage.value, storage.expire)
    return storage.value
  }
}

/**
 * @description: 是否存在 hasStorage
 * @param {string} key
 * @return {type}
 */
export const hasStorage = (key: string) => {
  key = autoAddPrefix(key)
  const arr = getStorageAll().filter(item => {
    return item.key === key
  })
  return arr.length ? true : false
}

/**
 * @description: 获取所有key
 * @return {type}
 */
export const getStorageKeys = () => {
  const items = getStorageAll()
  const keys = []
  for (let index = 0; index < items.length; index++) {
    keys.push(items[index].key)
  }
  return keys
}

/**
 * @description: 根据索引获取key
 * @param {number} index
 * @return {type}
 */
export const getStorageForIndex = (index: number) => {
  return window.localStorage.key(index)
}

/**
 * @description: 获取localStorage长度
 * @return {type}
 */
export const getStorageLength = () => {
  return window.localStorage.length
}

/**
 * @description: 获取全部 getAllStorage
 * @return {type}
 */
export const getStorageAll = () => {
  const len = window.localStorage.length // 获取长度
  const arr = new Array() // 定义数据集
  for (let i = 0; i < len; i++) {
    // 获取key 索引从0开始
    const getKey = window.localStorage.key(i)
    // 获取key对应的值
    const getVal = getKey === null ? "" : window.localStorage.getItem(getKey)
    // 放进数组
    arr[i] = { key: getKey, val: getVal }
  }
  return arr
}

/**
 * @description: 删除 removeStorage
 * @param {string} key
 * @return {type}
 */
export const removeStorage = (key: string) => {
  window.localStorage.removeItem(autoAddPrefix(key))
}

/**
 * @description: 清空 clearStorage
 * @return {type}
 */
export const clearStorage = () => {
  window.localStorage.clear()
}

/**
 * @description: 名称前自动添加前缀
 * @param {string} key
 * @return {type}
 */
const autoAddPrefix = (key: string) => {
  const prefix = config.prefix ? config.prefix + "_" : ""
  return prefix + key
}

/**
 * @description: 移除已添加的前缀
 * @param {string} key
 * @return {type}
 */
const autoRemovePrefix = (key: string) => {
  const len: number = config.prefix ? config.prefix.length + 1 : 0
  // return key.substr(len) 已弃用
  return key.substring(len)
}

/**
 * @description: 加密
 * @param {string} data
 * @return {*}
 */
const encrypt = (data: string) => {
  if (typeof data === "object") {
    try {
      data = JSON.stringify(data)
    } catch (error) {
      console.log("encrypt error:", error)
    }
  }
  const dataHex = CryptoJS.enc.Utf8.parse(data)
  const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encrypted.ciphertext.toString()
}

/**
 * @description: 解密
 * @param {string} data
 * @return {*}
 */
const decrypt = (data: string) => {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(data)
  const str = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(str, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}
