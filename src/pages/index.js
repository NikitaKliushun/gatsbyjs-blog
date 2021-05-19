import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default ({data}) => {
  console.log(data);
  return (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>Thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {
        data.allMarkdownRemark.edges.map( ({node}) => (
          <span key={node.id}>
            <h2>{node.frontmatter.title} - {node.frontmatter.data}</h2>
            <p>{node.excerpt}</p>
          </span>
        ) )
      }
    </div>
  </Layout>
)}

export const query = graphql`
  query {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        frontmatter {
          date
          description
          title
        }
        html
        excerpt
      }
    }
  }
}`
