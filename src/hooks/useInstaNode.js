import { useStaticQuery, graphql } from 'gatsby';

const useInstaNode = () => {
    const { allInstaNode } = useStaticQuery(
      graphql`
        query {
            allInstaNode {
                edges {
                    node {
                        id
                        likes
                        comments
                        mediaType
                        preview
                        original
                        timestamp
                        caption
                        localFile {
                            childImageSharp {
                                fluid(maxHeight: 500, maxWidth: 500 quality: 90) {
                                    aspectRatio
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        # Only available with the public api scraper
                        thumbnails {
                        src
                        config_width
                        config_height
                        }
                        dimensions {
                        height
                        width
                        }
                    }
                }
            }
        }
      `
    )
    return allInstaNode.edges
}

export default useInstaNode;