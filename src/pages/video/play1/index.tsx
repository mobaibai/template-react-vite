import { useEffect, useRef, useState } from "react"
import { nanoid } from "nanoid"
import { Empty, Skeleton } from "antd"
import { NavFollow } from "@/components/NavFollow"

interface NavItem {
  id: string | number
  fruit: string
}
const navList: Array<NavItem> = [{ id: '-1', fruit: '全部' }, { id: '1', fruit: '香蕉' }, { id: '2', fruit: '苹果' }, { id: '3', fruit: '橙子' }, { id: '4', fruit: '草莓' }, { id: '5', fruit: '蓝莓' }, { id: '6', fruit: '菠萝' }, { id: '7', fruit: '樱桃' }, { id: '8', fruit: '葡萄' }, { id: '9', fruit: '柚子' }, { id: '10', fruit: '桃子' }, { id: '11', fruit: '西瓜' }, { id: '12', fruit: '哈密瓜' }, { id: '13', fruit: '榴莲' }, { id: '14', fruit: '芒果' }, { id: '15', fruit: '猕猴桃' }, { id: '16', fruit: '木瓜' }, { id: '17', fruit: '橙柚' }, { id: '18', fruit: '柠檬' }, { id: '19', fruit: '石榴' }, { id: '20', fruit: '橘子' }, { id: '21', fruit: '蜜柚' }, { id: '22', fruit: '杏子' }, { id: '23', fruit: '柿子' }, { id: '24', fruit: '青梅' }, { id: '25', fruit: '山竹' }, { id: '26', fruit: '百香果' }, { id: '27', fruit: '桑葚' }, { id: '28', fruit: '杨梅' }, { id: '29', fruit: '荔枝' }, { id: '30', fruit: '番茄' }]
// const navList: string[] = ['全部', '香蕉', '苹果', '橙子', '草莓', '蓝莓', '菠萝', '樱桃', '葡萄', '柚子', '桃子', '西瓜', '哈密瓜', '榴莲', '芒果', '猕猴桃', '木瓜', '橙柚', '柠檬', '石榴', '橘子', '蜜柚', '杏子', '柿子', '青梅', '山竹', '百香果', '桑葚', '杨梅', '荔枝', '番茄', '橙白果', '火龙果', '车厘子', '枇杷', '莓果', '李子', '瓜子', '红毛丹', '龙眼', '橄榄', '柚子橘', '山楂', '梨子', '蜜瓜', '香瓜', '金橘', '杨桃', '西红柿', '牛油果', '水梨', '蒲桃', '甘蔗']
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
    const navItem = navItemRefs[navIndexRef.current].current
    const width = navItem?.offsetWidth
    const height = navItem?.offsetHeight
    const left = navItem?.offsetLeft
    const top = navItem?.offsetTop
    const followItem = followItemRef.current
    if (followItem) {
      followItem.style.width = width + 'px'
      followItem.style.height = height + 'px'
      followItem.style.left = left + 'px'
      followItem.style.top = top + 'px'
    }
  }

  /**
   * @description: Nav点击处理
   * @param {ItemType} item
   * @return {type}
   */
  const onClickNavItemHandler = (item: ItemType) => {
    console.log('NavItem', item)
  }

  return (
    <div className='play1-container p-10 flex justify-center'>
      <NavFollow list={navList} navItemName="fruit" followType="bg" onClickNavItemHandler={onClickNavItemHandler} />
      <NavFollow list={navList} navItemName="fruit" followType="border" navTextColor="text-gray-600" navTextActiveColor="text-[var(--theme-primary)]" followColor="border-[var(--theme-primary)]" onClickNavItemHandler={onClickNavItemHandler} />
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