import { graphql } from 'gatsby';
import { remarkForm } from 'gatsby-tinacms-remark';
import React from 'react';

import Layout from '../common/layouts/Layout/Layout';
import Page from '../common/layouts/Page/Page';
import Seo from '../common/seo';

const Remote = ({data}) => {
  const img = data.markdownRemark.frontmatter.postImage ? data.markdownRemark.frontmatter.postImage.childImageSharp.fluid : null;
  return (
  <Layout>
    <Seo
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.metaDescription} />
    <Page
      title={data.markdownRemark.frontmatter.title}
      img={img}
      htmlcontent={data.markdownRemark.html}
    />
  </Layout>
)}

export default remarkForm(Remote)

export const dataQuery = graphql`
  query {
    markdownRemark(frontmatter: {name: {eq: "remote"}}) {
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
      ...TinaRemark
    }
  }
`
