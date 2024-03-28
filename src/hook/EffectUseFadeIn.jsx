import { useRef, useState } from 'react'
import useFadeIn from './useFadeIn'

export default function EffectUseFadeIn() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? '隐藏' : '显示'}</button>
      {show && <Welcome />}
    </>
  )
}

function Welcome() {
  const ref = useRef(null)

  useFadeIn(ref, 1000)

  return (
    <h1 ref={ref} className="welcome">
      Welcome
    </h1>
  )
}
