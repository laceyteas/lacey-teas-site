import { graphql } from 'gatsby';
import { remarkForm } from 'gatsby-tinacms-remark';
import React from "react"

import Layout from '../common/layouts/Layout/Layout';
import Page from "../common/layouts/Page/Page";
import Seo from '../common/seo';
import Howtomeet from '../homepage/Howtomeet/Howtomeet';
import HomeSiteBadges from '../homepage/HomeSiteBadges/HomeSiteBadges'

const Index =  ({ data }) => {

  const img = data.markdownRemark.frontmatter.postImage ? data.markdownRemark.frontmatter.postImage.childImageSharp.fluid : null;

  return (
    <Layout>
      <Seo
        title={"Home Page"}
        description={data.site.siteMetadata.description} />
      <Page
        title={data.markdownRemark.frontmatter.title}
        img={img}
        htmlcontent={data.markdownRemark.html}
      />
      <Howtomeet />
      <HomeSiteBadges />
    </Layout>
  )
}
export default remarkForm(Index)

export const query = graphql`
  query {
    markdownRemark(frontmatter: {name: {eq: "homepage__intro"}}) {
      html
      frontmatter {
        title
        postImage {
          childImageSharp {
            fluid(maxHeight: 1200, maxWidth: 1920, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      ...TinaRemark
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`
