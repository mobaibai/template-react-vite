import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'

const menuItems: MenuProps['items'] = [
  {
    label: (<NavLink to={'/home'}>{'首页'}</NavLink>),
    key: '/home',
  },
  {
    label: (<NavLink to={'/video'}>{'视频'}</NavLink>),
    key: '/video',
  },
]
interface Props { }
export const Header: React.FC<Props> = () => {
  const location = useLocation()
  const [menuCurrent, setMenuCurrent] = useState<string>(location.pathname)

  useEffect(() => {
    setMenuCurrent(location.pathname)
  }, [location.pathname])

  return (
    <div className="header-container">
      <div className="menu">
        <Menu selectedKeys={[menuCurrent]} mode="horizontal" items={menuItems} />
      </div>
    </div>
  )
}
