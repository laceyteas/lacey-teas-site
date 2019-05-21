import React from 'react';
import styles from './Inner.module.css';

const Inner = (props) => (
    <div className={styles.Inner} >
        {props.children}
    </div>
);

export default Inner;