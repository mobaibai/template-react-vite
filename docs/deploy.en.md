# GitHub Pages Deployment Guide

This document provides detailed instructions on how to deploy this React project to GitHub Pages.

## 🚀 Automatic Deployment Setup

### 1. Enable GitHub Pages

1. Go to your GitHub repository page
2. Click the **Settings** tab
3. Find **Pages** in the left sidebar menu
4. In the **Source** section, select **GitHub Actions**

### 2. Push Code to Trigger Deployment

```bash
# Add all changes
git add .

# Commit changes
git commit -m "feat: add GitHub Pages deployment configuration"

# Push to main branch
git push origin main
```

### 3. Check Deployment Status

1. Click the **Actions** tab on your GitHub repository page
2. Check the status of the "Deploy to GitHub Pages" workflow
3. After successful deployment, your website will be available at:
   ```
   https://your-username.github.io/template-react-vite/
   ```

## 🛠️ Manual Deployment

If you need to deploy manually, follow these steps:

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Execute Deployment Command

```bash
pnpm deploy
```

This command will:

1. Build the project (`pnpm run build`)
2. Push the contents of the `dist/` directory to the `gh-pages` branch

## 📁 Project Configuration Files

### GitHub Actions Workflow

- **File Location**: `.github/workflows/deploy.yml`
- **Trigger Condition**: Push to `main` or `master` branch
- **Build Environment**: Ubuntu Latest + Node.js 18
- **Deployment Target**: GitHub Pages

### Vite Configuration

- **File Location**: `vite.config.ts`
- **Production base**: `/template-react-vite/`
- **Development base**: `./`

### Package.json Scripts

- `npm run build`: Build production version
- `npm run deploy`: Build and deploy to GitHub Pages
- `npm run preview`: Local preview of production build

## 🔧 Custom Configuration

### Modify Repository Name

If your repository name is not `template-react-vite`, you need to modify `vite.config.ts`:

```typescript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : './',
```

### Custom Domain

If you have a custom domain, create a `CNAME` file in the `public/` directory:

```bash
echo "your-domain.com" > public/CNAME
```

## 🐛 Common Issues

### 1. Blank Page After Deployment

- Check if the `base` configuration in `vite.config.ts` is correct
- Ensure the path matches your repository name

### 2. Resource File 404 Errors

- Confirm that GitHub Pages is properly enabled
- Check if the Actions workflow ran successfully

### 3. Routing Issues (SPA)

- GitHub Pages doesn't support SPA routing by default
- You can add a `404.html` file in the `public/` directory that redirects to `index.html`

### 4. Permission Errors

- Ensure that Actions permissions are enabled for the repository
- Check if `GITHUB_TOKEN` has sufficient permissions

## 📚 Related Links

- [GitHub Pages Official Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [gh-pages Package Documentation](https://www.npmjs.com/package/gh-pages)