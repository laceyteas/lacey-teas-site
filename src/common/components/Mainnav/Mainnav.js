import React from 'react';
import styles from './Mainnav.module.css';
import { Link, useStaticQuery, graphql } from 'gatsby';

const mainnav = (props) => {

  const getPageList = () => {
    const { allMarkdownRemark } = useStaticQuery(
      graphql`
      query {
        allMarkdownRemark(
          sort: {order: ASC, fields: frontmatter___date},
          filter: {frontmatter: {type: {eq: "page"}}}) {
          edges {
            node {
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `
    )
    return allMarkdownRemark.edges
  }

  const pageLinks = getPageList().map( edge => {
    return (
      <li className={styles.MainnavListItem} key={edge.node.frontmatter.slug}>
        <Link to={edge.node.frontmatter.slug}
          className={styles.Link}
          activeClassName={styles.Active}
        >{edge.node.frontmatter.title}</Link>
      </li>
    )
  });

  return (
 
    <nav className={styles.Mainnav} >
      <ul className={styles.MainnavList}>
        {pageLinks}
      </ul>  
    </nav>
  )
}

export default mainnav;