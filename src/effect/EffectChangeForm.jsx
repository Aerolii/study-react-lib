// 不使用 effect 实现根据选择的联系人切换对话框

import { useState } from 'react'

export default function EffectChangeForm() {
  const [contacts, setContacts] = useState(initialContacts)
  const [selectId, setSelectId] = useState(initialContacts[0].id)

  const selectedContact = contacts.find((c) => c.id === selectId)

  function handleSaveContact(contact) {
    setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)))
  }

  return (
    <>
      <ContactList
        contacts={contacts}
        selectId={selectId}
        onSelect={(id) => setSelectId(id)}
      />
      <ContactEditForm
        key={selectId}
        contact={selectedContact}
        onSave={handleSaveContact}
      />
    </>
  )
}

function ContactEditForm({ contact, onSave }) {
  const [user, setUser] = useState({ ...contact })

  return (
    <>
      <label>
        姓名:
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </label>

      <label>
        邮箱:
        <input
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </label>

      <button onClick={() => onSave(user)}>保存</button>
      <button onClick={() => setUser(contact)}>重置</button>
    </>
  )
}

function ContactList({ contacts, selectId, onSelect }) {
  return (
    <>
      <div>
        {contacts.map((contact) => (
          <button
            style={{}}
            key={contact.id}
            onClick={() => onSelect(contact.id)}
          >
            {contact.id === selectId ? (
              <b>{contact.name}</b>
            ) : (
              <span>{contact.name}</span>
            )}
          </button>
        ))}
      </div>
    </>
  )
}

const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
]
