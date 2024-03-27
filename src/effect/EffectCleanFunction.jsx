import { useEffect, useState } from 'react'
export const getShow = (show) => (!show ? '显示' : '隐藏')

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalFn = () => {
      setCount(count + 1)
    }
    const intervalId = setInterval(intervalFn, 1000)
    return () => clearInterval(intervalId)
  }, [count])

  return (
    <p>
      <b>{count}</b>
    </p>
  )
}

export default function EffectCleanFunction() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={() => setShow(!show)}>{getShow(show)}</button>
      {show && <Counter />}
    </>
  )
}
