import React from 'react';
import Layout from '../common/layouts/Layout/Layout';
//import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Seo from '../common/seo';
import Page from '../common/layouts/Page/Page';


export default ({props, data}) => (
  <Layout>
    <Seo
      title={`About ${data.site.siteMetadata.title}`}
      description={data.site.siteMetadata.description} />

    <Page title="404">
      <p>We couldn&#39;t find what you were looking for.</p>
      <Link to="/" >Go to homepage</Link>
    </Page>
  </Layout>

)


export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }`
