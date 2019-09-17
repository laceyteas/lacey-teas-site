import React from 'react';
import styles from './Textarea.module.css';
import Label from '../Label/Label';

const Textarea = ({label, required, error, name, value, change, blur}) => {

    const fieldClass = error ? [styles.Textarea, styles.Error].join(' ') : styles.Textarea

    return (
        <div className={styles.TextareaWrapper} >
            <Label label={label} forRef={name} required={required}/>
            <textarea id={name} name={name} value={value} onChange={change} onBlur={blur} className={fieldClass} ></textarea>
        </div>
    )
    
};

export default Textarea;