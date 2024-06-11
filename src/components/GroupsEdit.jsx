import { useState } from 'react'

const GroupsEdit = ({ group, onEdit, onEditChange }) => {
  const [name, setName] = useState(group.name)
  const [description, setDescription] = useState(group.description)

  const formSubmit = (event) => {
    event.preventDefault()
    onEdit(group.id, name, description)
    onEditChange()
  }

  const nameInputChange = (event) => {
    setName(event.target.value)
  }

  const descriptionInputChange = (event) => {
    setDescription(event.target.value)
  }

  return (
    <div>
      <form className='edit-form' onSubmit={formSubmit}>
        <div className='inputs'>
          <h1>Name</h1>
          <input type='text' value={name} onChange={nameInputChange} />
          <h1>description</h1>
          <input
            type='text'
            value={description}
            onChange={descriptionInputChange}
          />
        </div>
        <button>Save</button>
      </form>
    </div>
  )
}

export default GroupsEdit
