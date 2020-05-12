import React from 'react';
//import styles from './Form.module.css';

const Form = (props) => (
    <form onSubmit={props.submit} name={props.name} method="POST" action={props.action} data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value={props.name} />
        <input type="hidden" name="bot-field" />
        {props.children}
    </form>
);

export default Form;