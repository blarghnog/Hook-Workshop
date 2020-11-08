import React, { useReducer } from "react"

export default function Counter() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.value
      case "decrement":
        return state - action.value
      default:
        return state
    }
  }

  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          -
        </button>
      </div>
      <h3>Counter value: {count}</h3>
    </>
  )
}
