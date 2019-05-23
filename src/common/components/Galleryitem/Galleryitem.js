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

const Galleryitem = ({images, index}) => {

    const [clicked, setClickedToggle] = useState(false);

    const click = () => setClickedToggle( clicked => !clicked );

    return (
        <Fragment>
            <div className={clicked ? `${styles.Galleryitem} ${styles.Clicked}`: styles.Galleryitem} onClick={click} >
                <div className={styles.Inner}>
                    <Image image={images[index]}/>
                </div>
            </div>
            <Imagepopup show={clicked} images={images} index={index} close={click} />

        </Fragment>

    )
};

export default Galleryitem;