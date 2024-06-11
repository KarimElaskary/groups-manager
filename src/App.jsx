import { useState } from 'react'
import GroupsCreate from './components/GroupsCreate'
import GroupsList from './components/GroupsList'

const App = () => {
  const [groups, setGroups] = useState([])

  const createGroup = (name, description) => {
    const updatedGroups = [...groups, { id: Date.now(), name, description }]
    setGroups(updatedGroups)
  }

  const deleteGroup = (id) => {
    const updatedGroups = groups.filter((group) => {
      return group.id !== id
    })
    setGroups(updatedGroups)
  }

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
      <GroupsCreate onCreate={createGroup} />
      <GroupsList groups={groups} onDelete={deleteGroup} onEdit={editGroup} />
    </>
  )
}

export default App
