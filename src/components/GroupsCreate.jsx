import { useState } from 'react'

const GroupsCreate = ({ onCreate }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const formSubmit = (event) => {
    event.preventDefault()
    onCreate(name, description, year, month, day, hour, minute)
    setName('')
    setDescription('')
  }

  const currentDate = new Date()
  let year = currentDate.getFullYear()
  let month = currentDate.getMonth() + 1
  let day = currentDate.getDate()
  let hour = currentDate.getHours()
  let minute = currentDate.getMinutes()

  const nameInputChange = (event) => {
    setName(event.target.value)
  }

  const descriptionInputChange = (event) => {
    setDescription(event.target.value)
  }

  return (
    <div>
      <form className='groups-form' onSubmit={formSubmit}>
        <h1>Name</h1>
        <input type='text' value={name} onChange={nameInputChange} />
        <h1>description</h1>
        <input
          type='text'
          value={description}
          onChange={descriptionInputChange}
        />
        <button>Add Group</button>
      </form>
    </div>
  )
}

export default GroupsCreate
