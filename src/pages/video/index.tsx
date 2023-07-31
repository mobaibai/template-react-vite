import { Button } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid'
import { usePopup } from '@/hooks/usePopup';

const buttonList = ['/video/play1', '/video/play2']

interface Props {
  title?: string
}
const Video: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title
  const location = useLocation()
  const navigate = useNavigate()

  const { popup, show, hide } = usePopup({
    children: (
      <div className='popup-content'>
        这是一个全局弹窗
      </div>
    )
  })

  /**
   * @description: Button点击
   * @param {string} item
   * @return {type}
   */
  const onClickButton = (item: string) => {
    if (location.pathname !== item) {
      navigate(item)
      if (buttonList[1] === item) show()
    }
  }

  return (
    <div className="video-container p-10">
      <div className="name flex justify-center">Video</div>
      <div className="nav-items flex items-center justify-center mt-4 space-x-2">
        {
          buttonList.map((item, index) => (
            <div key={nanoid()} className="nav-item">
              <Button type={location.pathname === item ? 'primary' : 'default'} onClick={() => onClickButton(item)}>
                {index === 0 ? '导航跟随' : '全局弹窗'}
              </Button>
            </div>
          ))
        }
      </div>
      <div className="content">
        <Outlet />
      </div>
      {popup}
    </div>
  )
}
export default Video