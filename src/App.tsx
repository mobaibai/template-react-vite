import { Header } from '@/components/Header'
import { ThemePrimary } from '@/config'
import { ConfigProvider } from 'antd'
import { HashRouter } from 'react-router-dom'
import RouterConainer from './router'
// React19兼容包
import '@ant-design/v5-patch-for-react-19'
// @ts-ignore
import 'virtual:svgsprites'
import './styles/app.scss'
import './styles/global.scss'

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: ThemePrimary,
          },
        }}
      >
        <div
          className={`absolute w-15% h-15% rounded-50% top-10% left-10% transform-translate--50% filter-blur-6rem rainbow-bgc`}
        />
        <HashRouter>
          <Header />
          <RouterConainer />
        </HashRouter>
      </ConfigProvider>
    </div>
  )
}

export default App
