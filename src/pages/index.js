import React from "react"
import "../styles/index.css"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { nominalTypeHack } from "prop-types"
import ProjectMain from "../components/projectMain"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Lena Tiunova Photography" />

      <StaticQuery
        query={query}
        render={data => (
          <>
            {data.allStrapiPhotoshoots.nodes.map((project, index) => {
              return (
                <ProjectMain project={project} index={index} key={project.id} />
              )
            })}
          </>
        )}
      />
    </Layout>
  )
}

export default IndexPage

const query = graphql`
  query {
    allStrapiPhotoshoots {
      nodes {
        id
        title
        slug
        pictures {
          localFile {
            childImageSharp {
              gatsbyImageData(height: 500)
            }
          }
        }
      }
    }
  }
`
