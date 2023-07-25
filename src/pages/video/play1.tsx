interface Props {
  title?: string
}
const Play1: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title

  return (
    <div className='play1-container p-10'>
      Play1
    </div>
  )
}
export default Play1