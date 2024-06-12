import React, { useState } from 'react'
import GroupsCreate from './components/GroupsCreate'
import GroupsList from './components/GroupsList'

const App = () => {
  // main state

  const [groups, setGroups] = useState([])

  // create function

  const createGroup = (name, description, year, month, day, hour, minute) => {
    const updatedGroups = [
      ...groups,
      { id: Date.now(), name, description, year, month, day, hour, minute },
    ]
    setGroups(updatedGroups)
  }

  // delete function

  const deleteGroup = (id) => {
    const updatedGroups = groups.filter((group) => {
      return group.id !== id
    })
    setGroups(updatedGroups)
  }

  // edit function

  const editGroup = (id, newName, newDescription) => {
    const updatedGroups = groups.map((group) => {
      if (group.id === id) {
        return { ...group, name: newName, description: newDescription }
      }
      return group
    })
    setGroups(updatedGroups)
  }

  return (
    <>
      {/* main screen components */}
      <GroupsCreate onCreate={createGroup} />
      <GroupsList groups={groups} onDelete={deleteGroup} onEdit={editGroup} />
    </>
  )
}

export default App
