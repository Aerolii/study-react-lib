import { createContext, useContext, useReducer } from 'react'

let nextId = 3
const initialTasks = [
  { id: 0, text: '参观卡夫卡博物馆', done: true },
  { id: 1, text: '看木偶戏', done: false },
  { id: 2, text: '打卡列侬墙', done: false }
]

const TaskContext = createContext(null)
const TaskDispatchContext = createContext(null)

function tasksReducer(tasks, action) {
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

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  )
}

export const useTasks = () => {
  return useContext()
}
