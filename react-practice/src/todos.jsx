import React from 'react'
import { ACTIONS } from './App'

const Todos = ({ todos, dispatch }) => {
  return (
    <div style={containerStyle}>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            ...cardStyle,
            backgroundColor: todo.isComplete ? "#d4edda" : "#f8d7da",
            textDecoration: todo.isComplete ? "line-through" : "none",
            opacity: todo.isComplete ? 0.7 : 1
          }}
        >
          <span style={{ flex: 1 }}>{todo.name}</span>

          <div style={buttonGroup}>
            <button
              style={deleteBtn}
              onClick={() =>
                dispatch({ type: ACTIONS.DELETE_TODO, payload: todo.id })
              }
            >
              Delete
            </button>

            <button
              style={toggleBtn}
              onClick={() =>
                dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo.id })
              }
            >
              Toggle
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Todos




const containerStyle = {
  width: "400px",
  margin: "30px auto",
  display: "flex",
  flexDirection: "column",
  gap: "12px"
}

const cardStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 16px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  transition: "0.3s ease"
}

const buttonGroup = {
  display: "flex",
  gap: "8px"
}

const deleteBtn = {
  padding: "6px 10px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#dc3545",
  color: "white",
  cursor: "pointer"
}

const toggleBtn = {
  padding: "6px 10px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer"
}