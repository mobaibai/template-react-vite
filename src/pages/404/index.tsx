interface Props {
  title?: string
}
const EmptyPage: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title

  return (
    <div className='empty-page-container'>
      404：当前页面不存在!
    </div>
  )
}
export default EmptyPage