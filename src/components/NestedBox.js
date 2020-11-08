import React, { useReducer } from "react"

export default function NestedBox({ children }) {
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
      {children}
    </div>
  )
}
