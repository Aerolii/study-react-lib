import { useState } from 'react'

const a = { name: 'smith', info: { male: 'man' } }
const b = Object.assign({}, a)
console.log('b :>> ', b)
// console.log(a === b)
a.info.male = 'famale'
console.log('a :>> ', a)

export default function UserForm() {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Lenon',
    email: 'zxb-xunxun@hotmail.com'
  })
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="firstName">
          FirstName
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            value={user.firstName}
          />
        </label>
        <label htmlFor="lastName">
          LastName
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            value={user.lastName}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={user.email}
          />
        </label>
      </form>
    </>
  )
}
