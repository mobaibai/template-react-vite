# React + TypeScript + Vite 现代化前端模板

基于 **React 19 + TypeScript + Vite** 构建的现代化前端项目模板，内置丰富的动画组件库和完善的开发工具链。

## ✨ 核心特性

- 🎨 **完整动画组件库** - 基于 `@react-spring/web` 的高性能动画系统
- 🚀 **现代技术栈** - React 19 + TypeScript + Vite + UnoCSS
- 📱 **响应式设计** - 适配各种设备和屏幕尺寸
- 🛠️ **开发工具链** - ESLint + Prettier + VS Code 配置
- 📦 **状态管理** - Zustand 轻量级状态管理
- 🔄 **路由系统** - React Router 7 + 懒加载
- 🎯 **TypeScript** - 完整类型支持和智能提示

## 📦 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 8 (推荐)

### 安装使用

```bash
# 克隆项目
git clone <repository-url>
cd template-react-new

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

### 主要命令

```bash
pnpm dev          # 启动开发服务器
pnpm build        # 构建生产版本
pnpm preview      # 预览构建结果
pnpm format       # 代码格式化
pnpm deploy       # 部署到 GitHub Pages
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

## 📁 项目结构

```
src/
├── components/              # 可复用组件
│   ├── Animations/          # 动画组件库
│   ├── Header.tsx           # 头部组件
│   ├── Loading.tsx          # 加载组件
│   └── ...
├── pages/                   # 页面组件
│   ├── home/                # 首页
│   ├── animations/          # 动画演示页
│   └── ...
├── hooks/                   # 自定义 Hooks
├── stores/                  # 状态管理 (Zustand)
├── router/                  # 路由配置
├── utils/                   # 工具函数
├── styles/                  # 样式文件
└── config/                  # 配置文件
```

## 🎯 核心功能

### 动画组件库

内置完整的动画组件库，基于 `@react-spring/web` 构建：

- **AnimationOpacity** - 透明度动画
- **AnimationSpring** - 弹簧动画
- **AnimationSlide** - 滑动动画
- **AnimationScale** - 缩放动画
- **AnimationRotate** - 旋转动画
- **AnimationContainer** - 组合动画容器
- **AnimationSequence** - 序列动画

```tsx
import { AnimationOpacity, AnimationSpring } from '@/components/animations'

// 透明度动画
<AnimationOpacity fromOpacity={0} toOpacity={1} duration={500}>
  <div>淡入效果</div>
</AnimationOpacity>

// 弹簧动画
<AnimationSpring direction="top" distance={30}>
  <div>从上方滑入</div>
</AnimationSpring>
```

### 状态管理

使用 **Zustand** 进行轻量级状态管理：

```tsx
import { create } from 'zustand'

const useCountStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}))

// 在组件中使用
const { count, increment } = useCountStore()
```

### 样式系统

使用 **UnoCSS** 原子化 CSS：

```tsx
<div className="flex-center p-4 bg-blue-500 text-white rounded-lg">
  居中内容
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  响应式网格
</div>
```

## 🚀 部署

### GitHub Pages 自动部署

项目已配置 GitHub Actions 自动部署：

1. Fork 或克隆项目到你的 GitHub 账户
2. 进入仓库设置 → Pages → Source 选择 "GitHub Actions"
3. 推送代码到 `main` 分支，自动触发部署
4. 访问：`https://your-username.github.io/template-react-vite/`

### 其他平台部署

```bash
# Netlify
DEPLOY_TARGET=netlify pnpm build

# Vercel
npm i -g vercel && vercel
```

## 📚 文档

- [动画组件库文档](./docs/animations.md) - 详细的动画组件使用说明
- [部署指南](./docs/deploy.md) - 完整的部署说明
- [GitHub Pages 设置](./docs/github-pages-setup.md) - GitHub Pages 配置指南
- [English Documentation](./docs/README.en.md)

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情。

---

**开始你的现代化 React 开发之旅！** 🚀
