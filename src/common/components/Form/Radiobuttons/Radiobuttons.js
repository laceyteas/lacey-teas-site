import React from 'react';
import styles from './Radiobuttons.module.css';

const Radiobuttons = ({label, radioButtonArray, required}) => {
    const forRef = label.replace(/\s/g, ''); //Remove spaces

    return (
        <div className={styles.RadioButtonWrapper} >
            <Label label={label} forRef={forRef} required={required}/>
            <ul className={styles.RadioButtonList}>
                {radioButtonArray.map((radio, index) => (
                        <li className={styles.RadioButtonItem}><input className={styles.RadioButton} type="radio" value={radio.value} />{radio.name ? radio.name : radio.value}</li>
                    ))}
            </ul>
        </div>
    )
}

export default Radiobuttons;