import React, { useState } from "react"
import CountContext from "../components/CountContext"
import Layout from "../components/Layout"
import NestedBox from "../components/NestedBox"

export default function useContextPage() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <h1>UseContext Demonstration</h1>
      <ol>
        <li>Create context using createContext in a separate file</li>
        <li>
          Import port the created context into the common ancestor and child
          component
        </li>
        <li>Retrieve state using useContext</li>
      </ol>
      <p>Counter value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <CountContext.Provider value={{ value: count }}>
        <NestedBox>
          <NestedBox>
            <NestedBox final={true}></NestedBox>
            <NestedBox final={true}></NestedBox>
          </NestedBox>
        </NestedBox>
      </CountContext.Provider>
      <p>/src/components/CountContext; /src/components/NestedBox</p>
    </Layout>
  )
}
