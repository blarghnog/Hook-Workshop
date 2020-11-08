import React, { useState } from "react"
import Layout from "../components/Layout"
import Birth from "../components/Birth"

export default function useEffectPage() {
  const [showDem1, setShowDem1] = useState(false)

  const handleClick = e => {
    switch (e.target.id) {
      case "demonstration1":
        setShowDem1(true)
    }
  }

  return (
    <Layout>
      <h1>UseEffect Demonstration </h1>
      <p>
        Open up your console (ctrl+shift+i). Clicking the button below should do
        three things
      </p>
      <ol>
        <li>On render: ouput "Was birthed"</li>
        <li>
          After two seconds: run useEffect and output "Just got useEffected"
        </li>
        <li>On clean-up: clicking delete will output "departed life"</li>
      </ol>
      <p>/src/components/Birth.js</p>
      {showDem1 ? (
        <Birth setShowDem1={setShowDem1} />
      ) : (
        <button id="demonstration1" onClick={e => handleClick(e)}>
          Click to render
        </button>
      )}
    </Layout>
  )
}
