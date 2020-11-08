import React, { useContext } from "react"
import CountContext from "../components/CountContext"

export default function NestedBox({ children, final }) {
  const context = useContext(CountContext)
  return (
    <div
      style={{
        border: "solid 1px",
        padding: "2rem",
        borderRadius: "5px",
        width: "50%",
        height: "50%",
      }}
    >
      {final ? <p>{context.value}</p> : children}
    </div>
  )
}
