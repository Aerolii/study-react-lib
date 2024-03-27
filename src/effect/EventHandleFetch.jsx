import { useState } from 'react'
import fetchPerson from '../api'

export default function EventHandleFetch() {
  const [name, setName] = useState('Alice')
  const [person, setPerson] = useState(null)
  function requestPerson(name) {
    fetchPerson(name).then((res) => {
      setPerson(res)
    })
  }

  function handleChangeName(e) {
    const name = e.target.value
    setName(name)
    requestPerson(name)
  }
  name === 'Alice' && requestPerson(name)

  return (
    <>
      <div>
        <select value={name} onChange={handleChangeName}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
          <option value="Taylor">Taylor</option>
        </select>
      </div>
      <p>{person ?? '加载中...'}</p>
    </>
  )
}
