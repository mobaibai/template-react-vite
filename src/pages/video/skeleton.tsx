import { Skeleton } from "antd"

const VideoSkeleton = () => {
  return (
    <div className='video-skeleton p-[20px]'>
      <Skeleton active />
    </div>
  )
}
export default VideoSkeleton