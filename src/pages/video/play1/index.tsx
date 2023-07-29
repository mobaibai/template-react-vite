import { Skeleton } from "antd"

interface Props {
  title?: string
}
const Play1: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title

  return (
    <div className='play1-container p-10 flex justify-center'>
      列表
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