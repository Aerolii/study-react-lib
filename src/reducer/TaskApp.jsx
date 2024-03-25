import { useReducer, useState } from 'react'

let nextId = 3
const initialTasks = [
  { id: 0, text: '参观卡夫卡博物馆', done: true },
  { id: 1, text: '看木偶戏', done: false },
  { id: 2, text: '打卡列侬墙', done: false }
]

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'add': {
      nextId += 1
      return [...tasks, { id: nextId, text: action.text, done: false }]
    }

    case 'change': {
      return tasks.map((task) =>
        task.id === action.task.id ? action.task : task
      )
    }

    case 'delete': {
      return tasks.filter((task) => task.id !== action.id)
    }

    default:
      throw Error('未知 action: ' + action.type)
  }
}

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState('')
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="添加任务"
      />
      <button
        onClick={() => {
          setText('')
          onAddTask(text)
        }}
      >
        添加
      </button>
    </div>
  )
}

const Task = ({ task, onChangeTask, onDeleteTask }) => {
  const [isEnding, setIsEnding] = useState(false)

  let taskContent

  if (isEnding) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => onChangeTask({ ...task, text: e.target.value })}
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
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => onChangeTask({ ...task, done: e.target.checked })}
      />
      {taskContent}
      <button onClick={() => onDeleteTask(task.id)}>删除</button>
    </label>
  )
}

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onChangeTask={onChangeTask}
            onDeleteTask={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  )
}

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
  const handleAddTask = (text) => dispatch({ type: 'add', text })
  const handleChangeTask = (task) => dispatch({ type: 'change', task })
  const handleDeleteTask = (id) => dispatch({ type: 'delete', id })
  return (
    <>
      <h1>布拉格的行程安排</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  )
}
