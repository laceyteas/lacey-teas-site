import React from 'react';
import Layout from '../common/layouts/Layout/Layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import Page from '../common/layouts/Page/Page';
import Galleryitem from '../common/components/Galleryitem/Galleryitem'
import { styles } from 'ansi-colors';

export default ({props, data}) => (
  <Layout>
    <Seo
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.metaDescription} />
    <Page 
      title={data.markdownRemark.frontmatter.title} 
      img={data.markdownRemark.frontmatter.postImage.childImageSharp.fluid}
      htmlcontent={data.markdownRemark.html}
    >
      <div className={styles.Gallery}>
        {data.allFile.edges.map(({ node }, index) => (
          <Galleryitem>
           <Img key={index} fluid={node.childImageSharp.fluid} />
          </Galleryitem>
        ))}
      </div>
    </Page>
  </Layout>
)

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
    }
    allFile(filter:{
      extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      relativeDirectory:{eq:"gallery/img"}
    }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
              resize(width: 600, quality: 80) {
                src
              }
            }
          }
        }
    }
  }
`
