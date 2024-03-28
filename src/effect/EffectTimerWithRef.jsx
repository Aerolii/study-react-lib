import { useEffect, useRef, useState } from 'react'

export default function EffectTimerWithRef() {
  const [count, setCount] = useState(0)
  const [increment, setIncrement] = useState(1)
  const incrementRef = useRef(increment)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((c) => c + incrementRef.current)
    }, 1000)
    return () => clearInterval(timerId)
  }, [])

  const handleSetIncrement = (isAdd) => {
    const n = isAdd ? increment + 1 : increment - 1
    incrementRef.current = n
    setIncrement(n)
  }

  return (
    <>
      <h1>
        {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <div>
        Every second, increment by:
        <button
          disabled={increment === 0}
          onClick={() => handleSetIncrement(false)}
        >
          -
        </button>
        <b>{increment}</b>
        <button onClick={() => handleSetIncrement(true)}>+</button>
      </div>
    </>
  )
}
