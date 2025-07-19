# GitHub Pages 部署指南

## 🚀 快速部署

### 1. 启用 GitHub Pages
- 仓库 Settings → Pages → Source 选择 **GitHub Actions**

### 2. 推送代码
```bash
git add .
git commit -m "部署到 GitHub Pages"
git push origin main
```

### 3. 访问网站
```
https://your-username.github.io/template-react-vite/
```

## 🛠️ 手动部署

```bash
pnpm install
pnpm deploy
```

## 🔧 配置说明

- 修改仓库名称：更新 `vite.config.ts` 中的 `base` 路径
- 自定义域名：在 `public/` 目录创建 `CNAME` 文件

## 📚 相关文档

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
