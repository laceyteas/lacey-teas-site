import React from 'react';

import styles from './Checkbox.module.css';

const Required = () => (
    <span className={styles.Required}>*</span>
)

const Checkbox = ({label, name, error, change, blur, value, required}) => {

    const fieldClass = error ? [styles.Checkbox, styles.Error].join(' ') : styles.Checkbox

    //TODO: get this working. Need to put label next to checkbox and need to get onchange and blur working
    return (
        <div className={styles.CheckboxWrapper} >
            <input className={fieldClass} name={name} type="checkbox" value={value} onChange={change} onBlur={blur} />
            <label className={styles.Label} htmlFor={name}>{label}{required ? <Required/> : null}</label>
        </div>
    )
}

export default Checkbox;