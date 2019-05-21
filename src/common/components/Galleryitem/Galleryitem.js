import React from 'react';
import styles from './Galleryitem.module.css';

const Galleryitem = (props) => (
    <div className={styles.Galleryitem} >
        {props.children}
    </div>
);

export default Galleryitem;