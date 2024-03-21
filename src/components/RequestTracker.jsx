import { useState } from 'react'

export default function RequestTracker() {
  const [pending, setPending] = useState(0)
  const [completed, setCompleted] = useState(0)

  async function handleClick() {
    setPending((p) => p + 1)
    await delay(3000)
    setPending((p) => p - 1)
    setCompleted((c) => c + 1)
  }

  return (
    <>
      <p>等待：{pending}</p>
      <p>完成: {completed}</p>
      <button onClick={handleClick}>submit</button>
    </>
  )
}

function delay(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}
