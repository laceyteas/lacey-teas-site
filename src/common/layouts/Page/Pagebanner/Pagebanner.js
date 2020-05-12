import Img from 'gatsby-image';
import React from 'react';

import Pagetitle from '../Pagetitle/Pagetitle'

import styles from './Pagebanner.module.css';

const Pagebanner = (props) => (
    <div className={styles.Pagebanner} >
        { props.img ? <Img fluid={props.img}/> : <div className={styles.NoBannerImage}></div> }
        <Pagetitle title={props.title}/>
    </div>
);

export default Pagebanner;