import gsap from "gsap"

const fadeInUp = (...nodes) => {
  gsap.from([...nodes], {
    duration: 0.8,
    y: 70,
    delay: 0.2,
    ease: "power3.inOut",
    opacity: 0,
    stagger: {
      amount: 0.3,
    },
  })
}

export default fadeInUp
