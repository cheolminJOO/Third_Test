import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css';
export default function App() {
  const [toDo , setToDo] = useState([])
  const [title, setTitle] = useState("")
  const newUUID = uuidv4();

  const newToDoList = () => {
    if(!title) {
      return alert("타이틀을 입력하세요.")
    }
    const newTodo =  {
    id : newUUID,
    title,
    }

    setToDo([...toDo, newTodo])
    setTitle("")
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }



  return (
  <div className = "Header">
    <div className="Input">
    <h1>Todo List</h1>
      <input onChange={onChangeTitle} value={title}/>
      <button onClick={newToDoList}>추가하기</button>
    </div>
    <div className='BoxWrapper'>
      {toDo.map((el) => <div className="Box">{el.title}</div>)}
    </div>
  </div>
  )
}
