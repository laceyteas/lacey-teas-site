import React from 'react';
import styles from './Input.module.css';
import Label from '../Label/Label'

const Input = ({label, name, placeholder, maxlength, error, change, blur, value, type = 'type', required}) => {

    const fieldClass = error ? [styles.Input, styles.Error].join(' ') : styles.Input

    return (
        <div className={styles.InputWrapper} >
            <Label label={label} forRef={name} required={required}/>
            <input className={fieldClass} id={name} name={name} onChange={change} onBlur={blur} placeholder={placeholder} value={value} type={type} maxLength={maxlength}/>
        </div>
    )
}

export default Input;