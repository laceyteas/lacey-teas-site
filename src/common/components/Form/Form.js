import React from 'react';
import styles from './Form.module.css';

const Form = (props) => (
    <form className={styles.Form} >
        {props.children}
    </form>
);

export default Form;