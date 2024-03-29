import {
  useEffect,
  useRef,
  experimental_useEffectEvent as useEffectEvent
} from 'react'

export default function useInterval(callback, delay) {
  const onTickRef = useRef(callback)
  useEffect(() => {
    const intervalId = setInterval(onTickRef.current, delay)
    return () => clearInterval(intervalId)
  }, [delay])

  // 正式版本尚未发布
  // const onTick = useEffectEvent(callback)
  // useEffect(() => {
  //   const id = setInterval(onTick, delay)
  //   return () => clearInterval(id)
  // }, [delay])
}
