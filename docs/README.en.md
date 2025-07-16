# React + TypeScript + Vite Modern Frontend Template

A modern frontend project template built with **Vite + React 19 + TypeScript**, featuring a rich animation component library, comprehensive development toolchain, and best practices. Designed specifically for modern web application development, providing complete animation solutions and excellent user experience.

## ✨ Project Features

### 🎨 Complete Animation Component Library
- High-performance animation system built on `@react-spring/web`
- Includes opacity, spring, slide, scale, rotate, composite, and sequence animation effects
- Complete TypeScript support with intelligent code completion
- Rich preset animations and flexible custom configurations
- Support for parallel and sequential animation combinations
- Built-in animation examples and interactive demo pages
- Optimized scrolling experience with smooth scrolling for long content

### 🚀 Modern Technology Stack
- **React 19** - Latest React framework with concurrent features and newest Hooks
- **TypeScript 5.8** - Type-safe JavaScript superset with powerful development-time support
- **Vite 6** - Ultra-fast build tool and dev server with HMR and fast cold start
- **Ant Design 5** - Enterprise-class UI design language and component library
- **UnoCSS** - Instant on-demand atomic CSS engine with zero runtime overhead
- **Zustand** - Lightweight state management library, simple and easy to use
- **React Router 7** - Declarative routing system with nested routes and lazy loading
- **SWR** - Data fetching and caching library for excellent user experience
- **Axios** - HTTP client with request interceptors and response handling

### 🏗️ Excellent Project Architecture
- Component-based design with separation of concerns and high reusability
- Modular file organization with clear directory structure
- Lazy loading and code splitting optimization for improved loading performance
- Comprehensive TypeScript type definitions to reduce runtime errors
- Unified code standards and best practices
- Responsive design and scroll optimization for various devices
- Complete error boundaries and loading state handling

## 📦 Installation and Usage

### Requirements
- Node.js >= 18
- pnpm >= 8 (recommended)

### Quick Start

```bash
# Clone the project
git clone <repository-url>
cd template-react-vite

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Format code
pnpm format

# Check code formatting
pnpm format:check

# Deploy to GitHub Pages
pnpm deploy
```

## 🚀 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages with two deployment options:

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages**:
   - Go to your GitHub repository settings page
   - Find the "Pages" option
   - Select "GitHub Actions" in "Source"

2. **Push code to trigger deployment**:
   ```bash
   git add .
   git commit -m "feat: add GitHub Pages deployment configuration"
   git push origin main
   ```

3. **Check deployment status**:
   - View build status in the "Actions" tab of your GitHub repository
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

## Development Environment Configuration

### VS Code Configuration

The project includes VS Code workspace settings supporting:

- **Auto-format on save**: Automatically format code with Prettier
- **ESLint auto-fix**: Automatically fix ESLint errors on save
- **Import sorting**: Automatically organize and sort import statements
- **Recommended extensions**: Automatically recommend necessary VS Code extensions

### Recommended Extensions

- `esbenp.prettier-vscode` - Prettier code formatting
- `dbaeumer.vscode-eslint` - ESLint code checking
- `bradlc.vscode-tailwindcss` - Tailwind CSS IntelliSense
- `antfu.unocss` - UnoCSS support
- `ms-vscode.vscode-typescript-next` - Enhanced TypeScript support

## 🎯 Core Features

### Animation Component Library

The project includes a complete animation component library located in `src/components/animations/`:

#### Basic Animation Components
- **AnimationOpacity** - Opacity animations
- **AnimationSpring** - Spring animations
- **AnimationSlide** - Slide animations
- **AnimationScale** - Scale animations
- **AnimationRotate** - Rotation animations

#### Advanced Animation Components
- **AnimationContainer** - Composite animation container
- **AnimationSequence** - Sequential animations

#### Usage Examples

```tsx
import { 
  AnimationOpacity, 
  AnimationSpring, 
  AnimationContainer,
  AnimationSequence 
} from '@/components/animations'

// Opacity animation
<AnimationOpacity fromOpacity={0} toOpacity={1} duration={500}>
  <div>Fade in effect</div>
</AnimationOpacity>

// Spring animation
<AnimationSpring direction="top" distance={30}>
  <div>Slide in from top</div>
</AnimationSpring>

// Composite animation
<AnimationContainer
  effects={[
    { type: 'opacity', config: { fromOpacity: 0, toOpacity: 1 } },
    { type: 'scale', config: { type: 'scaleIn', fromScale: 0.5, toScale: 1 } }
  ]}
  mode="parallel"
>
  <div>Composite animation effect</div>
</AnimationContainer>

// Sequential animation
<AnimationSequence
  steps={[
    { type: 'opacity', config: { fromOpacity: 0, toOpacity: 1 }, duration: 300 },
    { type: 'spring', config: { direction: 'top', distance: 20 }, duration: 400 }
  ]}
>
  <div>Sequential animation effect</div>
</AnimationSequence>
```

### State Management

Using **Zustand** for lightweight state management:

```tsx
import { create } from 'zustand'

interface CountState {
  count: number
  increment: () => void
  decrement: () => void
}

const useCountStore = create<CountState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))
```

### Routing System

Using **React Router 7** with lazy loading:

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
    ],
  },
])
```

### Styling System

Using **UnoCSS** for atomic CSS with custom shortcuts:

```tsx
// Utility classes
<div className="flex-center p-4 bg-blue-500 text-white rounded-lg">
  Centered content
</div>

// Custom shortcuts
<div className="absolute-center">
  Absolutely centered
</div>
```

## 🛠️ Development Tools

### Code Quality

- **ESLint**: Code linting with React and TypeScript rules
- **Prettier**: Code formatting with import sorting
- **TypeScript**: Static type checking
- **Husky**: Git hooks for pre-commit checks (optional)

### Build and Optimization

- **Vite**: Fast build tool with HMR
- **SWC**: Fast TypeScript/JavaScript compiler
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Dead code elimination
- **Asset Optimization**: Image and font optimization

### Development Experience

- **Hot Module Replacement**: Instant updates during development
- **TypeScript IntelliSense**: Rich IDE support
- **Import Path Aliases**: Clean import statements with `@/` prefix
- **Environment Variables**: Support for different environments

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Animations/      # Animation component library
│   ├── Header.tsx       # Header component
│   ├── Loading.tsx      # Loading component
│   └── ...
├── pages/              # Page components
│   ├── home/           # Home page
│   ├── animations/     # Animation demo page
│   └── ...
├── hooks/              # Custom React hooks
├── stores/             # State management
├── router/             # Routing configuration
├── utils/              # Utility functions
├── styles/             # Global styles
├── config/             # Configuration files
└── assets/             # Static assets
```

## 🎨 Animation System

The animation system is built on `@react-spring/web` and provides:

### Preset Animations

```tsx
import { entranceAnimations, exitAnimations } from '@/components/animations'

// Entrance animations
entranceAnimations.fadeIn
entranceAnimations.slideInLeft
entranceAnimations.zoomIn

// Exit animations
exitAnimations.fadeOut
exitAnimations.slideOutRight
exitAnimations.zoomOut
```

### Custom Animations

```tsx
import { useSpring, animated } from '@react-spring/web'

const MyComponent = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 60 }
  })

  return <animated.div style={styles}>Custom animation</animated.div>
}
```

## 🚀 Performance Optimization

### Code Splitting

The project is configured with route-based code splitting:

```tsx
// Route-level lazy loading
const Home = lazy(() => import('@/pages/home'))
const Animations = lazy(() => import('@/pages/animations'))

// Component-level lazy loading
const HeavyComponent = lazy(() => import('./HeavyComponent'))
```

### Build Optimization

- **Tree Shaking**: Automatically removes unused code
- **Asset Compression**: Automatic compression of JS, CSS, and images
- **Caching Strategy**: Long-term caching for static assets
- **Preloading**: Critical resource preloading

### Runtime Optimization

```tsx
// Use React.memo to optimize component rendering
const OptimizedComponent = React.memo(({ data }) => {
  return <div>{data}</div>
})

// Use useMemo to cache computed values
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data)
}, [data])

// Use useCallback to cache functions
const handleClick = useCallback(() => {
  // Handle click event
}, [dependency])
```

## 🛡️ Best Practices

### Component Design Principles

1. **Single Responsibility**: Each component handles one functionality
2. **Reusability**: Configure component behavior through props
3. **Testability**: Write easily testable components
4. **Accessibility**: Follow WCAG accessibility guidelines

### State Management Principles

1. **Minimize State**: Only store necessary state
2. **State Normalization**: Avoid duplicate and nested state structures
3. **Proper Layering**: Distinguish between local and global state
4. **Immutable Updates**: Use immutable ways to update state

### Performance Best Practices

1. **Avoid Unnecessary Renders**: Use memo, useMemo, useCallback
2. **Optimize List Rendering**: Use key props and virtual scrolling
3. **Image Optimization**: Use WebP format and lazy loading
4. **Network Optimization**: Use SWR for data caching

## 🧪 Testing

The project supports multiple testing approaches:

```bash
# Run unit tests
pnpm test

# Run tests with file watching
pnpm test:watch

# Generate test coverage report
pnpm test:coverage

# Run E2E tests
pnpm test:e2e
```

### Testing Example

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

## 🚀 Deployment

### Local Preview

```bash
# Build the project
pnpm build

# Preview build results
pnpm preview
```

### GitHub Pages Deployment

#### Automatic Deployment (Recommended)

The project is configured with GitHub Actions for automatic deployment:

1. Push code to the `main` or `master` branch
2. GitHub Actions automatically builds and deploys to GitHub Pages
3. Access your site at `https://username.github.io/repository-name`

#### Manual Deployment

```bash
# One-click deployment to GitHub Pages
pnpm deploy
```

### Netlify Deployment

#### Method 1: Connect GitHub Repository

1. Login to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Select your GitHub repository
4. Build settings:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   - Environment variables: `DEPLOY_TARGET=netlify`

#### Method 2: Drag and Drop Deployment

```bash
# Build the project
DEPLOY_TARGET=netlify pnpm build

# Drag the dist folder to Netlify deployment page
```

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The project can be deployed to any static hosting platform:

- **Surge.sh**: `surge dist`
- **Firebase Hosting**: `firebase deploy`
- **AWS S3**: Upload `dist` folder
- **Alibaba Cloud OSS**: Upload `dist` folder

### Deployment Configuration

Set corresponding environment variables for different platforms:

```bash
# GitHub Pages
DEPLOY_TARGET=github pnpm build

# Netlify
DEPLOY_TARGET=netlify pnpm build

# Other platforms
DEPLOY_TARGET=other pnpm build
```

### Environment Variables

Create corresponding environment files in the project root:

```bash
# .env.development - Development environment
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_TITLE=React Template (Dev)
VITE_APP_ENV=development

# .env.production - Production environment
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=React Template
VITE_APP_ENV=production

# .env.local - Local override (not committed to Git)
VITE_API_KEY=your-secret-api-key
```

### Deployment Considerations

1. **Routing Configuration**: SPA applications need server redirect to `index.html`
2. **HTTPS**: Recommended for production environments
3. **Caching Strategy**: Configure appropriate cache headers
4. **Compression**: Enable Gzip/Brotli compression
5. **CDN**: Use CDN to accelerate static asset access

## 🛡️ Security

### Environment Variable Security

- Use `.env.local` file for sensitive information (not committed)
- Set environment variables through deployment platform in production
- Don't hardcode sensitive information in frontend code

### Content Security Policy (CSP)

```html
<!-- Add CSP header in index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
```

### XSS Protection

```tsx
// Use DOMPurify to sanitize user input
import DOMPurify from 'dompurify'

const SafeHTML = ({ html }: { html: string }) => {
  const cleanHTML = DOMPurify.sanitize(html)
  return <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
}
```

## 📱 Responsive Design

### Breakpoint System

The project uses UnoCSS responsive breakpoints:

```css
/* Mobile first */
.container {
  @apply w-full px-4;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    @apply max-w-2xl mx-auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    @apply max-w-4xl;
  }
}
```

### Responsive Components

```tsx
import { useWindowSize } from '@/hooks/useWindowSize'

const ResponsiveComponent = () => {
  const { width } = useWindowSize()
  const isMobile = width < 768
  
  return (
    <div className={`
      ${isMobile ? 'flex-col' : 'flex-row'}
      flex gap-4
    `}>
      {/* Responsive content */}
    </div>
  )
}
```

### Mobile Optimization

- **Touch Friendly**: Buttons and links with at least 44px touch area
- **Scroll Optimization**: Use `scroll-behavior: smooth`
- **Viewport Settings**: Proper viewport meta tag
- **Performance Optimization**: Image lazy loading and compression

## 🔧 Configuration

### Theme Customization

Modify the theme color in `src/config/index.ts`:

```typescript
export const ThemePrimary: string = '#13c2c2' // Change to your theme color
```

### Adding New Animation Presets

Add to `src/components/Animations/presets.ts`:

```typescript
export const customAnimations = {
  myCustomAnimation: {
    type: 'spring',
    config: {
      direction: 'top',
      distance: 50,
      tension: 300,
      friction: 10
    }
  }
}
```

### API Configuration

Configure API endpoints in `src/config/index.ts`:

```typescript
const development: BaseApiType = {
  API_BASE_URL: 'http://localhost:3000/api',
  API_RESOURCE_URL: 'http://localhost:3000'
}

const production: BaseApiType = {
  API_BASE_URL: 'https://your-api.com/api',
  API_RESOURCE_URL: 'https://your-cdn.com'
}
```

### Environment Variables

```bash
# .env.local
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=My App
```

### Vite Configuration

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
```

## 🧪 Testing

The project is ready for testing with:

- **Vitest**: Fast unit testing framework
- **React Testing Library**: Component testing utilities
- **jsdom**: DOM environment for testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

## 📱 Responsive Design

The template includes responsive design patterns:

```tsx
// Responsive utilities
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div className="p-4">Responsive grid item</div>
</div>

// Responsive animations
const isMobile = window.innerWidth < 768
const distance = isMobile ? 20 : 50

<AnimationSpring direction="top" distance={distance}>
  <div>Responsive animation</div>
</AnimationSpring>
```

## 🚀 Performance Optimization

### Code Splitting

```tsx
// Route-based code splitting
const LazyComponent = lazy(() => import('./LazyComponent'))

// Component-based code splitting
const HeavyComponent = lazy(() => 
  import('./HeavyComponent').then(module => ({
    default: module.HeavyComponent
  }))
)
```

### Bundle Analysis

```bash
# Analyze bundle size
pnpm build
npx vite-bundle-analyzer dist
```

### Performance Monitoring

```tsx
// Performance monitoring with Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

getCLS(console.log)
getFID(console.log)
getFCP(console.log)
getLCP(console.log)
getTTFB(console.log)
```

## 🔒 Security

### Content Security Policy

```html
<!-- In index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
```

### Environment Security

```typescript
// Secure environment variable handling
const apiUrl = import.meta.env.VITE_API_URL
if (!apiUrl) {
  throw new Error('API URL is required')
}
```

## 📚 Learning Resources

### Official Documentation

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [UnoCSS Documentation](https://unocss.dev/)
- [React Spring Documentation](https://react-spring.dev/)
- [Ant Design Components](https://ant.design/components/overview/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)

### Recommended Reading

- [React 19 Features](https://react.dev/blog/2024/04/25/react-19)
- [TypeScript Best Practices](https://typescript-eslint.io/docs/)
- [Vite Performance Optimization](https://vitejs.dev/guide/performance.html)
- [Modern CSS Solutions](https://web.dev/learn/css/)

## 🤝 Contributing

We welcome all forms of contributions!

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style
- Add appropriate TypeScript types
- Write documentation for new features
- Ensure all tests pass
- Follow [Conventional Commits](https://www.conventionalcommits.org/) specification

### Reporting Issues

If you find bugs or have feature suggestions:

1. Check if there are existing related issues
2. Create a new issue with detailed description
3. Provide reproduction steps and environment information

## 📄 License

This project is licensed under the [MIT License](../LICENSE).

## 📚 Related Documentation

### Main Documentation
- [English Documentation](README.en.md) (Current Document)
- [中文文档](../README.md)

### Specialized Documentation
- [Animation Component Library Documentation](animations.en.md) | [动画组件库文档](animations.md)
- [Deployment Guide](deploy.en.md) | [部署指南](deploy.md)
- [GitHub Pages Setup Guide](github-pages-setup.en.md) | [GitHub Pages 设置指南](github-pages-setup.md)

## 🙏 Acknowledgments

Thanks to the following open source projects and contributors:

- [React](https://react.dev/) - User interface library
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type system
- [UnoCSS](https://unocss.dev/) - CSS engine
- [React Spring](https://react-spring.dev/) - Animation library
- [Ant Design](https://ant.design/) - UI component library
- All developers contributing to the open source community

---

**Start your modern React development journey!** 🚀

If this template helps you, please give us a ⭐️!