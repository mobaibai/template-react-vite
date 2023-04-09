import { HashRouter } from 'react-router-dom'
import vhCheck from 'vh-check'
import RouterConainer from './router'
import { Header } from '@/components/Header'
import { useCountStore } from '@/stores/useCountStore'
import 'virtual:uno.css'
import 'virtual:svgsprites'
import './styles/global.scss'
import './styles/app.scss'
import { useSpring, animated } from '@react-spring/web'

vhCheck()

function App() {
  const count = useCountStore(state => state.count)
  const countStyles = useSpring({
    from: { transform: 'rotateZ(0)' },
    loop: { transform: 'rotateZ(360deg)' },
    to: { transform: 'rotateZ(0)' },
    config: {
      duration: 200
    }
  })

  return (
    <div className="App">
      <div className="limit">
        <HashRouter>
          <Header />
          <RouterConainer />
          <animated.div className='count-view' style={{ ...countStyles }} text="center 30px slate-600">
            {count}
          </animated.div>
        </HashRouter>
      </div>
    </div>
  )
}

export default App
