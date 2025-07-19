# 动画组件库

基于 `@react-spring/web` 构建的 React 动画组件库。

## 特性

- 高性能动画效果
- TypeScript 支持
- 组件化设计
- 丰富的预设动画
- 灵活的配置选项

## 快速开始

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

## 主要组件

### AnimationOpacity
透明度动画组件

### AnimationSpring
弹簧动画组件

### AnimationSlide
滑动动画组件

### AnimationScale
缩放动画组件

### AnimationRotate
旋转动画组件

### AnimationContainer
组合动画容器

## 许可证

MIT License
