import { Header } from '@/components/Header'
import ResourcePreloader, {
  defaultResources,
} from '@/components/ResourcePreloader'
import { ThemePrimary } from '@/config'
import '@ant-design/v5-patch-for-react-19'
import { ConfigProvider } from 'antd'
import { HashRouter } from 'react-router-dom'
import 'virtual:svgsprites'
import RouterConainer from './router'
import './styles/app.scss'
import './styles/global.scss'

function App() {
  return (
    <div className="App">
      {/* 资源预加载器 */}
      <ResourcePreloader resources={defaultResources} enabled={true} />

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
