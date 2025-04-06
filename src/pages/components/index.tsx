import { Button } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { usePopup } from '@/hooks/usePopup'
import { useTitle } from '@/hooks/useTitle'

interface PathItem {
  name: string
  path: string
}
const pathList: PathItem[] = [
  { name: '导航跟随', path: 'nav' },
  { name: '全局弹窗', path: 'modal' },
  { name: '图标', path: 'icons' }
]

interface Props {
  title?: string
}
export const Components: React.FC<Props> = props => {
  if (props.title) useTitle(props.title)
  const location = useLocation()
  const navigate = useNavigate()

  const { popup, show, hide } = usePopup({
    children: <div className='popup-content'>这是一个全局弹窗</div>
  })

  /**
   * @description: Button点击
   * @param {string} item
   * @return {type}
   */
  const onClickButton = (item: PathItem) => {
    if (location.pathname !== item.path) {
      navigate(item.path)
      if (pathList[1].path === item.path) show()
    }
  }

  return (
    <div className='components-container p-10'>
      <div className='name flex justify-center'>Components</div>
      <div className='components-items flex items-center justify-center mt-4 space-x-2'>
        {pathList.map((item: PathItem, index: number) => (
          <div key={nanoid()} className='components-item'>
            <Button type={location.pathname === item.path ? 'primary' : 'default'} onClick={() => onClickButton(item)}>
              {item.name}
            </Button>
          </div>
        ))}
      </div>
      <div className='content'>
        <Outlet />
      </div>
      {popup}
    </div>
  )
}
export default Components
