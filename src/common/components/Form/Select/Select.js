import React from 'react';
import styles from './Select.module.css';
import Label from '../Label/Label';
import slugify from '../../../../util/slugify'

const Select = ({optionsArray = [], label, required}) => {

    const forRef = slugify(label)

    return (
        <div className={styles.SelectWrapper} >
            <Label label={label} forRef={forRef} required={required}/>
            <select className={styles.Select} id={forRef} name={forRef}>
                {optionsArray.map((option, index) => (
                    <option key={index} value={option.value}>{option.name ? option.name : option.value}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;