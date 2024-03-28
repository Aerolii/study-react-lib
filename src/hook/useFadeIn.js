import { useEffect } from 'react'

// 自定义淡入动画
export default function useFadeIn(ref, duration) {
  useEffect(() => {
    const node = ref.current
    let startTime = performance.now()
    let frameId = null
    console.log('startTime 1:>> ', startTime)

    function onFrame(now) {
      const timePassed = now - startTime
      const progress = Math.min(timePassed / duration, 1)
      onProgress(progress)
      if (progress < 1) {
        frameId = requestAnimationFrame(onFrame)
      }
    }

    function onProgress(progress) {
      node.style.opacity = progress
    }

    function start() {
      onProgress(0)
      startTime = performance.now()
      console.log('startTime 2:>> ', startTime)
      frameId = requestAnimationFrame(onFrame)
    }

    function stop() {
      cancelAnimationFrame(frameId)
      frameId = null
      startTime = null
    }

    start()

    return () => stop()
  }, [ref, duration])
}
