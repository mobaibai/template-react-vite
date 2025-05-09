import { useEffect, useRef, useState } from 'react'

// 默认适配宽高
export const width = 1920
export const height = 1080

type ResizeType = {
  w?: number
  h?: number
  fullScreen?: boolean
  delay?: number
}
export const useResize = (options: ResizeType = {}) => {
  const { w = width, h = height, fullScreen = false, delay = 100 } = options
  // 缩放元素
  const screenRef = useRef<HTMLElement | undefined | any>(undefined)
  const [scale, setScale] = useState<number>(1)

  const resize = () => {
    // 浏览器宽高
    const clientWidth = document.body.clientWidth
    const clientHeight = document.body.clientHeight

    // 计算宽高缩放比例
    const scaleW = clientWidth / w
    const scaleH = clientHeight / h

    if (clientWidth / clientHeight <= w / h) {
      // 如果浏览器的宽高比小于设计稿的宽高比，就取浏览器宽度和设计稿宽度之比
      setScale(scaleW)
    } else {
      // 如果浏览器的宽高比大于设计稿的宽高比，就取浏览器高度和设计稿高度之比
      setScale(scaleH)
    }

    if (screenRef.current) {
      if (fullScreen) {
        // 如果不在乎缩放失真的情况，可以设置全屏
        screenRef.current.style.transform = `scale(${scaleW}, ${scaleH})`
      } else {
        // 否则选择适配比例缩放
        screenRef.current.style.transform = `scale(${clientWidth / clientHeight <= w / h ? scaleW : scaleH})`
      }
    }
  }

  const resizeDelay = useRef(debounce(resize, delay))

  useEffect(() => {
    resize()
    window.addEventListener('resize', resizeDelay.current)

    return () => {
      window.removeEventListener('resize', resizeDelay.current)
    }
  }, [])

  return {
    scale,
    screenRef
  }
}

/*
用来返回防抖函数的工具函数
*/
function debounce(callback: Function, delay: number) {
  let timerId: NodeJS.Timeout | null
  return function (event: Event) {
    // 如果上次事件还没有真正处理, 清除
    if (timerId) {
      clearTimeout(timerId)
    }

    // 发事件发生指定事件后才调用处理事件的回调函数
    // 启动定时器, 只是准备真正处理
    timerId = setTimeout(() => {
      // 正在处理事件
      callback.call(null, event)
      // 删除准备处理的标记
      timerId = null
    }, delay)
  }
}
