import { useState } from 'react'

const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false }
]

function AddItem({ onClick }) {
  const [packing, setPacking] = useState('')

  function handleChange(e) {
    const packing = e.target.value
    setPacking(packing)
  }

  function handleAdd() {
    setPacking('')
    onClick(packing)
  }

  return (
    <label htmlFor="addPacking">
      <input
        type="text"
        id="addPacking"
        value={packing}
        onChange={handleChange}
      />
      <button onClick={handleAdd} disabled={!packing}>
        Add
      </button>
    </label>
  )
}

function PackingList({ items, onClick, onChangeItem }) {
  return items.map((item) => (
    <div key={item.id} style={{ display: 'flex' }}>
      <label htmlFor={item.id}>
        <input
          type="checkbox"
          id={item.id}
          checked={item.packed}
          onChange={(e) => onChangeItem({ ...item, packed: e.target.checked })}
        />
        {item.title}
      </label>
      <button style={{ marginLeft: '10px' }} onClick={() => onClick(item.id)}>
        delete
      </button>
    </div>
  ))
}

export default function CreateTravelPlan() {
  const [items, setItems] = useState(initialItems)

  const packed = items.filter((item) => item.packed).length
  const total = items.length

  function handleAdd(title) {
    setItems([
      ...items,
      {
        id: items.length ? items[items.length - 1].id + 1 : 0,
        title,
        packed: false
      }
    ])
  }

  function handleChangeItem(nextItem) {
    console.log('nextItem :>> ', nextItem)
    setItems(
      items.map((item, k) => (nextItem.id === item.id ? nextItem : item))
    )
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <>
      <AddItem onClick={handleAdd} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onClick={handleDelete}
      />
      <hr />
      <b>
        {packed} out of {total} packed!
      </b>
    </>
  )
}
