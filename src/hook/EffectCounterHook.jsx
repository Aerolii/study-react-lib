import { useRef } from 'react'
import useCounterHook from './useCounterHook'
import useInterval from './useInterval'

export default function EffectCounterHook() {
  const count = useCounterHook(2, 2)
  return <h1>{count}</h1>
}

export const EffectCounterHookCharge = () => {
  const count = useCounterHook()
  const ref = useRef(null)

  useInterval(() => {
    const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`
    ref.current.style.backgroundColor = randomColor
  }, 2000)

  return (
    <>
      <div style={{ height: '100px' }} ref={ref}>
        Welcome
      </div>
      <h1>{count}</h1>
    </>
  )
}
