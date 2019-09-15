import React from 'react';
import styles from './Textarea.module.css';
import Label from '../Label/Label'

const Textarea = ({label, required}) => {

    const forRef = label.replace(/\s/g, ''); //Remove spaces

    return (
        <div className={styles.TextareaWrapper} >
            <Label label={label} forRef={forRef} required={required}/>
            <textarea id={forRef} name={forRef} className={styles.Textarea}></textarea>
        </div>
    )
    
};

export default Textarea;