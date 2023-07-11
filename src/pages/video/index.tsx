interface Props {
  title?: string
}
const Video: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title

  return (
    <div className="video-container">
      <span>Video</span>
    </div>
  )
}
export default Video
