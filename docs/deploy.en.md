# GitHub Pages Deployment Guide

## 🚀 Quick Deployment

### 1. Enable GitHub Pages
- Repository Settings → Pages → Source select **GitHub Actions**

### 2. Push Code
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 3. Access Website
```
https://your-username.github.io/template-react-vite/
```

## 🛠️ Manual Deployment

```bash
pnpm install
pnpm deploy
```

## 🔧 Configuration

- Modify repository name: Update `base` path in `vite.config.ts`
- Custom domain: Create `CNAME` file in `public/` directory

## 📚 Related Documentation

- [GitHub Pages Official Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)