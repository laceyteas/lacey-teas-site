import React from 'react';
import styles from './Input.module.css';
import Label from '../Label/Label'

const Input = ({label, name, placeholder, maxlength, change, value, type = 'type', required}) => {

    return (
        <div className={styles.InputWrapper} >
            <Label label={label} forRef={name} required={required}/>
            <input className={styles.Input} id={name} name={name} onChange={change} placeholder={placeholder} value={value} type={type} maxLength={maxlength}/>
        </div>
    )
}

export default Input;