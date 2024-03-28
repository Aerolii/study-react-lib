// 使用 effect 触发淡入动画

import { useEffect, useRef, useState } from 'react'
import { FadeInAnimation } from '../animation'

function Welcome({ duration }) {
  const ref = useRef(null)
  // const [d] = useState(duration)

  // useEffect(() => {
  //   const animation = new FadeInAnimation(ref.current)
  //   // animation.start(durationRef.current)
  //   animation.start(d)
  //   return () => animation.stop()
  // }, [d])

  const durationRef = useRef(duration)

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current)
    animation.start(durationRef.current)
    return () => animation.stop()
  }, [])

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage:
          'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
      }}
    >
      欢迎
    </h1>
  )
}

export default function EffectAnimationFadeIn() {
  const [duration, setDuration] = useState(1000)
  const [show, setShow] = useState(false)

  return (
    <>
      <label>
        <input
          type="range"
          min="100"
          max="3000"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        />
        <br />
        淡入 interval: {duration} ms
      </label>
      <button onClick={() => setShow(!show)}>{show ? '移除' : '显示'}</button>
      <hr />
      {show && <Welcome duration={duration} />}
    </>
  )
}
