import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import vhCheck from 'vh-check'
import RouterConainer from './router'
import { Header } from '@/components/Header'
import { ThemePrimary } from '@/config/base'
import 'virtual:svgsprites'
import './styles/global.scss'
import './styles/app.scss'

vhCheck()

function App() {
  return (
    <div className="App">
      <ConfigProvider theme={{
        token: {
          colorPrimary: ThemePrimary,
        },
      }}>
        <HashRouter>
          <Header />
          <RouterConainer />
        </HashRouter>
      </ConfigProvider>
    </div>
  )
}

export default App
