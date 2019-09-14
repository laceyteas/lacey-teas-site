import React from 'react';
import styles from './Form.module.css';

const Form = (props) => (
    <form className={styles.Form} data-netlify="true" name={props.name} method="POST" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value={props.name} />
        {props.children}
    </form>
);

export default Form;