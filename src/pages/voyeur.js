import React from 'react';
import Layout from '../common/layouts/Layout/Layout';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import Page from '../common/layouts/Page/Page';
import Gallery from '../common/components/Gallery/Gallery';
import useGalleryFolderImages from '../hooks/useGalleryFolderImages';
import { remarkForm } from 'gatsby-tinacms-remark';

const Voyeur = ({data}) => {

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
        img={data.markdownRemark.frontmatter.postImage.childImageSharp.fluid}
        htmlcontent={data.markdownRemark.html}
      >

        <h2>Gallery</h2>
        <Gallery images={folderImages}/>
      </Page>
    </Layout>
  )
}

export default remarkForm(Voyeur)

export const dataQuery = graphql`
  query {
    markdownRemark(frontmatter: {name: {eq: "voyeur"}}) {
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
