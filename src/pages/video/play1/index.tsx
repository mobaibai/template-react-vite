import { Empty, Skeleton } from "antd"
import { nanoid } from "nanoid"
import { useEffect, useRef, useState } from "react"

const navList: string[] = ['全部', '香蕉', '苹果', '橙子', '草莓', '蓝莓', '菠萝', '樱桃', '葡萄', '柚子', '桃子', '西瓜', '哈密瓜', '榴莲', '芒果', '猕猴桃', '木瓜', '橙柚', '柠檬', '石榴', '橘子', '蜜柚', '杏子', '柿子', '青梅', '山竹', '百香果', '桑葚', '杨梅', '荔枝', '番茄', '橙白果', '火龙果', '车厘子', '枇杷', '莓果', '李子', '瓜子', '红毛丹', '龙眼', '橄榄', '柚子橘', '山楂', '梨子', '蜜瓜', '香瓜', '金橘', '杨桃', '西红柿', '牛油果', '水梨', '蒲桃', '甘蔗']
interface Props {
  title?: string
}
const Play1: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title
  const navIndexRef = useRef<number>(0)
  const [navIndex, useNavIndex] = useState<number>(0)
  const followItemRef = useRef<HTMLDivElement>(null)
  const navItemRefs = navList.map(() => useRef<HTMLDivElement>(null))

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
    const followItemWidth = navItemRefs[navIndexRef.current].current?.offsetWidth
    const followItemHeight = navItemRefs[navIndexRef.current].current?.offsetHeight
    const followItemLeft = navItemRefs[navIndexRef.current].current?.offsetLeft
    const followItemTop = navItemRefs[navIndexRef.current].current?.offsetTop
    if (followItemRef.current) {
      followItemRef.current.style.width = followItemWidth + 'px'
      followItemRef.current.style.height = followItemHeight + 'px'
      followItemRef.current.style.left = followItemLeft + 'px'
      followItemRef.current.style.top = followItemTop + 'px'
    }
  }

  return (
    <div className='play1-container p-10 flex justify-center'>
      <div className="nav-list flex flex-wrap relative">
        {
          navList && navList.length
            ?
            navList.map((item: string, index: number) => (
              <div key={nanoid()} ref={navItemRefs[index]} className={`nav-item z-10 mr-[44px] mb-[40px] px-[20px] py-[8px] rounded-md text-[14px] transition-all duration-200 ${navIndex === index ? 'text-[var(--theme-primary)] font-bold' : 'text-gray-600 hover:text-[var(--theme-primary)] hover:cursor-pointer'}`} onClick={(e) => onClickNav(index)}>{item}</div>
            ))
            :
            (
              <div className="empty pt-[40px]">
                <Empty description="暂无数据..." />
              </div>
            )
        }
        <div ref={followItemRef} className={`follow-item absolute bg-gray-200 z-0 rounded-md transition-all duration-300`} />
      </div>
    </div>
  )
}
export default Play1

export const Play1Skeleton = () => {
  return (
    <div className='play1-skeleton flex justify-center'>
      <Skeleton.Button active />
      <Skeleton.Button active />
    </div>
  )
}