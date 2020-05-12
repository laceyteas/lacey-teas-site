import React, {useState, Fragment} from 'react';
import styles from './Galleryitem.module.css';
import Imagepopup from '../Imagepopup/Imagepopup';
import Img from 'gatsby-image';

const Image = ({image}) => {

    if (image.fixed) {
        return (<Img fixed={image.fixed} />) //Doesn't work right for images with box-shadow. Might have to roll muy own Img component or ditch drop shadow
    } else {
        return (<Img fluid={image.fluid} />)
    }
}

const Galleryitem = ({images, index, limit}) => {

    const galleryLength = images.length - 1;
    const [currentIndex, setIndex] = useState(index);
    const [currentImage, setImage] = useState(images[index]);
    const [clicked, setClickedToggle] = useState(false);

    const click = () => {
        setClickedToggle( clicked => !clicked );
        setIndex(index); // Reset to this item's index and image on click
        setImage(images[index]);
    }

    const nextImage = () => {
        const nextIndex = (currentIndex === galleryLength) ? 0 : currentIndex + 1;
        setIndex(nextIndex);
        setImage(images[nextIndex]);
    }

    const inlineStyle = (limit < 5 ) ? {flex: '1 1 25%'} : null;

    return (
        <Fragment>
            <div className={clicked ? `${styles.Galleryitem} ${styles.Clicked}`: styles.Galleryitem} onClick={click} style={inlineStyle} >
                <div className={styles.Inner} >
                    <Image image={images[index]}/>
                </div>
            </div>
            <Imagepopup show={clicked} image={currentImage} next={nextImage} close={click} />

        </Fragment>

    )
};

export default Galleryitem;