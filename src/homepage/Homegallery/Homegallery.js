import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../../common/layouts/Section/Section';
//import styles from './Homegallery.module.css';

const Homegallery = (props, data) => {

    const { markdownRemark } = useStaticQuery(
      graphql`
        query {
            markdownRemark(frontmatter: {name: {eq: "homepage__gallery"}}) {
                html
                frontmatter {
                    title
                    postImage {
                        childImageSharp {
                          fluid(maxHeight: 400, maxWidth: 400, cropFocus: CENTER) {
                            ...GatsbyImageSharpFluid
                          }
                        } 
                    }
                }
            }
        }
      `
    )
 
    return (
        <Section title={markdownRemark.frontmatter.title} htmlcontent={markdownRemark.html} />
    )
}

export default Homegallery;