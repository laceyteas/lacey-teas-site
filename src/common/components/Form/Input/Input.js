import React from 'react';
import styles from './Input.module.css';
import Label from '../Label/Label'

const Input = ({label, placeholder, maxlength, type, required}) => {

    const forRef = label.replace(/\s/g, ''); //Remove spaces

    return (
        <div className={styles.InputWrapper} >
            <Label label={label} forRef={forRef} required={required}/>
            <input className={styles.Input} id={forRef} placeholder={placeholder} type={type} maxLength={maxlength}/>
        </div>
    )
}

export default Input;