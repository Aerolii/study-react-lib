import { useState } from 'react'

function ContactList({ contacts, onSelect }) {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button onClick={() => onSelect(contact)}>{contact.name}</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Chat({ contact }) {
  const [text, setText] = useState('')

  return (
    <section>
      <textarea
        cols="30"
        rows="10"
        value={text}
        placeholder={'跟 ' + contact.name + ' 聊一聊'}
        onChange={(e) => setText(e.target.value)}
      />
      <button>发送到{contact.email}</button>
    </section>
  )
}

export default function Messenger() {
  const [to, setTo] = useState(contacts[0])

  return (
    <div style={{ display: 'flex' }}>
      <ContactList contacts={contacts} onSelect={(contact) => setTo(contact)} />
      <Chat key={to.id} contact={to} />
    </div>
  )
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
]
