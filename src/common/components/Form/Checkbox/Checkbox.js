import React from 'react';

import Label from '../Label/Label';
import slugify from '../../../../util/slugify'

import styles from './Checkbox.module.css';

const Checkbox = ({label, optionsArray, required}) => {

    const forRef = slugify(label)

    return (
        <div className={styles.CheckboxWrapper} >
            <Label label={label} forRef={forRef} required={required}/>
            <ul className={styles.CheckboxList}>
                {optionsArray.map((checkbox, index) => (
                        <li className={styles.CheckboxItem}><input className={styles.Checkbox} name={forRef} type="checkbox" value={checkbox.value} />{checkbox.name ? checkbox.name : checkbox.value}</li>
                    ))}
            </ul>
        </div>
    )
}

export default Checkbox;