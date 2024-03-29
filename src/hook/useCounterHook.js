import { useState } from 'react'
import useInterval from './useInterval'

export default function useCounterHook(init = 0, step = 1) {
  const [count, setCount] = useState(init)

  useInterval(() => {
    setCount((c) => c + step)
  }, 1000)

  return count
}
