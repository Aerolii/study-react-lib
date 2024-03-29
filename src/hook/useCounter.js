// 自定义一个 Hook
// 实现一个自定义累加器
// 累加器逻辑
// let count = 0
// const intervalId = setInterval(() => {
//   count += 1
// }, 1000)
// 在某个时间执行清除操作
// clearInterval(intervalId)

import { useEffect, useState } from 'react'

function counter(init = 0, delay = 1000) {
  return {
    run(cb) {
      return setInterval(() => cb(init), delay)
    },
    clean(id) {
      clearInterval(id)
    }
  }
}

export default function useCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const counterObj = counter()
    const intervalId = counterObj.run(() => setCount((c) => c + 1))
    return () => counterObj.clean(intervalId)
  }, [])
  return count
}
