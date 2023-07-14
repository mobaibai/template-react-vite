import { Button } from 'antd'
import { animated, useSpring } from '@react-spring/web'
import { useAjax } from '@/lib/ajax'
import useSWR, { mutate } from 'swr'
import { useCountStore } from '@/stores/useCountStore'
import { useEffect, useRef } from 'react'

interface Props {
  title?: string
}
const Home: React.FC<Props> = (props) => {
  if (props.title) document.title = props.title

  const [countInc, countCut, count] = useCountStore(state => [state.inc, state.cut, state.count])
  const getDataOnce = useRef('0')

  const { get } = useAjax({ showLoading: true, handleError: true })
  // 获取类型列表
  const { data: testData, error: testError, isLoading: testIsLoading } = useSWR('/api/test/list', async path => {
    const res = await get<DataType<ResponseDataListType>>(path, { params: { count } })
    if (res.data && res.data.code && res.data.code === 200) {
      getDataOnce.current = '1'
      console.log('res', res)
      return res.data.data
    }
  })

  useEffect(() => {
    getDataOnce.current !== '0' && mutate('/api/test/list', { params: { count } })
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
    <div className="home-container p-10">
      <div className="count-action flex items-center justify-center">
        <Button onClick={countCut}>-</Button>
        <animated.div className='count-view mx-5' style={{ ...countStyles }} text="center 30px slate-600">
          {count}
        </animated.div>
        <Button onClick={countInc}>+</Button>
      </div>
    </div>
  )
}
export default Home
