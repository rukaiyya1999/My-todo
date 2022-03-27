import React from 'react'
import {ListGroup, Badge} from "react-bootstrap"
function Todoitem({todo, onDelete}) {
  return (
    <div>
    <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
    <div className="fw-bold">{todo.title}</div>
    {todo.desc}
    </div>
    <button className = "btn-danger" onClick= {()=>{onDelete(todo)}}>DELETE</button>
    </ListGroup.Item>

    </div>
  )
}

export default Todoitem
