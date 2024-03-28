import { useRef, useState } from 'react'
import useFadeInAnimation from './useFadeInAnimation'

export default function EffectAnimationFadeInUseHook() {
  const [show, setShow] = useState(false)
  const [duration, setDuration] = useState(1000)

  return (
    <>
      <label>
        <input
          type="range"
          value={duration}
          min={1000}
          max={5000}
          onChange={(e) => setDuration(e.target.value)}
        />
        动画执行时间：{duration}ms
      </label>
      <button onClick={() => setShow(!show)}>{show ? '隐藏' : '显示'}</button>

      {show && <Welcome duration={duration} />}
    </>
  )
}

function Welcome({ duration }) {
  const ref = useRef(null)
  useFadeInAnimation(ref, duration)

  return (
    <h1 ref={ref} className="welcome">
      Welcome
    </h1>
  )
}
