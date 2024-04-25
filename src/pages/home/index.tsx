import { Button, Skeleton } from 'antd'
import { animated, useSpring } from '@react-spring/web'
import { useCountStore } from '@/stores/useCountStore'
import { useEffect } from 'react'
import { useData } from '@/hooks/useData'
import { useTitle } from '@/hooks/useTitle'

interface Props {
  title?: string
}
export const Home: React.FC<Props> = (props) => {
  if (props.title) useTitle(props.title)

  const [countInc, countCut, count] = useCountStore(state => [state.inc, state.cut, state.count])

  // 获取类型列表
  const { data: testData, mutate: testMutate, error: testError, isLoading: testIsLoading, isValidating: testIsValidating } = useData({ method: 'get', path: '/api/test/list', params: { count } })

  useEffect(() => {
    testData && testMutate()
  }, [count])

  const countStyles = useSpring({
    from: { transform: 'rotateZ(0)' },
    loop: { transform: 'rotateZ(360deg)' },
    to: { transform: 'rotateZ(0)' },
    config: {
      duration: 180
    }
  })

  return (
    <div className='home-container p-10'>
      <div className='count-action flex items-center justify-center rainbow-text'>
        <Button onClick={countCut}>-</Button>
        <animated.div className='count-view mx-5' style={{ ...countStyles }} text='center 30px'>
          {count}
        </animated.div>
        <Button onClick={countInc}>+</Button>
      </div>
    </div>
  )
}

export const HomeSkeleton = () => {
  return (
    <div className='home-skeleton p-[20px]'>
      <Skeleton active />
    </div>
  )
}