import './App.css'
import BucketList from './components/BucketList'
import RequestTracker from './components/RequestTracker'
import TasksManager from './components/TasksManager'
import UserForm from './components/UserForm'
import ContextSection from './components/context/ContextSection'
import DragBox from './components/drag-box/DragBox'
import Messenger from './components/state/ContactList'
import CreateTravelPlan from './components/state/CreateTravelPlan'
import ItemsSelected from './components/state/ItemsSelected'
import MailClient from './components/state/MailClient'
import TravelPlan from './components/state/TravelPlan'
import ContextApp from './context/ContextApp'
import EffectCleanFunction from './effect/EffectCleanFunction'
import EffectFormInputFocus from './effect/EffectFormInputFocus'
import EffectFormInputFocusByProp from './effect/EffectFormInputFocusByProp'
import EffectPlayground from './effect/EffectPlayground'
import MessengerReducer from './reducer/MessengerReducer'
import TaskApp from './reducer/TaskApp'
import CatFriends from './ref/CatFriends'
import FlushSyncUpdateState from './ref/FlushSyncUpdateState'
import RefDOM from './ref/RefDom'
import RefForward from './ref/RefForward'
import RefHandle from './ref/RefHandle'
import RefMapList from './ref/RefMapList'
import RefScrollIntoView from './ref/RefScrollIntoView'

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {''}
        Only show products in stock
      </label>
    </form>
  )
}
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  )
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  )

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

function ProductTable({ products }) {
  const rows = []
  let lastCategory = null
  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      )
    }
    rows.push(<ProductRow product={product} key={product.name} />)
    lastCategory = product.category
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function FilterableProductTable({ products }) {
  return (
    <div className="app">
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
]

export default function App() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
      <br />
      <BucketList />
      <br />
      <RequestTracker />
      <br />
      <UserForm />
      <br />

      <ContextSection />
      <br />
      <ItemsSelected />
      <br />
      <TravelPlan />
      <br />
      <CreateTravelPlan />
      <hr />
      <MailClient />
      <hr />
      <Messenger />
      <hr />
      <TaskApp />
      <MessengerReducer />
      <hr />
      <ContextApp />
      <hr />
      <TasksManager />
      <hr />
      <RefDOM />
      <hr />
      <RefScrollIntoView />
      <hr />
      <RefMapList />
      <hr />
      <RefForward />
      <hr />
      <RefHandle />
      <hr />
      <FlushSyncUpdateState />
      <hr />
      <CatFriends />
      <hr />
      <EffectPlayground />
      <hr />
      <EffectFormInputFocus />
      <hr />
      <EffectFormInputFocusByProp />
      <hr />
      <EffectCleanFunction />
    </>
  )
}
