import { useState } from 'react'
import TasksProvider, {
  useTaskDispatch,
  useTasks
} from '../context/TaskContext'

export default function TasksManager() {
  return (
    <TasksProvider>
      <AddTask />
      <TaskList />
    </TasksProvider>
  )
}

function AddTask() {
  const [text, setText] = useState('')
  const dispatch = useTaskDispatch()
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => dispatch({ type: 'add', text })}>添加</button>
    </div>
  )
}

function TaskList() {
  const tasks = useTasks()

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  )
}

function Task({ task }) {
  const [isEnding, setIsEnding] = useState(false)
  const dispatch = useTaskDispatch()
  let taskContent
  if (isEnding) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) =>
            dispatch({
              type: 'change',
              task: { ...task, text: e.target.value }
            })
          }
        />
        <button onClick={() => setIsEnding(false)}>保存</button>
      </>
    )
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEnding(true)}>编辑</button>
      </>
    )
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          dispatch({
            type: 'change',
            task: { ...task, done: e.target.checked }
          })
        }
      />
      {taskContent}
      <button onClick={() => dispatch({ type: 'delete', id: task.id })}>
        删除
      </button>
    </div>
  )
}
