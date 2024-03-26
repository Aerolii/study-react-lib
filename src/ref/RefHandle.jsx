// 使用命令句柄暴露一部分 API
// 使用 useImperativeHandle 限制暴露的功能

import { forwardRef, useImperativeHandle, useRef } from 'react'

const MyInput = forwardRef((props, ref) => {
  const refInput = useRef(null)
  useImperativeHandle(ref, () => ({
    focus() {
      refInput.current.focus()
    }
  }))
  return <input type="text" ref={refInput} />
})

export default function RefHandle() {
  const iptRef = useRef(null)

  return (
    <>
      <MyInput ref={iptRef} />
      <button onClick={() => iptRef.current.focus()}>获取焦点</button>
    </>
  )
}
