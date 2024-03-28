import { useState } from 'react'
import useAnimationLoop from './useAnimationLoop'

export default function useFadeInAnimation(ref, duration) {
  const [isRunning, setIsRunning] = useState(true)
  // const distance = document.body.clientWidth

  useAnimationLoop(isRunning, (timePassed) => {
    // ref.current.style.opacity = 1
    // 计算当前动画执行进度
    const progress = Math.min(timePassed / duration, 1)
    ref.current.style.opacity = progress
    // ref.current.style.transform = `translateX(${progress * distance}px)`
    if (progress === 1) {
      setIsRunning(false)
    }
  })
}
