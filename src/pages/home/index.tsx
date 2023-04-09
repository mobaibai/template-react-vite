import { Button } from "antd"
import { useCountStore } from "@/stores/useCountStore"
import { apiGetHomeData } from "./request"

interface Props {
  title?: string
}
const Home: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title
  const countInc = useCountStore(state => state.inc)
  const countCut = useCountStore(state => state.cut)

  return (
    <div className="home-container" p-20px>
      <div className="count-action" flex items-center justify-center children-mx-10px>
        <Button onClick={countCut}>-</Button>
        <Button onClick={countInc}>+</Button>
      </div>
    </div>
  )
}
export default Home