import { Button } from 'antd'

interface Props {
  title?: string
}
const Video: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title

  return (
    <div className="video-container p-10 flex justify-center">
      <Button type="primary">Video</Button>
    </div>
  )
}
export default Video
