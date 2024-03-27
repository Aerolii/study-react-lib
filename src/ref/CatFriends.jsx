import { useRef, useState } from 'react'
import { flushSync } from 'react-dom'

// 使用 ref 控制元素滚动
export default function CatFriends() {
  const [index, setIndex] = useState(0)
  const catRef = useRef(null)

  return (
    <>
      <nav>
        <button
          onClick={() => {
            flushSync(() => {
              if (index < catList.length - 1) {
                setIndex(index + 1)
              } else {
                setIndex(0)
              }
            })
            catRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
            })
          }}
        >
          下一个
        </button>
      </nav>
      <div>
        <ul className="ul-row">
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={index === i ? catRef : null}
              className="li-row li-row-item"
            >
              <img
                className={(index === i && 'active') || ''}
                src={cat.imageUrl}
                alt={'猫猫 # ' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const catList = []
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `https://robohash.org/${i + 1}?set=set4&szie=180x180`
  })
}
