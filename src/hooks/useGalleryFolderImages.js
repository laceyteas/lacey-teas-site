import { useStaticQuery, graphql } from 'gatsby';

const useGalleryFolderImages = () => {
    const { allFile } = useStaticQuery(
      graphql`
        query {
            allFile(filter:{
                extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
                relativeDirectory:{eq:"gallery/img"}
                }) {
                    edges {
                        node {
                            childImageSharp {
                                fluid(maxWidth: 1920, quality: 80) {
                                    aspectRatio
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                                resize(width: 960, height: 960, quality: 80) {
                                    aspectRatio
                                    src
                                }
                                fixed(width: 400, height: 400) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
        }
      `
    )
    return allFile.edges
}

export default useGalleryFolderImages;