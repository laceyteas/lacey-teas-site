import React from 'react';
import styles from './Submit.module.css';

const Submit = ({title, click}) => (
    <button className={styles.Submit} onClick={click}>{title}</button>
);

export default Submit;