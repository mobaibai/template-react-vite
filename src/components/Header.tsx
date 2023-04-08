import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { RouterConfig } from '@/router/config'

const menuItems: MenuProps['items'] = [
  {
    label: (<NavLink to={RouterConfig.Home.to}>{RouterConfig.Home.name}</NavLink>),
    key: RouterConfig.Home.key,
  },
  {
    label: (<NavLink to={RouterConfig.Video.to}>{RouterConfig.Video.name}</NavLink>),
    key: RouterConfig.Video.key,
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