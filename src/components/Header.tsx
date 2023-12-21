import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'

const menuItems: MenuProps['items'] = [
  {
    label: (<NavLink to={'/home'}>{'首页'}</NavLink>),
    key: '/home',
  },
  {
    label: (<NavLink to={'/components'}>{'组件'}</NavLink>),
    key: '/components',
  },
]
interface Props { }
export const Header: React.FC<Props> = () => {
  const location = useLocation()
  const [menuCurrent, setMenuCurrent] = useState<string>(location.pathname)

  useEffect(() => {
    menuItems.forEach((item: ItemType | any) => {
      if (location.pathname.includes(item.key)) {
        setMenuCurrent(item.key)
      }
    })
  }, [location.pathname])

  return (
    <div className="header-container">
      <div className="menu">
        <Menu selectedKeys={[menuCurrent]} mode="horizontal" items={menuItems} />
      </div>
    </div>
  )
}
