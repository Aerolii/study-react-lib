import { useReducer } from 'react'

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
]

const initialState = {
  selectedId: 0,
  message: '你好'
}

const messengerReducer = (state, action) => {
  switch (action.type) {
    case 'change_selection': {
      return {
        ...state,
        selectedId: action.selectedId,
        message: ''
      }
    }
    case 'edit_message': {
      return {
        ...state,
        message: action.message
      }
    }

    case 'send_message': {
      return {
        ...state,
        message: ''
      }
    }

    default:
      throw Error('未知 action: ' + action.type)
  }
}

const ContactList = ({ selectedId, contacts, dispatch }) => {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() =>
                dispatch({ type: 'change_selection', selectedId: contact.id })
              }
            >
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

const Chat = ({ message, contact, dispatch }) => {
  return (
    <section>
      <textarea
        cols="30"
        rows="10"
        value={message}
        placeholder={'和 ' + contact.name + ' 聊天'}
        onChange={(e) =>
          dispatch({
            type: 'edit_message',
            message: e.target.value
          })
        }
      />
      <div>
        <button
          onClick={() => {
            alert(`正在发送 "${message}" 到 ${contact.email}`)
            dispatch({ type: 'send_message', message })
          }}
          disabled={!message}
        >
          发送到<b>{contact.name}@mail.com</b>
        </button>
      </div>
    </section>
  )
}

export default function MessengerReducer() {
  const [state, dispatch] = useReducer(messengerReducer, initialState)
  const message = state.message
  const contact = contacts.find((contact) => contact.id === state.selectedId)
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        contact={contact}
        message={message}
        dispatch={dispatch}
      />
    </div>
  )
}
