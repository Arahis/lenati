import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../images/lenati-logo2.inline.svg"
import HandleNav from "./handleNav"

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        display: "flex",
        padding: "2rem",
        justifyContent: "space-between",
        width: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <Link to="/" style={{ pointerEvents: "auto" }}>
        <Logo style={{ height: "180px", width: "20px" }} />
      </Link>
      <HandleNav />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
