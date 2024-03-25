import { useRef } from 'react'

const ulStylee = { listStyle: 'none', whiteSpace: 'nowrap' }
const liStyle = { display: 'inline', padding: '0.5rem', width: '600px' }

export default function RefScrollIntoView() {
  const firstCatRef = useRef(null)
  const secondCatRef = useRef(null)
  const thirdCatRef = useRef(null)

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstCat}>Tom</button>
        <button onClick={handleScrollToSecondCat}>Maru</button>
        <button onClick={handleScrollToThirdCat}>Jellylorum</button>
      </nav>
      <div style={{ overflow: 'hidden' }}>
        <ul style={ulStylee}>
          <li style={liStyle}>
            <img
              ref={firstCatRef}
              src="https://robohash.org/1?set=set4&szie=180x180"
              alt=""
            />
          </li>
          <li style={liStyle}>
            <img
              ref={secondCatRef}
              src="https://robohash.org/2?set=set4&szie=180x180"
              alt=""
            />
          </li>
          <li style={liStyle}>
            <img
              ref={thirdCatRef}
              src="https://robohash.org/3?set=set4&szie=180x180"
              alt=""
            />
          </li>
        </ul>
      </div>
    </>
  )
}
