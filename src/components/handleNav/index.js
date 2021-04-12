import React, { useState, useRef } from "react"
import Info from "./info"
import NavBtn from "./navBtn"

const HandleNav = () => {
  const [initialShowMenu, setInitialShowMenu] = useState(false)
  const [showInfo, setShowInfo] = useState(null)
  const [btnState, setBtnState] = useState({
    showBtn: true,
    btnDisabled: false,
  })

  const disableMenu = () => {
    setBtnState({ btnDisabled: true, showBtn: false })
    setTimeout(() => {
      setBtnState({ btnDisabled: false, showBtn: true })
    }, 1600)
  }

  const handleBtnClick = () => {
    console.log("bnt clicked")
    disableMenu()
    if (initialShowMenu === false) {
      setInitialShowMenu(null)
      setShowInfo(true)
    } else if (showInfo === true) {
      setShowInfo(!showInfo)
    } else if (showInfo === false) {
      setShowInfo(!showInfo)
    }
  }
  return (
    <div>
      <Info showInfo={showInfo} initialShowMenu={initialShowMenu} />
      <NavBtn
        handleClick={handleBtnClick}
        showInfo={showInfo}
        btnState={btnState}
      />
    </div>
  )
}

export default HandleNav
