import { AnimationExamples } from '@/components/Animations'
import { useTitle } from '@/hooks/useTitle'
import React from 'react'

interface Props {
  title?: string
}
const AnimationsPage: React.FC<Props> = props => {
  if (props.title) useTitle(props.title)

  return (
    <div className="animations-page h-screen overflow-y-auto overflow-x-hidden">
      <div className="min-h-full pb-8">
        <AnimationExamples />
      </div>
    </div>
  )
}

export default AnimationsPage
