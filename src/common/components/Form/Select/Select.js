import React from 'react';
import styles from './Select.module.css';
import Label from '../Label/Label';

const Select = ({optionsArray = [], label, required, error, change, blur, value, name}) => {

    const fieldClass = error ? [styles.Select, styles.Error].join(' ') : styles.Select

    return (
        <div className={styles.SelectWrapper} >
            <Label label={label} forRef={name} required={required}/>
            <select className={fieldClass} id={name} name={name} value={value} onChange={change} onBlur={blur}>
                {optionsArray.map((option, index) => (
                    <option key={index} value={option.value} disabled={option.disabled} >{option.name ? option.name : option.value}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;