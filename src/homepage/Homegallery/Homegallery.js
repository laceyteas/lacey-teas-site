import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import Gallery from '../../common/components/Gallery/Gallery';
import Section from '../../common/layouts/Section/Section';
import useGalleryFolderImages from '../../hooks/useGalleryFolderImages';

import styles from './Homegallery.module.css';

const Homegallery = (props, data) => {

    const { markdownRemark } = useStaticQuery(
      graphql`
        query {
            markdownRemark(frontmatter: {name: {eq: "homepage__gallery"}}) {
                html
                frontmatter {
                    title
                }
            }
        }
      `
    )

    const folderImages = useGalleryFolderImages().map( ({node}) => {
      return {
        id: node.id,
        fluid: node.childImageSharp.fluid,
        fixed: node.childImageSharp.fixed
      }
    })
 
    return (
        <Section title={markdownRemark.frontmatter.title} htmlcontent={markdownRemark.html} >
          <div className={styles.Content} dangerouslySetInnerHTML={{__html: props.htmlcontent}}/>
          <Gallery images={folderImages} limit={3} innerStyle={{width:'100%'}}/>
        </Section>
    )
}

export default Homegallery;