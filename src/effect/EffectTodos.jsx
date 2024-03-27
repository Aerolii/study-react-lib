import { useState } from 'react'

let nextId = 0

export function createTodo(text, completed = false) {
  return {
    id: nextId++,
    text,
    completed
  }
}

export const initialTodos = [
  createTodo('买苹果', true),
  createTodo('买橘子', true),
  createTodo('买胡萝卜')
]

export default function EffectTodos() {
  const [show, setShow] = useState(false)
  const [todos, setTodos] = useState(initialTodos)
  const activeTodos = todos.filter((t) => !t.completed)
  const visibleTodos = show ? activeTodos : todos

  function handleAddTodo(todo) {
    setTodos([...todos, todo])
  }

  function handleChangeTodoComplete(todo) {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)))
  }

  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            value={show}
            onChange={(e) => setShow(!show)}
          />
          只显示未完成项目
        </label>
      </div>
      <AddTodo onAdd={handleAddTodo} />
      <ul>
        {visibleTodos.map((item) => (
          <li
            key={item.id}
            style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
          >
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) =>
                  handleChangeTodoComplete({
                    ...item,
                    completed: e.target.checked
                  })
                }
              />
              {item.text}
            </label>
          </li>
        ))}
      </ul>
      <p>{activeTodos.length} 项待办</p>
    </>
  )
}

function AddTodo({ onAdd }) {
  const [text, setText] = useState('')

  const handleClick = () => {
    onAdd(createTodo(text))
    setText('')
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>添加</button>
    </>
  )
}
