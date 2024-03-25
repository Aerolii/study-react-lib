// reducer 实际上是以数组上的 reduce() 方法命名的
// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce(
//   (result, number) => result + number
// ); // 1 + 2 + 3 + 4 + 5
// 传递给 reduce 的函数被称为 “reducer”。它接受 目前的结果 和 当前的值，然后返回 下一个结果。

let initialState = []
let actions = [
  { type: 'added', id: 1, text: '参观卡夫卡博物馆' },
  { type: 'added', id: 2, text: '看木偶戏' },
  { type: 'deleted', id: 1 },
  { type: 'added', id: 3, text: '打卡列侬墙' }
]

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ]
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case 'deleted':
      return tasks.filter((t) => t.id !== action.id)
    default:
      throw Error('未知 action: ' + action.type)
  }
}

const finalState = actions.reduce(tasksReducer, initialState)
console.log('finalState :>> ', finalState)
