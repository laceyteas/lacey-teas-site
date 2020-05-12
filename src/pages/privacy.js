import { graphql } from 'gatsby';
import { remarkForm } from 'gatsby-tinacms-remark';
import Helmet from 'react-helmet';
import React from 'react';

import Layout from '../common/layouts/Layout/Layout';
import Page from '../common/layouts/Page/Page';
import Seo from '../common/seo';

const Privacy = ({data}) => (
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

export default remarkForm(Privacy)

export const dataQuery = graphql`
  query {
    markdownRemark(frontmatter: {name: {eq: "privacy-policy"}}) {
      html
      frontmatter {
        title
        metaDescription
      }
      ...TinaRemark
    }
  }
`
