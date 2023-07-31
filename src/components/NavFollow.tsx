import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from "react"
import { nanoid } from 'nanoid'
import { Empty } from 'antd'

interface NavFollowProps<T> {
  list: Array<T>
  navItemName: string
  navTextColor?: string
  navTextActiveColor?: string
  followType: 'bg' | 'border'
  followColor?: string
  onClickNavItemHandler: (item: T) => void
}
/**
 * @description: 跟随导航
 * @params props {
    * @param {type} list List数据
    * @param {type} navItemName NavItem字段名
    * @param {type} navTextColor NavItem文字颜色
    * @param {type} navTextActiveColor NavItem文字高亮颜色
    * @param {type} followType 跟随Bar类型
    * @param {type} followColor 跟随Bar颜色
    * @param {type} onClickNavItemHandler NavItem点击事件
 * }
 * @return {type}
 */
export const NavFollow: React.FC<NavFollowProps<any>> = ({ list, navItemName, navTextColor = 'text-gray-600', navTextActiveColor = 'text-[var(--theme-primary)]', followColor = 'bg-gray-200', followType, onClickNavItemHandler }) => {
  const [navIndex, useNavIndex] = useState<number>(0)
  const navIndexRef = useRef<number>(0)
  const followItemRef = useRef<HTMLDivElement>(null)
  const navItemRefs = list.map(() => useRef<HTMLDivElement>(null))

  useEffect(() => {
    navAssignment()
    window.addEventListener('resize', windowResize)
    return () => {
      window.removeEventListener('resize', windowResize)
    }
  }, [])

  /**
   * @description: Nav点击
   * @return {type}
   */
  const onClickNav = (index: number) => {
    navIndexRef.current = index
    useNavIndex(index)
    navAssignment()
    onClickNavItemHandler(list[index])
  }

  /**
   * @description: 窗口改变
   * @return {type}
   */
  const windowResize = () => {
    navAssignment()
  }

  /**
   * @description: Nav赋值
   * @param {number} index
   * @return {type}
   */
  const navAssignment = () => {
    const navItem = navItemRefs[navIndexRef?.current]?.current
    const width = followType === 'bg' ? navItem && navItem?.offsetWidth : navItem && navItem?.offsetWidth - 40
    const height = navItem?.offsetHeight
    const left = followType === 'bg' ? navItem && navItem?.offsetLeft : navItem && navItem?.offsetLeft + 20
    const top = navItem?.offsetTop
    const followItem = followItemRef.current
    if (followItem) {
      followItem.style.width = width + 'px'
      followItem.style.height = height + 'px'
      followItem.style.left = left + 'px'
      followItem.style.top = top + 'px'
    }
  }

  return (
    <div className='follow-nav-component'>
      <div className="nav-list flex flex-wrap relative">
        {
          list && list.length
            ?
            list.map((item: any, index: number) => (
              <div key={nanoid()} ref={navItemRefs[index]} className={`nav-item z-10 mr-[44px] mb-[40px] px-[20px] py-[8px] rounded-md text-[14px] transition-all duration-200 ${navIndex === index ? `${navTextActiveColor} font-bold` : `${navTextColor} hover:${navTextActiveColor} hover:cursor-pointer`}`} onClick={() => onClickNav(index)}>{item[navItemName]}</div>
            ))
            :
            (
              <div className="empty pt-[40px]">
                <Empty description="暂无数据..." />
              </div>
            )
        }
        <div ref={followItemRef} className={`follow-item absolute z-0 transition-all duration-500 ${followType === 'bg' ? `${followColor}  rounded-md` : 'border-b-[4px] border-[var(--theme-primary)]'}`} />
      </div>
    </div>
  )
}