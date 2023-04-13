import { Button } from "antd"
import { useCountStore } from "@/stores/useCountStore"
import { useSpring, animated } from '@react-spring/web'
import { apiGetHomeData } from "./request"

interface Props {
  title?: string
}
const Home: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title
  const countInc = useCountStore(state => state.inc)
  const countCut = useCountStore(state => state.cut)
  const count = useCountStore(state => state.count)
  const countStyles = useSpring({
    from: { transform: 'rotateZ(0)' },
    loop: { transform: 'rotateZ(360deg)' },
    to: { transform: 'rotateZ(0)' },
    config: {
      duration: 180
    }
  })

  return (
    <div className="home-container p-10">
      <div className="count-action flex items-center justify-center">
        <Button onClick={countCut}>-</Button>
        <animated.div className='count-view mx-5' style={{ ...countStyles }} text="center 30px slate-600">
          {count}
        </animated.div>
        <Button onClick={countInc}>+</Button>
      </div>
    </div>
  )
}
export default Home