interface Props {
  title?: string
}
const Play2: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title

  return (
    <div className='play2-container p-10'>
      Play2
    </div>
  )
}
export default Play2