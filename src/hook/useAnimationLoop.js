// 动画循环关注点：
// 开始->结束
// 具体动画执行的回调

import { useEffect, useRef } from 'react'

export default function useAnimationLoop(isRunning, drawFrame) {
  // 由于是一个函数，因此应该啊脱离其依赖
  // 使用 useRef 可以减少实际执行过程中对函数修改的依赖
  const onFrame = useRef(drawFrame)
  console.log('useAnimationLoop :>> ', onFrame)
  useEffect(() => {
    // 如果一开始就处于关闭状态则不需要执行动画
    if (!isRunning) {
      return
    }
    const startTime = performance.now()
    let frameId
    const tick = () => {
      // 当前执行时间
      const timePassed = performance.now() - startTime
      onFrame.current(timePassed)
      frameId = requestAnimationFrame(tick)
    }

    tick()

    return () => cancelAnimationFrame(frameId)
  }, [isRunning])
}
