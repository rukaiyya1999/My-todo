import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'

function Addtodo({addTodo}) {
  let labelStyle = {
    color: "firebrick",
    fontWeight: "bold",
    marginTop: "15px",
    fontSize: "large"
  }
  let btnStyle ={
    marginBottom :"15px"
  }

  let inputStyle={
    border: "1px solid gray",
  }

  const [title, setTitle] = useState("");
  const [desc, setDesc] =useState("")

  function data(e){
    e.preventDefault()
    if(!title || !desc){
      alert("title and description can not be empty...");
    }
    else{
      addTodo(title, desc);
      setTitle("")
      setDesc("")
    }
  }

  return (
  <div className = "container">
  <Form onSubmit={data}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style = {labelStyle}>Enter New Todo</Form.Label>
    <Form.Control style ={inputStyle} type="text" placeholder="TO DO" onChange={(e)=>{setTitle(e.target.value)}}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style = {labelStyle}>Description Here</Form.Label>
    <Form.Control style ={inputStyle} type="text" placeholder="Description" onChange={(e)=>{setDesc(e.target.value)}}/>
  </Form.Group>

  <Button variant="primary" type="submit" style={btnStyle}> Add </Button>
</Form>
</div>
  )
}

export default Addtodo
