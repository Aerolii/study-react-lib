import { useState } from 'react'

export default function EffectPointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const opacity = 0.5
  console.log('position :>> ', position)

  const handlePointerMove = (e) => {
    console.log('e :>> ', e)
    setPosition({ x: e.screenX - e.clientX, y: e.screenY - e.clientY })
  }
  return (
    <div onPointerMove={handlePointerMove}>
      <Canvas>
        <Dot position={position} opacity={opacity} />
      </Canvas>
    </div>
  )
}

export function Dot({ position, opacity }) {
  return (
    <div style={containerStyle}>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'pink',
          borderRadius: '50%',
          opacity,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40
          // width: '40px',
          // height: '40px',
          // position: 'absolute',
          // left: 0,
          // top: 0,
          // backgroundColor: 'pink',
          // borderRadius: '50%',
          // pointerEvents: 'none',
          // opacity,
          // transform: `translate(${position.x}px, ${position.y})`
        }}
      ></div>
    </div>
  )
}

export const Canvas = ({ children }) => {
  return <div style={containerStyle}> {children}</div>
}

const containerStyle = {
  position: 'relative',
  height: '300px',
  backgroundColor: 'white'
}
