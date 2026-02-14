import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react';
import { Todos } from './todos';



function reducer(state,action){
  switch(action.type){
    case  "add-todo":
      return [...state , newTodo(action.payload.name)]

  }
 
}

function newTodo(name){
  return { id:Date.now(),name:name, isComplete:false}
}


export default function App() {

  const [ name , setName ]= useState("");
  const [ todos , dispatch ] = useReducer( reducer, [] )

  function handleSubmit(e){
    e.preventDefault();
    dispatch({type : "add-todo", payload: { name : name }})
    setName("")
  }

  console.log(todos)

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Todos' value={name} onChange={e => setName(e.target.value)}/>
      </form>

      <Todos todos={todos}/>
    </>
  )
   
}


