import React, { useRef, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ProjectMain = ({ project, index }) => {
  const elRef = useRef(null)
  const titleRef = useRef(null)
  const titleRefStyle = useRef(null)

  const image = getImage(project.pictures[0].localFile)

  useEffect(() => {
    gsap.from(elRef.current, {
      duration: 2,
      x: -20,
      y: 30,
      ease: "none",
      scrollTrigger: {
        id: `section-${index + 1}`,
        trigger: elRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    })
  }, [elRef, index])

  useEffect(() => {
    titleRefStyle.current = gsap.to(titleRef.current, {
      opacity: 1,
      duration: 1,
      ease: "none",
      paused: true,
    })
  }, [titleRef, titleRefStyle])

  return (
    <section
      onMouseEnter={() => titleRefStyle.current.play()}
      onMouseLeave={() => titleRefStyle.current.reverse()}
    >
      <div
        ref={elRef}
        className="picture__container"
        style={{
          padding: "2rem 6rem",
          display: "flex",
          position: "relative",
          pointerEvents: "none",
        }}
      >
        <Link to={`/gallery/${project.slug}`}>
          <div className="scale" style={{ display: "flex" }}>
            <GatsbyImage
              style={{ maxHeight: "90vh", display: "flex" }}
              className="ourImage"
              image={image}
              quality={95}
              formats={["AUTO", "WEBP"]}
              alt={project.title}
              imgStyle={{
                objectFit: "contain",
                width: "unset",
                pointerEvents: "auto",
                marginLeft: index % 2 ? "auto" : "0",
              }}
            />
          </div>
        </Link>
      </div>
      <div
        ref={titleRef}
        className="picture__title"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontSize: "10vh",
            fontWeight: "200",
          }}
        >
          {project.title}
        </h2>
      </div>
    </section>
  )
}

export default ProjectMain
