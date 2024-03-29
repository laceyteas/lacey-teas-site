import { graphql } from 'gatsby';
import { remarkForm } from 'gatsby-tinacms-remark';
import React from 'react';

import Layout from '../common/layouts/Layout/Layout';
import Page from '../common/layouts/Page/Page';
import Seo from '../common/seo';
import Gallery from '../common/components/Gallery/Gallery';
import useGalleryFolderImages from '../hooks/useGalleryFolderImages';

const Voyeur = ({data}) => {
  const img = data.markdownRemark.frontmatter.postImage ? data.markdownRemark.frontmatter.postImage.childImageSharp.fluid : null;
  const folderImages = useGalleryFolderImages().map( ({node}) => {
    return {
      id: node.id,
      fluid: node.childImageSharp.fluid,
      fixed: node.childImageSharp.fixed
    }
  })


  return (
    <Layout>
      <Seo
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.metaDescription} />
      <Page 
        title={data.markdownRemark.frontmatter.title}
        img={img}
        htmlcontent={data.markdownRemark.html}
      >

        <h2>Gallery</h2>
        <Gallery images={folderImages} fullwidth={true} />
      </Page>
    </Layout>
  )
}

export default remarkForm(Voyeur)

export const dataQuery = graphql`
  query {
    markdownRemark(frontmatter: {name: {eq: "gallery"}}) {
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
