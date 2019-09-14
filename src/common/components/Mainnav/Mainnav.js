import React from 'react';
import styles from './Mainnav.module.css';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Mainnav = ({includeHome}) => {

  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: {order: ASC, fields: frontmatter___order},
          filter: {frontmatter: {type: {eq: "main-page"}}}) {
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


  const pageLinks = allMarkdownRemark.edges.map( edge => {
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
        {includeHome? <li className={styles.MainnavListItem}><Link to="/" className={styles.Link} activeClassName={styles.Active}>Home</Link></li> : null}
        {pageLinks}
      </ul>  
    </nav>
  )
}

export default Mainnav;