import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div
      style={{
        fontFamily: "verdana",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Hooks Workshop</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <ul>
          <ListLink to="/useEffect">useEffect</ListLink>
          <ListLink to="/useReducer">useReducer</ListLink>
          <ListLink to="/useContext">useContext</ListLink>
        </ul>
        {children}
      </div>
    </div>
  )
}
