
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
    const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
              description
              twitter
              instagram
            }
          }
        }
      `
    )
    return site.siteMetadata
}

export default useSiteMetadata;