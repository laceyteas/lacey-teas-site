import React from 'react';
import styles from './Pagebanner.module.css';
import Img from 'gatsby-image';
import Pagetitle from '../Pagetitle/Pagetitle'

const Pagebanner = (props) => (
    <div className={styles.Pagebanner} >
        { props.img ? <Img fluid={props.img}/> : <div className={styles.NoBannerImage}></div> }
        <Pagetitle title={props.title}/>
    </div>
);

export default Pagebanner;