import { Outlet } from 'react-router-dom'

interface Props {
  title?: string
}
export const LayoutPage: React.FC<Props> = props => {
  if (props.title) document.title = props.title

  return (
    <div className="layout-container">
      <Outlet />
    </div>
  )
}
