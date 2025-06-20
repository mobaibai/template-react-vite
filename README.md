# React + TypeScript + Vite 现代化前端项目模板

一个基于 **Vite + React 19 + TypeScript** 构建的现代化前端项目模板，集成了丰富的动画组件库、完善的开发工具链和最佳实践。专为现代 Web 应用开发而设计，提供了完整的动画解决方案和优秀的用户体验。

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
- **Vite 6** - 极速的构建工具和开发服务器，支持 HMR 和快速冷启动
- **Ant Design 5** - 企业级 UI 设计语言和组件库
- **UnoCSS** - 即时按需的原子化 CSS 引擎，零运行时开销
- **Zustand** - 轻量级状态管理库，简单易用
- **React Router 7** - 声明式路由系统，支持嵌套路由和懒加载
- **SWR** - 数据获取和缓存库，提供优秀的用户体验
- **Axios** - HTTP 客户端，支持请求拦截和响应处理

### 🏗️ 优秀的项目架构
- 组件化设计，职责分离，高度可复用
- 模块化文件组织，清晰的目录结构
- 懒加载和代码分割优化，提升加载性能
- 完善的 TypeScript 类型定义，减少运行时错误
- 统一的代码规范和最佳实践
- 响应式设计和滚动优化，适配各种设备
- 完善的错误边界和加载状态处理

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

## 🎯 核心功能

### 动画组件库

项目内置了完整的动画组件库，位于 `src/components/animations/`：

#### 基础动画组件
- **AnimationOpacity** - 透明度动画
- **AnimationSpring** - 弹簧动画
- **AnimationSlide** - 滑动动画
- **AnimationScale** - 缩放动画
- **AnimationRotate** - 旋转动画

#### 高级动画组件
- **AnimationContainer** - 组合动画容器
- **AnimationSequence** - 序列动画

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

## 📈 性能优化

- **懒加载** - 页面和组件按需加载，提升首屏加载速度
- **代码分割** - 减少初始包大小，按路由分割代码
- **Tree Shaking** - 移除未使用代码，减少打包体积
- **硬件加速** - 动画使用 GPU 加速，确保流畅的动画效果
- **滚动优化** - 优化长内容页面的滚动性能，防止滚动卡顿
- **缓存策略** - 合理的缓存配置，提升重复访问性能
- **内存管理** - 及时清理动画和事件监听器，防止内存泄漏

## 🚀 部署

### 构建生产版本
```bash
pnpm build
```

### 部署到静态服务器
构建完成后，`dist` 目录包含所有静态资源，可直接部署到任何静态服务器。

### 环境变量
支持通过 `.env` 文件配置环境变量：
```
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=My App
```

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [React](https://reactjs.org/) - 用户界面库
- [Vite](https://vitejs.dev/) - 构建工具
- [Ant Design](https://ant.design/) - UI 组件库
- [@react-spring](https://react-spring.dev/) - 动画库
- [UnoCSS](https://unocss.dev/) - 原子化 CSS 引擎
- [Zustand](https://zustand-demo.pmnd.rs/) - 状态管理

---

**开始你的现代化 React 开发之旅！** 🎉