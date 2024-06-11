import GroupShow from './GroupShow'

const GroupsList = ({ groups, onDelete, onEdit }) => {
  const renderedGroups = groups.map((group) => (
    <GroupShow
      key={group.id}
      group={group}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  ))

  return <div className='groups-list'>{renderedGroups}</div>
}

export default GroupsList
