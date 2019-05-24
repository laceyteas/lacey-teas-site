import React, {Fragment} from 'react';
import styles from './Imagepopup.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Img from 'gatsby-image';

const Imagepopup = ({show, image, next, close}) => {

    let screen = {width: window.innerWidth, height: window.innerHeight}
    screen.aspectRatio = screen.width / screen.height // If > 1 then wider than it is tall; else < 1 taller than it is wide
    let popup = {width: 80, height: 80}
    popup.aspectRatio = image.fluid.aspectRatio

    if (popup.aspectRatio >= screen.aspectRatio) {
        popup.width = 85
        popup.height = screen.aspectRatio / popup.aspectRatio * .85 * 100
    } else {
        popup.height = 85
        popup.width = popup.aspectRatio / screen.aspectRatio * .85 * 100
    }
    
    const inlineStyle = {
        width: `${popup.width}vw`,
        height: `${popup.height}vh`,
        borderRadius: "3px"
    }

    if (show) {
        return (
            <Fragment>
                <div className={styles.Imagepopup} onClick={next}>
                    <Img fluid={image.fluid} style={inlineStyle} />
                </div>
                <Backdrop show={show} close={close} />
            </Fragment>
        )
    } else return null
}

export default Imagepopup;