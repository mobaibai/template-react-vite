interface Props {
  title?: string
}
const Video: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title

  return (
    <div className="video-container p-[20px]">
      Video
    </div>
  )
}
export default Video
