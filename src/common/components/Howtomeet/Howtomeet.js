import React from 'react';
//import styles from './Howtomeet.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../../layouts/Section/Section';

const Howtomeet = (props, data) => {

    const getContent = () => {
        const { markdownRemark } = useStaticQuery(
          graphql`
            query {
                markdownRemark(frontmatter: {name: {eq: "how_to_meet_summary"}}) {
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

export default Howtomeet;