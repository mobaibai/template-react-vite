interface Props {
  title?: string
}
export const Icons:React.FC<Props> = (props) => {
  if(props.title) document.title = props.title

  return (
    <div className='icons-container p-10 flex justify-center'>
      <div className='icon-items flex items-center space-x-5 children:text-24px'>
        <div className='icon-item i-svg-spinners-clock c-#13c2c2' />
        <div className='icon-item i-svg-spinners-bouncing-ball text-orange-400' />
        <div className='icon-item i-cryptocurrency-color-blk' />
        <div className='icon-item i-eos-icons-application-outlined c-green-500' />
      </div>
    </div>
  )
}

export default Icons