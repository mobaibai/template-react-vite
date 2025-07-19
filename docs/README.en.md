# React + TypeScript + Vite Modern Frontend Template

A modern frontend project template built with **React 19 + TypeScript + Vite**, featuring a rich animation component library and comprehensive development toolchain.

## ✨ Core Features

- 🎨 **Complete Animation Component Library** - High-performance animation system based on `@react-spring/web`
- 🚀 **Modern Technology Stack** - React 19 + TypeScript + Vite + UnoCSS
- 📱 **Responsive Design** - Adapts to various devices and screen sizes
- 🛠️ **Development Toolchain** - ESLint + Prettier + VS Code configuration
- 📦 **State Management** - Zustand lightweight state management
- 🔄 **Routing System** - React Router 7 + lazy loading
- 🎯 **TypeScript** - Complete type support and intelligent hints

## 📦 Quick Start

### Environment Requirements
- Node.js >= 18
- pnpm >= 8 (recommended)

### Installation and Usage

```bash
# Clone project
git clone <repository-url>
cd template-react-new

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build production version
pnpm build
```

### Main Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build production version
pnpm preview      # Preview build results
pnpm format       # Code formatting
pnpm deploy       # Deploy to GitHub Pages
```

## 🚀 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages, supporting two deployment methods:

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages**:
   - Go to GitHub repository settings page
   - Find "Pages" option
   - Select "GitHub Actions" in "Source"

2. **Push code to trigger deployment**:

   ```bash
   git add .
   git commit -m "feat: add GitHub Pages deployment configuration"
   git push origin main
   ```

3. **Check deployment status**:
   - View build status in repository "Actions" tab
   - After successful deployment, visit `https://your-username.github.io/template-react-vite/`

### Manual Deployment

If manual deployment is needed:

```bash
# Install gh-pages dependency (if not already installed)
pnpm install

# Build and deploy
pnpm deploy
```

### Deployment Configuration

- **GitHub Actions Workflow**: `.github/workflows/deploy.yml`
- **Build Output Directory**: `dist/`
- **Deployment Branch**: `gh-pages`
- **Access Path**: `/template-react-vite/` (production environment)

### Custom Domain (Optional)

If you have a custom domain, create a `CNAME` file in the `public/` directory:

```bash
echo "your-domain.com" > public/CNAME
```

## 📁 Project Structure

```
src/
├── components/              # Reusable components
│   ├── Animations/          # Animation component library
│   ├── Header.tsx           # Header component
│   ├── Loading.tsx          # Loading component
│   └── ...
├── pages/                   # Page components
│   ├── home/                # Home page
│   ├── animations/          # Animation demo page
│   └── ...
├── hooks/                   # Custom Hooks
├── stores/                  # State management (Zustand)
├── router/                  # Routing configuration
├── utils/                   # Utility functions
├── styles/                  # Style files
└── config/                  # Configuration files
```

## 🎯 Core Features

### Animation Component Library

Built-in complete animation component library based on `@react-spring/web`:

- **AnimationOpacity** - Opacity animations
- **AnimationSpring** - Spring animations
- **AnimationSlide** - Slide animations
- **AnimationScale** - Scale animations
- **AnimationRotate** - Rotation animations
- **AnimationContainer** - Composite animation container
- **AnimationSequence** - Sequential animations

```tsx
import { AnimationOpacity, AnimationSpring } from '@/components/animations'

// Opacity animation
<AnimationOpacity fromOpacity={0} toOpacity={1} duration={500}>
  <div>Fade in effect</div>
</AnimationOpacity>

// Spring animation
<AnimationSpring direction="top" distance={30}>
  <div>Slide in from top</div>
</AnimationSpring>
```

### State Management

Using **Zustand** for lightweight state management:

```tsx
import { create } from 'zustand'

const useCountStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}))

// Use in components
const { count, increment } = useCountStore()
```

### Styling System

Using **UnoCSS** atomic CSS:

```tsx
<div className="flex-center p-4 bg-blue-500 text-white rounded-lg">
  Centered content
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

## 🚀 Deployment

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch to trigger automatic deployment

### Other Platforms

- **Netlify**: Connect repository for automatic deployment
- **Vercel**: Import project for instant deployment
- **Local Preview**: `npm run preview` after build

---

## 📚 Documentation

- [Animation Components](./animations.en.md) - Detailed animation component documentation
- [Deployment Guide](./deploy.en.md) - Complete deployment instructions
- [GitHub Pages Setup](./github-pages-setup.en.md) - GitHub Pages configuration guide

## 📄 License

MIT License