import { useEffect } from "react"
import { apiGetHomeData } from "./request"

interface Props {
  title?: string
}
const Home: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title

  useEffect(() => {
    console.log('apiGetHomeData', apiGetHomeData())
  }, [])

  return (
    <div className="home-container">
      <span>Home</span>
    </div>
  )
}
export default Home