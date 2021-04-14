import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "../components/slider"
import Footer from "../components/footer"

const GalleryTemplate = ({ data }) => {
  const images = data.photoshoot.pictures.map(picture => {
    const img = getImage(picture.localFile)
    return (
      <div key={picture.id}>
        <div className="slide" style={{ height: "100vh" }}>
          <GatsbyImage
            image={img}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt={data.photoshoot.title}
            style={{ height: "100%" }}
            imgStyle={{ objectFit: "contain" }}
          />
        </div>
        <Footer pictureTitle={data.photoshoot.title} />
      </div>
    )
  })
  return (
    <Layout>
      <div style={{ position: "relative", backgroundColor: "#e9e8dc" }}>
        <Slider items={images} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePhotoshoot($slug: String) {
    photoshoot: strapiPhotoshoots(slug: { eq: $slug }) {
      title
      id
      pictures {
        id
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default GalleryTemplate
