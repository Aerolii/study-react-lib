import { useState } from 'react'
import { initialTravelPlan } from './travel-plan-data'

const PlaceTree = ({ id, placesById }) => {
  const place = placesById[id]
  const childIds = place.childIds
  return (
    <li>
      {place.title}
      {childIds.length > 0 && (
        <ol>
          {childIds.map((child) => (
            <PlaceTree key={child} id={child} placesById={placesById} />
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
  console.log(planetIds)

  return (
    <>
      <h2>Places to visited</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree key={id} id={id} placesById={plan} />
        ))}
      </ol>
    </>
  )
}
