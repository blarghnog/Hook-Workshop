import React, { useState, useEffect } from "react"

export default function Birth({ setShowDem1 }) {
  useEffect(() => {
    setTimeout(() => console.log("Just got useEffected"), 2000)
    return () => console.log("Departed life")
  })

  console.log("Was birthed")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid",
        padding: "1rem 3rem",
      }}
    >
      <h1>I AM BORN!</h1>
      <button onClick={() => setShowDem1(false)}>delete</button>
    </div>
  )
}
