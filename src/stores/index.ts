import { APP_NAME } from "@/config/base"
import { create } from "zustand"

interface Loading {
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
  },
}))

interface LoginOpen {
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
  },
}))

interface UserData {
  uid: number | string
  localstore: string
  nickname: string
  realname: string
  avatar: string
  phone: string
  token: string
}
interface Login {
  userData: UserData
  setUserData: (userData: UserData) => void
  removeUserData: () => void
}
/**
 * @description: 登录数据处理
 * @param {type} create
 * @return {type}
 */
export const useLoginStore = create<Login>(set => ({
  userData: { uid: "", localstore: "", nickname: "", realname: "", avatar: "", phone: "", token: "" },
  setUserData: (userData: UserData) => {
    set({ userData })
    window.localStorage.setItem(`${APP_NAME}_UserData`, JSON.stringify(userData))
  },
  removeUserData: () => {
    set({ userData: { uid: "", localstore: "", nickname: "", realname: "", avatar: "", phone: "", token: "" } })
    window.localStorage.removeItem(`${APP_NAME}_UserData`)
  },
}))
