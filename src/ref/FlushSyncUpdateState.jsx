import { useRef, useState } from 'react'
import { flushSync } from 'react-dom'

// 使用 flushSync 同步更新 state
export default function FlushSyncUpdateState() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState(initialTodos)
  const listRef = useRef(null)

  function handleAdd() {
    const newTodo = { id: nextId++, text }
    setText('')
    flushSync(() => {
      setTodos([...todos, newTodo])
    })
    listRef.current.lastChild.scrollIntoView()
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>添加</button>
      </div>
      <div style={{ height: '100px', overflow: 'scroll' }}>
        <ul style={{ listStyle: 'none', margin: 0 }} ref={listRef}>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

let nextId = 0
let initialTodos = []
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: '待办 #' + (i + 1)
  })
}
