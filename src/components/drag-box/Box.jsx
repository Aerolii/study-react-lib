import { useState } from 'react'

export default function Box({ color, position, onMove, children }) {
  const [lastCoordinates, setLastCoordinates] = useState(null)
  const handlePointerDown = (e) => {
    e.target.setPointerCapture(e.pointerId)
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY
    })
  }
  const handlePointerMove = (e) => {
    if (lastCoordinates) {
      setLastCoordinates({ x: e.clientX, y: e.clientY })
      const dx = e.clientX - lastCoordinates.x
      const dy = e.clientY - lastCoordinates.y
      onMove(dx, dy)
    }
  }

  const handlePointerUp = () => {
    setLastCoordinates(null)
  }
  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        background: color,
        border: '1px solid black',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'grab',
        transform: `translate(${position.x}px,${position.y}px)`
      }}
    >
      {children}
    </div>
  )
}
