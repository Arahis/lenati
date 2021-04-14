import React, { useState, useEffect, useCallback } from "react"
import ArrowLeft from "../images/arrow-left.inline.svg"
import ArrowRight from "../images/arrow-right.inline.svg"

const Slider = ({ items }) => {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)
  const [count, setCount] = useState(0)
  const [arrowNext, setArrowNext] = useState(true)
  const [arrowPrev, setArrowPrev] = useState(false)

  // Изначально у нас есть стрелка вправо и мы можем только прибавлять
  // Дальше мы можем прибавлять и отнимать, Но это зависит от того на какой части экрана у нас мышка
  // Третее положение, если у нас конец массива, мы можем только отнимать и стрелка влево

  // Стрелку мы отслеживаем handleMouseMove, стэйт для стрелок меняем в useEffect

  const handleMouseMove = useCallback(
    e => {
      setScreenWidth(e.view.innerWidth)
      setTimeout(() => {
        setTop(e.clientY)
        setLeft(e.clientX)
      }, 200)
    },
    [setScreenWidth, setTop, setLeft]
  )

  const handleMouseClick = useCallback(() => {
    if (arrowNext) {
      setCount(count + 1)
    }
    if (arrowPrev) {
      setCount(count - 1)
    }
  }, [arrowNext, arrowPrev, count, setCount])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove])

  // Logic for Slider counter and arrows
  useEffect(() => {
    if (count === 0) {
      setArrowNext(true)
      setArrowPrev(false)
    }

    if (count > 0 && count < items.length - 1) {
      if (left < screenWidth / 2) {
        setArrowNext(false)
        setArrowPrev(true)
      } else if (left > screenWidth / 2) {
        setArrowNext(true)
        setArrowPrev(false)
      }
    }
    if (count >= items.length - 1) {
      setArrowNext(false)
      setArrowPrev(true)
    }
  }, [count, left, setArrowNext, setArrowPrev, items, screenWidth])

  return (
    <div
      onClick={handleMouseClick}
      style={{
        width: "100%",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Image renders here. "count is the index of the shown image" */}
      {items[count]}
      <div
        className="cursor"
        style={{
          position: "absolute",
          top: top,
          left: left,
          transform: "translate(100%, 50%)",
          transition: "opacity .4s cubic-bezier(.215,.61,.355,1)",
          display: "flex",
          alignItems: "center",
          mixBlendMode: "difference",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {arrowPrev && (
            <ArrowLeft style={{ width: "7px", margin: "1px 10px 0 0" }} />
          )}
          <div style={{ fontWeight: "bold" }}>{count + 1}/</div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "5px" }}
        >
          <div style={{ fontSize: "12px" }}>{items.length}</div>
          {arrowNext && (
            <ArrowRight style={{ width: "5px", margin: "1px 0 0 10px" }} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Slider
