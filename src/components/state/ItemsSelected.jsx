/**
 * 只保留必要的 state
 */

import { useState } from 'react'

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 }
]

export default function ItemsSelected() {
  const [items, setItems] = useState(initialItems)
  const [seletedId, setSelectedId] = useState(0)

  const selectedItem = items.find((item) => item.id === seletedId)

  const handleItemChange = (id, title) =>
    setItems(items.map((item) => (item.id === id ? { ...item, title } : item)))

  const handleSelectedIdChange = (id) => setSelectedId(id)

  return (
    <>
      <h2>What`s your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="text"
              value={item.title}
              onChange={(e) => handleItemChange(item.id, e.target.value)}
            />
            <button onClick={() => handleSelectedIdChange(item.id)}>
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  )
}
