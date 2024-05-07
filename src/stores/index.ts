import { APP_NAME } from '@/config'
import { getStorage, removeStorage, setStorage } from '@/storage'
import { create } from 'zustand'

type Loading = {
  loadingOpen: boolean
  setLoadingOpen: (loadingOpen: boolean) => void
}
/**
 * @description: 设置Loading
 * @param {type} create
 * @return {type}
 */
export const useLoadingStore = create<Loading>(set => ({
  loadingOpen: false,
  setLoadingOpen: (loadingOpen: boolean) => {
    set({ loadingOpen })
  }
}))

type LoginOpen = {
  loginOpen: boolean
  setLoginOpen: (loginOpen: boolean) => void
}
/**
 * @description: 设置登录弹窗
 * @param {type} create
 * @return {type}
 */
export const useLoginOpenStore = create<LoginOpen>(set => ({
  loginOpen: false,
  setLoginOpen: (loginOpen: boolean) => {
    set({ loginOpen })
  }
}))

type UserData = {
  uid: number | string
  localstore: string
  nickname: string
  realname: string
  avatar: string
  phone: string
  token: string
}
type Login = {
  userData: UserData
  setUserData: (userData: UserData) => void
  removeUserData: () => void
}
/**
 * @description: 登录数据处理
 * @param {type} create
 * @return {type}
 */
export const useLoginStore = create<Login>(set => {
  const initialValue: UserData = {
    uid: '',
    localstore: '',
    nickname: '',
    realname: '',
    avatar: '',
    phone: '',
    token: ''
  }
  return {
    userData: getStorage(`UserData`) || initialValue,
    setUserData: (userData: UserData) => {
      set({ userData })
      // 一小时
      const hoursSecond: number = 3600
      // 一天
      const day1Second: number = hoursSecond * 24
      // 一周
      const week1Second: number = day1Second * 7
      // 当前秒
      const currentSecond: number = Date.now() / 1000
      // 过期时间(秒)
      const expire: number = currentSecond + day1Second
      setStorage(`UserData`, userData, { expire })
    },
    removeUserData: () => {
      set({ userData: initialValue })
      removeStorage(`UserData`)
    }
  }
})