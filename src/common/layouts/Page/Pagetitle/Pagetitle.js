import React from 'react';
import styles from './Pagetitle.module.css';

const Pagetitle = (props) => (
    <div className={styles.PagetitleWrapper} >
        <h1 className={styles.Pagetitle}>{props.title}</h1>
    </div>
);

export default Pagetitle;