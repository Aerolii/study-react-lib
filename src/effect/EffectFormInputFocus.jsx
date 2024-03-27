// 使用 Effect 处理【渲染】引发的副作用

import { useEffect, useRef, useState } from 'react'

function AutoFocusInput({ text, onChange }) {
  const iptRef = useRef(null)
  useEffect(() => {
    iptRef.current.focus()
  }, [])
  return (
    <input
      ref={iptRef}
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={text}
    />
  )
}

export default function EffectFormInputFocus() {
  const [items, setItems] = useState(['大写'])
  const [text, setText] = useState('')
  const [isShow, setIsShow] = useState(false)

  function handleChangeText(text) {
    setText(text)
    setItems([...items, text])
  }

  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>{`${
        isShow ? '隐藏' : '显示'
      }表单`}</button>
      {isShow ? (
        <form>
          <label>
            输入你的姓名:
            <AutoFocusInput text={text} onChange={handleChangeText} />
          </label>
          <div>
            {items.map((item) => (
              <label key={item}>
                <input type="checkbox" />
                {item}
              </label>
            ))}
          </div>
        </form>
      ) : null}
    </>
  )
}
