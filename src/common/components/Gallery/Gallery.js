import React from 'react';
//import styles from './Gallery.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../../layouts/Section/Section';

const Gallery = (props) => {
    const getContent = () => {
        const { markdownRemark } = useStaticQuery(
          graphql`
            query {
                markdownRemark(frontmatter: {name: {eq: "gallery_summary"}}) {
                    html
                    frontmatter {
                        title
                    }
                }
            }
          `
        )
        return markdownRemark
    }
  
    const md = getContent();

    return (
        <Section title={md.frontmatter.title} htmlcontent={md.html} />
    )
}

export default Gallery;
