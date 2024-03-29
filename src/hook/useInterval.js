import { useEffect } from 'react'

export default function useInterval(onTick, delay) {
  useEffect(() => {
    const intervalId = setInterval(onTick, delay)
    return () => clearInterval(intervalId)
  }, [onTick, delay])
}
