import React from 'react';
import styles from './Sectiontitle.module.css';

const Sectiontitle = (props) => (
    <div className={styles.Sectiontitle} >
        <h2>{props.children}</h2>
    </div>
);

export default Sectiontitle;