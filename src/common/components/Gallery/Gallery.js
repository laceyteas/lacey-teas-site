import React from 'react';
import styles from './Gallery.module.css';
import Section from '../../layouts/Section/Section';
import Galleryitem from '../Galleryitem/Galleryitem';

const Gallery = ({images}) => {

    // props.images requires an array with {fluid: {aspectRatio:}}
    // Might want to add optional captions or urls as well for the Instagram images

    return (
        <Section fullwidth>
            <div className={styles.Gallery}>
                {images.map((image, index) => (
                    <Galleryitem key={index} images={images} index={index} />
                ))}
            </div>
        </Section>
    )
}

export default Gallery;
