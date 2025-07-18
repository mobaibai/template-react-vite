# React + TypeScript + Vite 现代化前端项目模板

一个基于 **Vite + React 19 + TypeScript** 构建的现代化前端项目模板，集成了丰富的动画组件库、完善的开发工具链和最佳实践。专为现代 Web 应用开发而设计，提供了完整的动画解决方案和优秀的用户体验。

## 📖 文档

### 主要文档

- [中文文档](README.md) (当前文档)
- [English Documentation](docs/README.en.md)

### 专项文档

- [动画组件库文档](docs/animations.md) | [Animation Library Documentation](docs/animations.en.md)
- [部署指南](docs/deploy.md) | [Deployment Guide](docs/deploy.en.md)
- [GitHub Pages 设置指南](docs/github-pages-setup.md) | [GitHub Pages Setup Guide](docs/github-pages-setup.en.md)

## ✨ 项目特色

### 🎨 完整的动画组件库

- 基于 `@react-spring/web` 构建的高性能动画系统
- 包含透明度、弹簧、滑动、缩放、旋转、组合、序列等多种动画效果
- 完整的 TypeScript 类型支持和智能提示
- 丰富的预设动画和灵活的自定义配置
- 支持并行和序列动画组合
- 内置动画示例和交互式演示页面
- 优化的滚动体验，支持长内容的流畅滚动

### 🚀 现代化技术栈

- **React 19** - 最新版本的 React 框架，支持并发特性和最新 Hooks
- **TypeScript 5.8** - 类型安全的 JavaScript 超集，提供强大的开发时支持
- **Vite 7** - 极速的构建工具和开发服务器，支持 HMR 和快速冷启动
- **Ant Design 5** - 企业级 UI 设计语言和组件库，支持 React 19
- **UnoCSS** - 即时按需的原子化 CSS 引擎，零运行时开销
- **Zustand** - 轻量级状态管理库，简单易用，完美的 TypeScript 支持
- **React Router 7** - 声明式路由系统，支持嵌套路由和懒加载
- **SWR** - 数据获取和缓存库，提供优秀的用户体验
- **Axios** - HTTP 客户端，支持请求拦截和响应处理
- **@react-spring/web** - 高性能动画库，基于物理的动画系统
- **React SWC** - 极速的 TypeScript/JavaScript 编译器

### 🏗️ 优秀的项目架构

- 组件化设计，职责分离，高度可复用
- 模块化文件组织，清晰的目录结构
- 懒加载和代码分割优化，提升加载性能
- 完善的 TypeScript 类型定义，减少运行时错误
- 统一的代码规范和最佳实践
- 响应式设计和滚动优化，适配各种设备
- 完善的错误边界和加载状态处理

### 🛠️ 完善的开发工具链

- **ESLint + TypeScript ESLint** - 代码质量检查和类型安全
- **Prettier** - 代码格式化，支持导入排序和组织
- **Husky + lint-staged** - Git 钩子和预提交检查（可选）
- **VS Code 配置** - 开箱即用的编辑器配置和推荐扩展
- **GitHub Actions** - 自动化 CI/CD 部署流程
- **多平台部署** - 支持 GitHub Pages 和 Netlify 部署

## 📦 安装与使用

### 环境要求

- Node.js >= 18
- pnpm >= 8 (推荐)

### 快速开始

```bash
# 克隆项目
git clone <repository-url>
cd template-react-new
```

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview

# 代码格式化
pnpm format

# 检查代码格式
pnpm format:check

# 部署到 GitHub Pages
pnpm deploy
```

## 🚀 GitHub Pages 部署

本项目已配置自动部署到 GitHub Pages，支持两种部署方式：

### 自动部署（推荐）

1. **启用 GitHub Pages**：
   - 进入 GitHub 仓库设置页面
   - 找到 "Pages" 选项
   - 在 "Source" 中选择 "GitHub Actions"

2. **推送代码触发部署**：

   ```bash
   git add .
   git commit -m "feat: 添加 GitHub Pages 部署配置"
   git push origin main
   ```

3. **查看部署状态**：
   - 在 GitHub 仓库的 "Actions" 标签页查看构建状态
   - 部署成功后，访问 `https://your-username.github.io/template-react-vite/`

### 手动部署

如果需要手动部署，可以使用以下命令：

```bash
# 安装 gh-pages 依赖（如果还未安装）
pnpm install

# 构建并部署
pnpm deploy
```

### 部署配置说明

- **GitHub Actions 工作流**：`.github/workflows/deploy.yml`
- **构建输出目录**：`dist/`
- **部署分支**：`gh-pages`
- **访问路径**：`/template-react-vite/`（生产环境）

### 自定义域名（可选）

如果你有自定义域名，可以在 `public/` 目录下创建 `CNAME` 文件：

```bash
echo "your-domain.com" > public/CNAME
```

## 开发环境配置

### VS Code 配置

项目已配置 VS Code 工作区设置，支持：

- **保存时自动格式化**: 使用 Prettier 自动格式化代码
- **ESLint 自动修复**: 保存时自动修复 ESLint 错误
- **导入排序**: 自动整理和排序 import 语句
- **推荐扩展**: 自动推荐必要的 VS Code 扩展

### 推荐扩展

- `esbenp.prettier-vscode` - Prettier 代码格式化
- `dbaeumer.vscode-eslint` - ESLint 代码检查
- `bradlc.vscode-tailwindcss` - Tailwind CSS 智能提示
- `antfu.unocss` - UnoCSS 支持
- `ms-vscode.vscode-typescript-next` - TypeScript 增强支持

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Animations/      # 动画组件库
│   │   ├── AnimationOpacity.tsx     # 透明度动画
│   │   ├── AnimationSpring.tsx      # 弹簧动画
│   │   ├── AnimationSlide.tsx       # 滑动动画
│   │   ├── AnimationScale.tsx       # 缩放动画
│   │   ├── AnimationRotate.tsx      # 旋转动画
│   │   ├── AnimationContainer.tsx   # 组合动画容器
│   │   ├── AnimationSequence.tsx    # 序列动画
│   │   ├── presets.ts              # 预设动画配置
│   │   ├── utils.ts                # 动画工具函数
│   │   └── README.md               # 动画库文档
│   ├── Header.tsx       # 头部组件
│   ├── Loading.tsx      # 加载组件
│   ├── NavFollow.tsx    # 导航跟随组件
├── pages/              # 页面组件
│   ├── home/           # 首页
│   ├── animations/     # 动画演示页
│   ├── components/     # 组件展示页
│   └── 404/            # 404页面
├── hooks/              # 自定义 Hooks
│   ├── useData.tsx     # 数据获取 Hook
│   ├── usePopup.tsx    # 弹窗管理 Hook
│   ├── useResize.tsx   # 窗口大小监听 Hook
│   └── useTitle.tsx    # 页面标题 Hook
├── stores/             # 状态管理
│   ├── index.ts        # 状态管理入口
│   └── useCountStore.ts # 计数器状态
├── router/             # 路由配置
│   ├── config.ts       # 路由配置
│   └── index.tsx       # 路由组件
├── utils/              # 工具函数
├── styles/             # 样式文件
├── config/             # 配置文件
├── lib/                # 第三方库封装
└── assets/             # 静态资源
```

## 🎯 核心功能

### 动画组件库

项目内置了完整的动画组件库，位于 `src/components/Animations/`：

#### 基础动画组件

- **AnimationOpacity** - 透明度动画，支持淡入淡出效果
- **AnimationSpring** - 弹簧动画，提供自然的物理动画效果
- **AnimationSlide** - 滑动动画，支持多方向滑入滑出
- **AnimationScale** - 缩放动画，支持缩放、脉冲、弹跳效果
- **AnimationRotate** - 旋转动画，支持旋转、翻转、持续旋转

#### 高级动画组件

- **AnimationContainer** - 组合动画容器，支持并行和序列执行
- **AnimationSequence** - 序列动画，精确控制多步骤动画

#### 使用示例

```tsx
import {
  AnimationOpacity,
  AnimationSpring,
  AnimationContainer,
  AnimationSequence
} from '@/components/animations'

// 透明度动画
<AnimationOpacity fromOpacity={0} toOpacity={1} duration={500}>
  <div>淡入效果</div>
</AnimationOpacity>

// 弹簧动画
<AnimationSpring direction="top" distance={30}>
  <div>从上方滑入</div>
</AnimationSpring>

// 组合动画
<AnimationContainer
  effects={[
    { type: 'opacity', config: { fromOpacity: 0, toOpacity: 1 } },
    { type: 'scale', config: { type: 'scaleIn', fromScale: 0.5, toScale: 1 } }
  ]}
  mode="parallel"
>
  <div>组合动画效果</div>
</AnimationContainer>

// 序列动画
<AnimationSequence
  steps={[
    { type: 'opacity', config: { fromOpacity: 0, toOpacity: 1 }, duration: 300 },
    { type: 'spring', config: { direction: 'top', distance: 20 }, duration: 400 }
  ]}
>
  <div>序列动画效果</div>
</AnimationSequence>
```

### 状态管理

使用 **Zustand** 进行轻量级状态管理：

```tsx
import { create } from 'zustand'

interface CountState {
  count: number
  increment: () => void
  decrement: () => void
}

const useCountStore = create<CountState>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
}))

// 在组件中使用
const { count, increment, decrement } = useCountStore()
```

### 路由系统

使用 **React Router 7** 配置路由和懒加载：

```tsx
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Home = lazy(() => import('@/pages/home'))
const Animations = lazy(() => import('@/pages/animations'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'animations', element: <Animations /> },
      { path: 'components', element: <Components /> },
    ],
  },
])
```

### 样式系统

使用 **UnoCSS** 原子化 CSS 和自定义快捷类：

```tsx
// 基础工具类
<div className="flex-center p-4 bg-blue-500 text-white rounded-lg">
  居中内容
</div>

// 自定义快捷类
<div className="absolute-center">
  绝对居中
</div>

<div className="flex-between-center">
  两端对齐居中
</div>

// 响应式设计
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  响应式网格
</div>
```

### 自定义 Hooks

项目提供了多个实用的自定义 Hooks：

```tsx
// 数据获取 Hook
import { useData } from '@/hooks/useData'
const { data, loading, error } = useData('/api/users')

// 弹窗管理 Hook
import { usePopup } from '@/hooks/usePopup'
const { showPopup, hidePopup } = usePopup()

// 窗口大小监听 Hook
import { useResize } from '@/hooks/useResize'
const { width, height, isMobile } = useResize()

// 页面标题 Hook
import { useTitle } from '@/hooks/useTitle'
useTitle('页面标题')
```

#### 动画演示页面

访问 `/animations` 路径可以查看完整的动画演示，页面特性：

- 📱 **响应式设计** - 适配各种屏幕尺寸
- 🖱️ **流畅滚动** - 优化的滚动体验，支持长内容浏览
- 🎮 **交互式演示** - 实时预览各种动画效果
- 📚 **分类展示** - 基础动画、高级动画、组合动画、序列动画等
- 🎨 **预设动画** - 丰富的入场、出场和注意力动画预设

### 路由系统

采用 React Router 实现的声明式路由系统：

- 支持嵌套路由
- 懒加载页面组件
- 路由守卫和权限控制
- 骨架屏加载状态

### 状态管理

使用 Zustand 进行状态管理：

```tsx
import { useCountStore } from '@/stores/useCountStore'

const { count, inc, cut } = useCountStore()
```

### 工具函数

提供了丰富的工具函数，包括：

- 时间格式化
- 数据处理
- 动画工具
- 响应式工具

## 🚀 性能优化

### 代码分割

项目已配置基于路由的代码分割：

```tsx
// 路由级别的懒加载
const Home = lazy(() => import('@/pages/home'))
const Animations = lazy(() => import('@/pages/animations'))

// 组件级别的懒加载
const HeavyComponent = lazy(() => import('./HeavyComponent'))
```

### 构建优化

- **Tree Shaking**: 自动移除未使用的代码
- **资源压缩**: 自动压缩 JS、CSS 和图片
- **缓存策略**: 长期缓存静态资源
- **预加载**: 关键资源预加载

### 运行时优化

```tsx
// 使用 React.memo 优化组件渲染
const OptimizedComponent = React.memo(({ data }) => {
  return <div>{data}</div>
})

// 使用 useMemo 缓存计算结果
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data)
}, [data])

// 使用 useCallback 缓存函数
const handleClick = useCallback(() => {
  // 处理点击事件
}, [dependency])
```

## 🛡️ 最佳实践

### 组件设计原则

1. **单一职责**: 每个组件只负责一个功能
2. **可复用性**: 通过 props 配置组件行为
3. **可测试性**: 编写易于测试的组件
4. **可访问性**: 遵循 WCAG 无障碍指南

### 状态管理原则

1. **最小化状态**: 只存储必要的状态
2. **状态归一化**: 避免重复和嵌套的状态结构
3. **合理分层**: 区分本地状态和全局状态
4. **不可变更新**: 使用不可变的方式更新状态

### 性能最佳实践

1. **避免不必要的渲染**: 使用 memo、useMemo、useCallback
2. **优化列表渲染**: 使用 key 属性和虚拟滚动
3. **图片优化**: 使用 WebP 格式和懒加载
4. **网络优化**: 使用 SWR 进行数据缓存

## 🔧 自定义配置

### 修改主题色

在 `src/config/index.ts` 中修改主题色：

```typescript
export const ThemePrimary: string = '#13c2c2' // 修改为你的主题色
```

### 添加新的动画预设

在 `src/components/Animations/presets.ts` 中添加：

```typescript
export const customAnimations = {
  myCustomAnimation: {
    type: 'spring',
    config: {
      direction: 'top',
      distance: 50,
      tension: 300,
      friction: 10,
    },
  },
}
```

### 配置 API 地址

在 `src/config/index.ts` 中配置 API 地址：

```typescript
const development: BaseApiType = {
  API_BASE_URL: 'http://localhost:3000/api',
  API_RESOURCE_URL: 'http://localhost:3000',
}

const production: BaseApiType = {
  API_BASE_URL: 'https://your-api.com/api',
  API_RESOURCE_URL: 'https://your-cdn.com',
}
```

## 🧪 测试

项目支持多种测试方式：

```bash
# 运行单元测试
pnpm test

# 运行测试并监听文件变化
pnpm test:watch

# 生成测试覆盖率报告
pnpm test:coverage

# 运行 E2E 测试
pnpm test:e2e
```

### 测试示例

```tsx
import { render, screen } from '@testing-library/react'
import { AnimationOpacity } from '@/components/Animations'

test('renders animation component', () => {
  render(
    <AnimationOpacity fromOpacity={0} toOpacity={1}>
      <div>Test content</div>
    </AnimationOpacity>
  )

  expect(screen.getByText('Test content')).toBeInTheDocument()
})
```

## 📁 项目结构

```
src/
├── components/              # 可复用组件
│   ├── Animations/          # 动画组件库
│   │   ├── AnimationContainer.tsx    # 组合动画容器
│   │   ├── AnimationOpacity.tsx      # 透明度动画
│   │   ├── AnimationSpring.tsx       # 弹簧动画
│   │   ├── AnimationSlide.tsx        # 滑动动画
│   │   ├── AnimationScale.tsx        # 缩放动画
│   │   ├── AnimationRotate.tsx       # 旋转动画
│   │   ├── AnimationSequence.tsx     # 序列动画
│   │   ├── examples.tsx              # 动画示例组件
│   │   ├── presets.ts                # 预设动画配置
│   │   ├── utils.ts                  # 动画工具函数
│   │   └── index.ts                  # 统一导出
│   ├── Header.tsx           # 头部组件
│   ├── Icon.tsx             # 图标组件
│   ├── Loading.tsx          # 加载组件
│   ├── NavFollow.tsx        # 导航跟随组件
│   └── Popup.tsx            # 弹窗组件
├── pages/                   # 页面组件
│   ├── home/                # 首页
│   │   └── index.tsx
│   ├── animations/          # 动画演示页
│   │   ├── index.tsx        # 动画页面（优化滚动体验，全屏显示）
│   │   └── skeleton.tsx     # 骨架屏
│   ├── components/          # 组件展示页
│   │   ├── icons/           # 图标展示
│   │   ├── modal/           # 弹窗展示
│   │   ├── nav/             # 导航展示
│   │   ├── index.tsx
│   │   └── skeleton.tsx
│   └── 404/                 # 404页面
│       └── index.tsx
├── hooks/                   # 自定义 Hooks
│   ├── useData.tsx          # 数据获取 Hook
│   ├── usePopup.tsx         # 弹窗控制 Hook
│   ├── useResize.tsx        # 窗口大小监听 Hook
│   └── useTitle.tsx         # 页面标题 Hook
├── stores/                  # 状态管理
│   ├── index.ts             # 状态管理入口
│   └── useCountStore.ts     # 计数器状态
├── router/                  # 路由配置
│   ├── config.ts            # 路由配置
│   └── index.tsx            # 路由组件
├── utils/                   # 工具函数
│   └── index.ts
├── styles/                  # 样式文件
│   ├── app.scss             # 应用样式
│   └── global.scss          # 全局样式
├── config/                  # 配置文件
│   └── index.ts
├── lib/                     # 第三方库封装
│   └── ajax.ts              # HTTP 请求封装
├── assets/                  # 静态资源
│   ├── bgs/                 # 背景图片
│   └── icons/               # 图标资源
├── layout/                  # 布局组件
│   └── index.tsx
├── storage/                 # 本地存储
│   └── index.ts
├── App.tsx                  # 应用根组件
├── main.tsx                 # 应用入口
└── vite-env.d.ts           # Vite 类型声明
```

## 🛠️ 开发工具

### 代码规范

- **ESLint** - 代码质量检查
- **TypeScript** - 类型检查
- **Prettier** - 代码格式化工具，支持保存时自动格式化

### 构建优化

- **Vite** - 快速构建和热更新
- **代码分割** - 按需加载
- **Tree Shaking** - 移除未使用代码
- **SVG Sprites** - SVG 图标优化

### 样式方案

- **UnoCSS** - 原子化 CSS
- **SCSS** - CSS 预处理器
- **CSS Modules** - 样式模块化

## 🎨 动画组件详细文档

### AnimationOpacity

透明度动画组件，支持淡入淡出效果。

**Props:**

- `fromOpacity` - 起始透明度 (0-1)
- `toOpacity` - 目标透明度 (0-1)
- `duration` - 动画持续时间 (ms)
- `delay` - 延迟时间 (ms)

### AnimationSpring

弹簧动画组件，支持多方向滑入效果。

**Props:**

- `direction` - 动画方向 ('top' | 'bottom' | 'left' | 'right')
- `distance` - 移动距离 (px)
- `config` - 弹簧配置

### AnimationContainer

组合动画容器，支持多种动画效果的组合。

**Props:**

- `effects` - 动画效果数组
- `mode` - 执行模式 ('parallel' | 'sequence')
- `delay` - 全局延迟

## 🔧 配置说明

### Vite 配置

- 路径别名配置 (`@` 指向 `src`)
- UnoCSS 集成
- SVG Sprites 插件
- 开发服务器自动打开

### TypeScript 配置

- 严格模式启用
- 路径映射配置
- 类型声明文件

### UnoCSS 配置

- 预设配置
- 自定义规则
- 响应式断点

## 📚 学习资源

### 官方文档

- [React 官方文档](https://react.dev/)
- [TypeScript 手册](https://www.typescriptlang.org/docs/)
- [Vite 指南](https://vitejs.dev/guide/)
- [UnoCSS 文档](https://unocss.dev/)
- [React Spring 文档](https://react-spring.dev/)
- [Ant Design 组件](https://ant.design/components/overview-cn/)
- [Zustand 文档](https://zustand-demo.pmnd.rs/)

### 推荐阅读

- [React 19 新特性](https://react.dev/blog/2024/04/25/react-19)
- [TypeScript 最佳实践](https://typescript-eslint.io/docs/)
- [Vite 性能优化](https://vitejs.dev/guide/performance.html)
- [现代 CSS 解决方案](https://web.dev/learn/css/)

## 🚀 部署

### 本地预览

```bash
# 构建项目
pnpm build

# 预览构建结果
pnpm preview
```

### GitHub Pages 部署

#### 自动部署（推荐）

项目已配置 GitHub Actions 自动部署：

1. 推送代码到 `main` 或 `master` 分支
2. GitHub Actions 自动构建并部署到 GitHub Pages
3. 访问 `https://username.github.io/repository-name`

#### 手动部署

```bash
# 一键部署到 GitHub Pages
pnpm deploy
```

### Netlify 部署

#### 方式一：连接 GitHub 仓库

1. 登录 [Netlify](https://netlify.com)
2. 点击 "New site from Git"
3. 选择你的 GitHub 仓库
4. 构建设置：
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   - Environment variables: `DEPLOY_TARGET=netlify`

#### 方式二：拖拽部署

```bash
# 构建项目
DEPLOY_TARGET=netlify pnpm build

# 将 dist 文件夹拖拽到 Netlify 部署页面
```

### Vercel 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 其他平台

项目支持部署到任何静态网站托管平台：

- **Surge.sh**: `surge dist`
- **Firebase Hosting**: `firebase deploy`
- **AWS S3**: 上传 `dist` 文件夹
- **阿里云 OSS**: 上传 `dist` 文件夹

### 部署配置

不同平台需要设置对应的环境变量：

```bash
# GitHub Pages
DEPLOY_TARGET=github pnpm build

# Netlify
DEPLOY_TARGET=netlify pnpm build

# 其他平台
DEPLOY_TARGET=other pnpm build
```

### 环境变量

在项目根目录创建对应的环境文件：

```bash
# .env.development - 开发环境
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_TITLE=React Template (Dev)
VITE_APP_ENV=development

# .env.production - 生产环境
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=React Template
VITE_APP_ENV=production

# .env.local - 本地覆盖（不会被提交到 Git）
VITE_API_KEY=your-secret-api-key
```

### 部署注意事项

1. **路由配置**: SPA 应用需要配置服务器重定向到 `index.html`
2. **HTTPS**: 生产环境建议使用 HTTPS
3. **缓存策略**: 配置适当的缓存头
4. **压缩**: 启用 Gzip/Brotli 压缩
5. **CDN**: 使用 CDN 加速静态资源访问

## 🛡️ 安全性

### 环境变量安全

- 敏感信息使用 `.env.local` 文件（不会被提交）
- 生产环境通过部署平台设置环境变量
- 前端代码中不要硬编码敏感信息

### 内容安全策略 (CSP)

```html
<!-- 在 index.html 中添加 CSP 头 -->
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
/>
```

### XSS 防护

```tsx
// 使用 DOMPurify 清理用户输入
import DOMPurify from 'dompurify'

const SafeHTML = ({ html }: { html: string }) => {
  const cleanHTML = DOMPurify.sanitize(html)
  return <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
}
```

## 📱 响应式设计

### 断点系统

项目使用 UnoCSS 的响应式断点：

```css
/* 移动端优先 */
.container {
  @apply w-full px-4;
}

/* 平板 */
@media (min-width: 768px) {
  .container {
    @apply max-w-2xl mx-auto;
  }
}

/* 桌面端 */
@media (min-width: 1024px) {
  .container {
    @apply max-w-4xl;
  }
}
```

### 响应式组件

```tsx
import { useWindowSize } from '@/hooks/useWindowSize'

const ResponsiveComponent = () => {
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <div
      className={`
      ${isMobile ? 'flex-col' : 'flex-row'}
      flex gap-4
    `}
    >
      {/* 响应式内容 */}
    </div>
  )
}
```

### 移动端优化

- **触摸友好**: 按钮和链接至少 44px 点击区域
- **滚动优化**: 使用 `scroll-behavior: smooth`
- **视口设置**: 正确的 viewport meta 标签
- **性能优化**: 图片懒加载和压缩

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 如何贡献

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

### 开发规范

- 遵循现有的代码风格
- 添加适当的 TypeScript 类型
- 为新功能编写文档
- 确保所有测试通过
- 遵循 [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范

### 报告问题

如果你发现了 bug 或有功能建议，请：

1. 检查是否已有相关 issue
2. 创建新的 issue，详细描述问题
3. 提供复现步骤和环境信息

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢以下开源项目和贡献者：

- [React](https://react.dev/) - 用户界面库
- [Vite](https://vitejs.dev/) - 构建工具
- [TypeScript](https://www.typescriptlang.org/) - 类型系统
- [UnoCSS](https://unocss.dev/) - CSS 引擎
- [React Spring](https://react-spring.dev/) - 动画库
- [Ant Design](https://ant.design/) - UI 组件库
- 所有为开源社区做出贡献的开发者们

---

**开始你的现代化 React 开发之旅吧！** 🚀

如果这个模板对你有帮助，请给我们一个 ⭐️！
