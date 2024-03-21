import { useState } from 'react'
import Background from './Background.jsx'
import Box from './Box.jsx'

const initialPosition = {
  x: 0,
  y: 0
}

export default function DragBox() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  })

  function handleMove(dx, dy) {
    shape.position.x += dx
    shape.position.y += dy
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    })
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      {/* <Background position={initialPosition} /> */}
      <Box {...shape} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  )
}
