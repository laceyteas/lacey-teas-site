import React from 'react';
import Layout from '../common/layouts/Layout/Layout';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import Page from '../common/layouts/Page/Page';
import Reservationform from '../common/components/Reservationform/Reservationform'

export default ({props, data}) => (
  <Layout>
    <Seo
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.metaDescription} />
    <Page 
      title={data.markdownRemark.frontmatter.title} 
      img={data.markdownRemark.frontmatter.postImage.childImageSharp.fluid}
      htmlcontent={data.markdownRemark.html}
    />
    <Reservationform/>
  </Layout>
)

export const dataQuery = graphql`
  query {
    markdownRemark(frontmatter: {name: {eq: "meet"}}) {
      html
      frontmatter {
        title
        metaDescription
        postImage {
          childImageSharp {
            fluid(maxHeight: 720, maxWidth: 1920, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          } 
        }
      }
    }
  }
`
