# React Spring Animation Component Library

A high-performance, easy-to-use React animation component library built on `@react-spring/web`, providing rich animation effects and flexible configuration options.

## 🚀 Features

- **High Performance**: Built on `@react-spring/web`, utilizing hardware acceleration and optimized rendering mechanisms
- **TypeScript Support**: Complete type definitions for excellent development experience
- **Component-based Design**: Each animation effect is an independent component, easy to use and maintain
- **Rich Presets**: Provides various preset animation effects, ready to use out of the box
- **Flexible Configuration**: Supports custom animation parameters to meet various needs
- **Composite Animations**: Supports combination and sequential execution of multiple animation effects
- **Responsive**: Supports adjusting animation parameters based on screen size

## 📦 Installation

Ensure `@react-spring/web` is installed in your project:

```bash
npm install @react-spring/web
# or
yarn add @react-spring/web
```

## 🎯 Quick Start

### Basic Usage

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

### Using Preset Animations

```tsx
import { AnimationContainer, entranceAnimations } from '@/components/animations'

<AnimationContainer effects={[entranceAnimations.fadeInUp]}>
  <div>Using preset fade in up animation</div>
</AnimationContainer>
```

## 📚 Component Documentation

### AnimationOpacity - Opacity Animation

Used to implement opacity change animation effects.

```tsx
interface AnimationOpacityProps {
  fromOpacity?: number // Initial opacity (0-1)
  toOpacity?: number // Target opacity (0-1)
  duration?: number // Animation duration (ms)
  mode?: 'spring' | 'linear' // Animation mode
  tension?: number // Spring tension
  friction?: number // Spring friction
  mass?: number // Spring mass
  delay?: number // Delay time (ms)
  loop?: boolean // Whether to loop
  onRest?: () => void // Animation end callback
  children: React.ReactNode
}
```

**Examples:**

```tsx
// Linear fade in
<AnimationOpacity fromOpacity={0} toOpacity={1} duration={1000} mode="linear">
  <div>Linear fade in effect</div>
</AnimationOpacity>

// Spring fade in
<AnimationOpacity
  fromOpacity={0}
  toOpacity={1}
  mode="spring"
  tension={280}
  friction={60}
>
  <div>Spring fade in effect</div>
</AnimationOpacity>
```

### AnimationSpring - Spring Animation

Used to implement displacement animation with spring effects.

```tsx
interface AnimationSpringProps {
  direction?: 'top' | 'bottom' | 'left' | 'right' // Slide direction
  distance?: number // Slide distance (px)
  tension?: number // Spring tension
  friction?: number // Spring friction
  mass?: number // Spring mass
  fromOpacity?: number // Initial opacity
  toOpacity?: number // Target opacity
  duration?: number // Animation duration (overrides spring config)
  delay?: number // Delay time (ms)
  onRest?: () => void // Animation end callback
  children: React.ReactNode
}
```

**Examples:**

```tsx
// Slide in from top
<AnimationSpring direction="top" distance={50} tension={300}>
  <div>Slide in from top</div>
</AnimationSpring>

// Slide in from left with opacity change
<AnimationSpring
  direction="left"
  distance={30}
  fromOpacity={0}
  toOpacity={1}
>
  <div>Fade and slide in from left</div>
</AnimationSpring>
```

### AnimationSlide - Slide Animation

Provides animation effects for various slide directions.

```tsx
type SlideDirection =
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp'
  | 'slideInDown'
  | 'slideOutLeft'
  | 'slideOutRight'
  | 'slideOutUp'
  | 'slideOutDown'

interface AnimationSlideProps {
  direction?: SlideDirection // Slide direction
  distance?: number // Slide distance (px)
  duration?: number // Animation duration (ms)
  mode?: 'spring' | 'linear' // Animation mode
  tension?: number // Spring tension
  friction?: number // Spring friction
  delay?: number // Delay time (ms)
  onRest?: () => void // Animation end callback
  children: React.ReactNode
}
```

**Examples:**

```tsx
// Slide in from left
<AnimationSlide direction="slideInLeft" distance={100}>
  <div>Slide in from left</div>
</AnimationSlide>

// Slide out up
<AnimationSlide direction="slideOutUp" duration={800}>
  <div>Slide out up</div>
</AnimationSlide>
```

### AnimationScale - Scale Animation

Provides animation for various scaling effects.

```tsx
type ScaleType = 'scaleIn' | 'scaleOut' | 'pulse' | 'bounce'

interface AnimationScaleProps {
  scaleType?: ScaleType // Scale type
  fromScale?: number // Initial scale ratio
  toScale?: number // Target scale ratio
  fromOpacity?: number // Initial opacity
  toOpacity?: number // Target opacity
  duration?: number // Animation duration (ms)
  mode?: 'spring' | 'linear' // Animation mode
  tension?: number // Spring tension
  friction?: number // Spring friction
  loop?: boolean // Whether to loop
  delay?: number // Delay time (ms)
  onRest?: () => void // Animation end callback
  children: React.ReactNode
}
```

**Examples:**

```tsx
// Scale in entrance
<AnimationScale scaleType="scaleIn" fromScale={0} toScale={1}>
  <div>Scale in entrance</div>
</AnimationScale>

// Pulse effect
<AnimationScale scaleType="pulse" fromScale={1} toScale={1.1} loop>
  <div>Pulse effect</div>
</AnimationScale>
```

### AnimationRotate - Rotation Animation

Provides animation for various rotation effects.

```tsx
type RotateType = 'rotateIn' | 'rotateOut' | 'spin' | 'flip'

interface AnimationRotateProps {
  rotateType?: RotateType // Rotation type
  fromRotate?: number // Initial rotation angle (degrees)
  toRotate?: number // Target rotation angle (degrees)
  fromOpacity?: number // Initial opacity
  toOpacity?: number // Target opacity
  duration?: number // Animation duration (ms)
  mode?: 'spring' | 'linear' // Animation mode
  tension?: number // Spring tension
  friction?: number // Spring friction
  loop?: boolean // Whether to loop
  delay?: number // Delay time (ms)
  onRest?: () => void // Animation end callback
  children: React.ReactNode
}
```

**Examples:**

```tsx
// Rotate in entrance
<AnimationRotate rotateType="rotateIn" fromRotate={-180} toRotate={0}>
  <div>Rotate in entrance</div>
</AnimationRotate>

// Continuous rotation
<AnimationRotate rotateType="spin" fromRotate={0} toRotate={360} loop>
  <div>Continuous rotation</div>
</AnimationRotate>
```

### AnimationContainer - Composite Animation

Used to combine multiple animation effects, supporting parallel or sequential execution.

```tsx
interface AnimationContainerProps {
  effects: AnimationEffect[] // Animation effects array
  mode?: 'parallel' | 'sequence' // Execution mode
  delay?: number // Global delay (ms)
  stagger?: number // Stagger delay (ms)
  loop?: boolean // Whether to loop
  onRest?: () => void // Animation end callback
  children: React.ReactNode
}
```

**Examples:**

```tsx
// Parallel animation
<AnimationContainer
  effects={[
    { type: 'opacity', config: { fromOpacity: 0, toOpacity: 1 } },
    { type: 'scale', config: { scaleType: 'scaleIn', fromScale: 0.5, toScale: 1 } }
  ]}
  mode="parallel"
>
  <div>Fade in + Scale</div>
</AnimationContainer>

// Sequential animation
<AnimationContainer
  effects={[
    { type: 'spring', config: { direction: 'top', distance: 30 } },
    { type: 'opacity', config: { fromOpacity: 0, toOpacity: 1 } }
  ]}
  mode="sequence"
  stagger={200}
>
  <div>Slide in first, then fade in</div>
</AnimationContainer>
```

### AnimationSequence - Sequence Animation

Used to create complex animation sequences with precise control over multiple steps.

```tsx
interface AnimationStep {
  name: string // Step name
  to: Record<string, any> // Target state
  config?: SpringConfig // Spring configuration
  delay?: number // Delay time (ms)
}

interface AnimationSequenceProps {
  steps: AnimationStep[] // Animation steps
  initialState?: Record<string, any> // Initial state
  loop?: boolean // Whether to loop
  globalDelay?: number // Global delay (ms)
  onStepComplete?: (stepName: string) => void // Step complete callback
  onComplete?: () => void // Sequence complete callback
  children: React.ReactNode
}
```

**Examples:**

```tsx
const steps = [
  {
    name: 'prepare',
    to: { opacity: 0, scale: 0.5, y: -50 },
    config: { duration: 0 }
  },
  {
    name: 'fadeIn',
    to: { opacity: 1 },
    config: { tension: 280, friction: 60 },
    delay: 200
  },
  {
    name: 'slideDown',
    to: { y: 0 },
    config: { tension: 300, friction: 10 },
    delay: 300
  },
  {
    name: 'scaleUp',
    to: { scale: 1 },
    config: { tension: 200, friction: 8 },
    delay: 200
  }
]

<AnimationSequence steps={steps}>
  <div>Complex sequence animation</div>
</AnimationSequence>
```

## 🎨 Preset Animations

The library provides rich preset animations that can be used directly:

### Entrance Animations

```tsx
import { entranceAnimations } from '@/components/animations'

// Available entrance animations
entranceAnimations.fadeIn
entranceAnimations.fadeInUp
entranceAnimations.fadeInDown
entranceAnimations.slideInLeft
entranceAnimations.zoomIn
entranceAnimations.bounceIn
// ... more
```

### Exit Animations

```tsx
import { exitAnimations } from '@/components/animations'

// Available exit animations
exitAnimations.fadeOut
exitAnimations.fadeOutUp
exitAnimations.slideOutLeft
exitAnimations.zoomOut
// ... more
```

### Attention Animations

```tsx
import { attentionAnimations } from '@/components/animations'

// Available attention animations
attentionAnimations.pulse
attentionAnimations.shake
attentionAnimations.heartBeat
attentionAnimations.flash
// ... more
```

## 🛠️ Utility Functions

### Spring Configuration

```tsx
import { springConfigs } from '@/components/animations'

// Preset spring configurations
springConfigs.default // Default configuration
springConfigs.gentle // Gentle
springConfigs.wobbly // Wobbly
springConfigs.stiff // Stiff
springConfigs.slow // Slow
springConfigs.molasses // Molasses
```

### Creating Custom Configurations

```tsx
import { createSpringConfig, createLinearConfig } from '@/components/animations'

// Create spring configuration
const customSpring = createSpringConfig({
  tension: 280,
  friction: 60,
  mass: 1,
})

// Create linear configuration
const customLinear = createLinearConfig({
  duration: 1000,
  easing: 'easeInOut',
})
```

### Stagger Animation

```tsx
import { createStaggerConfig } from '@/components/animations'

// Create stagger animation configuration
const staggerConfig = createStaggerConfig(
  5, // Number of elements
  entranceAnimations.fadeInUp, // Base animation
  {
    baseDelay: 0,
    increment: 100, // Each element delays 100ms
    reverse: false,
  }
)
```

## 📱 Responsive Animations

Adjust animation parameters based on screen size:

```tsx
import { responsiveAnimations } from '@/components/animations'

// Get responsive configuration
const isMobile = window.innerWidth < 768
const config = isMobile
  ? responsiveAnimations.mobile
  : responsiveAnimations.desktop

<AnimationSpring
  distance={config.distance}
  {...config.springConfig}
>
  <div>Responsive animation</div>
</AnimationSpring>
```

## 🎯 Best Practices

### 1. Performance Optimization

- Use `will-change` CSS property to enable hardware acceleration
- Avoid modifying layout properties during animation
- Use `transform` and `opacity` for animations

```tsx
// ✅ Good practice
<AnimationOpacity fromOpacity={0} toOpacity={1}>
  <div style={{ willChange: 'opacity, transform' }}>
    Content
  </div>
</AnimationOpacity>

// ❌ Avoid
<div style={{ animation: 'slideIn 1s ease-in-out' }}>
  Content
</div>
```

### 2. Animation Duration

- Short distance movement: 200-300ms
- Medium distance movement: 300-500ms
- Long distance movement or complex animations: 500-800ms
- Avoid animations longer than 1 second

### 3. Easing Function Selection

- Entrance animations: Use `easeOut` type
- Exit animations: Use `easeIn` type
- Interactive feedback: Use `easeInOut` type

### 4. Composite Animations

```tsx
// Recommended: Use AnimationContainer to combine multiple effects
<AnimationContainer
  effects={[
    { type: 'opacity', config: { fromOpacity: 0, toOpacity: 1 } },
    { type: 'spring', config: { direction: 'bottom', distance: 20 } },
  ]}
  mode="parallel"
>
  <Card>Content</Card>
</AnimationContainer>
```

### 5. Conditional Animations

```tsx
const [isVisible, setIsVisible] = useState(false)

return (
  <>
    <button onClick={() => setIsVisible(!isVisible)}>Toggle Display</button>

    {isVisible && (
      <AnimationOpacity fromOpacity={0} toOpacity={1}>
        <div>Conditionally displayed content</div>
      </AnimationOpacity>
    )}
  </>
)
```

### 6. List Animations

```tsx
const items = ['Item 1', 'Item 2', 'Item 3']

return (
  <div>
    {items.map((item, index) => (
      <AnimationSpring
        key={item}
        direction="left"
        delay={index * 100} // Stagger delay
      >
        <div>{item}</div>
      </AnimationSpring>
    ))}
  </div>
)
```

## 🔧 Custom Hooks

The library also provides custom hooks for more flexible control:

```tsx
import { useSlideAnimation, useScaleAnimation } from '@/components/animations'

const MyComponent = () => {
  const [slideProps, slideApi] = useSlideAnimation({
    direction: 'slideInLeft',
    distance: 50,
  })

  const handleClick = () => {
    slideApi.start({
      to: { x: 100 },
      config: { tension: 300, friction: 10 },
    })
  }

  return (
    <animated.div style={slideProps} onClick={handleClick}>
      Click me
    </animated.div>
  )
}
```

## 📖 Examples

Check the `examples.tsx` file for complete usage examples, or import the `AnimationExamples` component in your project to see live demonstrations.

```tsx
import { AnimationExamples } from '@/components/animations'

// Use in your application
<AnimationExamples />
```

## 🤝 Contributing

Welcome to submit Issues and Pull Requests to improve this animation component library!

## 📄 License

MIT License