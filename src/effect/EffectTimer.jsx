import { useEffect, useRef, useState } from 'react'

export default function EffectTimer() {
  const [count, setCount] = useState(0)
  const [increment, setIncrement] = useState(1)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((c) => c + increment)
    }, 1000)
    return () => clearInterval(timerId)
  }, [increment])

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
          onClick={() =>
            setIncrement((i) => {
              return i - 1
            })
          }
        >
          -
        </button>
        <b>{increment}</b>
        <button onClick={() => setIncrement((i) => i + 1)}>+</button>
      </div>
    </>
  )
}
