import React from "react"
import Layout from '../common/layouts/Layout/Layout';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import Howtomeet from '../homepage/Howtomeet/Howtomeet';
import Homegallery from '../homepage/Homegallery/Homegallery'
import Page from "../common/layouts/Page/Page";
import { remarkForm } from 'gatsby-tinacms-remark';

const Index =  ({ data }) => {
  
  return (
    <Layout>
      <Seo
        title={"Home Page"}
        description={data.site.siteMetadata.description} />
      <Page 
        title={data.markdownRemark.frontmatter.title} 
        img={data.markdownRemark.frontmatter.postImage.childImageSharp.fluid}
        htmlcontent={data.markdownRemark.html}
      />
      <Howtomeet />
      <Homegallery />

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
            fluid(maxHeight: 720, maxWidth: 1920, cropFocus: CENTER) {
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
