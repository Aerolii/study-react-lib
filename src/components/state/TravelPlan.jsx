import { useState } from 'react'
import { initialTravelPlan } from './travel-plan-data'

const PlaceTree = ({ id, placesById, parentId, onComplete }) => {
  const place = placesById[id]
  const childIds = place.childIds

  return (
    <li>
      {place.title}
      <button onClick={() => onComplete(parentId, id)}>Completed</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((child) => (
            <PlaceTree
              key={child}
              id={child}
              placesById={placesById}
              parentId={id}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  )
}

export default function TravelPlan() {
  const [plan, setPlans] = useState(initialTravelPlan)
  const root = plan[0]
  const planetIds = root.childIds

  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId]
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId)
    }
    setPlans({ ...plan, [parentId]: nextParent })
  }

  return (
    <>
      <h2>Places to visited</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  )
}
