export default function fetchPerson(name) {
  const delay = name === 'Bob' ? 2000 : 200
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('这是' + name + '的传记。')
    }, delay)
  })
}
