import React from 'react';
import styles from './Pagetitle.module.css';

const pagetitle = (props) => (
    <div className={styles.Pagetitle} >
        <h1 className={styles.Pagetitle}>{props.title}</h1>
    </div>
);

export default pagetitle;