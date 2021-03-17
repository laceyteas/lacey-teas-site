import React from 'react';

import slugify from '../../../../util/slugify'

import styles from './Radiobuttons.module.css';
import Label from '../Label/Label'

const Radiobuttons = ({label, optionsArray, required}) => {
    const forRef = slugify(label)

    return (
        <div className={styles.RadioButtonWrapper} >
            <Label label={label} forRef={forRef} required={required}/>
            <ul className={styles.RadioButtonList}>
                {optionsArray.map((radio, index) => (
                        <li className={styles.RadioButtonItem}><input className={styles.RadioButton} type="radio" value={radio.value} name={forRef}/>{radio.name ? radio.name : radio.value}</li>
                    ))}
            </ul>
        </div>
    )
}

export default Radiobuttons;