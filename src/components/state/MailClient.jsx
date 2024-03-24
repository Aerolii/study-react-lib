import { useState } from 'react'

const initLetters = [
  {
    id: 0,
    subject: 'Ready for adventure?',
    isStarred: true
  },
  {
    id: 1,
    subject: 'Time to check in!',
    isStarred: false
  },
  {
    id: 2,
    subject: 'Festival Begins in Just SEVEN Days!',
    isStarred: false
  }
]

function Letter({ letter, onSelectLetter }) {
  return (
    <>
      <li>
        <label htmlFor="">
          <input
            type="checkbox"
            id={'letter' + letter.id}
            checked={letter.isStarred}
            onChange={(e) =>
              onSelectLetter({ ...letter, isStarred: e.target.checked })
            }
          />
          {letter.subject}
        </label>
      </li>
    </>
  )
}

export default function MailClient() {
  const [letters, setLetters] = useState(initLetters)
  const selectedCount = letters.filter((letter) => letter.isStarred).length

  const handleSelectLetter = (nextLetter) =>
    setLetters(
      letters.map((letter) =>
        letter.id === nextLetter.id ? nextLetter : letter
      )
    )

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter letter={letter} onSelectLetter={handleSelectLetter} />
        ))}
      </ul>
      <p>
        <b>you selected {selectedCount} letters</b>
      </p>
    </>
  )
}
