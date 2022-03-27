
import '../App.css';
import Header from './Header'
import Todos from './Todos'
import Footer from './Footer'
import Addtodo from './Addtodo'
import { Button } from 'react-bootstrap'
import {useState, useEffect} from "react"

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
   initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete =(todo)=>{
  setTodos(todos.filter((e)=>{
    return e!==todo
  }));

  localStorage.setItem("todos",JSON.stringify(todos))
  }

  const addTodo=(title, desc)=>{
    console.log("this is add todo",title,desc)
    let sno;
    if(todos.length == 0){
      sno = 1;
    }else{
     sno = todos[todos.length-1].sno+1
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <div className="App">
    <Header/>
    <Addtodo addTodo = {addTodo}/>
    <Todos todos = {todos} onDelete = {onDelete}/>
    <Footer/>
    </div>
  );
}

export default App;
