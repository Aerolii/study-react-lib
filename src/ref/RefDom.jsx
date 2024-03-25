import { useRef } from 'react'

export default function RefDOM() {
  const ipt = useRef(null)

  function handleClick() {
    ipt.current.focus()
  }
  return (
    <>
      <input type="text" ref={ipt} />
      <button onClick={handleClick}>输入框获取焦点</button>
    </>
  )
}
