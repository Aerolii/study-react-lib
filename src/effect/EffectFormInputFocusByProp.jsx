// 有条件的触发 副作用

import { useEffect, useRef, useState } from 'react'

function AutoFocusInputByProp({ shouldFocus, text, onChange }) {
  const iptRef = useRef(null)

  useEffect(() => {
    iptRef.current.focus()
  }, [shouldFocus])

  return <input type="text" value={text} onChange={onChange} ref={iptRef} />
}

export default function EffectFormInputFocusByProp() {
  const [name, setName] = useState('')
  const [names, setNames] = useState(['bob'])
  const [isShow, setIsShow] = useState(false)

  function handleChangeName(params) {}

  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>{`${
        isShow ? '隐藏' : '显示'
      }表单`}</button>
      <div>
        <form>
          <label>
            你的名字1:
            <AutoFocusInputByProp text={name} onChange={handleChangeName} />
          </label>

          <label>
            你的名字2:
            <AutoFocusInputByProp
              shouldFocus={true}
              text={name}
              onChange={handleChangeName}
            />
          </label>
        </form>
      </div>
    </>
  )
}
