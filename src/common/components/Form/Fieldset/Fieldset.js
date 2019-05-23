import React from 'react';
import styles from './Fieldset.module.css';

const Fieldset = ({children, legend}) => (
    <fieldset className={styles.Fieldset} >
        <legend className={styles.Legend}>{legend}</legend>
        {children}
    </fieldset>
);

export default Fieldset;