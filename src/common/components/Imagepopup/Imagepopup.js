import React, {Fragment, useState, useEffect} from 'react';
import styles from './Imagepopup.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Img from 'gatsby-image';

const Imagepopup = ({show, images, index, close}) => {

    const galleryLength = images.length - 1;

    const [currentIndex, setIndex] = useState(index);

    const [currentImage, setImage] = useState(images[index]);

    const nextImage = () => {
        const nextIndex = (currentIndex === galleryLength) ? 0 : currentIndex + 1;
        setIndex(nextIndex);
        setImage(images[nextIndex]);  
    }

    let aspectRatio = currentImage.fluid.aspectRatio
    let width = (90 * aspectRatio > 90) ? 90 : 90 * aspectRatio;
    let height = (width === 90) ? 90 / aspectRatio : 90

    useEffect( () => {
        
    }, [currentImage])
    
    const inlineStyle = {
        width: `${width}vh`,
        height: `${height}vh`
    }

    if (show) {
        return (
            <Fragment>
                <div className={styles.Imagepopup} style={inlineStyle} onClick={nextImage}>
                    <Img fluid={currentImage.fluid} />
                </div>
                <Backdrop show={show} close={close} />
            </Fragment>
        )
    } else return null
}

export default Imagepopup;