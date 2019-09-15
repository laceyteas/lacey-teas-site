import React from 'react';
import styles from './Input.module.css';
import Label from '../Label/Label'
import slugify from '../../../../util/slugify'

const Input = ({label, placeholder, maxlength, type, required}) => {

    const forRef = slugify(label)

    return (
        <div className={styles.InputWrapper} >
            <Label label={label} forRef={forRef} required={required}/>
            <input className={styles.Input} id={forRef} name={forRef} placeholder={placeholder} type={type} maxLength={maxlength}/>
        </div>
    )
}

export default Input;