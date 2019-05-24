import React from 'react';
import Layout from '../common/layouts/Layout/Layout';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import Page from '../common/layouts/Page/Page';

export default ({props, data}) => (
  <Layout>
    <Seo
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.metaDescription} />
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <Page 
      title={data.markdownRemark.frontmatter.title} 
      htmlcontent={data.markdownRemark.html}
    />
    
  </Layout>
)

export const dataQuery = graphql`
  query {
    markdownRemark(frontmatter: {name: {eq: "privacy-policy"}}) {
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
