import { useState } from 'react'
import './App.css'
import { useReducer } from 'react';
import Todos from './todos';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  DELETE_TODO: 'delete-todo',
  TOGGLE_TODO: 'toggle-todo'
}


function reducer(state,action){
  switch(action.type){
    case  ACTIONS.ADD_TODO:
      return [...state , newTodo(action.payload.name)]
    case ACTIONS.DELETE_TODO:
      return state.filter(todo=> todo.id != action.payload)  
    case ACTIONS.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
    default:
      state
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

      <Todos todos={todos} dispatch={dispatch}></Todos>
    </>
  )
   
}


