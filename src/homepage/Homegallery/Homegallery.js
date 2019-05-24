import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../../common/layouts/Section/Section';
//import styles from './Homegallery.module.css';

const Homegallery = (props, data) => {

    const getContent = () => {
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
        return markdownRemark
    }
 
    const md = getContent();

    //NOTE: This component needs to call up a mini gallery of images

    return (
        <Section title={md.frontmatter.title} htmlcontent={md.html} />
    )
}

export default Homegallery;