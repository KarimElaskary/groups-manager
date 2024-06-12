import { useState } from 'react'
import GroupsEdit from './GroupsEdit'

const GroupShow = ({ group, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleClick = () => {
    onDelete(group.id)
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  const afterEdit = () => {
    setIsEditing(false)
  }


  return (
    <div className='group-info'>
      {isEditing ? (
        <GroupsEdit
          group={group}
          onEditComplete={toggleEdit}
          onEdit={onEdit}
          onEditChange={afterEdit}
        />
      ) : (
        <div>
          <h1>{group.name}</h1>
          <h3>{group.description}</h3>
          <h3>Created At <p>{group.day}/{group.month}/{group.year} {group.hour}:{group.minute}</p></h3>
          <div className='edit-buttons'>
            <button className='delete-button' onClick={handleClick}>
              Delete
            </button>

            <button className='edit-button' onClick={toggleEdit}>
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GroupShow
