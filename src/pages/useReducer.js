import React, { useState, useReducer } from "react"
import Layout from "../components/Layout"
import Counter from "../components/Counter"

export default function useReducerPage() {
  const [count, setCount] = useState(0)
  return (
    <Layout>
      <h1>UseReducer Demonstration 1</h1>
      <p>Code breakdown: /src/components/Counter.js</p>
      <ul>
        <li>
          Dispatch is passed an object, which is the "action" parameter in the
          reducer.
        </li>
        <li>
          The "type" key in the object specifies which action needs to be taken
          place in the reducer.
        </li>
        <li>The "value" key is the amount to increment or decrement.</li>
        <li>
          The switch statement looks at action.type and determines the action
        </li>
        <li>
          Remember, the reducer <strong>CANNOT</strong> change the state. It
          must return a new, updated copy of it.
        </li>
      </ul>
      <Counter />
    </Layout>
  )
}
