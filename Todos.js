import React from 'react'
import Todoitem from '../components/Todoitem'

function Todos(props) {

  return (
  <div className = "container">
  {props.todos.length === 0? "No todos to display" :

    props.todos.map((todo)=>{
      return <Todoitem todo = {todo} key ={todo.sno} onDelete={props.onDelete}/>
    })
  }
</div>
  )
}

export default Todos
