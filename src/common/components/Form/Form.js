import React from 'react';
import styles from './Form.module.css';

const Form = (props) => (
    <form className={styles.Form} data-netlify="true" name='contact' method="POST" >
        {props.children}
    </form>
);

export default Form;