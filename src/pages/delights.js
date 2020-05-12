import { graphql } from 'gatsby';
import { remarkForm } from 'gatsby-tinacms-remark';
import React from 'react';

import Layout from '../common/layouts/Layout/Layout';
import Page from '../common/layouts/Page/Page';
import Seo from '../common/seo';

const Delights = ({data}) => {
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

export default remarkForm(Delights)

export const dataQuery = graphql`
  query {
    markdownRemark(frontmatter: {name: {eq: "delights"}}) {
      html
      frontmatter {
        title
        metaDescription
        
      }
      ...TinaRemark
    }
  }
`
