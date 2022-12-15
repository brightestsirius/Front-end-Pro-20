import React from 'react'

export default function TodoItemCompleted({item, changeCompleted}) {

  const handlerCheck = () => changeCompleted(item);

  return (
    <input type="checkbox" defaultChecked={item.completed} onChange={handlerCheck} />
  )
}
