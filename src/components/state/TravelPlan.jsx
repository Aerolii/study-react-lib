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
    console.log('parentId,childId :>> ', parentId, childId)
    const parent = plan[parentId]
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId)
    }
    let nextData = { [parentId]: nextParent }
    if (nextParent.childIds.length <= 0) {
      const val = Object.values(plan)
      const deletePlan = val.find((v) => v.childIds.includes(parentId))
      if (deletePlan) {
        const childIds = deletePlan.childIds.filter((d) => d !== parentId)
        nextData = { [deletePlan.id]: { ...deletePlan, childIds } }
      }
    }
    setPlans({ ...plan, ...nextData })
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
