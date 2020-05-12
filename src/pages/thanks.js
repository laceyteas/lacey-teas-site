import { graphql } from 'gatsby';
import { remarkForm } from 'gatsby-tinacms-remark';
import React from 'react';

import Layout from '../common/layouts/Layout/Layout';
import Page from '../common/layouts/Page/Page';
import Seo from '../common/seo';

const Thanks = ({data}) => (
  <Layout>
    <Seo
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.metaDescription} />
    <Page 
      title={data.markdownRemark.frontmatter.title} 
      htmlcontent={data.markdownRemark.html}
    />
  </Layout>
)

export default remarkForm(Thanks)

export const dataQuery = graphql`
  query {
    markdownRemark(frontmatter: {name: {eq: "thanks"}}) {
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
