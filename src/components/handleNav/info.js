import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import fadeInUp from "../../animations/fadeInUp"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineFacebook } from "react-icons/ai"

const Info = ({ showInfo, initialShowMenu }) => {
  const menu = useRef(null)
  const menuBlock = useRef(null)
  const contactInfo = useRef(null)
  const contactPhone = useRef(null)
  const contactEmail = useRef(null)
  const instagramRef = useRef(null)
  const facebookRef = useRef(null)
  const mainInfo = useRef(null)

  useEffect(() => {
    if (showInfo === false) {
      gsap.to(menuBlock.current, {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
      })
      gsap.to(menu.current, {
        duration: 1,
        css: { display: "none" },
      })
    } else if (
      showInfo === true ||
      (showInfo === true && initialShowMenu === null)
    ) {
      gsap.to(menu.current, {
        duration: 0,
        css: { display: "block" },
      })
      gsap.to(menuBlock.current, {
        duration: 0.8,
        height: "100%",
        ease: "power3.inOut",
      })
      fadeInUp(
        contactInfo.current,
        contactPhone.current,
        contactEmail.current,
        instagramRef.current,
        facebookRef.current
      )
      gsap.from(mainInfo.current, {
        duration: 1.2,
        y: 120,
        delay: 0.2,
        opacity: 0,
        ease: "power3.inOut",
      })
    }
  }, [showInfo, initialShowMenu])

  return (
    <div ref={menu} style={{ display: "none", pointerEvents: "auto" }}>
      <div
        ref={menuBlock}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: 0,
          overflow: "hidden",
          backgroundColor: "#252629",
          color: "white",
          textAlign: "start",
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
        }}
      >
        <section style={{ padding: "6rem 3rem" }}>
          <div style={{ overflow: "hidden" }}>
            <h1 ref={contactInfo} style={{ fontSize: "1.4rem" }}>
              Контактная информация
            </h1>
          </div>
          <div style={{ overflow: "hidden" }}>
            <a
              ref={contactPhone}
              href="tel: +37379120201"
              style={{ color: "white", display: "block" }}
            >
              +373-79-120-201
            </a>
          </div>
          <div style={{ overflow: "hidden" }}>
            <a
              ref={contactEmail}
              href="mailto:lenati@mail.ru"
              style={{ color: "white", display: "block" }}
            >
              lenati@mail.ru
            </a>
          </div>
          <div style={{ display: "flex", marginTop: "1rem" }}>
            <div style={{ overflow: "hidden" }}>
              <a
                ref={instagramRef}
                href="https://www.instagram.com/lenati_photo/?fbclid=IwAR1C_lSTdNr_nO65ctHFolujaV311QyIM0gTEw8pp3s_-WG02mLWnAn-xr4"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <AiOutlineInstagram style={{ width: "30px", height: "30px" }} />
              </a>
            </div>
            <div style={{ overflow: "hidden" }}>
              <a
                ref={facebookRef}
                href="https://www.facebook.com/profile.php?id=100006722971913"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <AiOutlineFacebook style={{ width: "30px", height: "30px" }} />
              </a>
            </div>
          </div>
        </section>
        <section
          ref={mainInfo}
          style={{ padding: "6rem 4rem", overflowY: "scroll" }}
        >
          <h3 style={{ fontSize: "3rem" }}>Лена Тиунова</h3>
          <p style={{ padding: "3rem 5rem" }}>
            Приятно, когда фотографию хочется просматривать, как хороший
            рассказ. Каждый раз новые мысли, эмоции. Делать красивые, интересные
            кадры легко, когда ты знаешь, что цель фотографии - это передать
            видимое и невидимое: людей, костюмы, дома, природу, свет, атмосферу,
            характер, любовь, доброту, счастье... Люблю восхищаться улыбками и
            эмоциями непрофессиональных моделей, бликами на ресничках невест,
            усами своего кота, любыми взаимодействиями модели и декорации,
            “неправильными” детскими движениями, превращающими фотосессию в
            непредсказуемую Историю в кадре.
          </p>
          <p style={{ padding: "3rem 5rem" }}>
            Равным образом дальнейшее развитие различных форм деятельности
            позволяет выполнять важные задания по разработке системы обучения
            кадров, соответствует насущным потребностям. Товарищи! консультация
            с широким активом позволяет выполнять важные задания по разработке
            позиций, занимаемых участниками в отношении поставленных задач.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Info
