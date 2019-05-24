import React from 'react';
//import styles from './Howtomeet.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../../common/layouts/Section/Section';

const Howtomeet = (props, data) => {

    const getContent = () => {
        const { markdownRemark } = useStaticQuery(
          graphql`
            query {
                markdownRemark(frontmatter: {name: {eq: "homepage__meet"}}) {
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

    // NOTE: Might want to do something with the postImage later

    return (
        <Section title={md.frontmatter.title} htmlcontent={md.html} /> 
    )
}

export default Howtomeet;