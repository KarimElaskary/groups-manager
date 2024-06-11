import { useState } from 'react'

const GroupsCreate = ({ onCreate }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const formSubmit = (event) => {
    event.preventDefault()
    onCreate(name, description)
    setName('')
    setDescription('')
  }

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
