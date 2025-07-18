import { AnimationOpacity, AnimationScale } from '@/components/Animations'
import { useTitle } from '@/hooks/useTitle'
import { useCountStore } from '@/stores/useCountStore'
import { Button, Skeleton } from 'antd'
import React from 'react'

interface Props {
  title?: string
}
export const Home: React.FC<Props> = props => {
  if (props.title) useTitle(props.title)

  const { inc, cut, count } = useCountStore()

  return (
    <div className="home-container p-10 max-w-6xl mx-auto">
      {/* 计数器功能 */}
      <AnimationOpacity fromOpacity={0} toOpacity={1} duration={800}>
        <h2 className="text-2xl font-bold text-center mb-6">计数器</h2>
        <div className="count-action flex items-center justify-center rainbow-text">
          <AnimationScale
            type="scaleIn"
            fromScale={0.8}
            toScale={1}
            delay={300}
          >
            <Button onClick={cut} size="large">
              -
            </Button>
          </AnimationScale>
          <div className="count-view w-20 text-4xl font-bold text-center">
            {count}
          </div>
          <AnimationScale
            type="scaleIn"
            fromScale={0.8}
            toScale={1}
            delay={500}
          >
            <Button onClick={inc} size="large">
              +
            </Button>
          </AnimationScale>
        </div>
      </AnimationOpacity>
    </div>
  )
}

export const HomeSkeleton = () => {
  return (
    <div className="home-skeleton p-[20px]">
      <Skeleton active />
    </div>
  )
}

// 默认导出以支持动态导入
export default Home
