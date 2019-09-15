import React from 'react';
import styles from './Checkbox.module.css';
import Label from '../Label/Label';

const Checkbox = ({label, checkboxArray, required}) => {

    const forRef = label.replace(/\s/g, ''); //Remove spaces

    return (
        <div className={styles.CheckboxWrapper} >
            <Label label={label} forRef={forRef} required={required}/>
            <ul className={styles.CheckboxList}>
                {checkboxArray.map((checkbox, index) => (
                        <li className={styles.CheckboxItem}><input className={styles.Checkbox} name={forRef} type="checkbox" value={checkbox.value} />{checkbox.name ? checkbox.name : checkbox.value}</li>
                    ))}
            </ul>
        </div>
    )
}

export default Checkbox;