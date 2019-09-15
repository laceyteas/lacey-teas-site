import React from 'react';
import styles from './Textarea.module.css';
import Label from '../Label/Label';
import slugify from '../../../../util/slugify'

const Textarea = ({label, required}) => {

    const forRef = slugify(label)

    return (
        <div className={styles.TextareaWrapper} >
            <Label label={label} forRef={forRef} required={required}/>
            <textarea id={forRef} name={forRef} className={styles.Textarea}></textarea>
        </div>
    )
    
};

export default Textarea;