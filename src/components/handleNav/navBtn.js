import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import styled, { css } from "styled-components"
import { BiPlus } from "react-icons/bi"

const Button = styled.button`
  position: relative;
  padding: 0;
  margin: 0.2rem;
  cursor: pointer;
  border: none;
  background: none;
  color: ${props => (props.showInfo ? "#fff" : "#000")};
  &:focus {
    outline: none;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    height: 2px;
    width: 0;
    right: 0;
    transition: 0.3s ease;
  }
  &:hover:after {
    width: 100%;
    left: 0;
    background: ${props => (props.showInfo ? "#fff" : "#000")};
  }
  & + div {
    transform: ${props => (props.showInfo ? "rotate(45deg)" : "rotate(deg)")};
  }
  &:hover + div {
    transform: ${props => (props.showInfo ? "rotate(0deg)" : "rotate(45deg)")};
    transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`

const NavBtn = ({ showInfo, btnState, handleClick }) => {
  const btn = useRef(null)
  const closeIco = useRef(null)

  const toggleBtnAnimation = () => {
    handleClick()
    gsap.fromTo(
      btn.current,
      {
        duration: 1.2,
        ease: "power3.inOut",
        opacity: 0,
      },
      {
        delay: 0.6,
        duration: 1,
        ease: "power3.inOut",
        opacity: 1,
      }
    )
  }

  return (
    <div
      ref={btn}
      className="nav-btn__container"
      style={{
        display: "flex",
        alignItems: "center",
        pointerEvents: "all",
        position: "relative",
      }}
    >
      <Button
        showInfo={showInfo}
        onClick={toggleBtnAnimation}
        disabled={btnState.btnDisabled}
        className="menu-btn"
      >
        Инфо
      </Button>
      <div ref={closeIco} style={{ marginBottom: "-6px" }}>
        <BiPlus fill={showInfo ? "#fff" : "#000"} />
      </div>
    </div>
  )
}

export default NavBtn
