import { Link } from "gatsby"
import React from "react"

const Footer = ({ pictureTitle }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        fontSize: "1rem",
        padding: "2rem 3rem",
      }}
    >
      <Link to="/">Назад</Link>
      <h1 style={{ fontSize: "1rem", fontWeight: "200" }}>{pictureTitle}</h1>
    </div>
  )
}

export default Footer
