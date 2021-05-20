import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`
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
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} - {node.frontmatter.data}
              </BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        ) )
      }
    </div>
  </Layout>
)}

export const query = graphql
  query `{
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        frontmatter {
          date
          description
          title
        }
        field {
          slug
        }
        excerpt
      }
    }
  }
}`
