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
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          width: "90vw",
          justifyContent: "center",
        }}
      >
        <Link to="/">
          <h1 style={{ marginRight: "40rem" }}>Hooks Workshop</h1>{" "}
        </Link>
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
        </div>
      </header>
      <div
        style={{ border: "solid 1px", padding: "2rem", borderRadius: "5px" }}
      >
        {children}
      </div>
    </div>
  )
}
