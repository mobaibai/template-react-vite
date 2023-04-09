import { useEffect } from "react"
import { Button } from "antd"
import { useCountStore } from "@/stores/useCountStore"
import { apiGetHomeData } from "./request"

interface Props {
  title?: string
}
const Home: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title
  const count = useCountStore(state => state.count)
  const countInc = useCountStore(state => state.inc)
  const countCut = useCountStore(state => state.cut)

  useEffect(() => {
    console.log('apiGetHomeData', apiGetHomeData())
  }, [])

  return (
    <div className="home-container" p-20px>
      <div className="count-action" flex items-center justify-center>
        <Button onClick={countInc}>+</Button>
        <div mx-20px>{count}</div>
        <Button onClick={countCut}>-</Button>
      </div>
    </div>
  )
}
export default Home