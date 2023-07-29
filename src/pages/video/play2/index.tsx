import { Skeleton } from "antd"

interface Props {
  title?: string
}
const Play2: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title

  return (
    <div className='play2-container p-10 flex justify-center'>
      弹窗
    </div>
  )
}
export default Play2

export const Play2Skeleton = () => {
  return (
    <div className='play2-skeleton flex justify-center'>
      <Skeleton.Button active />
      <Skeleton.Button active />
    </div>
  )
}