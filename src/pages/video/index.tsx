import { Button, Skeleton } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid'

interface Props {
  title?: string
}
const Video: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="video-container p-10">
      <div className="name flex justify-center">Video</div>
      <div className="nav-items flex items-center justify-center mt-4 space-x-2">
        {
          ['/video/play1', '/video/play2'].map((item, index) => (
            <div key={nanoid()} className="nav-item">
              <Button type={location.pathname === item ? 'primary' : 'default'} onClick={() => navigate(item)}>
                {index === 0 ? 'Play1' : 'Play2'}
              </Button>
            </div>
          ))
        }
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}
export default Video