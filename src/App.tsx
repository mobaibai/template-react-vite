import { HashRouter } from 'react-router-dom'
import vhCheck from 'vh-check'
import RouterConainer from './router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import 'virtual:uno.css'
import 'virtual:svgsprites'
import './styles/global.scss'
import './styles/app.scss'

vhCheck()

function App() {
  return (
    <div className="App">
      <div className="limit">
        <HashRouter>
          <Header />
          <RouterConainer />
          <Footer />
        </HashRouter>
      </div>
    </div>
  )
}

export default App
