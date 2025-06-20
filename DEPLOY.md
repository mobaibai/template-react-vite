# GitHub Pages 部署指南

本文档详细说明如何将此 React 项目部署到 GitHub Pages。

## 🚀 自动部署设置

### 1. 启用 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分选择 **GitHub Actions**

### 2. 推送代码触发部署

```bash
# 添加所有更改
git add .

# 提交更改
git commit -m "feat: 添加 GitHub Pages 部署配置"

# 推送到主分支
git push origin main
```

### 3. 查看部署状态

1. 在 GitHub 仓库页面点击 **Actions** 标签
2. 查看 "Deploy to GitHub Pages" 工作流的运行状态
3. 部署成功后，你的网站将在以下地址可用：
   ```
   https://your-username.github.io/template-react-vite/
   ```

## 🛠️ 手动部署

如果你需要手动部署，可以使用以下步骤：

### 1. 安装依赖

```bash
pnpm install
```

### 2. 执行部署命令

```bash
pnpm deploy
```

这个命令会：

1. 构建项目 (`pnpm run build`)
2. 将 `dist/` 目录的内容推送到 `gh-pages` 分支

## 📁 项目配置文件

### GitHub Actions 工作流

- **文件位置**: `.github/workflows/deploy.yml`
- **触发条件**: 推送到 `main` 或 `master` 分支
- **构建环境**: Ubuntu Latest + Node.js 18
- **部署目标**: GitHub Pages

### Vite 配置

- **文件位置**: `vite.config.ts`
- **生产环境 base**: `/template-react-vite/`
- **开发环境 base**: `./`

### Package.json 脚本

- `npm run build`: 构建生产版本
- `npm run deploy`: 构建并部署到 GitHub Pages
- `npm run preview`: 本地预览生产构建

## 🔧 自定义配置

### 修改仓库名称

如果你的仓库名称不是 `template-react-vite`，需要修改 `vite.config.ts`：

```typescript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : './',
```

### 自定义域名

如果你有自定义域名，在 `public/` 目录下创建 `CNAME` 文件：

```bash
echo "your-domain.com" > public/CNAME
```

## 🐛 常见问题

### 1. 部署后页面空白

- 检查 `vite.config.ts` 中的 `base` 配置是否正确
- 确保路径与你的仓库名称匹配

### 2. 资源文件 404 错误

- 确认 GitHub Pages 已正确启用
- 检查 Actions 工作流是否成功运行

### 3. 路由问题（SPA）

- GitHub Pages 默认不支持 SPA 路由
- 可以在 `public/` 目录添加 `404.html` 重定向到 `index.html`

### 4. 权限错误

- 确保仓库的 Actions 权限已启用
- 检查 `GITHUB_TOKEN` 是否有足够的权限

## 📚 相关链接

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [gh-pages 包文档](https://www.npmjs.com/package/gh-pages)
