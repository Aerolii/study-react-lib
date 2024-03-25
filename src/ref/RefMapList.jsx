import { useRef } from 'react'

const listStyle = { listStyle: 'none', whiteSpace: 'nowrap' }
const liStyle = {
  display: 'inline',
  whiteSpace: 'nowrap',
  padding: '0.5rem',
  width: '600px'
}
// 使用 ref 回调管理 ref 列表
export default function RefMapList() {
  const itemsRef = useRef(null)

  function handleScrollTo(id) {
    const map = getMap()
    const node = map.get(id)
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map()
    }
    return itemsRef.current
  }
  return (
    <>
      <nav>
        <button onClick={() => handleScrollTo(0)}>click 1</button>
        <button onClick={() => handleScrollTo(1)}>click 2</button>
        <button onClick={() => handleScrollTo(2)}>click 3</button>
      </nav>
      <div style={{ overflow: 'hidden' }}>
        <ul style={listStyle}>
          {catList.map((cat) => (
            <li
              style={{ ...listStyle, ...liStyle, width: '300px' }}
              key={cat.id}
              ref={(node) => {
                const map = getMap()
                if (node) {
                  map.set(cat.id, node)
                } else {
                  map.delete(cat.id)
                }
              }}
            >
              <img src={cat.url} alt={cat.url} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const catList = []
for (let i = 0; i < 10; i++) {
  const url = `https://robohash.org/${i + 1}?set=set4&szie=180x180`
  catList.push({ url, id: i })
}
