import React from 'react';
import styles from './Select.module.css';
import Label from '../Label/Label';

const Select = ({optionsArray, label, required}) => {

    const forRef = label.replace(/\s/g, ''); //Remove spaces

    return (
        <div className={styles.SelectWrapper} >
            <Label label={label} forRef={forRef} required={required}/>
            <select className={styles.Select}>
                {optionsArray.map((option, index) => (
                    <option key={index} value={option.value}>{option.name ? option.name : option.value}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;