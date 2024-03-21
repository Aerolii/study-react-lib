import { useEffect, useState } from 'react'

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true }
]

export default function BucketList() {
  const [artworks, setArtworks] = useState(initialList)

  function onToggle(id, checked) {
    setArtworks(
      artworks.map((art) => {
        if (art.id === id) {
          return { ...art, seen: checked }
        } else {
          return art
        }
      })
    )
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={artworks} onToggle={onToggle} />
    </>
  )
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((art) => (
        <li key={art.id}>
          <label>
            <input
              type="checkbox"
              checked={art.seen}
              onChange={(e) => onToggle(art.id, e.target.checked)}
            />
            {art.title}
          </label>
        </li>
      ))}
    </ul>
  )
}
