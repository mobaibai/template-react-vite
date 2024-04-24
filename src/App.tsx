import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import vhCheck from 'vh-check'
import RouterConainer from './router'
import { Header } from '@/components/Header'
import { ThemePrimary } from '@/config'
import 'virtual:svgsprites'
import './styles/global.scss'
import './styles/app.scss'

vhCheck()

function App() {
  return (
    <div className='App'>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: ThemePrimary
          }
        }}>
        <div className={`absolute w-15% h-15% rounded-50% top-10% left-10% transform-translate--50% filter-blur-6rem rainbow-bgc`} />
        <HashRouter>
          <Header />
          <RouterConainer />
        </HashRouter>
      </ConfigProvider>
    </div>
  )
}

export default App
