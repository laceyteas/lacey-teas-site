import React from 'react';
import styles from './Gallery.module.css';
import Section from '../../layouts/Section/Section';
import Galleryitem from '../Galleryitem/Galleryitem';

const Gallery = ({images, limit, fullwidth = false, innerStyle}) => {

    // props.images requires an array with {fluid: {aspectRatio:}}
    // Might want to add optional captions or urls as well for the Instagram images

    const imageGallery = limit ? images.splice(0,limit) : images

    return (
        <Section fullwidth={fullwidth} innerStyle={innerStyle}>
            <div className={styles.Gallery}>
                {imageGallery.map((image, index) => (
                    <Galleryitem key={index} limit={limit} images={imageGallery} index={index} />
                ))}
            </div>
        </Section>
    )
}

export default Gallery;
