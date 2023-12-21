import { Skeleton } from "antd"

interface Props {
  title?: string
}
const Modal: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title

  return (
    <div className='modal-container p-10 flex justify-center'>
      弹窗
    </div>
  )
}
export default Modal