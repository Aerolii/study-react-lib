// 使用 forwardRef 转发 ref
// 默认情况下，React 不允许通过 ref 访问自定义组件
// 因为 refs 是一种脱围机制，可能会导致组件DOM脆弱
// ref 可随时被修改，但不会触发渲染，并且如同 state 一样，可以保存组件内状态

import { forwardRef, useRef } from 'react'

const MyInput = forwardRef((props, ref) => (
  <input type="text" {...props} ref={ref} />
))

export default function RefForward() {
  const iptRef = useRef(null)

  return (
    <>
      <MyInput ref={iptRef} />
      <button onClick={() => iptRef.current.focus()}>
        点击按钮，输入框聚焦
      </button>
    </>
  )
}
