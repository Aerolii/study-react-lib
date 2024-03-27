// 在一个组件内实现列表筛选和添加

import { useMemo, useState } from 'react'
import { createTodo, initialTodos } from './EffectTodos'

export default function EffectTodosFunction() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(initialTodos)
  const [active, setActive] = useState(false)

  const [activeTodos, visibleTodos] = useMemo(() => {
    const activeTodos = todos.filter((t) => !t.completed)
    const visibleTodos = active ? activeTodos : todos
    return [activeTodos, visibleTodos]
  }, [todos, active])

  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
          只显示未完成项目
        </label>
      </div>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={() => setTodos([...todos, createTodo(todo)])}>
          添加
        </button>
      </div>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : <span>{todo.text}</span>}
          </li>
        ))}
      </ul>
      <p>
        <b>{activeTodos.length}</b>
        项待办
      </p>
    </>
  )
}
