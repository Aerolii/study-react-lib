import { useEffect, useState } from 'react'

// 使用 Effect 清理函数
export default function EffectPlayground() {
  const [show, setShow] = useState(true)

  return (
    <>
      <button onClick={() => setShow(!show)}>{`${
        show ? '挂载' : '卸载'
      }组件`}</button>
      {show ? <hr /> : <Playground />}
    </>
  )
}

function Playground() {
  const [text, setText] = useState('')

  useEffect(() => {
    function onTimeout() {
      console.log('clock: ' + text)
    }

    console.log('安排: ' + text)

    const timeoutId = setTimeout(onTimeout, 3000)

    return () => {
      clearTimeout(timeoutId)
      console.log('执行清理')
    }
  })

  return (
    <>
      <label>
        日志内容
        <input type="text" onChange={(e) => setText(e.target.value)} />
      </label>
      <p>{text}</p>
    </>
  )
}
